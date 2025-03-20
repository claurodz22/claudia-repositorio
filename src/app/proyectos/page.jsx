import ProjectCard from "@/app/vistas/ProjectCard"

// Datos de ejemplo para proyectos
const allProjects = [
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
  {
    id: 4,
    title: "Proyecto 4",
    description: "Dashboard administrativo con Next.js y Tailwind",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 4",
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "E-commerce desarrollado con MERN stack",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 5",
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Blog personal con Gatsby y GraphQL",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Proyecto 6",
  },
]

export default function ProyectosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Mis Proyectos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}

