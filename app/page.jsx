'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                MONTA-MUEBLES ZARAGOZA
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition">Cómo funciona</a>
              <a href="#precios" className="text-gray-700 hover:text-blue-600 transition">Precios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
            </div>
            <a
              href="tel:620984173"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              643 519 601
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Montaje de Muebles
                <span className="text-blue-600"> Profesional</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                ¿Compraste muebles y no tienes tiempo de montarlos? Déjanoslo a nosotros. Montaje rápido, seguro y profesional de cualquier marca.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg text-center"
                >
                  Solicitar presupuesto
                </a>
                <a
                  href="tel:620984173"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition text-center"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-100 rounded-full w-96 h-96 mx-auto flex items-center justify-center">
                <svg className="w-64 h-64 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Montaje profesional de muebles de todas las marcas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>  
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Muebles IKEA</h3>
              <p className="text-gray-600 mb-4">Especialistas en montaje de muebles IKEA. Armarios, camas, estanterías, escritorios y más.</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Montaje rápido</li>
                <li>✓ Garantía de trabajo</li>
                <li>✓ Herramientas profesionales</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-green-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Muebles de Cocina</h3>
              <p className="text-gray-600 mb-4">Instalación de muebles de cocina de cualquier marca. Precisión y acabados perfectos.</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Nivelación perfecta</li>
                <li>✓ Instalación de encimeras</li>
                <li>✓ Bisagras y cajones</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl hover:shadow-xl transition">
              <div className="text-orange-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Otras Marcas</h3>
              <p className="text-gray-600 mb-4">JYSK, Leroy Merlin, Conforama, Amazon y cualquier otra marca del mercado.</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Experiencia en todas las marcas</li>
                <li>✓ Resultados profesionales</li>
                <li>✓ Presupuesto sin compromiso</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
            <p className="text-xl text-gray-600">Proceso simple y rápido</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contáctanos</h3>
              <p className="text-gray-600">Llámanos o envíanos un mensaje con los detalles de los muebles a montar.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Presupuesto</h3>
              <p className="text-gray-600">Te damos un presupuesto claro y sin sorpresas. Sin compromiso.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">¡Listo!</h3>
              <p className="text-gray-600">Acordamos fecha y hora. Montamos tus muebles de forma profesional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios Transparentes</h2>
            <p className="text-xl text-gray-600">Sin sorpresas, sin costes ocultos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Muebles Pequeños</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">Desde 25€</div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Estanterías</li>
                <li>✓ Mesitas</li>
                <li>✓ Sillas</li>
                <li>✓ Muebles auxiliares</li>
              </ul>
              <a href="tel:620984173" className="block mt-8 bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Consultar
              </a>
            </div>

            <div className="border-2 border-blue-600 rounded-xl p-8 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                MÁS POPULAR
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Muebles Medianos</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">Desde 50€</div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Armarios 2 puertas</li>
                <li>✓ Camas</li>
                <li>✓ Escritorios</li>
                <li>✓ Muebles de salón</li>
              </ul>
              <a href="tel:620984173" className="block mt-8 bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Consultar
              </a>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Muebles Grandes</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">Desde 80€</div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Armarios grandes</li>
                <li>✓ Cocinas completas</li>
                <li>✓ Estanterías grandes</li>
                <li>✓ Proyectos complejos</li>
              </ul>
              <a href="tel:620984173" className="block mt-8 bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Consultar
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">* Precios orientativos. Presupuesto final según complejidad y tiempo estimado.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">¿Necesitas montar tus muebles?</h2>
          <p className="text-2xl mb-8">Llámanos ahora y te damos presupuesto sin compromiso</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:620984173"
              className="bg-white text-blue-600 px-12 py-5 rounded-lg font-bold text-2xl hover:bg-gray-100 transition shadow-xl"
            >
              📞 643 519 601
            </a>
            <a
              href="mailto:obruxreformas@gmail.com"
              className="border-2 border-white text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-blue-700 transition"
            >
              ✉️ Enviar email
            </a>
          </div>
          <p className="mt-8 text-blue-100 text-lg">
            📍 Servicio en Zaragoza y alrededores | Disponibilidad inmediata
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-4">MONTA-MUEBLES ZARAGOZA</h3>
              <p className="text-gray-400">Servicio profesional de montaje de muebles en Zaragoza. Rápido, seguro y garantizado.</p>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Montaje muebles IKEA</li>
                <li>Montaje muebles de cocina</li>
                <li>Montaje muebles JYSK</li>
                <li>Cualquier marca</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📞 643 519 601</li>
                <li>✉️ obruxreformas@gmail.com</li>
                <li>📍 Zaragoza y alrededores</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Monta-Muebles Zaragoza - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>

            {/* WhatsApp Float Button */}
            <a
                      href="https://wa.me/34643519601?text=Hola,%20necesito%20un%20presupuesto%20para%20montaje%20de%20muebles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center"
                      aria-label="Contactar por WhatsApp"
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                    </a>
    </main>
  )
}
