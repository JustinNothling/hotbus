import Link from 'next/link'
import Image from 'next/image'
import HeroIllustration from './components/HeroIllustration'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/logo.png" alt="HotBus" width={48} height={48} className="invert" />
            </div>
            <div className="flex items-center">
              <Link
                href="/generate"
                className="text-black hover:text-orange-600 transition-colors font-medium"
              >
                Try it
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Switchboard schematics in seconds
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-normal">
            Upload a load schedule. Download a single-line diagram. No AutoCAD required.
          </p>
          <div className="mb-12">
            <Link
              href="/generate"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Try it free →
            </Link>
          </div>
          
          {/* Hero Illustration */}
          <div className="max-w-6xl mx-auto">
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">Built for electrical contractors, draftspeople, and MEP engineers</p>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 mr-3">1</span>
                <h3 className="text-lg font-semibold">Upload your circuit schedule CSV</h3>
              </div>
              <p className="text-gray-600">Standard format with load details and circuit information.</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 mr-3">2</span>
                <h3 className="text-lg font-semibold">Generate an IEC 60617 compliant single-line diagram</h3>
              </div>
              <p className="text-gray-600">Professional symbols and proper protection hierarchy.</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900 mr-3">3</span>
                <h3 className="text-lg font-semibold">Download as SVG or PDF</h3>
              </div>
              <p className="text-gray-600">Ready for CAD import or direct construction use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-3">Standards compliant</h3>
              <p className="text-gray-600">IEC 60617 symbols, proper protection hierarchy</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Every circuit type</h3>
              <p className="text-gray-600">VSDs, DOL, star-delta, distribution boards, heaters</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Instant output</h3>
              <p className="text-gray-600">What takes hours in AutoCAD takes seconds</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">No software to install</h3>
              <p className="text-gray-600">Works in your browser, outputs downloadable files</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-8">Ready to try?</h2>
          <Link
            href="/generate"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Generate your first schematic →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">© 2026 HotBus</p>
        </div>
      </footer>
    </div>
  )
}