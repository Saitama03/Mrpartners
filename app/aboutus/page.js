import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>À propos de MR Partners - Cabinet d&apos;expertise comptable</title>
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
        {/* About Us Section */}
        <section className="pt-20 md:pt-28 pb-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">À propos de MR Partners</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cabinet d&apos;expertise comptable
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                MR PARTNERS est un cabinet d&apos;experts-comptables (fiscal) certifié ITAA où l&apos;excellence rencontre l&apos;expertise. Notre équipe dévouée de professionnels comptables est fière de fournir à votre entreprise le temps et les efforts qu&apos;elle mérite vraiment. Grâce à nos solutions innovantes et à notre attention méticuleuse aux détails, nous nous engageons à vous aider.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                Nous travaillons en étroite collaboration avec nos clients et agissons pour un large éventail d&apos;entreprises et de particuliers. Outre les services de comptabilité plus généraux, nous pouvons également vous aider avec le développement des affaires et les services fiscaux spécialisés. Nous apprécions que ce n&apos;est qu&apos;avec le temps que nous pouvons gagner votre confiance, afin que vous sachiez que lorsque nous disons que nous pouvons et allons faire quelque chose, nous le faisons.
              </p>
            </div>
          </div>
        </section>



        {/* Business Hours Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">Horaires d&apos;ouverture</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Nos horaires</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                  <span className="text-gray-700 font-medium">Lundi - Vendredi</span>
                  <span className="text-blue-700 font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-100">
                  <span className="text-gray-700 font-medium">Samedi</span>
                  <span className="text-blue-700 font-semibold">Sur rendez-vous</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Dimanche</span>
                  <span className="text-gray-500">Fermé</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    Nous sommes actuellement ouverts
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Information Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">Informations légales</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SIREN:</span>
                    <span className="text-gray-800 font-medium">983 734 013</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SIRET:</span>
                    <span className="text-gray-800 font-medium">983 734 013 00029</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Forme juridique:</span>
                    <span className="text-gray-800 font-medium">SASU</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro de TVA:</span>
                    <span className="text-gray-800 font-medium">FR40983734013</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Inscription au RCS:</span>
                    <span className="text-gray-800 font-medium">INSCRIT (au greffe de NANTERRE, le 24/01/2024)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Numéro RCS:</span>
                    <span className="text-gray-800 font-medium">983 734 013 R.C.S. Nanterre</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capital social:</span>
                    <span className="text-gray-800 font-medium">100,00 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manager Information Section */}
        <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">Dirigeant</h2>
            
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6 shadow-xl">
                TJ
              </div>
              
              <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Teboul Joachim</h3>
                <p className="text-blue-600 font-medium mb-4">Expert-comptable certifié ITAA</p>
                
                <div className="space-y-2 text-left">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-700">Expertise en comptabilité et fiscalité</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-700">Plus de 20 ans d&apos;expérience</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-700">Certifié ITAA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center text-black font-normal mb-12">Notre localisation</h2>
            <div className="bg-gray-100 rounded-xl overflow-hidden h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.964436584361!2d2.29888731558491!3d48.89182597928849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d5d3e5e5e5d%3A0x1d5e5e5e5e5e5e5e!2s5%20Rue%20du%20Pr%C3%A9sident%20Wilson%2C%2092300%20Levallois-Perret!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation de MR Partners"
              ></iframe>
            </div>
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