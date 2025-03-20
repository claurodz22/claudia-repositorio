// app/layout.js (sin "use client")
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/app/vistas/theme-provider"
import Navbar from "@/app/vistas/Navbar"
import Footer from "@/app/vistas/Footer"
import { BackgroundBeams } from "@/components/ui/background-beams"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mi Portafolio | Claudia Rodriguez",
  description: "Portafolio profesional de Claudia Rodriguez - Desarrollador Web",
}
export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen relative text-white`}>
        <BackgroundBeams />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}