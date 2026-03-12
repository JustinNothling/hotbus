import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-sky-400">⚡ HotBus</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/generate"
                className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Try it free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            Switchboard schematics in{' '}
            <span className="text-sky-400">seconds</span>, not days
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto">
            Upload your load schedule. Get a professional single-line diagram instantly.
          </p>
          <Link
            href="/generate"
            className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Try it free →
          </Link>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-sky-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload CSV</h3>
              <p className="text-slate-300">
                Upload your circuit schedule in standard CSV format with load details.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Generate</h3>
              <p className="text-slate-300">
                Our engine creates a professional single-line diagram following IEC 60617 standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <p className="text-slate-300">
                Download your schematic as SVG or PDF. Ready for CAD or direct use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Who it's for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">Electrical Contractors</h3>
              <p className="text-slate-300">
                Generate professional switchboard schematics for tenders and construction documentation.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">Draftspeople</h3>
              <p className="text-slate-300">
                Accelerate your CAD workflow with instant, standards-compliant single-line diagrams.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-sky-400">MEP Engineers</h3>
              <p className="text-slate-300">
                Focus on design, not drafting. Generate accurate schematics from your load calculations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Why HotBus?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">80% faster than manual CAD</h3>
                    <p className="text-slate-300">
                      What takes hours in AutoCAD now takes seconds. Focus on engineering, not drafting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">IEC 60617 compliant</h3>
                    <p className="text-slate-300">
                      Professional symbols and layouts that meet international standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-sky-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">No AutoCAD license needed</h3>
                    <p className="text-slate-300">
                      Generate professional schematics without expensive CAD software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 rounded-lg p-8">
              <div className="aspect-video bg-slate-600 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">Sample schematic preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join the waitlist</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get early access and updates on new features.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-sky-400">⚡ HotBus</span>
          </div>
          <p className="text-slate-400">
            © 2025 HotBus.ai - Switchboard schematics in seconds, not days
          </p>
        </div>
      </footer>
    </div>
  )
}