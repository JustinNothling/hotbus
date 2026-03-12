'use client'

export default function HeroIllustration() {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <svg
        viewBox="0 0 1200 500"
        className="w-full h-auto"
        style={{ aspectRatio: '1200/500' }}
      >
        <defs>
          {/* Gradient for transition zone */}
          <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#000000', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0 }} />
          </linearGradient>
          

        </defs>
        
        {/* Background */}
        <rect x="0" y="0" width="1200" height="500" fill="white" />
        
        <g>
          
          {/* LEFT SIDE - SPREADSHEET */}
          <g>
            {/* Spreadsheet container */}
            <rect x="50" y="80" width="420" height="340" fill="white" stroke="#E5E5E5" strokeWidth="1" />
            
            {/* Header row */}
            <rect x="50" y="80" width="420" height="35" fill="#F5F5F5" stroke="#E5E5E5" strokeWidth="1" />
            
            {/* Column dividers */}
            <line x1="130" y1="80" x2="130" y2="420" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="270" y1="80" x2="270" y2="420" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="320" y1="80" x2="320" y2="420" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="380" y1="80" x2="380" y2="420" stroke="#E5E5E5" strokeWidth="1" />
            
            {/* Row dividers */}
            <line x1="50" y1="115" x2="470" y2="115" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="160" x2="470" y2="160" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="205" x2="470" y2="205" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="250" x2="470" y2="250" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="295" x2="470" y2="295" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="340" x2="470" y2="340" stroke="#E5E5E5" strokeWidth="1" />
            <line x1="50" y1="385" x2="470" y2="385" stroke="#E5E5E5" strokeWidth="1" />
            
            {/* Header text */}
            <text x="90" y="102" fontSize="10" fontFamily="Arial, sans-serif" fill="#666" fontWeight="600">Circuit ID</text>
            <text x="200" y="102" fontSize="10" fontFamily="Arial, sans-serif" fill="#666" fontWeight="600">Description</text>
            <text x="295" y="102" fontSize="10" fontFamily="Arial, sans-serif" fill="#666" fontWeight="600">kW</text>
            <text x="350" y="102" fontSize="10" fontFamily="Arial, sans-serif" fill="#666" fontWeight="600">Breaker</text>
            <text x="425" y="102" fontSize="10" fontFamily="Arial, sans-serif" fill="#666" fontWeight="600">Starter</text>
            
            {/* Data rows */}
            <text x="65" y="137" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-01</text>
            <text x="145" y="137" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">AHU-1 Supply Fan</text>
            <text x="295" y="137" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">30</text>
            <text x="350" y="137" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">63A</text>
            <text x="425" y="137" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">VSD</text>
            
            <text x="65" y="182" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-02</text>
            <text x="145" y="182" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">AHU-1 Return Fan</text>
            <text x="290" y="182" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">18.5</text>
            <text x="350" y="182" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">40A</text>
            <text x="425" y="182" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">VSD</text>
            
            <text x="65" y="227" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-03</text>
            <text x="145" y="227" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">AHU-2 Supply Fan</text>
            <text x="295" y="227" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">37</text>
            <text x="350" y="227" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">80A</text>
            <text x="425" y="227" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">VSD</text>
            
            <text x="65" y="272" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-05</text>
            <text x="145" y="272" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">CHW Pump 1 (Duty)</text>
            <text x="295" y="272" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">15</text>
            <text x="350" y="272" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">32A</text>
            <text x="425" y="272" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">VSD</text>
            
            <text x="65" y="317" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-11</text>
            <text x="145" y="317" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">Exhaust Fan EF-01</text>
            <text x="295" y="317" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">11</text>
            <text x="350" y="317" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">25A</text>
            <text x="425" y="317" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">DOL</text>
            
            <text x="65" y="362" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">MSSB-13</text>
            <text x="145" y="362" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">Smoke Exhaust SEF-01</text>
            <text x="295" y="362" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">22</text>
            <text x="350" y="362" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">50A</text>
            <text x="425" y="362" fontSize="9" fontFamily="Arial, sans-serif" fill="#000">S-D</text>
          </g>
          
          {/* TRANSITION ZONE - MIDDLE */}
          <g>
            {/* Connecting dashed lines from spreadsheet to schematic */}
            <line x1="470" y1="137" x2="580" y2="180" stroke="url(#fadeGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1="470" y1="182" x2="580" y2="230" stroke="url(#fadeGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1="470" y1="227" x2="580" y2="280" stroke="url(#fadeGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1="470" y1="272" x2="580" y2="330" stroke="url(#fadeGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1="470" y1="317" x2="580" y2="380" stroke="url(#fadeGradient)" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            
            {/* Transition elements that fade from table grid to electrical lines */}
            <rect x="520" y="200" width="80" height="100" fill="white" opacity="0.8" />
            <text x="560" y="250" fontSize="12" fontFamily="Arial, sans-serif" fill="#999" textAnchor="middle">→</text>
          </g>
          
          {/* RIGHT SIDE - ELECTRICAL SCHEMATIC */}
          <g>
            {/* Main busbar (orange accent) */}
            <line x1="650" y1="120" x2="1100" y2="120" stroke="#E8590C" strokeWidth="8" strokeLinecap="round" />
            <text x="875" y="110" fontSize="10" fontFamily="Arial, sans-serif" fill="#666">MSSB Main Busbar</text>
            
            {/* Circuit 1 - MSSB-01 */}
            <g>
              <line x1="700" y1="120" x2="700" y2="180" stroke="#000" strokeWidth="1.5" />
              <rect x="695" y="150" width="10" height="8" fill="white" stroke="#000" strokeWidth="1" />
              <line x1="695" y1="154" x2="705" y2="154" stroke="#000" strokeWidth="1" />
              <line x1="700" y1="158" x2="700" y2="190" stroke="#000" strokeWidth="1.5" />
              <rect x="680" y="190" width="40" height="20" fill="white" stroke="#000" strokeWidth="1" />
              <text x="700" y="203" fontSize="8" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">VSD</text>
              <line x1="700" y1="210" x2="700" y2="230" stroke="#000" strokeWidth="1.5" />
              <circle cx="700" cy="240" r="12" fill="white" stroke="#000" strokeWidth="1.5" />
              <text x="700" y="245" fontSize="10" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">M</text>
              <text x="720" y="185" fontSize="8" fontFamily="Arial, sans-serif" fill="#000">MSSB-01</text>
              <text x="720" y="195" fontSize="8" fontFamily="Arial, sans-serif" fill="#666">30kW</text>
            </g>
            
            {/* Circuit 2 - MSSB-02 */}
            <g>
              <line x1="780" y1="120" x2="780" y2="180" stroke="#000" strokeWidth="1.5" />
              <rect x="775" y="150" width="10" height="8" fill="white" stroke="#000" strokeWidth="1" />
              <line x1="775" y1="154" x2="785" y2="154" stroke="#000" strokeWidth="1" />
              <line x1="780" y1="158" x2="780" y2="190" stroke="#000" strokeWidth="1.5" />
              <rect x="760" y="190" width="40" height="20" fill="white" stroke="#000" strokeWidth="1" />
              <text x="780" y="203" fontSize="8" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">VSD</text>
              <line x1="780" y1="210" x2="780" y2="230" stroke="#000" strokeWidth="1.5" />
              <circle cx="780" cy="240" r="12" fill="white" stroke="#000" strokeWidth="1.5" />
              <text x="780" y="245" fontSize="10" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">M</text>
              <text x="800" y="185" fontSize="8" fontFamily="Arial, sans-serif" fill="#000">MSSB-02</text>
              <text x="800" y="195" fontSize="8" fontFamily="Arial, sans-serif" fill="#666">18.5kW</text>
            </g>
            
            {/* Circuit 3 - MSSB-03 */}
            <g>
              <line x1="860" y1="120" x2="860" y2="180" stroke="#000" strokeWidth="1.5" />
              <rect x="855" y="150" width="10" height="8" fill="white" stroke="#000" strokeWidth="1" />
              <line x1="855" y1="154" x2="865" y2="154" stroke="#000" strokeWidth="1" />
              <line x1="860" y1="158" x2="860" y2="190" stroke="#000" strokeWidth="1.5" />
              <rect x="840" y="190" width="40" height="20" fill="white" stroke="#000" strokeWidth="1" />
              <text x="860" y="203" fontSize="8" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">VSD</text>
              <line x1="860" y1="210" x2="860" y2="230" stroke="#000" strokeWidth="1.5" />
              <circle cx="860" cy="240" r="12" fill="white" stroke="#000" strokeWidth="1.5" />
              <text x="860" y="245" fontSize="10" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">M</text>
              <text x="880" y="185" fontSize="8" fontFamily="Arial, sans-serif" fill="#000">MSSB-03</text>
              <text x="880" y="195" fontSize="8" fontFamily="Arial, sans-serif" fill="#666">37kW</text>
            </g>
            
            {/* Circuit 4 - MSSB-05 */}
            <g>
              <line x1="940" y1="120" x2="940" y2="180" stroke="#000" strokeWidth="1.5" />
              <rect x="935" y="150" width="10" height="8" fill="white" stroke="#000" strokeWidth="1" />
              <line x1="935" y1="154" x2="945" y2="154" stroke="#000" strokeWidth="1" />
              <line x1="940" y1="158" x2="940" y2="190" stroke="#000" strokeWidth="1.5" />
              <rect x="920" y="190" width="40" height="20" fill="white" stroke="#000" strokeWidth="1" />
              <text x="940" y="203" fontSize="8" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">VSD</text>
              <line x1="940" y1="210" x2="940" y2="230" stroke="#000" strokeWidth="1.5" />
              <circle cx="940" cy="240" r="12" fill="white" stroke="#000" strokeWidth="1.5" />
              <text x="940" y="245" fontSize="10" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">M</text>
              <text x="960" y="185" fontSize="8" fontFamily="Arial, sans-serif" fill="#000">MSSB-05</text>
              <text x="960" y="195" fontSize="8" fontFamily="Arial, sans-serif" fill="#666">15kW</text>
            </g>
            
            {/* Circuit 5 - MSSB-11 (DOL starter) */}
            <g>
              <line x1="1020" y1="120" x2="1020" y2="180" stroke="#000" strokeWidth="1.5" />
              <rect x="1015" y="150" width="10" height="8" fill="white" stroke="#000" strokeWidth="1" />
              <line x1="1015" y1="154" x2="1025" y2="154" stroke="#000" strokeWidth="1" />
              <line x1="1020" y1="158" x2="1020" y2="190" stroke="#000" strokeWidth="1.5" />
              <rect x="1000" y="190" width="40" height="20" fill="white" stroke="#000" strokeWidth="1" />
              <text x="1020" y="203" fontSize="8" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">DOL</text>
              <line x1="1020" y1="210" x2="1020" y2="230" stroke="#000" strokeWidth="1.5" />
              <circle cx="1020" cy="240" r="12" fill="white" stroke="#000" strokeWidth="1.5" />
              <text x="1020" y="245" fontSize="10" fontFamily="Arial, sans-serif" fill="#000" textAnchor="middle">M</text>
              <text x="1040" y="185" fontSize="8" fontFamily="Arial, sans-serif" fill="#000">MSSB-11</text>
              <text x="1040" y="195" fontSize="8" fontFamily="Arial, sans-serif" fill="#666">11kW</text>
            </g>
            
            {/* Ground symbols */}
            <g>
              <line x1="650" y1="120" x2="650" y2="140" stroke="#000" strokeWidth="1.5" />
              <line x1="645" y1="140" x2="655" y2="140" stroke="#000" strokeWidth="2" />
              <line x1="647" y1="144" x2="653" y2="144" stroke="#000" strokeWidth="2" />
              <line x1="649" y1="148" x2="651" y2="148" stroke="#000" strokeWidth="2" />
            </g>
            
            {/* Legend/Title */}
            <text x="650" y="60" fontSize="12" fontFamily="Arial, sans-serif" fill="#000" fontWeight="600">MSSB Single Line Diagram</text>
            <text x="650" y="75" fontSize="9" fontFamily="Arial, sans-serif" fill="#666">IEC 60617 Standard Symbols</text>
          </g>
        </g>
      </svg>
    </div>
  )
}