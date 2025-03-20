import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/app/vistas/ProjectCard"
import ContactSection from "@/app/vistas/ContactSection"

// Datos de ejemplo para proyectos
const featuredProjects = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Aplicación web desarrollada con React y Node.js",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 1",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Sitio web responsivo con HTML, CSS y JavaScript",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 2",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Aplicación móvil desarrollada con React Native",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 3",
  },
]

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 mb-20">
          <div className="relative">
            <Image
              src="/mifoto.jpg?height=250&width=150"
              width={150}
              height={150}
              alt="mi foto"
              className="rounded-full border-4 border-primary"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl -z-10"></div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl hero-gradient">
            Claudia Elena<br />Rodriguez De Sio
          </h1>
          <p className="text-xl text-muted-foreground">Programadora FullStack </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              <Link href="/proyectos">Proyectos elaborados</Link>
            </Button>
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Link href="/contacto">Contacto</Link>
            </Button>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-secondary hover:bg-secondary/90">
              <Link href="/proyectos">Ver todos los proyectos</Link>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 bg-accent/30 rounded-lg p-8 my-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sobre Mí
            </h2>
            <p className="text-lg mb-4">
              Soy una programadora backend y frontend con experiencia en distintas herramientas.
              También, cuento con experiencia usando microcontroladores, como por ejemplo, con la Raspberry Pi Pico.
            </p>
            <p className="text-lg mb-6">
              Todo proyecto tiene que tener un enfoque que ayude en la automatización
              de una tarea real, aunque siempre hay tiempo para otro tipo de proyectos.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/sobre-mi">Conoce más sobre mí</Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}

