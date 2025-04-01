import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/app/vistas/ProjectCard"
import ContactSection from "@/app/vistas/ContactSection"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { SkillBadge } from "@/components/ui/skill-badge"

// Datos de ejemplo para proyectos
const featuredProjects = [
  {
    id: 1,
    title: "Aplicación Web para el área de Postgrado de Ciencias Administrativas en la UDO",
    description: "Aplicación web desarrollada con React y Next.js",
    objective: "Proyecto para la materia de Desarrollo de Software Avanzado del 8vo Semestre",
    imageUrl: "/adminpostgraduate.png",
    gitUrl: " https://github.com/claurodz22/admin-postgraduate ",
  },
  {
    id: 2,
    title: "API para la Aplicación Web de Postgrado de Ciencias Administrativas en la UDO",
    description: "Desarrollada con Django y Django REST Framework",
    objective: "API para interactuar con la BDD perteneciente a la App Web",
    imageUrl: "/API.png",
    gitUrl: " https://github.com/claurodz22/admin-postgraduate-api ",
  },
  {
    id: 3,
    title: "Juego Web: Adivina el número",
    description: "Juego Web diseñado con Vue.js",
    objective: "Adquirir conocimientos básicos para el uso de Vue.js",
    imageUrl: "/countergame.png",
    gitUrl: " https://github.com/claurodz22/claudia-juego-vue- ",
  },
]

// Lista de habilidades para mostrar
const skills = [
  { name: "React", color: "bg-blue-500" },
  { name: "Next.js", color: "bg-green-500" },
  { name: "JavaScript", color: "bg-yellow-500" },
  { name: "HTML/CSS", color: "bg-orange-500" },
  { name: "Python", color: "bg-blue-700" },
  { name: "Raspberry Pi Pico", color: "bg-red-500" },
]

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Fondo animado */}
      <BackgroundBeams className="opacity-20" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section con animación */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8 mb-24">
          <div className="relative group">
            <Image
              src="/mifoto.jpg"
              width={280}
              height={280}
              alt="mi foto"
              className="rounded-full border-4 border-black shadow-lg transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-20 blur-xl -z-10 animate-pulse"></div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-purple-600 via-blue-500 to-white bg-clip-text text-transparent animate-gradient">
            Claudia Elena
            <br />
            Rodriguez De Sio
          </h1>

          {/* Efecto de escritura */}
          <div className="h-12">
            <TypewriterEffect
              words={[{ text: "Programadora" }, { text: "FullStack" }, { text: "Developer" }, { text: "Creativa" }]}
              className="text-2xl font-semibold text-blue-400"
            />
          </div>

          {/* Habilidades con animación */}
          <div className="flex flex-wrap justify-center gap-3 my-4">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} color={skill.color} delay={index * 0.1} />
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-6 py-6 transition-transform hover:scale-105">
              <Link href="/proyectos">Proyectos elaborados</Link>
            </Button>
            <Button
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 text-lg px-6 py-6 transition-transform hover:scale-105"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-16">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                objective={project.objective}
                imageUrl={project.imageUrl}
                gitUrl = {project.gitUrl}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-6 py-5 transition-transform hover:scale-105">
              <Link href="/proyectos">Ver todos los proyectos</Link>
            </Button>
          </div>
        </section>

        {/* About Section with glass effect */}
        <section className="w-full py-16 bg-white/10 backdrop-blur-lg rounded-xl p-10 my-16 shadow-xl border border-white/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              Soy una programadora backend y frontend con experiencia en distintas herramientas. También, cuento con
              experiencia usando microcontroladores, como por ejemplo, con la Raspberry Pi Pico.
            </p>
            <p className="text-xl mb-8 leading-relaxed">
              Todo proyecto tiene que tener un enfoque que ayude en la automatización de una tarea real, aunque siempre
              hay tiempo para otro tipo de proyectos.
            </p>
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600/10 text-lg px-6 py-5 transition-transform hover:scale-105"
            >
              <Link href="/sobre-mi">Conoce más sobre mí</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  )
}

