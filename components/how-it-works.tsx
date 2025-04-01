import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      title: "Fill a brief",
      description: "Provide details about what you need",
      icon: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Browse our expert",
      description: "Find the perfect match for your needs",
      icon: "/placeholder.svg?height=48&width=48",
    },
    {
      title: "Get Online On Time",
      description: "Connect with your expert at the scheduled time",
      icon: "/placeholder.svg?height=48&width=48",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 border border-[#d6d4d4] rounded-lg">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#faf3fd] rounded-full flex items-center justify-center mb-4">
                  <Image src={step.icon || "/placeholder.svg"} alt={step.title} width={48} height={48} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-[#334155]">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f5f3ef] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Find the right expert</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#faf3fd] rounded-full flex items-center justify-center">
                <Image src="/placeholder.svg?height=24&width=24" alt="Search" width={24} height={24} />
              </div>
              <div>
                <p className="text-sm text-[#334155]">Browse through our curated list of experts</p>
              </div>
            </div>
            <button className="bg-[#a414d5] text-white px-4 py-2 rounded-md text-sm">Find Experts</button>
          </div>

          <div className="bg-[#f5f3ef] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Schedule a meeting</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#faf3fd] rounded-full flex items-center justify-center">
                <Image src="/placeholder.svg?height=24&width=24" alt="Calendar" width={24} height={24} />
              </div>
              <div>
                <p className="text-sm text-[#334155]">Choose a convenient time slot</p>
              </div>
            </div>
            <button className="bg-[#a414d5] text-white px-4 py-2 rounded-md text-sm">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

