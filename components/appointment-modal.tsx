"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AppointmentModal({ onClose }: { onClose: () => void }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold text-[#16192c]">Schedule Appointment</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <Label htmlFor="purpose">Purpose of Appointment</Label>
            <Textarea id="purpose" placeholder="Briefly describe what you'd like to discuss..." className="mt-1" />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <Button variant="ghost" size="sm" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="text-sm font-medium">
                {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
              </h3>
              <Button variant="ghost" size="sm" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-1">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8"></div>
              ))}

              {Array.from({ length: daysInMonth }).map((_, i) => {
                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1)
                const isSelected =
                  selectedDate &&
                  date.getDate() === selectedDate.getDate() &&
                  date.getMonth() === selectedDate.getMonth() &&
                  date.getFullYear() === selectedDate.getFullYear()

                return (
                  <Button
                    key={`day-${i}`}
                    variant={isSelected ? "default" : "ghost"}
                    className={`h-8 w-full p-0 ${isSelected ? "bg-[#a414d5]" : ""}`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {i + 1}
                  </Button>
                )
              })}
            </div>
          </div>

          {selectedDate && (
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Available Times</h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`text-xs ${selectedTime === time ? "bg-[#a414d5]" : ""}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <Button className="w-full bg-[#a414d5] hover:bg-[#640d51] mt-4" disabled={!selectedDate || !selectedTime}>
            Confirm Appointment
          </Button>
        </div>
      </Card>
    </div>
  )
}

