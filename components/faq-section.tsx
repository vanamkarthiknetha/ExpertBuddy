"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I book an appointment with an expert?",
      answer:
        "You can book an appointment by browsing our expert directory, selecting an expert that matches your needs, and choosing an available time slot on their calendar. Once confirmed, you'll receive a confirmation email with all the details.",
    },
    {
      question: "What if I need to cancel my appointment?",
      answer:
        "You can cancel your appointment up to 24 hours before the scheduled time without any penalty. Simply go to your dashboard, find the appointment, and click on the cancel button.",
    },
    {
      question: "How are the experts verified on your platform?",
      answer:
        "All experts on our platform go through a rigorous verification process. We check their credentials, experience, and expertise before they can offer services on our platform. We also collect and monitor client feedback to ensure quality.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. Payment is processed securely through our platform, and you'll only be charged after the appointment is confirmed.",
    },
  ]

  return (
    <section className="py-16 bg-[#f5f3ef]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-[#334155] max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#a414d5]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#334155]" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 pt-0 text-[#334155]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

