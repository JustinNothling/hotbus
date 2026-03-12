'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useCallback } from 'react'
import { generateSchematic } from '../lib/schematic-generator'
import { Circuit } from '../lib/types'

export default function GeneratePage() {
  const [circuits, setCircuits] = useState<Circuit[]>([])
  const [svgContent, setSvgContent] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const fileInputRef = useRef<HTMLInputElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)

  const handleFileUpload = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const csv = e.target?.result as string
      const parsedCircuits = parseCSV(csv)
      setCircuits(parsedCircuits)
    }
    reader.readAsText(file)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type === 'text/csv') {
      handleFileUpload(file)
    }
  }, [handleFileUpload])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const loadSampleData = async () => {
    try {
      const response = await fetch('/sample_data.csv')
      const csv = await response.text()
      const parsedCircuits = parseCSV(csv)
      setCircuits(parsedCircuits)
    } catch (error) {
      console.error('Error loading sample data:', error)
    }
  }

  const generateSchematicDiagram = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const svg = generateSchematic(circuits)
      setSvgContent(svg)
      setIsGenerating(false)
    }, 100)
  }

  const downloadSVG = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'hotbus-schematic.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadPDF = () => {
    window.print()
  }

  const handleZoomIn = () => setZoom(prev => Math.min(prev * 1.2, 3))
  const handleZoomOut = () => setZoom(prev => Math.max(prev / 1.2, 0.1))
  const handleFitWidth = () => {
    if (svgRef.current) {
      const containerWidth = svgRef.current.clientWidth
      // Assuming SVG width from the schematic generator
      const svgWidth = 2000 + (circuits.length * 220)
      setZoom(containerWidth / svgWidth * 0.9)
      setPan({ x: 0, y: 0 })
    }
  }
  const handleZoomReset = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x
      const deltaY = e.clientY - lastMousePos.y
      setPan(prev => ({ x: prev.x + deltaX, y: prev.y + deltaY }))
      setLastMousePos({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/">
                <Image src="/logo.png" alt="HotBus" width={58} height={58} className="invert" />
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-3">Generate Schematic</h1>
          <p className="text-gray-600">Upload your circuit schedule to generate a professional single-line diagram.</p>
        </div>

        {/* File Upload Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Upload Circuit Schedule</h2>
            <div
              className="border-2 border-dashed border-gray-300 hover:border-orange-400 rounded-lg p-8 text-center transition-colors cursor-pointer bg-gray-50"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="text-4xl text-gray-400 mb-4">📁</div>
              <p className="text-lg mb-2 font-medium">Drop your CSV file here or click to browse</p>
              <p className="text-gray-500">Supports standard circuit schedule format</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileInputChange}
              className="hidden"
            />
            
            <div className="mt-4">
              <button
                onClick={loadSampleData}
                className="w-full border border-gray-300 hover:border-gray-400 bg-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Or try with sample data
              </button>
            </div>
          </div>

          {/* Circuit Preview */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Circuit Preview</h2>
            <div className="border border-gray-200 rounded-lg bg-white">
              {circuits.length > 0 ? (
                <div className="p-4">
                  <div className="space-y-3">
                    {circuits.slice(0, 8).map((circuit, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                        <div>
                          <span className="font-mono text-sm font-medium text-gray-900">{circuit.id}</span>
                          <p className="text-sm text-gray-600">{circuit.description}</p>
                        </div>
                        {circuit.rated_power_kw && (
                          <span className="text-sm text-gray-500 font-medium">{circuit.rated_power_kw}kW</span>
                        )}
                      </div>
                    ))}
                    {circuits.length > 8 && (
                      <div className="text-gray-500 text-sm pt-2">
                        ...and {circuits.length - 8} more circuits
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Upload a CSV to preview circuits
                </div>
              )}
            </div>
            
            {circuits.length > 0 && (
              <button
                onClick={generateSchematicDiagram}
                disabled={isGenerating}
                className="w-full mt-4 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {isGenerating ? 'Generating...' : 'Generate Schematic'}
              </button>
            )}
          </div>
        </div>

        {/* Schematic Viewer */}
        {svgContent && (
          <div className="border border-gray-200 rounded-lg bg-white p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Schematic</h2>
              <div className="flex items-center space-x-4">
                {/* Zoom Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleZoomOut}
                    className="border border-gray-300 hover:bg-gray-50 px-3 py-1 rounded text-sm"
                  >
                    −
                  </button>
                  <span className="text-sm text-gray-600 min-w-12 text-center">
                    {Math.round(zoom * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    className="border border-gray-300 hover:bg-gray-50 px-3 py-1 rounded text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={handleFitWidth}
                    className="border border-gray-300 hover:bg-gray-50 px-3 py-1 rounded text-sm"
                  >
                    Fit
                  </button>
                  <button
                    onClick={handleZoomReset}
                    className="border border-gray-300 hover:bg-gray-50 px-3 py-1 rounded text-sm"
                  >
                    1:1
                  </button>
                </div>
                
                {/* Download Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={downloadSVG}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Download SVG
                  </button>
                  <button
                    onClick={downloadPDF}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
            
            <div 
              ref={svgRef}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              style={{ height: '600px' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <div
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transformOrigin: '0 0',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Tip: Use mouse wheel to zoom, drag to pan, or use the controls above
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function parseCSV(csv: string): Circuit[] {
  const lines = csv.split('\n').filter(line => line.trim())
  if (lines.length < 2) return []
  
  const headers = lines[0].split(',').map(h => h.trim())
  const circuits: Circuit[] = []
  
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim())
    const circuit: Circuit = {
      id: '',
      description: '',
      load_type: '',
      rated_power_kw: '',
      voltage: '',
      phases: '',
      flc: '',
      breaker_size: '',
      cable_size: '',
      cable_type: '',
      starter_type: '',
      protection: '',
      bms: '',
      duty: '',
      notes: ''
    }
    
    headers.forEach((header, index) => {
      const value = values[index] || ''
      switch (header) {
        case 'Circuit ID':
          circuit.id = value
          break
        case 'Description':
          circuit.description = value
          break
        case 'Load Type':
          circuit.load_type = value
          break
        case 'Rated Power (kW)':
          circuit.rated_power_kw = value
          break
        case 'Voltage (V)':
          circuit.voltage = value
          break
        case 'Phases':
          circuit.phases = value
          break
        case 'FLC (A)':
          circuit.flc = value
          break
        case 'Breaker Size (A)':
          circuit.breaker_size = value
          break
        case 'Cable Size (mm2)':
          circuit.cable_size = value
          break
        case 'Cable Type':
          circuit.cable_type = value
          break
        case 'Starter Type':
          circuit.starter_type = value
          break
        case 'Protection':
          circuit.protection = value
          break
        case 'BMS Interface':
          circuit.bms = value
          break
        case 'Duty':
          circuit.duty = value
          break
        case 'Notes':
          circuit.notes = value
          break
      }
    })
    
    if (circuit.id) {
      circuits.push(circuit)
    }
  }
  
  return circuits
}