import { Circuit } from './types';

// Layout Constants (Professional CAD dimensions)
const PAGE_MARGIN = 50;
const TITLE_BLOCK_HEIGHT = 120;
const HEADER_HEIGHT = 140;
const BUSBAR_Y = HEADER_HEIGHT + 80;
const CIRCUIT_SPACING = 220; // Wide spacing for professional look
const CIRCUIT_START_X = 150;
const EARTH_BAR_Y_OFFSET = 50; // Below load symbols
const DETAIL_PANEL_Y_OFFSET = 80; // Below load symbols

// Drawing Style (Professional CAD)
const LINE_THIN = "0.25"; // Fine detail lines
const LINE_MEDIUM = "0.5"; // Standard lines
const LINE_THICK = "0.7"; // Emphasis lines
const LINE_HEAVY = "1.0"; // Busbar, main elements
const BUSBAR_WIDTH = "4.0"; // Main busbar
const BUSBAR_NEUTRAL_WIDTH = "2.0"; // Neutral/earth bar

// Colors (Professional Monochrome)
const BLACK = "#000000";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DARK_GRAY = "#1a1a1a";
const MEDIUM_GRAY = "#666666";
const LIGHT_GRAY = "#cccccc";
const BUSBAR_RED = "#cc0000"; // Only color used - for main busbar
const WHITE = "#ffffff";

// Text Sizes (CAD Standard)
const TEXT_TITLE = 12;
const TEXT_HEADING = 10;
const TEXT_NORMAL = 8;
const TEXT_SMALL = 7;
const TEXT_DETAIL = 6;

