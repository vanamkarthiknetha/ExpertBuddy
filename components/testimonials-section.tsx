import Image from "next/image"
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Client Name",
      position: "Position, Company",
      text: "The platform made it incredibly easy to find the right expert for my needs. The booking process was seamless and the consultation was extremely helpful.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Client Name",
      position: "Position, Company",
      text: "I was skeptical at first, but the expert I was matched with exceeded my expectations. Will definitely use this service again!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Client Name",
      position: "Position, Company",
      text: "The AI matching system is impressive. It connected me with an expert who perfectly understood my requirements and provided valuable insights.",
      rating: 4,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Feedback from Satisfied Clients</h2>
          <p className="text-[#334155] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-[#d6d4d4] rounded-lg">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-[#334155]">{testimonial.position}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#ffb800] fill-[#ffb800]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#334155]">{testimonial.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#fcf4ea] rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Join our community"
                width={300}
                height={300}
                className="mx-auto"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold mb-4">Join Our Expert Community</h3>
              <p className="mb-6">
                Are you an expert in your field? Join our platform to connect with clients and grow your business.
              </p>
              <button className="bg-[#a414d5] hover:bg-[#640d51] text-white px-6 py-3 rounded-md">
                Apply as Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

