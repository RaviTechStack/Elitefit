"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get("service")
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (service && tabsRef.current) {
      // Scroll to tabs section
      tabsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [service])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742968549847.jp"
            alt="Services Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white dark:from-black/80 dark:via-black/70 dark:to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">Elite Training Programs</h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Customized coaching solutions designed to transform your physique and performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-300 dark:border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs Section */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900" ref={tabsRef}>
        <div className="container px-4 md:px-6">
          <Tabs defaultValue={service || "strength"} className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-zinc-200 dark:bg-zinc-800 p-1 mb-12">
              <TabsTrigger value="strength" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Strength Training
              </TabsTrigger>
              <TabsTrigger value="fat-loss" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Fat Loss
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Nutrition
              </TabsTrigger>
              <TabsTrigger value="online" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Online Coaching
              </TabsTrigger>
            </TabsList>

            <TabsContent value="strength" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742967712114.jpg"
                    alt="Strength Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Strength Training</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Our scientific approach to strength development focuses on progressive overload, proper technique,
                    and periodization to ensure continuous gains without plateaus or injuries.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Customized strength programs based on your current level",
                      "Focus on compound movements for maximum muscle recruitment",
                      "Proper form and technique coaching",
                      "Strategic deload weeks to prevent overtraining",
                      "Strength-specific nutrition protocols",
                      "Regular progress tracking and program adjustments",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?service=strength">
                    <Button className="bg-gradient-to-r my-3 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fat-loss" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742967755121.jpg"
                    alt="Fat Loss Transformation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Fat Loss & Transformation</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Our comprehensive fat loss approach combines strategic training, nutrition, and lifestyle
                    modifications for sustainable results without crash dieting or excessive cardio.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Personalized caloric deficit calculation",
                      "Metabolic resistance training protocols",
                      "Strategic cardio implementation",
                      "Macro-optimized meal plans",
                      "Regular body composition assessments",
                      "Lifestyle and habit coaching for long-term success",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?service=fat-loss">
                    <Button className="bg-gradient-to-r my-3 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742967775381.jpg"
                    alt="Nutrition Planning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Custom Diet Plans</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Our nutrition protocols are tailored to your metabolism, preferences, and lifestyle, making them
                    sustainable and effective for long-term adherence.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Metabolic rate assessment and macro calculation",
                      "Customized meal plans based on food preferences",
                      "Grocery lists and meal prep guides",
                      "Supplement recommendations (if necessary)",
                      "Nutrient timing strategies for performance",
                      "Adjustments based on progress and feedback",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?service=nutrition">
                    <Button className="bg-gradient-to-r my-3 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="online" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742967824563.jpg"
                    alt="Online Coaching"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Online & In-Person Coaching</h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Get expert coaching regardless of your location with our comprehensive online training system or
                    premium in-person sessions in Mumbai.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Custom workout programs delivered via our training app",
                      "Video form checks and technique analysis",
                      "Regular check-ins and progress assessments",
                      "Direct messaging access to your coach",
                      "Nutrition guidance and meal planning",
                      "Community support and accountability",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact?service=online">
                    <Button className="bg-gradient-to-r my-3 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <Badge variant="outline" className="border-blue-500 text-blue-400">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Training Programs & Packages</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Invest in your health and physique with our premium coaching services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
              <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Basic Package</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-extrabold">₹12,999</span>
                    <span className="ml-1 text-zinc-500 dark:text-zinc-400 text-sm">/month</span>
                  </div>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 mt-2">
                    Perfect for beginners looking to start their fitness journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Customized Workout Plan",
                      "Basic Nutrition Guidelines",
                      "Weekly Check-ins",
                      "Email Support",
                      "Access to Training App",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact?plan=basic" className="w-full">
                    <Button className="w-full bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white">
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-zinc-900 border-blue-500 scale-105 shadow-lg shadow-blue-500/10">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Premium Package</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-extrabold">₹24,999</span>
                    <span className="ml-1 text-zinc-500 dark:text-zinc-400 text-sm">/month</span>
                  </div>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 mt-2">
                    Comprehensive coaching for serious transformation seekers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Everything in Basic",
                      "Personalized Meal Plans",
                      "Bi-weekly Video Calls",
                      "24/7 WhatsApp Support",
                      "Progress Tracking Dashboard",
                      "Supplement Recommendations",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact?plan=premium" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                      Choose Premium
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">VIP Package</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-extrabold">₹49,999</span>
                    <span className="ml-1 text-zinc-500 dark:text-zinc-400 text-sm">/month</span>
                  </div>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 mt-2">
                    Elite coaching with maximum accountability and results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Everything in Premium",
                      "Weekly 1-on-1 Training Sessions",
                      "Daily Check-ins",
                      "Priority Support",
                      "Customized Supplement Protocol",
                      "Lifestyle & Recovery Coaching",
                      "Quarterly Photoshoots",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact?plan=vip" className="w-full">
                    <Button className="w-full bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white">
                      Apply for VIP
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Begin Your Transformation?</h2>
            <p className="text-zinc-700 dark:text-zinc-300 md:text-lg">
              Book a free consultation call to discuss your fitness goals and create a personalized plan for your
              success.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg font-medium"
              >
                Book Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