function esc(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// IEC 60617 Standard Symbols

function drawIecCircuitBreaker(
  parts: string[], 
  cx: number, 
  y: number, 
  breakerType: string = "MCCB", 
  rating: string = ""
): number {
  // Main rectangle
  parts.push(`<rect x="${cx-15}" y="${y}" width="30" height="16" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // X inside (breaking indication)
  parts.push(`<line x1="${cx-8}" y1="${y+3}" x2="${cx+8}" y2="${y+13}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<line x1="${cx+8}" y1="${y+3}" x2="${cx-8}" y2="${y+13}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  // IEC contact symbol (perpendicular tick above)
  const contactY = y - 8;
  parts.push(`<line x1="${cx}" y1="${contactY}" x2="${cx}" y2="${y}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  parts.push(`<line x1="${cx-4}" y1="${contactY}" x2="${cx+4}" y2="${contactY}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // Rating text
  if (rating) {
    parts.push(`<text x="${cx+20}" y="${y+10}" font-family="Arial, sans-serif" ` +
              `font-size="${TEXT_SMALL}" fill="${BLACK}">${esc(rating)}A</text>`);
  }
  
  // Type label
  parts.push(`<text x="${cx+20}" y="${y+22}" font-family="Arial, sans-serif" ` +
            `font-size="${TEXT_DETAIL}" fill="${MEDIUM_GRAY}">${esc(breakerType)}</text>`);
  
  return y + 16;
}

function drawIecContactor(parts: string[], cx: number, y: number): number {
  const yStart = y + 15;
  // Two parallel vertical lines with connection points
  parts.push(`<line x1="${cx-6}" y1="${yStart}" x2="${cx-6}" y2="${yStart+20}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  parts.push(`<line x1="${cx+6}" y1="${yStart}" x2="${cx+6}" y2="${yStart+20}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // Connection points (small circles)
  parts.push(`<circle cx="${cx-6}" cy="${yStart}" r="2" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<circle cx="${cx+6}" cy="${yStart}" r="2" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<circle cx="${cx-6}" cy="${yStart+20}" r="2" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<circle cx="${cx+6}" cy="${yStart+20}" r="2" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  // Label
  parts.push(`<text x="${cx+15}" y="${yStart+12}" font-family="Arial, sans-serif" ` +
            `font-size="${TEXT_DETAIL}" fill="${MEDIUM_GRAY}">K</text>`);
  
  return yStart + 20;
}

function drawIecThermalOverload(parts: string[], cx: number, y: number): number {
  const yStart = y + 15;
  // Rectangle housing
  parts.push(`<rect x="${cx-10}" y="${yStart}" width="20" height="16" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // Thermal element (zigzag heater inside)
  const zigzag = `M${cx-6},${yStart+4} L${cx-3},${yStart+8} L${cx},${yStart+4} L${cx+3},${yStart+8} L${cx+6},${yStart+4}`;
  parts.push(`<path d="${zigzag} M${cx-6},${yStart+12} L${cx-3},${yStart+8} L${cx},${yStart+12} L${cx+3},${yStart+8} L${cx+6},${yStart+12}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  // Label
  parts.push(`<text x="${cx+15}" y="${yStart+10}" font-family="Arial, sans-serif" ` +
            `font-size="${TEXT_DETAIL}" fill="${MEDIUM_GRAY}">OL</text>`);
  
  return yStart + 16;
}

function drawIecMotor(parts: string[], cx: number, y: number, powerKw: string = ""): number {
  const yCenter = y + 35;
  const radius = 20;
  
  // Motor circle
  parts.push(`<circle cx="${cx}" cy="${yCenter}" r="${radius}" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // M symbol
  parts.push(`<text x="${cx}" y="${yCenter+6}" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_TITLE}" ` +
            `font-weight="bold" fill="${BLACK}">M</text>`);
  
  // Power rating
  if (powerKw) {
    parts.push(`<text x="${cx}" y="${yCenter+radius+15}" text-anchor="middle" ` +
              `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
              `fill="${BLACK}">${esc(powerKw)} kW</text>`);
  }
  
  return yCenter + radius;
}

function drawIecVsd(parts: string[], cx: number, y: number): number {
  const yStart = y + 15;
  // Rectangle housing
  parts.push(`<rect x="${cx-20}" y="${yStart}" width="40" height="24" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // VSD text
  parts.push(`<text x="${cx}" y="${yStart+8}" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `font-weight="bold" fill="${BLACK}">VSD</text>`);
  
  // Frequency converter symbol (sine → square wave)
  const sineY = yStart + 16;
  parts.push(`<path d="M${cx-12},${sineY} Q${cx-8},${sineY-3} ${cx-4},${sineY} Q${cx},${sineY+3} ${cx+4},${sineY}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  parts.push(`<path d="M${cx+6},${sineY-2} L${cx+8},${sineY-2} L${cx+8},${sineY+2} L${cx+10},${sineY+2} L${cx+10},${sineY-2} L${cx+12},${sineY-2}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  return yStart + 24;
}

function drawIecStarDeltaStarter(parts: string[], cx: number, y: number): number {
  const yStart = y + 15;
  // Rectangle housing
  parts.push(`<rect x="${cx-18}" y="${yStart}" width="36" height="20" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // Y symbol (left side)
  const yY = yStart + 10;
  parts.push(`<path d="M${cx-12},${yY-5} L${cx-8},${yY} M${cx-12},${yY+5} L${cx-8},${yY} M${cx-8},${yY} L${cx-4},${yY}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  // Arrow indicating switch
  parts.push(`<path d="M${cx-2},${yY} L${cx+2},${yY} M${cx},${yY-2} L${cx+2},${yY} L${cx},${yY+2}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  // Δ symbol (right side)
  parts.push(`<path d="M${cx+4},${yY+5} L${cx+8},${yY-5} L${cx+12},${yY+5} Z" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  return yStart + 20;
}

function drawIecEarthSymbol(parts: string[], cx: number, y: number): number {
  // Three horizontal lines of decreasing width
  parts.push(`<line x1="${cx-8}" y1="${y}" x2="${cx+8}" y2="${y}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  parts.push(`<line x1="${cx-6}" y1="${y+3}" x2="${cx+6}" y2="${y+3}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  parts.push(`<line x1="${cx-4}" y1="${y+6}" x2="${cx+4}" y2="${y+6}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  // Vertical connection line
  parts.push(`<line x1="${cx}" y1="${y-5}" x2="${cx}" y2="${y}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  return y + 6;
}

function drawIecCurrentTransformer(parts: string[], cx: number, y: number): number {
  const yCenter = y + 15;
  // Two overlapping circles
  parts.push(`<circle cx="${cx-4}" cy="${yCenter}" r="8" ` +
            `fill="none" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<circle cx="${cx+4}" cy="${yCenter}" r="8" ` +
            `fill="none" stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  // CT label
  parts.push(`<text x="${cx}" y="${yCenter-15}" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_DETAIL}" ` +
            `fill="${MEDIUM_GRAY}">CT</text>`);
  
  return yCenter + 8;
}

function drawIecSurgeProtector(parts: string[], cx: number, y: number): number {
  const yStart = y + 10;
  // SPD symbol - arrow with gap and arc
  parts.push(`<line x1="${cx-6}" y1="${yStart}" x2="${cx-2}" y2="${yStart+8}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  parts.push(`<line x1="${cx+2}" y1="${yStart+8}" x2="${cx+6}" y2="${yStart+16}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  // Gap with small arc
  parts.push(`<path d="M${cx-1},${yStart+6} A 2 2 0 0 1 ${cx+1},${yStart+10}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}" fill="none"/>`);
  
  // SPD label
  parts.push(`<text x="${cx+10}" y="${yStart+10}" font-family="Arial, sans-serif" ` +
            `font-size="${TEXT_DETAIL}" fill="${MEDIUM_GRAY}">SPD</text>`);
  
  return yStart + 16;
}

// Layout Drawing Functions

function drawProfessionalHeader(parts: string[], width: number): void {
  const cx = width / 2;
  
  // Incoming supply arrow
  parts.push(`<line x1="${cx}" y1="20" x2="${cx}" y2="60" ` +
            `stroke="${BLACK}" stroke-width="${LINE_HEAVY}"/>`);
  parts.push(`<polygon points="${cx-8},50 ${cx+8},50 ${cx},60" ` +
            `fill="${BLACK}"/>`);
  
  // Supply labels
  parts.push(`<text x="${cx}" y="15" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_HEADING}" ` +
            `font-weight="bold" fill="${BLACK}">INCOMING SUPPLY</text>`);
  parts.push(`<text x="${cx}" y="80" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
            `fill="${BLACK}">415V 3Φ + N + E  50Hz</text>`);
  
  // Main switch/breaker
  const mainY = 85;
  drawIecCircuitBreaker(parts, cx, mainY, "ACB", "800");
  
  // Connection to busbar
  parts.push(`<line x1="${cx}" y1="${mainY+16}" x2="${cx}" y2="${BUSBAR_Y}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_HEAVY}"/>`);
}

function drawMainBusbar(parts: string[], xStart: number, xEnd: number, y: number): void {
  // Main busbar (L1, L2, L3)
  parts.push(`<line x1="${xStart}" y1="${y}" x2="${xEnd}" y2="${y}" ` +
            `stroke="${BUSBAR_RED}" stroke-width="${BUSBAR_WIDTH}"/>`);
  
  // Neutral bar (below main)
  const neutralY = y + 12;
  parts.push(`<line x1="${xStart}" y1="${neutralY}" x2="${xEnd}" y2="${neutralY}" ` +
            `stroke="${BLACK}" stroke-width="${BUSBAR_NEUTRAL_WIDTH}"/>`);
  
  // Busbar labels
  parts.push(`<text x="${xStart-10}" y="${y+4}" text-anchor="end" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `font-weight="bold" fill="${BUSBAR_RED}">L1 L2 L3</text>`);
  parts.push(`<text x="${xStart-10}" y="${neutralY+4}" text-anchor="end" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `font-weight="bold" fill="${BLACK}">N</text>`);
}

function drawEarthBar(parts: string[], xStart: number, xEnd: number, y: number): void {
  parts.push(`<line x1="${xStart}" y1="${y}" x2="${xEnd}" y2="${y}" ` +
            `stroke="${BLACK}" stroke-width="${BUSBAR_NEUTRAL_WIDTH}"/>`);
  
  // Earth symbols at intervals
  for (let x = xStart; x <= xEnd - 50; x += 400) {
    drawIecEarthSymbol(parts, x, y + 15);
  }
  
  // Earth bar label
  parts.push(`<text x="${xStart-10}" y="${y+4}" text-anchor="end" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `font-weight="bold" fill="${BLACK}">PE</text>`);
}

function drawCircuitDetailPanel(parts: string[], circuit: Circuit, cx: number, y: number): void {
  const panelWidth = 180;
  const panelHeight = 90;
  const panelX = cx - panelWidth / 2;
  
  // Panel background (light border)
  parts.push(`<rect x="${panelX}" y="${y}" width="${panelWidth}" height="${panelHeight}" ` +
            `fill="none" stroke="${LIGHT_GRAY}" stroke-width="${LINE_THIN}"/>`);
  
  // Circuit details
  const details = [
    `ID: ${circuit.id}`,
    circuit.description.length > 25 ? circuit.description.slice(0, 25) + "..." : circuit.description,
    circuit.description.length > 25 && circuit.description.length > 50 ? circuit.description.slice(25, 50) + "..." : circuit.description.length > 25 ? circuit.description.slice(25) : "",
    circuit.rated_power_kw ? `Power: ${circuit.rated_power_kw} kW` : "",
    circuit.flc ? `FLC: ${circuit.flc} A` : "",
    circuit.cable_size ? `Cable: ${circuit.cable_size}mm² ${circuit.cable_type}` : "",
    circuit.starter_type ? `Starter: ${circuit.starter_type}` : "",
    circuit.duty ? `Duty: ${circuit.duty}` : ""
  ];
  
  // Remove empty lines
  const filteredDetails = details.filter(d => d.trim());
  
  for (let i = 0; i < Math.min(filteredDetails.length, 8); i++) {
    parts.push(`<text x="${panelX + 5}" y="${y + 12 + i * 10}" ` +
              `font-family="Arial, sans-serif" font-size="${TEXT_DETAIL}" ` +
              `fill="${BLACK}">${esc(filteredDetails[i])}</text>`);
  }
}

function drawCircuitBranch(parts: string[], circuit: Circuit, cx: number, busbarY: number): number {
  const isSpare = circuit.duty.toLowerCase() === 'spare' || !circuit.description.trim();
  
  // Circuit ID label above busbar
  parts.push(`<text x="${cx}" y="${busbarY-15}" text-anchor="middle" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
            `font-weight="bold" fill="${BLACK}">${esc(circuit.id)}</text>`);
  
  // Tap connection from busbar
  const tapY = busbarY + 6;
  parts.push(`<line x1="${cx}" y1="${busbarY}" x2="${cx}" y2="${tapY + 10}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  let currentY = tapY + 10;
  
  if (isSpare) {
    // Spare way - dashed line down
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 40}" ` +
              `stroke="${LIGHT_GRAY}" stroke-width="${LINE_THIN}" ` +
              `stroke-dasharray="5,5"/>`);
    parts.push(`<text x="${cx}" y="${currentY + 60}" text-anchor="middle" ` +
              `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
              `fill="${LIGHT_GRAY}">SPARE</text>`);
    return currentY + 80;
  }
  
  // Circuit breaker
  currentY = drawIecCircuitBreaker(parts, cx, currentY, "MCCB", circuit.breaker_size);
  
  // Connection line
  parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 15}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  currentY += 15;
  
  // Current transformer for BMS circuits
  if (circuit.bms && circuit.bms.toLowerCase() !== 'no' && circuit.bms.toLowerCase() !== 'n/a' && circuit.bms.trim() !== '') {
    currentY = drawIecCurrentTransformer(parts, cx, currentY);
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 10}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    currentY += 10;
  }
  
  // Starter components based on type
  const starterType = circuit.starter_type.toLowerCase();
  
  if (starterType === 'vsd') {
    currentY = drawIecContactor(parts, cx, currentY);
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 10}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    currentY += 10;
    currentY = drawIecVsd(parts, cx, currentY);
  } else if (starterType === 'star-delta') {
    currentY = drawIecContactor(parts, cx, currentY);
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 10}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    currentY += 10;
    currentY = drawIecThermalOverload(parts, cx, currentY);
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 10}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    currentY += 10;
    currentY = drawIecStarDeltaStarter(parts, cx, currentY);
  } else if (starterType === 'dol') {
    currentY = drawIecContactor(parts, cx, currentY);
    parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 10}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    currentY += 10;
    currentY = drawIecThermalOverload(parts, cx, currentY);
  } else if (starterType === 'contactor') {
    currentY = drawIecContactor(parts, cx, currentY);
  }
  
  // Connection to load
  parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${currentY + 20}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  currentY += 20;
  
  // Load symbol
  const loadType = circuit.load_type.toLowerCase();
  if (loadType.includes('motor')) {
    currentY = drawIecMotor(parts, cx, currentY, circuit.rated_power_kw);
  } else {
    // Generic load (rectangle)
    parts.push(`<rect x="${cx-15}" y="${currentY}" width="30" height="20" ` +
              `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
    parts.push(`<text x="${cx}" y="${currentY+13}" text-anchor="middle" ` +
              `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
              `fill="${BLACK}">LOAD</text>`);
    currentY += 20;
  }
  
  // Earth connection from load
  const earthY = currentY + EARTH_BAR_Y_OFFSET;
  parts.push(`<line x1="${cx}" y1="${currentY}" x2="${cx}" y2="${earthY}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  // Circuit detail panel
  const detailY = currentY + DETAIL_PANEL_Y_OFFSET;
  drawCircuitDetailPanel(parts, circuit, cx, detailY);
  
  return detailY + 90; // Panel height
}

function drawProfessionalTitleBlock(
  parts: string[], 
  width: number, 
  height: number, 
  project: string, 
  drawingNumber: string, 
  circuits: Circuit[]
): void {
  const tbY = height - TITLE_BLOCK_HEIGHT;
  const tbX = width * 0.6; // Right side placement
  const tbWidth = width - tbX - 20;
  
  // Main title block border
  parts.push(`<rect x="${tbX}" y="${tbY}" width="${tbWidth}" height="${TITLE_BLOCK_HEIGHT}" ` +
            `fill="${WHITE}" stroke="${BLACK}" stroke-width="${LINE_MEDIUM}"/>`);
  
  // Internal divisions
  parts.push(`<line x1="${tbX}" y1="${tbY + 40}" x2="${tbX + tbWidth}" y2="${tbY + 40}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<line x1="${tbX}" y1="${tbY + 80}" x2="${tbX + tbWidth}" y2="${tbY + 80}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  parts.push(`<line x1="${tbX + tbWidth/2}" y1="${tbY}" x2="${tbX + tbWidth/2}" y2="${tbY + 80}" ` +
            `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  
  // Title block content
  parts.push(`<text x="${tbX + 10}" y="${tbY + 15}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_HEADING}" ` +
            `font-weight="bold" fill="${BLACK}">PROJECT:</text>`);
  parts.push(`<text x="${tbX + 10}" y="${tbY + 30}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
            `fill="${BLACK}">${esc(project)}</text>`);
  
  parts.push(`<text x="${tbX + 10}" y="${tbY + 55}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
            `font-weight="bold" fill="${BLACK}">DRAWING:</text>`);
  parts.push(`<text x="${tbX + 10}" y="${tbY + 70}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_NORMAL}" ` +
            `fill="${BLACK}">${esc(drawingNumber)}</text>`);
  
  // Right column
  const rightX = tbX + tbWidth/2 + 10;
  parts.push(`<text x="${rightX}" y="${tbY + 15}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `fill="${BLACK}">SCALE: NTS</text>`);
  parts.push(`<text x="${rightX}" y="${tbY + 30}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `fill="${BLACK}">STANDARD: IEC 60617</text>`);
  
  parts.push(`<text x="${rightX}" y="${tbY + 55}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `fill="${BLACK}">DRAWN BY: HotBus</text>`);
  parts.push(`<text x="${rightX}" y="${tbY + 70}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `fill="${BLACK}">DATE: ${new Date().toISOString().split('T')[0]}</text>`);
  
  // Bottom section
  const activeCircuits = circuits.filter(c => c.duty.toLowerCase() !== 'spare' && c.description.trim()).length;
  const spareCircuits = circuits.length - activeCircuits;
  
  parts.push(`<text x="${tbX + 10}" y="${tbY + 95}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_SMALL}" ` +
            `fill="${BLACK}">MECHANICAL SERVICES SWITCHBOARD - SINGLE LINE DIAGRAM</text>`);
  parts.push(`<text x="${tbX + 10}" y="${tbY + 110}" ` +
            `font-family="Arial, sans-serif" font-size="${TEXT_DETAIL}" ` +
            `fill="${MEDIUM_GRAY}">Active Circuits: ${activeCircuits} | Spare Ways: ${spareCircuits} | Sheet 1 of 1</text>`);
}

function formatCableAnnotation(circuit: Circuit): string {
  if (!circuit.cable_size) {
    return "";
  }
  
  // Standard format: "2x(4C+E)16mm² Cu XLPE"
  const phases = circuit.phases || "3";
  const cableFormat = phases !== "1" ? `${phases}C+E` : "2C+E";
  
  const size = circuit.cable_size;
  const cableType = circuit.cable_type || "Cu XLPE";
  
  return `(${cableFormat})${size}mm² ${cableType}`;
}

export function generateSchematic(
  circuits: Circuit[], 
  project: string = "Commercial Building HVAC", 
  drawingNumber: string = "E-MSSB-001"
): string {
  // Calculate dimensions for single wide layout
  const numCircuits = circuits.length;
  let totalWidth = CIRCUIT_START_X + (numCircuits * CIRCUIT_SPACING) + PAGE_MARGIN;
  const totalHeight = 1000; // Fixed height for professional A1/A0 style
  
  // Ensure minimum width for professional appearance
  if (totalWidth < 2000) {
    totalWidth = 2000;
  }
  
  const parts: string[] = [];
  
  // SVG header
  parts.push(`<svg xmlns="http://www.w3.org/2000/svg" ` +
            `viewBox="0 0 ${totalWidth} ${totalHeight}" ` +
            `width="${totalWidth}" height="${totalHeight}">`);
  
  // White background
  parts.push(`<rect width="${totalWidth}" height="${totalHeight}" fill="${WHITE}"/>`);
  
  // Drawing border
  const borderMargin = 10;
  parts.push(`<rect x="${borderMargin}" y="${borderMargin}" ` +
            `width="${totalWidth - 2*borderMargin}" height="${totalHeight - 2*borderMargin}" ` +
            `fill="none" stroke="${BLACK}" stroke-width="${LINE_THICK}"/>`);
  
  // Header with incoming supply
  drawProfessionalHeader(parts, totalWidth);
  
  // Main busbar - single horizontal run
  const busbarStartX = CIRCUIT_START_X - 50;
  const busbarEndX = CIRCUIT_START_X + (numCircuits * CIRCUIT_SPACING);
  drawMainBusbar(parts, busbarStartX, busbarEndX, BUSBAR_Y);
  
  // Earth bar
  const earthBarY = totalHeight - 200;
  drawEarthBar(parts, busbarStartX, busbarEndX, earthBarY);
  
  // Add surge protector on first circuit if any circuits exist
  if (circuits.length > 0) {
    const spdX = CIRCUIT_START_X;
    const spdY = BUSBAR_Y + 30;
    drawIecSurgeProtector(parts, spdX - 40, spdY);
    parts.push(`<line x1="${spdX - 40}" y1="${BUSBAR_Y}" x2="${spdX - 40}" y2="${spdY}" ` +
              `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
  }
  
  // Draw all circuit branches
  let maxY = BUSBAR_Y;
  for (let i = 0; i < circuits.length; i++) {
    const circuit = circuits[i];
    const cx = CIRCUIT_START_X + (i * CIRCUIT_SPACING);
    const circuitMaxY = drawCircuitBranch(parts, circuit, cx, BUSBAR_Y);
    maxY = Math.max(maxY, circuitMaxY);
    
    // Cable annotation next to circuit
    const cableAnnotation = formatCableAnnotation(circuit);
    if (cableAnnotation) {
      parts.push(`<text x="${cx + 30}" y="${BUSBAR_Y + 150}" ` +
                `font-family="Arial, sans-serif" font-size="${TEXT_DETAIL}" ` +
                `fill="${MEDIUM_GRAY}" transform="rotate(-90, ${cx + 30}, ${BUSBAR_Y + 150})">` +
                `${esc(cableAnnotation)}</text>`);
    }
    
    // Connection to earth bar
    if (!(circuit.duty.toLowerCase() === 'spare' || !circuit.description.trim())) {
      parts.push(`<line x1="${cx}" y1="${earthBarY - 20}" x2="${cx}" y2="${earthBarY}" ` +
                `stroke="${BLACK}" stroke-width="${LINE_THIN}"/>`);
    }
  }
  
  // Professional title block
  drawProfessionalTitleBlock(parts, totalWidth, totalHeight, project, drawingNumber, circuits);
  
  // Close SVG
  parts.push('</svg>');
  
  return parts.join('\n');
}