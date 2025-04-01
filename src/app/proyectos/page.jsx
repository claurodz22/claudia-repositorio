import ProjectCard from "@/app/vistas/ProjectCard"

// Datos de ejemplo para proyectos
const allProjects = [
  {
    id: 1,
    title: "Aplicación Web para el área de Postgrado de Ciencias Administrativas en la UDO",
    description: "Aplicación web desarrollada con React, Next.js y Tailwind",
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
  {
    id: 4,
    title: "Desarrollo de un dispositivo IoT",
    description: "Sistema de notificaciones automaticas (vía Gmail) para detectar intrusos usando la Raspberry Pi Pico W",
    imageUrl: "/iot.jpg",
    objective: "Proyecto final para la materia de Proyectos Digitales Avanzados",
    gitUrl: "https://github.com/claurodz22/IoTGmailAlarmas", 
  },

  {
    id: 5,
    title: "Portafolio Personal",
    description: "Página Web para elaborar Portafolio",
    imageUrl: "/portfolio.png",
    objective: "Potenciales clientes puedan ver mi stack de herramientas",
    gitUrl: "https://github.com/claurodz22/claudia-repositorio",
  },
  
  {
    id: 6,
    title: "Proyectos diseñados con la Raspberry Pi Pico y Pico W",
    objective: "Adquirir conocimientos en el uso de la Raspberry Pi Pico y Pico W",
    description: "Proyectos para la materia de Proyectos Digitales Avanzados",
    imageUrl: "/pico2.png",
    gitUrl: "https://github.com/claurodz22/proyectosRaspberryPiPico"
  },
]

export default function ProyectosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-purple-600 via-blue-500 to-white bg-clip-text text-transparent animate-gradient mb-6">
          Mis Proyectos
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-600 via-blue-500 to-white mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            gitUrl={project.gitUrl}
            objective={project.objective}
          />
        ))}
      </div>
    </div>
  )
}

