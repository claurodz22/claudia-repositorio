import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Mail, Send, ExternalLink } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contáctame
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {/* Redes Sociales */}
          <Card className="border-primary/20 shadow-lg shadow-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <ExternalLink className="h-5 w-5" />
                Redes Sociales
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://linkedin.com/in/claurodz23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors z-10 relative"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://instagram.com/claurodz23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors z-10 relative"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://t.me/claurodz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors z-10 relative"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Correo */}
          <Card className="border-secondary/20 shadow-lg shadow-secondary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-secondary">
                <Mail className="h-5 w-5" />
                Correo Electrónico
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="mailto:claudiaelena091@gmail.com"
                    className="flex items-center gap-2 hover:text-secondary transition-colors z-10 relative"
                  >
                    <Mail className="h-4 w-4" />
                    Gmail
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:claurodz20@outlook.com"
                    className="flex items-center gap-2 hover:text-secondary transition-colors z-10 relative"
                  >
                    <Mail className="h-4 w-4" />
                    Outlook
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="border-primary/20 shadow-lg shadow-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-primary">
                <Github className="h-5 w-5" />
                GitHub
              </h3>
              <Link
                href="https://github.com/claurodz22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors mb-3 z-10 relative"
              >
                <Github className="h-4 w-4" />
                @claurodz22
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary text-primary hover:bg-primary/10 relative z-10"
                asChild
              >
                <Link href="https://github.com/claurodz22" target="_blank" rel="noopener noreferrer">
                  Ver perfil
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 relative z-10">
            <Link href="/contacto">Más formas de contacto</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

