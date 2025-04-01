import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectCard({ id, title, description, imageUrl, objective, gitUrl }) {
  return (
    <Card className="overflow-hidden card-hover border-[hsl(var(--border))]">
      <div className="relative w-full h-[200px] flex justify-center items-center overflow-hidden group">
        <div
          style={{
            width: "390px",
            height: "190px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="rounded border-4 border-purple-600 shadow-lg transition-all duration-500 group-hover:scale-105"
            style={{ objectFit: "cover" }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <h4 className="text-xl font-bold text-black drop-shadow-md bg-white transition-colors duration-200 p-2">
              {title}
            </h4>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4">
          <u>
            <b> Descripción del proyecto: </b>
          </u>
          {description}
        </p>
        <p className="text-muted-foreground mb-4">
          <b> Motivo de creación: </b> {objective}
        </p>

        {gitUrl && (
          <p className="text-muted-foreground mb-4">
            <b> Repositorio en GitHub: </b>
            <Link href={gitUrl} target="_blank" rel="noopener noreferrer">
              {gitUrl}
            </Link>
          </p>
        )}

        <Button variant="outline" size="sm" className="border-secondary text-white hover:bg-secondary/10" asChild>
          <Link href={`/proyectos/${id}`}>Ver detalles</Link>
        </Button>
      </CardContent>
    </Card>
  )
}