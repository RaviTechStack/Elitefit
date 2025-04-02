import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TrainerProfile() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-black"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden border-2 border-zinc-800">
              <Image
                src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/image_search_1742967864026.jpg"
                alt="Ravi Singh - Elite Fitness Coach"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="border-blue-500 text-blue-400 mb-4">
                  Elite Fitness Coach
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">Meet Ravi Singh</h1>
                <p className="text-xl text-zinc-400 mt-2">Mumbai's Premier Transformation Specialist</p>
              </div>

              <div className="space-y-4">
                <p className="text-zinc-300">
                  With over a decade of experience transforming bodies and lives, Ravi Singh has established himself as
                  one of Mumbai's most sought-after fitness coaches. Specializing in physique transformations and
                  strength development, Ravi's scientific approach to training and nutrition has helped hundreds of
                  clients achieve results they never thought possible.
                </p>
                <p className="text-zinc-300">
                  A former national-level athlete turned coach, Ravi combines practical experience with cutting-edge
                  fitness science to create programs that deliver consistent results for clients of all levels.
                </p>
              </div>

              <div className="flex space-x-4">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Certifications & Experience</h2>
              <p className="text-zinc-400 md:text-lg">Professional qualifications and industry experience</p>
            </div>

            <div className="w-full max-w-4xl">
              <div className="relative border-l-2 border-blue-500 pl-8 ml-4 space-y-12">
                {[
                  {
                    year: "2022",
                    title: "Advanced Sports Nutrition Specialist",
                    organization: "International Sports Sciences Association (ISSA)",
                    description:
                      "Specialized certification in advanced nutritional strategies for athletes and fitness enthusiasts",
                  },
                  {
                    year: "2019",
                    title: "Certified Strength & Conditioning Specialist (CSCS)",
                    organization: "National Strength and Conditioning Association",
                    description:
                      "Gold standard certification for designing and implementing safe, effective strength training programs",
                  },
                  {
                    year: "2017",
                    title: "Personal Training Director",
                    organization: "Elite Fitness Mumbai",
                    description: "Led a team of 15 trainers and developed standardized coaching protocols",
                  },
                  {
                    year: "2015",
                    title: "Master Trainer Certification",
                    organization: "American Council on Exercise (ACE)",
                    description: "Advanced certification focusing on program design and client assessment",
                  },
                  {
                    year: "2013",
                    title: "Bachelor's Degree in Exercise Science",
                    organization: "University of Mumbai",
                    description: "Formal education in human physiology, biomechanics, and exercise prescription",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-12 mt-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-zinc-900 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm text-blue-400">{item.year}</span>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-green-400">{item.organization}</p>
                      <p className="text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Rate Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Client Success Rate</h2>
              <p className="text-zinc-300">
                Results-driven coaching with a proven track record of transformations. Our methodology focuses on
                sustainable results through progressive training and nutrition strategies tailored to individual needs.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Clients Trained", value: "500+" },
                  { label: "Success Rate", value: "94%" },
                  { label: "Avg. Fat Loss", value: "12kg" },
                  { label: "Retention Rate", value: "87%" },
                ].map((stat, index) => (
                  <Card key={index} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-6 text-center">
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                        {stat.value}
                      </p>
                      <p className="text-zinc-400 text-sm mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                View Client Transformations
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/20250325_185246.jpg"
                alt="Client Transformation"
                width={300}
                height={400}
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/20250325_185415.jpg"
                alt="Client Transformation"
                width={300}
                height={400}
                className="rounded-lg object-cover h-full w-full mt-8"
              />
              <Image
                src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/20250325_185348.jpg"
                alt="Client Transformation"
                width={300}
                height={400}
                className="rounded-lg object-cover h-full w-full mt-8"
              />
              <Image
                src="https://raw.githubusercontent.com/RaviTechStack/Elitefit/refs/heads/main/images/20250325_185322.jpg"
                alt="Client Transformation"
                width={300}
                height={400}
                className="rounded-lg object-cover h-full w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Start Your Transformation?</h2>
            <p className="text-zinc-300 md:text-lg">
              Book a free consultation call to discuss your fitness goals and how we can help you achieve them.
            </p>
            <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg font-medium"
            >
              Schedule Your Call Now
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

