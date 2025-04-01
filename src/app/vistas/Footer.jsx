import Link from "next/link"
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t mt-auto bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Claudia Rodriguez</span>. Todos los
            derechos reservados.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/claurodz22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors z-10"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/claurodz23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors z-10"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://instagram.com/claurodz23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors z-10"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="mailto:claudiaelena091@gmail.com"
              className="text-muted-foreground hover:text-secondary transition-colors z-10"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://t.me/claurodz23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors z-10"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

