'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              href="tel:+34643519601"
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
                Montaje de Muebles en Zaragoza
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Servicio profesional de montaje de muebles IKEA, JYSK, Leroy Merlin y más. Rápido, confiable y con garantía.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contacto"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Solicitar Presupuesto
                </a>
                <a
                  href="tel:+34643519601"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative h-full bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <h3 className="text-2xl font-bold text-gray-900">Montaje Profesional</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Montaje profesional para todas tus necesidades</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🛌</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dormitorios</h3>
              <p className="text-gray-600 mb-4">Montaje de camas, armarios, mesitas de noche y cómodas</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Camas de todos los tamaños</li>
                <li>✓ Armarios empotrados</li>
                <li>✓ Muebles auxiliares</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🛋️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Salón</h3>
              <p className="text-gray-600 mb-4">Montaje de estanterías, mesas, sillas y muebles TV</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Estanterías BILLY y similares</li>
                <li>✓ Muebles de televisión</li>
                <li>✓ Mesas y sillas</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🍳</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cocina</h3>
              <p className="text-gray-600 mb-4">Montaje de muebles de cocina y complementos</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Muebles de cocina</li>
                <li>✓ Islas de cocina</li>
                <li>✓ Carritos auxiliares</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Oficina</h3>
              <p className="text-gray-600 mb-4">Montaje de escritorios, sillas y estanterías</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Escritorios y mesas</li>
                <li>✓ Sillas de oficina</li>
                <li>✓ Archivadores</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🛊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jardín y Exterior</h3>
              <p className="text-gray-600 mb-4">Montaje de muebles de jardín y exterior</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Conjuntos de jardín</li>
                <li>✓ Casetas y almacenamiento</li>
                <li>✓ Mesas y sillas exterior</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🧰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Otros Muebles</h3>
              <p className="text-gray-600 mb-4">Cualquier tipo de mueble que necesites</p>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Zapateros</li>
                <li>✓ Percheros</li>
                <li>✓ Muebles a medida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
            <p className="text-xl text-gray-600">Proceso simple y rápido</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contacta</h3>
              <p className="text-gray-600">Llámanos o envíanos un mensaje con los detalles de tu mueble</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Presupuesto</h3>
              <p className="text-gray-600">Recibe un presupuesto rápido y sin compromiso</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Agenda</h3>
              <p className="text-gray-600">Escoge el día y hora que mejor te convenga</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">¡Listo!</h3>
              <p className="text-gray-600">Disfruta de tu mueble montado profesionalmente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios Transparentes</h2>
            <p className="text-xl text-gray-600">Sin sorpresas, sin costes ocultos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Muebles Pequeños</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Desde 30€</div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Mesitas de noche</li>
                <li>✓ Sillas</li>
                <li>✓ Estanterías pequeñas</li>
                <li>✓ Percheros</li>
              </ul>
            </div>
            <div className="bg-blue-600 p-8 rounded-xl shadow-2xl transform scale-105">
              <div className="bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">MÁS POPULAR</div>
              <h3 className="text-2xl font-bold text-white mb-4">Muebles Medianos</h3>
              <div className="text-4xl font-bold text-white mb-6">Desde 60€</div>
              <ul className="space-y-3 text-white">
                <li>✓ Camas</li>
                <li>✓ Armarios 2 puertas</li>
                <li>✓ Escritorios</li>
                <li>✓ Estanterías medianas</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Muebles Grandes</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Desde 100€</div>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Armarios grandes</li>
                <li>✓ Cocinas completas</li>
                <li>✓ Salón completo</li>
                <li>✓ Proyectos grandes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">¿Listo para montar tus muebles?</h2>
          <p className="text-xl text-white mb-8">Contacta ahora y recibe tu presupuesto en minutos</p>
          <a
            href="https://wa.me/34643519601?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20montaje%20de%20muebles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition shadow-lg"
          >
            📱 Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-4">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Teléfono</h4>
                    <a href="tel:+34643519601" className="text-gray-600 hover:text-blue-600">643 519 601</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-4">✉️</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a href="mailto:obruxreformas@gmail.com" className="text-gray-600 hover:text-blue-600">obruxreformas@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-4">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Zona de Servicio</h4>
                    <p className="text-gray-600">Zaragoza y alrededores</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-blue-600 text-2xl mr-4">🕒</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Horario</h4>
                    <p className="text-gray-600">Lunes a Sábado: 8:00 - 20:00</p>
                    <p className="text-gray-600">Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe tu proyecto"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MONTA-MUEBLES ZARAGOZA</h3>
              <p className="text-gray-400">Servicio profesional de montaje de muebles en Zaragoza</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-400 hover:text-white">Servicios</a></li>
                <li><a href="#como-funciona" className="text-gray-400 hover:text-white">Cómo Funciona</a></li>
                <li><a href="#precios" className="text-gray-400 hover:text-white">Precios</a></li>
                <li><a href="#contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: <a href="tel:+34643519601" className="hover:text-white">643 519 601</a></li>
                <li>Email: <a href="mailto:obruxreformas@gmail.com" className="hover:text-white">obruxreformas@gmail.com</a></li>
                <li>Zaragoza, España</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Monta-Muebles Zaragoza. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/34643519601?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20montaje%20de%20muebles"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition z-50"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  )
}
