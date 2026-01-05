"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  ctaText: string,
  detailLink: string
}

export function CategoryCard({ title, description, image, ctaText, detailLink }: CategoryCardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(detailLink)}
      className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition group cursor-pointer h-full max-w-80 mx-auto md:max-w-80"
    >
      <div className="relative h-100 sm:h-100 md:h-100 bg-muted overflow-hidden flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition"
          sizes="(max-width: 768px) 320px, 320px"
          quality={85}
          loading="lazy"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
          <p className="text-foreground/80 text-sm line-clamp-2">{description}</p>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            router.push(detailLink);
          }}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 min-h-[44px]"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  )
}
