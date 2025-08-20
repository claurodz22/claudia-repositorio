"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Instagram, Mail, Send, MessageSquare } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactoPage() {
  const form = useRef(null)
  const [sending, setSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        "service_bygwlvd",      // tu Service ID
        "template_tkvoq1p",     // tu Template ID
        form.current,
        "zUetHhwgVkLY9QhNA"     // tu Public Key
      )
      .then(
        () => {
          alert("✅ Mensaje enviado correctamente")
          form.current.reset()
          setSending(false)
        },
        (error) => {
          console.error("❌ Error al enviar:", error.text)
          alert("Hubo un error al enviar el mensaje. Intenta de nuevo.")
          setSending(false)
        }
      )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Título */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-purple-600 via-blue-500 to-white bg-clip-text text-transparent animate-gradient mb-6">
          Contáctame
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-600 via-blue-500 to-white mx-auto rounded-full"></div>
      </div>

      <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Estoy disponible para proyectos freelance, oportunidades laborales o simplemente para charlar sobre tecnología.
        No dudes en contactarme por cualquiera de estos medios.
      </p>

      {/* Tarjetas de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Redes sociales */}
        <Card className="border-primary/20 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MessageSquare className="h-5 w-5" /> Redes Sociales
            </CardTitle>
            <CardDescription>Conéctate conmigo en redes sociales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="https://linkedin.com/in/claurodz23" target="_blank" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" /> LinkedIn
            </Link>
            <Link href="https://instagram.com/claurodz23" target="_blank" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" /> Instagram
            </Link>
            <Link href="https://t.me/claurodz" target="_blank" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Send className="h-5 w-5" /> Telegram
            </Link>
          </CardContent>
        </Card>

        {/* Correo */}
        <Card className="border-secondary/20 shadow-lg shadow-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-secondary">
              <Mail className="h-5 w-5" /> Correo Electrónico
            </CardTitle>
            <CardDescription>Envíame un mensaje directo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="mailto:claudiaelena091@gmail.com" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Mail className="h-5 w-5" /> Gmail
            </Link>
            <Link href="mailto:claurodz20@outlook.com" className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Mail className="h-5 w-5" /> Outlook
            </Link>
          </CardContent>
        </Card>

        {/* GitHub */}
        <Card className="border-primary/20 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Github className="h-5 w-5" /> GitHub
            </CardTitle>
            <CardDescription>Revisa mis proyectos y contribuciones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="https://github.com/claurodz22" target="_blank" className="flex items-center gap-3 hover:text-primary transition-colors">
              <Github className="h-5 w-5" /> @claurodz22
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Puedes ver todos mis proyectos de código abierto y contribuciones en mi perfil de GitHub.
            </p>
            <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="https://github.com/claurodz22" target="_blank">Ver perfil de GitHub</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Formulario de contacto */}
      <Card className="max-w-2xl mx-auto mt-12 border-secondary/20 shadow-lg shadow-secondary/5">
        <CardHeader>
          <CardTitle className="text-secondary">Envíame un mensaje</CardTitle>
          <CardDescription>Completa el formulario y me pondré en contacto contigo lo antes posible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                <input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Asunto</label>
              <input
                id="subject"
                name="subject"
                placeholder="Asunto del mensaje"
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tu mensaje..."
                rows={5}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className={`w-full ${sending ? 'opacity-60 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'}`}
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
