"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import AppointmentModal from "./appointment-modal"

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcf4ea] to-[#faf3fd] opacity-90"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Background"
          width={1600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16192c] mb-4">
            AI-Plan Appointment <br />
            <span className="text-[#a414d5]">Hero For All</span>
          </h1>
          <p className="text-lg text-[#334155] mb-8 max-w-md">
            Book appointments with experts in various fields using our AI-powered scheduling system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Input placeholder="Enter your email" className="bg-white border-[#d6d4d4] rounded-md" />
            <Button
              onClick={() => setShowModal(true)}
              className="bg-[#a414d5] hover:bg-[#640d51] text-white rounded-md"
            >
              Book Now
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Google"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-[#334155]">Google</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Microsoft"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-[#334155]">Microsoft</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                alt="Calendly"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm text-[#334155]">Calendly</span>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <Image
            src="/placeholder.svg?height=600&width=500"
            alt="Business professional"
            width={500}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {showModal && <AppointmentModal onClose={() => setShowModal(false)} />}
    </section>
  )
}

