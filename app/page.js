import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>MR Partners - Comptabilité, Fiscalité, Audit</title>
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
              <a href="/" className="logo-link">
                <img src="/logo.jpg" alt="MR Partners Logo" className="h-12 w-auto transition-transform duration-200 ease-out origin-left hover:scale-105" />
              </a>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#accueil" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Accueil</a>
              <a href="/aboutus" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">À propos</a>
              <a href="#services" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Services</a>
              <a href="#specialisations" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Spécialisations</a>
              <a href="/contact" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Contact</a>
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
            <a href="#accueil" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Accueil</a>
            <a href="/aboutus" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">À propos</a>
            <a href="#services" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Services</a>
            <a href="#specialisations" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Spécialisations</a>
            <a href="/contact" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section id="accueil" className="bg-gradient-to-r from-blue-900 to-blue-800 relative flex flex-col items-center justify-center px-6 py-32 md:py-40 min-h-[500px]">
          <div className="text-center space-y-4 z-10 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight">MR Partners</h1>
            <div className="h-1 w-24 bg-amber-500 mx-auto"></div>
            <p className="text-xl md:text-2xl text-amber-400 font-semibold">Comptabilité • Fiscalité • Audit</p>
            <p className="text-lg md:text-xl text-gray-100 font-light">Bureau d&apos;expert-comptable (fiscal) certifié ITAA</p>
            <p className="text-base md:text-lg text-gray-200 font-light">Nous mettons 20 ans d&apos;expérience à votre service</p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-56 h-56 md:w-72 md:h-72 z-20">
            <div className="backgroundimg w-full h-full rounded-xl shadow-2xl border-4 border-white/20" style={{ backgroundImage: "url('/hero_main.png?v=1')" }}></div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="qui-sommes-nous" className="pt-40 md:pt-48 pb-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-4">Qui sommes-nous ?</h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-16"></div>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="backgroundimg w-full h-96 rounded-xl shadow-lg" style={{ backgroundImage: "url('/audit.png?v=1')" }}></div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Cabinet d&apos;expertise comptable</h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  MR PARTNERS est un cabinet d&apos;experts-comptables (fiscal) certifié ITAA où l&apos;excellence rencontre l&apos;expertise. Notre équipe dévouée de professionnels comptables est fière de fournir à votre entreprise le temps et les efforts qu&apos;elle mérite vraiment. Grâce à nos solutions innovantes et à notre attention méticuleuse aux détails, nous nous engageons à vous aider.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Nous travaillons en étroite collaboration avec nos clients et agissons pour un large éventail d&apos;entreprises et de particuliers. Outre les services de comptabilité plus généraux, nous pouvons également vous aider avec le développement des affaires et les services fiscaux spécialisés. Nous apprécions que ce n&apos;est qu&apos;avec le temps que nous pouvons gagner votre confiance, afin que vous sachiez que lorsque nous disons que nous pouvons et allons faire quelque chose, nous le faisons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-4">Nos Services</h2>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Service 1: Comptabilité */}
              <div className="service-card flex flex-col">
                <div className="service-image-wrapper relative h-64">
                  <div className="backgroundimg w-full h-full" style={{ backgroundImage: "url('/accounting.png?v=1')" }}></div>
                  <div className="service-overlay">
                    <h3 className="text-2xl text-white font-semibold uppercase mb-4">Comptabilité</h3>
                    <p className="text-sm text-white text-center mb-6 px-4">MR Partners vous propose leurs services d'experts en matière de comptabilité.</p>
                    <a href="/comptabilite" className="cta-button bg-amber-500 text-white text-sm font-medium py-2 px-8 rounded-full transition">
                      <span className="cta-button-text">SAVOIR PLUS</span>
                    </a>
                  </div>
                </div>
                <div className="service-label bg-white border-l-2 border-r-2 border-b-2 border-amber-500 text-center py-4">
                  <h3 className="service-label-text text-base font-medium uppercase text-gray-800">Comptabilité</h3>
                </div>
              </div>

              {/* Service 2: Fiscalité */}
              <div className="service-card flex flex-col">
                <div className="service-image-wrapper relative h-64">
                  <div className="backgroundimg w-full h-full" style={{ backgroundImage: "url('/taxation.png?v=1')" }}></div>
                  <div className="service-overlay">
                    <h3 className="text-2xl text-white font-semibold uppercase mb-4">Fiscalité</h3>
                    <p className="text-sm text-white text-center mb-6 px-4">Nos services spécialisés se concentrent sur l&apos;optimisation de votre stratégie fiscale.</p>
                    <a href="/fiscalite" className="cta-button bg-amber-500 text-white text-sm font-medium py-2 px-8 rounded-full transition">
                      <span className="cta-button-text">SAVOIR PLUS</span>
                    </a>
                  </div>
                </div>
                <div className="service-label bg-white border-l-2 border-r-2 border-b-2 border-amber-500 text-center py-4">
                  <h3 className="service-label-text text-base font-medium uppercase text-gray-800">Fiscalité</h3>
                </div>
              </div>

              {/* Service 3: Audit */}
              <div className="service-card flex flex-col">
                <div className="service-image-wrapper relative h-64">
                  <div className="backgroundimg w-full h-full" style={{ backgroundImage: "url('/audit.png?v=1')" }}></div>
                  <div className="service-overlay">
                    <h3 className="text-2xl text-white font-semibold uppercase mb-4">Audit</h3>
                    <p className="text-sm text-white text-center mb-6 px-4">MR Partners propose des solutions d'audit personnalisées et efficaces.</p>
                    <a href="/audit" className="cta-button bg-amber-500 text-white text-sm font-medium py-2 px-8 rounded-full transition">
                      <span className="cta-button-text">SAVOIR PLUS</span>
                    </a>
                  </div>
                </div>
                <div className="service-label bg-white border-l-2 border-r-2 border-b-2 border-amber-500 text-center py-4">
                  <h3 className="service-label-text text-base font-medium uppercase text-gray-800">Audit</h3>
                </div>
              </div>

              {/* Service 4: Autres Services */}
              <div className="service-card flex flex-col">
                <div className="service-image-wrapper relative h-64">
                  <div className="backgroundimg w-full h-full" style={{ backgroundImage: "url('/hero_main.png?v=1')" }}></div>
                  <div className="service-overlay">
                    <h3 className="text-2xl text-white font-semibold uppercase mb-4">Autres Services</h3>
                    <p className="text-sm text-white text-center mb-6 px-4">MR Partners propose des solutions d'audit personnalisées et efficaces.</p>
                    <a href="/autres-services" className="cta-button bg-amber-500 text-white text-sm font-medium py-2 px-8 rounded-full transition">
                      <span className="cta-button-text">SAVOIR PLUS</span>
                    </a>
                  </div>
                </div>
                <div className="service-label bg-white border-l-2 border-r-2 border-b-2 border-amber-500 text-center py-4">
                  <h3 className="service-label-text text-base font-medium uppercase text-gray-800">Autres Services</h3>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <div className="flex justify-end py-5 bg-gray-50">
              <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-sm font-semibold transition shadow-md hover:shadow-lg">
                Nous contacter
              </a>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section id="specialisations" className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl text-blue-900 font-bold">Nos Spécialisations</h2>
                <div className="h-1 w-16 bg-amber-500 mb-6"></div>
                <div className="text-base text-gray-700">
                  <p className="mb-4 font-semibold">Parmi toute notre gamme de services, nous sommes spécialisés en:</p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fiscalité directe et indirecte</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Déclarations de TVA</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Bilan de santé comptable</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="backgroundimg w-full h-96 rounded-xl shadow-lg" style={{ backgroundImage: "url('/taxation.png?v=1')" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="relative h-80 flex items-center justify-between px-6 md:px-16 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="backgroundimg w-full h-full absolute inset-0 opacity-20" style={{ backgroundImage: "url('/contact_bg.png?v=1')" }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-2">Prêt à sécuriser votre avenir financier ?</h2>
              <p className="text-lg text-gray-200">Nos experts sont à votre disposition pour un premier conseil personnalisé.</p>
            </div>
            <a href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-lg text-base font-bold transition shadow-xl hover:shadow-2xl shrink-0">
              Contactez-nous
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 px-6 border-t border-gray-200">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <div className="text-sm">
              <a href="#" className="text-amber-600 hover:text-amber-700 hover:underline font-medium">Confidentialité</a>
              <span className="text-gray-400 mx-3">—</span>
              <a href="#" className="text-amber-600 hover:text-amber-700 hover:underline font-medium">Politique de Cookies</a>
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
            
            mobileMenuBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
            });

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                  mobileMenu.classList.add('hidden');
                }
              });
            });
        `
      }} />
    </>
  );
}