'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition animate-pulse-logo">
                <Image
                  src="/images/multiservicios-montaje-zaragoza.png"
                  alt="Logo Multiservicios Montaje Zaragoza"
                  width={60}
                  height={60}
                  className="inline-block"
                />
              </Link>
              <span className="ml-2 text-lg font-semibold text-gray-800 hidden sm:inline">MONTA-MUEBLES ZARAGOZA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition font-medium">Servicios</a>
              <a href="#precios" className="text-gray-700 hover:text-blue-600 transition font-medium">Precios</a>
              <a href="#cualquier marca" className="text-gray-700 hover:text-blue-600 transition font-medium">Cualquier marca</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition font-medium">Contacto</a>
            </div>
            <a href="tel:+34643519601" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              643 519 601
            </a>
            <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#servicios" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
              <a href="#precios" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Precios</a>
              <a href="#cualquier-marca" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Cualquier marca</a>
              <a href="#contacto" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
              <a href="tel:+34643519601" className="block py-2 text-gray-600 hover:text-blue-600 font-semibold">643 519 601</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent"></div></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 animate-fadeInUp delay-200">
          <div className="mb-8">
            <div className="w-36 h-36 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl animate-pulse-logo">
              <Image
                src="/images/multiservicios-montaje-zaragoza.png"
                alt="Montadores profesionales de muebles en Zaragoza. Expertos en montaje de armario, canapé, puente cama, litera, cama, sofá, cortinas, librería, cómoda, mueble de planchar. Montaje de Salón: comedor, mesa, sofá, lámparas, ventiladores de techo, soporte para tv, mueble televisor. Cocina, Muebles de baño, columnas de ducha, persianas. También fontaneros y electricistas para instalaciones y reparaciones a domicilio. Presupuesto sin compromiso, atención en el mismo día. Más de 10 años de experiencia como autónomos de mantenimiento y reparaciones. Trabajos garantizados. Desplazamiento gratuito y el mejor precio del mercado. Mantenimientos integrales para local, vivienda, empresa o negocio. Montamos muebles de IKEA, JYSK, Leroy Merlin, Conforama, Sweeek, Amazon, Bauhaus, Maisons du Monde, Kave Home, Habitat, Wayfair, Home24, La Redoute, El Corte Inglés, Zara Home, H&M Home, Mango Home, Muy Mucho, Casa Viva, Sklum, Beliani, Miliboo, Eminza, Muebles Boom, Muebles La Fábrica, Tuco, La Oca, Westwing, ManoMano, VidaXL, BoConcept, Fnac, Worten, Carrefour, Brico Depot, Bricor, Fama Sofás, LUFE, Kenay Home, Tikamoon, The Masie, Daui Home, Hannun, Woltu, Caprichos Home, Klast Home, Wabi Home, Marlo, Regalos Miguel, Casika, A Loja do Gato Preto, Lola Home, Marabillas, Ofelia Home Decor, Andreu World, Kettal, Sancal, Gandía Blasco, Doca, Capdell, Viccarbe, Ondarreta, Actiu, Pilma, Muebles Rey, Mimoondo, Poltronesofà, Natuzzi, Roche Bobois, Poliform, Muebles.com, Hipermueble, Muebles1Click, Samblo, Meka-Block, Puntogar, Galerías del Tresillo, Vente-Unique, Muji, Nanimarquina, Vondom, Expormim, Calligaris, Cassina, Vitra, Hay, Muuto, Arper, Pedrali, Cattelan Italia, Nardi, Dormity, ArtesMoble, Ofita, Steelcase, Mobenia, Mobles Nacher, Mobelium, Sillas.es, LaTiendaHome, Bolia, Wallapop, Vinted, eBay, Hogardecora, Mobelcenter, Rapimueble, Atrapamuebles, Homcom, Merkahome, idmarket y muchos muebles más."
                width={144}
                height={144}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center leading-tight">Montador de Muebles en Zaragoza</h1>
          <p className="text-xl md:text-2xl mb-10 text-center text-blue-100 max-w-3xl mx-auto">Servicio rápido, profesional y con garantía</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+34643519601" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition shadow-lg">
              Llamar Ahora
            </a>
            <a href="https://wa.me/34643519601?text=Hola,%20necesito%20informaci%u00f3n%20sobre%20montaje%20de%20muebles" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition shadow-lg">
              WhatsApp
            </a>
          </div>
          
          <h3 className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto bg-blue-800/40 p-6 rounded-lg">
            Contrata un profesional al mejor precio, ahorrando tiempo y esfuerzo. 
            Nos encargaremos del montaje de todo tipo de montaje de muebles con rapidez, precisión y garantía. 
            
            Montar un armario, canapé, puente cama, litera, cama, sofá, cortinas, librería, cómoda, mueble de planchar. 
            Salón: comedor, mesa, sofá, lámparas, ventiladores de techo, soporte para tv, mueble televisor. 
            Cocina, Muebles de baño, columnas de ducha, persianas, fontaneros.
            Hacemos trabajos de electricidad, instalaciones.
            Pintura general, pintura de habitaciones, realizamos todo tipo de reparaciones a domicilio. 
            Presupuesto previo sin compromiso y atención en el mismo día. 
            Llevamos más de 10 años trabajando como autónomos de mantenimiento y reparaciones a domicilio. 
            Todos nuestros trabajos están garantizados. Nos desplazamos gratuitamente a su domicilio y le damos el mejor precio del mercado. Mantenimientos integrales para su local, vivienda, empresa o negocio.
          </h3>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Montaje profesional para todas tus necesidades</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center mb-6">
                <Image src="/images/galeria-dormitorio.jpg" alt="Montaje de muebles de dormitorio" width={400} height={300} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Dormitorios</h3>
              <p className="text-gray-600 text-center">Montaje de camas, literas, armarios, mesitas de noche, cabeceros, cómodas, cortinas, persianas.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center mb-6">
                <Image src="/images/galeria-cocina.jpg" alt="Instalación de muebles de cocina" width={400} height={300} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Cocinas</h3>
              <p className="text-gray-600 text-center">Instalación de muebles de cocina, módulos, estanterías, grifería, fontanería.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center">
                <Image src="/images/galeria-salon.jpg" alt="Montaje de muebles de salón" width={300} height={250} className="rounded-lg" />
                <Image src="/images/montador-profesional.jpg" alt="Montador profesional" width={300} height={250} className="rounded-lg" />
                <Image src="/images/galeria-mueble-tv.jpg" alt="Montaje de mueble de TV" width={300} height={250} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Salón</h3>
              <p className="text-gray-600 text-center">Montaje de muebles de TV, sofás, librerías, estanterías, vitrinas, mesa de comedor, sillas, lámparas, persianas, ventiladores de techo.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center mb-6">
                <Image src="/images/galeria-escritorio.jpg" alt="Montaje de escritorios" width={400} height={300} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Oficina</h3>
              <p className="text-gray-600 text-center">Escritorios, sillas ergonómicas, taquillas y estanterías de oficina.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="flex justify-center mb-6">
                <Image src="/images/hero-background.jpg" alt="Carpintería y otros servicios" width={400} height={300} className="rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Carpintería y otros</h3>
              <p className="text-gray-600 text-center">Armarios empotrados, puertas correderas, puertas plegables, suelos laminados, pergo, vinílicos SPC, rodapiés, puertas y montaje de muebles de baño, columnas de ducha, espejos y de todo tipo de accesorios y muebles.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Precios Transparentes</h2>
            <p className="text-xl text-gray-600">Sin sorpresas, sin costes ocultos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Muebles Pequeños</h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-4 text-center">Desde 35€</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Estanterías y librerías</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Mesitas de noche</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Sillas y taburetes</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border-4 border-blue-600">
              <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">MÁS POPULAR</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Muebles Medianos</h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-4 text-center">Desde 60€</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Camas y somieres</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Mesas y escritorios</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Cómodas y cajoneras</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Muebles Grandes</h3>
              <p className="text-4xl font-extrabold text-blue-600 mb-4 text-center">Desde 90€</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Armarios y roperos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Cocinas completas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Literas y canapés</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">* Precios orientativos. El coste final puede variar según complejidad y tamaño</p>
            <a href="tel:+34643519601" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg inline-block">Solicitar Presupuesto Gratis</a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Servicio Profesional de Montaje</h2>
            <p className="text-xl text-gray-600 mb-10">Con más de 10 años de experiencia en el montaje de muebles, ofrecemos un servicio rápido, profesional y con garantía. Trabajamos con todas las marcas: IKEA, JYSK, Leroy Merlin, Conforama, Sweeek, Amazon, Bauhaus, Maisons du Monde, Kave Home, Habitat, Wayfair, Home24, La Redoute, El Corte Inglés, Zara Home, H&M Home, Mango Home, Muy Mucho, Casa Viva, Sklum, Beliani, Miliboo, Eminza, Muebles Boom, Muebles La Fábrica, Tuco, La Oca, Westwing, ManoMano, VidaXL, BoConcept, Fnac, Worten, Carrefour, Brico Depot, Bricor, Fama Sofás, LUFE, Kenay Home, Tikamoon, The Masie, Daui Home, Hannun, Woltu, Caprichos Home, Klast Home, Wabi Home, Marlo, Regalos Miguel, Casika, A Loja do Gato Preto, Lola Home, Marabillas, Ofelia Home Decor, Andreu World, Kettal, Sancal, Gandía Blasco, Doca, Capdell, Viccarbe, Ondarreta, Actiu, Pilma, Muebles Rey, Mimoondo, Poltronesofà, Natuzzi, Roche Bobois, Poliform, Muebles.com, Hipermueble, Muebles1Click, Samblo, Meka-Block, Puntogar, Galerías del Tresillo, Vente-Unique, Muji, Nanimarquina, Vondom, Expormim, Calligaris, Cassina, Vitra, Hay, Muuto, Arper, Pedrali, Cattelan Italia, Nardi, Dormity, ArtesMoble, Ofita, Steelcase, Mobenia, Mobles Nacher, Mobelium, Sillas.es, LaTiendaHome, Bolia, Wallapop, Vinted, eBay, Hogardecora, Mobelcenter, Rapimueble, Atrapamuebles, Homcom, Merkahome, idmarket y muchos muebles más.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Montaje rápido y eficiente</h3>
              <p className="text-gray-600 text-center">Servicio profesional en el tiempo acordado</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4 text-center">🔧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Herramientas profesionales incluidas</h3>
              <p className="text-gray-600 text-center">Llevamos todo lo necesario</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4 text-center">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Garantía en todos nuestros trabajos</h3>
              <p className="text-gray-600 text-center">Respaldamos nuestra calidad</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4 text-center">💶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Precios transparentes sin sorpresas</h3>
              <p className="text-gray-600 text-center">Sin costes ocultos</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <a href="tel:+34643519601" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition shadow-lg inline-block">Solicitar Presupuesto</a>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte con tu proyecto</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <form action="https://formsubmit.co/obruxreformas@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="Nueva consulta desde Monta-Muebles Zaragoza" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://monta-muebles-zaragoza.vercel.app" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition shadow-lg">Enviar Mensaje</button>
            </form>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-blue-600 text-3xl mb-2">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Teléfono</h3>
              <a href="tel:+34643519601" className="text-blue-600 hover:text-blue-700">643 519 601</a>
            </div>
            <div>
              <div className="text-blue-600 text-3xl mb-2">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/34643519601" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Enviar mensaje</a>
            </div>
            <div>
              <div className="text-blue-600 text-3xl mb-2">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:obruxreformas@gmail.com" className="text-blue-600 hover:text-blue-700">obruxreformas@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MONTA-MUEBLES ZARAGOZA</h3>
              <p className="text-gray-400">Servicio profesional de montaje de muebles en Zaragoza</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tel: 643 519 601</li>
                <li>Email: obruxreformas@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Horario</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes a Viernes: 8:00 - 20:00</li>
                <li>Sábados: 9:00 - 14:00</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 Monta-Muebles Zaragoza. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )

}

