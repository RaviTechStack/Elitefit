import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

interface Stat {
  label: string
  value: string
}

interface TestimonialCardProps {
  name: string
  image: string
  quote: string
  stats: Stat[]
}

export default function TestimonialCard({ name, image, quote, stats }: TestimonialCardProps) {
  return (
    <Card className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-green-500/50 transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative h-64 w-full">
          <Image src={image || "/placeholder.svg"} alt={`${name}'s transformation`} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <blockquote className="text-zinc-700 dark:text-zinc-300 italic">"{quote}"</blockquote>
        <p className="font-semibold text-lg">{name}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 grid grid-cols-3 gap-2">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-green-500 font-bold text-lg">{stat.value}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-500">{stat.label}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  )
}

