import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full opacity-60"
            poster="/placeholder.svg?height=1080&width=1920"
          >
            <source src="#" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-black/70 dark:via-black/60 dark:to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-green-400">
              Transform Your Body. Elevate Your Life.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
              Personalized Coaching for Peak Performance & Aesthetics
            </p>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg font-medium"
            >
              Get a Free Consultation
              <Play className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-zinc-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">Featured In</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <img src="/placeholder.svg?height=60&width=150" alt="Men's Health" className="h-8 object-contain" />
              <img src="/placeholder.svg?height=60&width=150" alt="Fitness Magazine" className="h-8 object-contain" />
              <img src="/placeholder.svg?height=60&width=150" alt="GQ" className="h-8 object-contain" />
              <img src="/placeholder.svg?height=60&width=150" alt="ESPN" className="h-8 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-black" id="services">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <Badge variant="outline" className="border-blue-500 text-blue-400">
                Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Elite Training Programs</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Customized coaching solutions designed to transform your physique and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Strength Training",
                  description: "Build lean muscle mass with scientific progressive overload protocols",
                  icon: "🏋️",
                  slug: "strength",
                },
                {
                  title: "Fat Loss & Transformation",
                  description: "Sustainable fat loss strategies for long-term body composition changes",
                  icon: "🔥",
                  slug: "fat-loss",
                },
                {
                  title: "Custom Diet Plans",
                  description: "Nutrition protocols tailored to your metabolism and fitness goals",
                  icon: "🍽️",
                  slug: "nutrition",
                },
                {
                  title: "Online & In-Person Coaching",
                  description: "Flexible coaching options with constant support and accountability",
                  icon: "🎥",
                  slug: "online",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href={`/services?service=${service.slug}`}
                      className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                    >
                      Learn more
                      <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <Badge variant="outline" className="border-green-500 text-green-400">
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Transformations That Speak Volumes</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Real results from real clients who committed to the process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Rahul M."
                image="/placeholder.svg?height=400&width=300"
                quote="Lost 25kg in 6 months while gaining muscle. The customized approach made all the difference."
                stats={[
                  { label: "Weight Lost", value: "25kg" },
                  { label: "Muscle Gained", value: "8kg" },
                  { label: "Time Frame", value: "6 months" },
                ]}
              />
              <TestimonialCard
                name="Priya S."
                image="/placeholder.svg?height=400&width=300"
                quote="From struggling with basics to deadlifting 100kg. The strength progression was incredible."
                stats={[
                  { label: "Strength Increase", value: "210%" },
                  { label: "Body Fat", value: "-18%" },
                  { label: "Time Frame", value: "8 months" },
                ]}
              />
              <TestimonialCard
                name="Vikram J."
                image="/placeholder.svg?height=400&width=300"
                quote="Competing in my first physique show at 42. Never thought it was possible at my age."
                stats={[
                  { label: "Stage Weight", value: "78kg" },
                  { label: "Body Fat", value: "8%" },
                  { label: "Time Frame", value: "12 months" },
                ]}
              />
            </div>

            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
              View All Transformations
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <Badge variant="outline" className="border-blue-500 text-blue-400">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Invest in Your Transformation</h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                Choose the coaching package that aligns with your goals and commitment level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Basic"
                price="₹12,999"
                duration="/month"
                description="Perfect for beginners looking to start their fitness journey"
                features={[
                  "Customized Workout Plan",
                  "Basic Nutrition Guidelines",
                  "Weekly Check-ins",
                  "Email Support",
                  "Access to Training App",
                ]}
                buttonText="Get Started"
                buttonLink="/contact?plan=basic"
                popular={false}
              />
              <PricingCard
                title="Premium"
                price="₹24,999"
                duration="/month"
                description="Comprehensive coaching for serious transformation seekers"
                features={[
                  "Everything in Basic",
                  "Personalized Meal Plans",
                  "Bi-weekly Video Calls",
                  "24/7 WhatsApp Support",
                  "Progress Tracking Dashboard",
                  "Supplement Recommendations",
                ]}
                buttonText="Choose Premium"
                buttonLink="/contact?plan=premium"
                popular={true}
              />
              <PricingCard
                title="VIP"
                price="₹49,999"
                duration="/month"
                description="Elite coaching with maximum accountability and results"
                features={[
                  "Everything in Premium",
                  "Weekly 1-on-1 Training Sessions",
                  "Daily Check-ins",
                  "Priority Support",
                  "Customized Supplement Protocol",
                  "Lifestyle & Recovery Coaching",
                  "Quarterly Photoshoots",
                ]}
                buttonText="Apply for VIP"
                buttonLink="/contact?plan=vip"
                popular={false}
              />
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
              Take the first step towards your fitness goals with a free consultation call. Let's discuss your goals and
              create a roadmap to your dream physique.
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

