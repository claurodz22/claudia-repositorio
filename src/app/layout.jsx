import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/vistas/theme-provider"
import Navbar from "@/app/vistas/Navbar"
import Footer from "@/app/vistas/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mi Portafolio | Claudia Rodriguez",
  description: "Portafolio profesional de Claudia Rodriguez - Desarrollador Web",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

