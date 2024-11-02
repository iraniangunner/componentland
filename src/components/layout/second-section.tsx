"use client";
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SecondSection() {
  const categories = [
    {
      title: "Hero Sections",
      components: 12,
      image: "/placeholder.svg?height=400&width=600",
      href: "#hero-sections",
    },
    {
      title: "Feature Sections",
      components: 20,
      image: "/placeholder.svg?height=400&width=600",
      href: "#feature-sections",
      isNew: true,
    },
    {
      title: "CTA Sections",
      components: 11,
      image: "/placeholder.svg?height=400&width=600",
      href: "#cta-sections",
    },
    {
      title: "Bento Grids",
      components: 3,
      image: "/placeholder.svg?height=400&width=600",
      href: "#bento-grids",
    },
    {
      title: "Pricing Sections",
      components: 14,
      image: "/placeholder.svg?height=400&width=600",
      href: "#pricing-sections",
      isPremium: true,
    },
    {
      title: "Header Sections",
      components: 10,
      image: "/placeholder.svg?height=400&width=600",
      href: "#header-sections",
    },
    {
      title: "Newsletter Sections",
      components: 7,
      image: "/placeholder.svg?height=400&width=600",
      href: "#newsletter-sections",
    },
    {
      title: "Stats",
      components: 10,
      image: "/placeholder.svg?height=400&width=600",
      href: "#stats",
    },
    {
      title: "Testimonials",
      components: 7,
      image: "/placeholder.svg?height=400&width=600",
      href: "#testimonials",
    },
    {
      title: "Blog Sections",
      components: 7,
      image: "/placeholder.svg?height=400&width=600",
      href: "#blog-sections",
    },
    {
      title: "Contact Sections",
      components: 8,
      image: "/placeholder.svg?height=400&width=600",
      href: "#contact-sections",
    },
    {
      title: "Team Sections",
      components: 7,
      image: "/placeholder.svg?height=400&width=600",
      href: "#team-sections",
    },
  ]

  return (
    <section className="flex justify-center">
      <div className="container px-4 md:px-6 lg:px-8 pt-12 md:pt-[5.75rem] md:max-w-[1500px] py-4">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Page Sections</h2>
            <p className="text-muted-foreground">
              Beautiful, responsive page sections built with Tailwind CSS
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <Link key={category.title} href={category.href} className="group">
                <Card className="overflow-hidden border-2 transition-colors hover:border-primary">
                  <CardContent className="p-0">
                    <div className="relative">
                      <div className="absolute right-2 top-2 flex gap-1">
                        {category.isNew && (
                          <Badge className="bg-primary text-primary-foreground">New</Badge>
                        )}
                        {category.isPremium && (
                          <Badge variant="secondary">
                            <Lock className="mr-1 h-3 w-3" />
                            Premium
                          </Badge>
                        )}
                      </div>
                      <Image
                        src={category.image}
                        alt={`${category.title} preview`}
                        width={600}
                        height={400}
                        className="aspect-[3/2] object-cover"
                      />
                    </div>
                    <div className="space-y-1 p-4">
                      <h3 className="font-semibold tracking-tight">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.components} کامپوننت</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}