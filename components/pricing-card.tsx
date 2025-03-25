import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  duration: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  buttonText,
  buttonLink,
  popular = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 transition-all duration-300",
        popular ? "border-blue-500 scale-105 shadow-lg shadow-blue-500/10" : "hover:border-blue-500/50",
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex items-baseline mt-2">
          <span className="text-3xl font-extrabold">{price}</span>
          <span className="ml-1 text-zinc-500 dark:text-zinc-400 text-sm">{duration}</span>
        </div>
        <CardDescription className="text-zinc-600 dark:text-zinc-400 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={buttonLink} className="w-full">
          <Button
            className={cn(
              "w-full",
              popular
                ? "bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white",
            )}
          >
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

