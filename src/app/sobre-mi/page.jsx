"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export default function SobreMi() {
  return (
    <div className="relative overflow-hidden">
      {/* Fondo animado */}
      <BackgroundBeams className="opacity-20" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto mb-24">
          <div className="relative group">
            <Image
              src="/mifoto.jpg"
              width={240}
              height={240}
              alt="Mi foto"
              className="rounded-full border-4 border-purple-600 shadow-lg transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-xl -z-10 animate-pulse"></div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-blue-500 to-white bg-clip-text text-transparent animate-gradient">
            Hola, soy Claudia 👋
          </h1>

          <TypewriterEffect
            words={[
              { text: "Programadora" },
              { text: "FullStack" },
              { text: "Creativa" },
              { text: "Apasionada por aprender" },
            ]}
            className="text-2xl font-semibold text-blue-400"
          />
        </section>

        {/* Resumen */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-10 mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Soy una programadora apasionada por el desarrollo web y la creación de aplicaciones que realmente aporten
            valor. Trabajo tanto en frontend como en backend, con tecnologías como <strong>React</strong>,
            <strong>Next.js</strong> y <strong>Django</strong>.
          </p>
          <p className="text-lg leading-relaxed">
            Siempre me ha gustado trabajar con computadoras y encontrar soluciones creativas a problemas reales.
          </p>
        </section>

        {/* Educación */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-10 mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Educación
          </h2>
          <p className="text-lg leading-relaxed">
            Estudié en la <strong>Universidad de Oriente, Núcleo Anzoátegui</strong>, desde marzo de 2019 hasta marzo de
            2025. Durante mi formación adquirí experiencia en el desarrollo de software y en el trabajo con distintos
            lenguajes y frameworks.
          </p>
        </section>

        {/* Trabajo de grado */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-10 mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Trabajo de Grado
          </h2>
          <p className="text-lg leading-relaxed">
            Actualmente desarrollo mi <strong>Trabajo de Grado</strong>, que consiste en una{" "}
            <strong>tienda virtual para productos de un vivero</strong>. Este proyecto busca aplicar todo lo aprendido
            durante mi carrera y aportar una solución tecnológica a un negocio real.
          </p>
        </section>

        {/* Intereses personales */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Más allá del código
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            En mis tiempos libres me gusta ver series y escuchar música. Estas actividades me ayudan a mantenerme
            creativa, motivada y en equilibrio con mi vida profesional.
          </p>
        </section>

        {/* Filosofía */}
        <section className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-10 text-center mb-16">
          <blockquote className="text-2xl italic font-medium text-purple-600">
            "Creo que la programación no solo se trata de código, sino de transformar ideas en realidades que impacten
            positivamente."
          </blockquote>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">¿Quieres saber más?</h2>
          <div className="flex gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 transition-transform hover:scale-105">
              <Link href="/proyectos">Ver mis proyectos</Link>
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 text-lg px-6 py-6 transition-transform hover:scale-105"
            >
              <Link href="/contacto">Contáctame</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
