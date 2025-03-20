import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProjectCard({ id, title, description, imageUrl }) {
  return (
    <Card className="overflow-hidden card-hover border-[hsl(var(--border))]">
      <div className="aspect-video relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" className="border-secondary text-secondary hover:bg-secondary/10" asChild>
          <Link href={`/proyectos/${id}`}>Ver detalles</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

