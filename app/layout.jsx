import './globals.css'

export const metadata = {
  title: 'Montaje de Muebles en Zaragoza | Profesional y Rápido',
  description: 'Servicio profesional de montaje de muebles en Zaragoza. Rápido, confiable y a buen precio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
