import Head from 'next/head';
import Link from 'next/link';

export default function Audit() {
  return (
    <>
      <Head>
        <title>Audit - MR Partners - Cabinet d&apos;expertise comptable</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="logo-link">
                <img src="/logo.jpg" alt="MR Partners Logo" className="h-12 w-auto transition-transform duration-200 ease-out origin-left hover:scale-105" />
              </Link>
            </div>
            <div className="hidden md:flex space-x-10">
              <Link href="/" className="text-gray-600 hover:text-blue-500 transition text-sm">Accueil</Link>
              <Link href="/aboutus" className="text-gray-600 hover:text-blue-500 transition text-sm">À propos</Link>
              <Link href="/#services" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Services</Link>
              <Link href="/#specialisations" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Spécialisations</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition text-sm">Contact</Link>
            </div>
            <button className="md:hidden text-gray-700" id="mobile-menu-btn">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">Accueil</Link>
            <Link href="/aboutus" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">À propos</Link>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">Services</a>
            <a href="#specialisations" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">Spécialisations</a>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 text-sm">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Audit</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl">
              Audits légaux et contractuels, diagnostics ciblés et recommandations opérationnelles pour fiabiliser vos informations 
              financières et renforcer vos contrôles internes.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-black font-normal">Sécuriser et améliorer vos processus</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Notre démarche d&apos;audit s&apos;appuie sur une analyse des risques et une compréhension de votre activité afin d&apos;apporter 
                une assurance raisonnable et des axes d&apos;amélioration concrets. Nous intervenons avec pragmatisme et pédagogie.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                <li>Audit légal et contractuel</li>
                <li>Revue des cycles (achats, ventes, trésorerie, stocks)</li>
                <li>Contrôle interne et cartographie des risques</li>
                <li>Audit de conformité et procédures</li>
                <li>Rapports d&apos;audit et plans d&apos;action</li>
                <li>Accompagnement à la mise en œuvre</li>
              </ul>
            </div>
            <div>
              <div className="backgroundimg w-full h-96 rounded-xl shadow-sm" style={{ backgroundImage: "url('/audit.png?v=1')" }}></div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">Démarche d&apos;audit</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-4">1</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Préparation</h4>
                <p className="text-gray-600 text-sm">Prise de connaissance, cartographie des risques, plan de mission.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-4">2</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Travaux</h4>
                <p className="text-gray-600 text-sm">Tests des contrôles, procédures analytiques et substantives.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-4">3</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Restitution</h4>
                <p className="text-gray-600 text-sm">Rapport, recommandations et suivi des plans d&apos;actions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative h-64 flex items-center justify-between px-6 md:px-16 bg-gradient-to-r from-gray-900 to-gray-700">
          <div className="backgroundimg w-full h-full absolute inset-0 opacity-40" style={{ backgroundImage: "url('/contact_bg.png?v=1')" }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-white font-normal mb-4 md:mb-0">Vous envisagez une mission d&apos;audit ?</h2>
            <Link href="/contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-2 rounded text-sm transition">
              Discuter de votre besoin
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <div className="text-sm">
              <a href="#" className="text-blue-400 hover:underline">Confidentialité</a>
              <span className="text-gray-600 mx-3">—</span>
              <a href="#" className="text-blue-400 hover:underline">Politique de Cookies</a>
            </div>
            <p className="text-gray-600 text-sm">MR Partners 2024 © Tous droits réservés</p>
          </div>
        </footer>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenuBtn && mobileMenu) {
              mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
              });
            }
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  if (mobileMenu) mobileMenu.classList.add('hidden');
                }
              });
            });
          });
        `
      }} />
    </>
  );
}