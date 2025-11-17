'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition animate-pulseLogo">
                MM
              </Link>
              <span className="ml-2 text-lg font-semibold text-gray-800 hidden sm:inline">MONTA-MUEBLES ZARAGOZA</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition font-medium">Servicios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition font-medium">Cómo funciona</a>
              <a href="#precios" className="text-gray-700 hover:text-blue-600 transition font-medium">Precios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition font-medium">Contacto</a>
            </div>

            <a
              href="tel:+34643519601"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md hidden md:block"
            >
              643 519 601
            </a>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#servicios" className="block text-gray-700 hover:text-blue-600 transition py-2">Servicios</a>
              <a href="#como-funciona" className="block text-gray-700 hover:text-blue-600 transition py-2">Cómo funciona</a>
              <a href="#precios" className="block text-gray-700 hover:text-blue-600 transition py-2">Precios</a>
              <a href="#contacto" className="block text-gray-700 hover:text-blue-600 transition py-2">Contacto</a>
              <a href="tel:+34643519601" className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center mt-4">643 519 601</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-muebles-zaragoza-hero_r7n0b4.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 animate-pulseLogo">
              <div className="text-6xl lg:text-8xl font-bold text-blue-600">MM</div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fadeInUp">
              Montaje de Muebles en <span className="text-blue-600">Zaragoza</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Servicio profesional de montaje de muebles IKEA, JYSK, Leroy Merlin y más. Rápido, confiable y con garantía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <a
                href="tel:+34643519601"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-block"
              >
                📞 Llamar Ahora
              </a>
              <a
                href="https://wa.me/34643519601?text=Hola,%20necesito%20información%20sobre%20montaje%20de%20muebles"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg inline-block"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Montaje profesional para todas tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon="🛏️"
              title="Dormitorios"
              description="Montaje de camas, armarios, mesitas de noche y cómodas"
            />
            <ServiceCard
              icon="🍳"
              title="Cocinas"
              description="Instalación de muebles de cocina, módulos y estanterías"
            />
            <ServiceCard
              icon="🛋️"
              title="Salón"
              description="Montaje de muebles de TV, estanterías y vitrinas"
            />
            <ServiceCard
              icon="💼"
              title="Oficina"
              description="Escritorios, sillas ergonómicas y estanterías de oficina"
            />
            <ServiceCard
              icon="🚪"
              title="Armarios"
              description="Armarios empotrados, puertas correderas y organizadores"
            />
            <ServiceCard
              icon="✅"
              title="Otros Muebles"
              description="Cualquier tipo de mueble que necesites montar"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Servicio Profesional de Montaje
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Con más de 10 años de experiencia en el montaje de muebles, ofrecemos un servicio rápido, profesional y con garantía. Trabajamos con todas las marcas: IKEA, JYSK, Leroy Merlin, Conforama y más.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Montaje rápido y eficiente</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Herramientas profesionales incluidas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Garantía en todos nuestros trabajos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Precios transparentes sin sorpresas</span>
                </li>
              </ul>
              <a
                href="tel:+34643519601"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg inline-block"
              >
                Solicitar Presupuesto
              </a>
            </div>
            <div className="animate-fadeInUp animation-delay-200">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montador-profesional_a0m3zk.jpg"
                  alt="Montador profesional trabajando"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trabajos Realizados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunos de nuestros últimos montajes en Zaragoza
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-dormitorio-ikea_k8n2m1.jpg"
              alt="Montaje de dormitorio IKEA"
            />
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-cocina-moderna_p3l5q2.jpg"
              alt="Montaje de cocina moderna"
            />
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-salon-estanteria_m7k4n8.jpg"
              alt="Montaje de estantería de salón"
            />
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-armario-puertas_j2h6p9.jpg"
              alt="Montaje de armario con puertas"
            />
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-escritorio-oficina_r5t3w7.jpg"
              alt="Montaje de escritorio de oficina"
            />
            <GalleryItem
              src="https://res.cloudinary.com/dzs0q4mpe/image/upload/v1709748682/montaje-mueble-tv_n9s2k4.jpg"
              alt="Montaje de mueble de TV"
            />
                        <GalleryItem
                                        src="/images/galeria-montador-mueble-lavabo.jpg"
                                        alt="Montaje de mueble de lavabo"
                                      />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Precios Transparentes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sin sorpresas. Presupuesto claro y detallado antes de comenzar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition animate-fadeInUp">
              <div className="text-4xl mb-4">🛏️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Muebles Simples</h3>
              <p className="text-gray-600 mb-4">Mesitas, sillas, estanterías pequeñas</p>
              <div className="text-3xl font-bold text-blue-600 mb-4">Desde 30€</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Montaje rápido
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Herramientas incluidas
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform scale-105 animate-fadeInUp animation-delay-200">
              <div className="text-4xl mb-4">🚪</div>
              <h3 className="text-2xl font-bold text-white mb-2">Muebles Complejos</h3>
              <p className="text-blue-100 mb-4">Armarios, camas, muebles de cocina</p>
              <div className="text-3xl font-bold text-white mb-4">Desde 80€</div>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Montaje profesional
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Garantía incluida
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition animate-fadeInUp animation-delay-400">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proyectos Completos</h3>
              <p className="text-gray-600 mb-4">Habitaciones completas, cocinas</p>
              <div className="text-3xl font-bold text-blue-600 mb-4">Presupuesto</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Presupuesto personalizado
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Servicio completo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Necesitas montar tus muebles?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contáctanos ahora y recibe tu presupuesto sin compromiso. Respuesta rápida garantizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34643519601"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-block"
              >
                📞 643 519 601
              </a>
              <a
                href="https://wa.me/34643519601?text=Hola,%20necesito%20información%20sobre%20montaje%20de%20muebles"
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg inline-block"
              >
                💬 Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos por tu método preferido
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slideInLeft">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="space-y-6 animate-fadeInUp animation-delay-200">
              <ContactInfo
                icon="📞"
                title="Teléfono"
                content="643 519 601"
                link="tel:+34643519601"
              />
              <ContactInfo
                icon="✉️"
                title="Email"
                content="obruxreformas@gmail.com"
                link="mailto:obruxreformas@gmail.com"
              />
              <ContactInfo
                icon="💬"
                title="WhatsApp"
                content="Envíanos un mensaje"
                link="https://wa.me/34643519601?text=Hola,%20necesito%20información%20sobre%20montaje%20de%20muebles"
              />
              <ContactInfo
                icon="📍"
                title="Zona de Servicio"
                content="Zaragoza y alrededores"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">MM</h3>
              <p className="text-gray-400">
                Servicio profesional de montaje de muebles en Zaragoza. Rápido, confiable y con garantía.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-white transition">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="text-gray-400 hover:text-white transition">
                    Cómo funciona
                  </a>
                </li>
                <li>
                  <a href="#precios" className="text-gray-400 hover:text-white transition">
                    Precios
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-white transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="tel:+34643519601" className="hover:text-white transition">
                    📞 643 519 601
                  </a>
                </li>
                <li>
                  <a href="mailto:obruxreformas@gmail.com" className="hover:text-white transition">
                    ✉️ obruxreformas@gmail.com
                  </a>
                </li>
                <li>ñZaragoza y alrededores</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Monta-Muebles Zaragoza. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Component Functions
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 animate-fadeInUp">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function GalleryItem({ src, alt }) {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-fadeInUp">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  )
}

function ContactInfo({ icon, title, content, link }) {
  const CardContent = (
    <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition">
      <div className="flex items-start">
        <div className="text-3xl mr-4">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  )

  if (link) {
    return <a href={link} className="block">{CardContent}</a>
  }
  return CardContent
}
