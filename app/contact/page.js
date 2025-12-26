import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - MR Partners - Cabinet d&apos;expertise comptable</title>
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
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Notre cabinet d&apos;expertise comptable certifié ITAA est à votre disposition pour répondre à toutes vos questions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nom *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Votre nom" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="votre@email.com" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Sujet *</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition" placeholder="Sujet de votre message" required />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message *</label>
                  <textarea rows="6" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none" placeholder="Votre message..." required></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="consent" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    J&apos;accepte que MR Partners traite mes données personnelles conformément à la politique de confidentialité.
                  </label>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Envoyer le Message
                </button>
              </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Autres moyens de contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Téléphone</h4>
                  <p className="text-gray-600">+32 471 65 08 92</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600">info@mrpartners.be</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                  <p className="text-gray-600 text-sm">5 RUE DU PRESIDENT WILSON<br />92300 LEVALLOIS-PERRET</p>
                </div>
              </div>
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
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
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
