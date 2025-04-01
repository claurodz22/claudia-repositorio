import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="w-full py-4 border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Claudia Rodriguez
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-primary transition-colors">
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" className="hover:text-primary transition-colors">
                Sobre Mí
              </Link>
            </li>
            
          </ul>
          
          <Button className="bg-secondary hover:bg-secondary/90 hidden md:flex">
            <Link href="/contacto">Contáctame</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

