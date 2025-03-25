"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MessageSquare, Phone, Send, Video, PhoneIcon as WhatsappIcon } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get("service")
  const plan = searchParams.get("plan")
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    consultationType: "video",
    preferredDate: "",
    preferredTime: "",
    goals: "",
    service: service || "",
    plan: plan || "",
  })

  useEffect(() => {
    if (service) {
      setFormData((prev) => ({ ...prev, service }))
    }
    if (plan) {
      setFormData((prev) => ({ ...prev, plan }))
    }
  }, [service, plan])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Consultation Booked!",
      description: "We'll contact you shortly to confirm your appointment.",
    })

    // Reset form (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      consultationType: "video",
      preferredDate: "",
      preferredTime: "",
      goals: "",
      service: "",
      plan: "",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-white dark:from-blue-900/20 dark:to-black"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              Book Now
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
              Schedule Your Consultation
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Take the first step towards your fitness transformation with a free consultation call
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Book Your Free Session</h2>
                <p className="text-zinc-700 dark:text-zinc-300">
                  Schedule a 30-minute consultation call to discuss your fitness goals, current situation, and how our
                  coaching can help you achieve the results you want.
                </p>
              </div>

              <Tabs defaultValue="video" className="w-full">
                <TabsList className="grid grid-cols-3 bg-zinc-200 dark:bg-zinc-800 p-1 mb-8">
                  <TabsTrigger value="video" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Video Call
                  </TabsTrigger>
                  <TabsTrigger value="phone" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                    Phone Call
                  </TabsTrigger>
                  <TabsTrigger
                    value="whatsapp"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    WhatsApp
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="video" className="mt-0">
                  <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Video className="h-5 w-5 text-blue-500" />
                        <CardTitle className="text-lg">Video Consultation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-600 dark:text-zinc-400">
                        A 30-minute video call to discuss your goals and create a roadmap for your fitness journey. We
                        use Google Meet or Zoom based on your preference.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">Benefits:</p>
                        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc pl-5">
                          <li>Face-to-face interaction</li>
                          <li>Screen sharing for visual demonstrations</li>
                          <li>Detailed assessment of your form and posture</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="phone" className="mt-0">
                  <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-5 w-5 text-blue-500" />
                        <CardTitle className="text-lg">Phone Consultation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-600 dark:text-zinc-400">
                        A 30-minute phone call if you prefer audio-only consultation. Perfect for busy individuals on
                        the go.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">Benefits:</p>
                        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc pl-5">
                          <li>Flexibility to take the call anywhere</li>
                          <li>No internet connection required</li>
                          <li>Focused conversation without distractions</li>
                        </ul>
                      </div>
                      <Link
                        href="tel:+919876543210"
                        className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-400"
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Call Now: +91 98765 43210
                      </Link>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="whatsapp" className="mt-0">
                  <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                        <CardTitle className="text-lg">WhatsApp Chat</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-zinc-600 dark:text-zinc-400">
                        Direct messaging for quick inquiries and questions before booking. Get instant responses during
                        business hours.
                      </CardDescription>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm text-zinc-700 dark:text-zinc-300">Benefits:</p>
                        <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1 list-disc pl-5">
                          <li>Convenient text-based communication</li>
                          <li>Share photos and videos easily</li>
                          <li>Chat history for future reference</li>
                        </ul>
                      </div>
                      <Link
                        href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20your%20fitness%20coaching%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-green-500 hover:text-green-400"
                      >
                        <WhatsappIcon className="h-5 w-5 mr-2" />
                        Chat on WhatsApp
                      </Link>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Detailed discussion about your fitness goals",
                    "Assessment of your current fitness level",
                    "Analysis of your training history and experience",
                    "Nutritional assessment and recommendations",
                    "Overview of our coaching methodology",
                    "Customized plan proposal for your specific needs",
                    "Transparent pricing and package details",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Card className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                <CardHeader>
                  <CardTitle>Book Your Consultation</CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">
                    Fill out the form below to schedule your free consultation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          id="first-name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          id="last-name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="consultation-type">Consultation Type</Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) => handleSelectChange("consultationType", value)}
                      >
                        <SelectTrigger className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp Chat</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                        <SelectTrigger className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strength">Strength Training</SelectItem>
                          <SelectItem value="fat-loss">Fat Loss & Transformation</SelectItem>
                          <SelectItem value="nutrition">Custom Diet Plans</SelectItem>
                          <SelectItem value="online">Online Coaching</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="plan">Package Interest</Label>
                      <Select value={formData.plan} onValueChange={(value) => handleSelectChange("plan", value)}>
                        <SelectTrigger className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic Package (₹12,999/month)</SelectItem>
                          <SelectItem value="premium">Premium Package (₹24,999/month)</SelectItem>
                          <SelectItem value="vip">VIP Package (₹49,999/month)</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-2 text-blue-500" />
                          Preferred Date
                        </Label>
                        <Input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-blue-500" />
                          Preferred Time
                        </Label>
                        <Input
                          type="time"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">Your Fitness Goals</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={handleChange}
                        placeholder="Tell us about your fitness goals and what you hope to achieve..."
                        className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Book Consultation
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 items-start">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    By submitting this form, you agree to our{" "}
                    <Link href="/terms" className="text-blue-500 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-500 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Hear from people who have transformed their bodies and lives with our coaching
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The consultation call alone gave me more actionable advice than months of following generic programs.",
                  name: "Ankit S.",
                  role: "Lost 18kg in 4 months",
                },
                {
                  quote:
                    "I was skeptical at first, but after the consultation I knew this was exactly what I needed to reach my goals.",
                  name: "Meera P.",
                  role: "Gained 8kg of muscle",
                },
                {
                  quote:
                    "The personalized approach makes all the difference. This isn't just another cookie-cutter program.",
                  name: "Rajiv M.",
                  role: "Competing athlete",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 fill-current text-yellow-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="text-zinc-700 dark:text-zinc-300 italic">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Common questions about our consultation and coaching process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {[
                {
                  question: "Is the consultation really free?",
                  answer:
                    "Yes, the initial 30-minute consultation is completely free with no obligations. It's our way of understanding your needs and showing you how we can help.",
                },
                {
                  question: "What happens after the consultation?",
                  answer:
                    "After the consultation, we'll send you a detailed proposal with recommended coaching options based on your goals. You can then decide if you'd like to proceed.",
                },
                {
                  question: "How long are the coaching programs?",
                  answer:
                    "Our coaching programs typically run for a minimum of 3 months. This timeframe allows for meaningful physical changes and habit formation. We also offer 6-month and 12-month packages for those committed to more substantial transformations.",
                },
                {
                  question: "Do I need to have gym experience?",
                  answer:
                    "Not at all. Our programs are designed for all experience levels, from complete beginners to advanced athletes. We'll tailor the approach based on your current fitness level.",
                },
                {
                  question: "Can I do the training at home?",
                  answer:
                    "Yes, we offer home workout options with minimal equipment requirements. During the consultation, we'll discuss your available equipment and design a program accordingly.",
                },
                {
                  question: "How is this different from other coaching services?",
                  answer:
                    "Our approach combines scientific training principles with personalized attention. We don't use templates - every program is built from scratch based on your specific needs, goals, and lifestyle.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-700 dark:text-zinc-300">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Transform Your Physique?</h2>
            <p className="text-zinc-700 dark:text-zinc-300 md:text-lg">
              Book your free consultation today and take the first step towards the body you've always wanted.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg font-medium"
            >
              Schedule Your Free Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

