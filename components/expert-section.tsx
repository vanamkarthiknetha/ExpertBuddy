import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExpertSection() {
  const experts = [
    {
      name: "Professional Name",
      title: "Professional Title",
      rating: 4.9,
      reviews: 120,
      price: "$50",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Professional Name",
      title: "Professional Title",
      rating: 4.8,
      reviews: 98,
      price: "$45",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Professional Name",
      title: "Professional Title",
      rating: 4.7,
      reviews: 85,
      price: "$60",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Professional Name",
      title: "Professional Title",
      rating: 4.9,
      reviews: 150,
      price: "$55",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 bg-[#fcf4ea]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-[#334155] max-w-2xl mx-auto">
            Our platform connects you with top professionals in various fields to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, index) => (
            <Card key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={expert.image || "/placeholder.svg"}
                    alt={expert.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{expert.name}</h3>
                    <p className="text-sm text-[#334155]">{expert.title}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-[#ffb800] fill-[#ffb800]" />
                      <span className="text-sm ml-1">{expert.rating}</span>
                      <span className="text-xs text-[#334155] ml-1">({expert.reviews})</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-[#334155]">Starting at</span>
                    <p className="font-semibold">{expert.price}/hr</p>
                  </div>
                  <Button className="bg-[#a414d5] hover:bg-[#640d51] text-white text-sm">Book Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="border-[#a414d5] text-[#a414d5]">
            View All Experts
          </Button>
        </div>
      </div>
    </section>
  )
}

