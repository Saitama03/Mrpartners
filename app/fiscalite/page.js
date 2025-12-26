import Head from 'next/head';
import Link from 'next/link';

export default function Fiscalite() {
  return (
    <>
      <Head>
        <title>Fiscalité - MR Partners - Cabinet d&apos;expertise comptable</title>
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
              <Link href="/" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Accueil</Link>
              <Link href="/aboutus" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">À propos</Link>
              <Link href="/#services" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Services</Link>
              <Link href="/#specialisations" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Spécialisations</Link>
              <Link href="/contact" className="text-blue-900 hover:text-amber-600 transition text-sm font-medium">Contact</Link>
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
            <Link href="/" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Accueil</Link>
            <Link href="/aboutus" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">À propos</Link>
            <Link href="/#services" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Services</Link>
            <Link href="/#specialisations" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Spécialisations</Link>
            <Link href="/contact" className="block px-3 py-2 text-blue-900 hover:bg-amber-50 hover:text-amber-600 text-sm font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fiscalité</h1>
            <div className="h-1 w-20 bg-amber-500 mb-6"></div>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              Optimisation fiscale, conformité déclarative et accompagnement stratégique. Nous veillons au respect des délais 
              et à l&apos;efficacité de votre charge fiscale dans le respect des règles en vigueur.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl text-blue-900 font-bold">Conseil fiscal pragmatique</h2>
              <div className="h-1 w-16 bg-amber-500 mb-4"></div>
              <p className="text-gray-700 text-base leading-relaxed">
                Notre équipe vous conseille en fiscalité directe et indirecte, de la préparation des déclarations à la mise en 
                place de schémas conformes et efficients. Nous sécurisons votre trajectoire tout en optimisant votre charge fiscale.
              </p>
              <ul className="list-none space-y-3 text-gray-700 text-base">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Déclarations TVA, IS/IPP et précomptes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Optimisation des rémunérations et dividendes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Accompagnement lors de contrôles fiscaux</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fiscalité internationale et TVA intracommunautaire</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Structuration (holding, succursales, établissements)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Veille fiscale et sécurisation documentaire</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="backgroundimg w-full h-96 rounded-xl shadow-lg" style={{ backgroundImage: "url('/taxation.png?v=1')" }}></div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl text-center text-blue-900 font-bold mb-4">Notre approche</h3>
            <div className="h-1 w-16 bg-amber-500 mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg mb-4">1</div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Diagnostic</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Revue de votre situation fiscale et identification des leviers.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg mb-4">2</div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Plan d&apos;action</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Mise en place de solutions adaptées et calendrier déclaratif.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg mb-4">3</div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">Suivi</h4>
                <p className="text-gray-700 text-sm leading-relaxed">Accompagnement continu et veille sur l&apos;évolution des règles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative h-72 flex items-center justify-between px-6 md:px-16 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="backgroundimg w-full h-full absolute inset-0 opacity-20" style={{ backgroundImage: "url('/contact_bg.png?v=1')" }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">Besoin d&apos;un conseil fiscal ?</h2>
              <p className="text-base text-gray-200">Nos experts sont à votre disposition pour sécuriser vos intérêts.</p>
            </div>
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg text-sm font-bold transition shadow-xl hover:shadow-2xl shrink-0">
              Échanger avec un expert
            </Link>
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