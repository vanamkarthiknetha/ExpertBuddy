import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function FeaturesSection() {
  const features = [
    {
      title: "Simplify anywhere with ExpertBookly",
      description: "Book appointments with experts from anywhere in the world",
      icon: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "AI-powered matching",
      description: "Our AI matches you with the perfect expert for your needs",
      icon: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Secure payments",
      description: "Pay securely through our platform with multiple payment options",
      icon: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "24/7 support",
      description: "Our support team is available around the clock to assist you",
      icon: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <section className="py-16 bg-[#faf3fd]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-[#334155] max-w-2xl mx-auto">
            We provide a seamless experience for booking appointments with experts in various fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border border-[#d6d4d4] bg-white rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#faf3fd] rounded-full flex items-center justify-center mb-4">
                  <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#334155]">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-[#a414d5] rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Claim Your Offer</h3>
              <p className="mb-4">Get 20% off your first booking when you sign up today. Limited time offer!</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-black" />
                <button className="bg-[#e38d2a] hover:bg-[#ffb800] text-white px-6 py-2 rounded-md">Claim Offer</button>
              </div>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Special offer"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

