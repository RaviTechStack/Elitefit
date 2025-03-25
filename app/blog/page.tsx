"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase()

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-white dark:from-blue-900/20 dark:to-black"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              Fitness Knowledge
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">The Fitness Blog</h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300">
              Expert insights, training tips, and nutrition advice to optimize your fitness journey
            </p>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-zinc-50 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-700 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-zinc-100 dark:bg-zinc-900">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 bg-zinc-200 dark:bg-zinc-800 p-1 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger value="training" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Training
              </TabsTrigger>
              <TabsTrigger value="nutrition" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Nutrition
              </TabsTrigger>
              <TabsTrigger
                value="transformation"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Transformations
              </TabsTrigger>
              <TabsTrigger
                value="supplements"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
              >
                Supplements
              </TabsTrigger>
              <TabsTrigger value="mindset" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Mindset
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <Card
                      key={index}
                      className="bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardHeader className="p-6 pb-2">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold line-clamp-2">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-2">
                        <CardDescription className="text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                          {post.description}
                        </CardDescription>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-xs">
                            <User className="h-3 w-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-xs">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-500 hover:text-blue-400 text-sm flex items-center"
                        >
                          Read Article
                          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-zinc-500 dark:text-zinc-400">No articles found matching your search criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-zinc-200 dark:border-zinc-700"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <Button
                    variant="outline"
                    className="border-zinc-200 dark:border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10"
                  >
                    Load More Articles
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12">
            <div className="space-y-4 text-center max-w-3xl">
              <Badge variant="outline" className="border-green-500 text-green-400">
                Featured Article
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                The Ultimate Guide to Body Recomposition
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 md:text-lg">
                How to build muscle and lose fat simultaneously - the holy grail of fitness
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Body Recomposition"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div>
                    <p className="font-semibold">Ravi Singh</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Head Coach & Nutritionist</p>
                  </div>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300">
                  Body recomposition - the process of building muscle and losing fat simultaneously - is often
                  considered the holy grail of fitness. While conventional wisdom suggests you need to bulk and cut in
                  separate phases, recent research has shown that under specific conditions, you can indeed achieve both
                  goals at once.
                </p>
                <p className="text-zinc-700 dark:text-zinc-300">
                  This comprehensive guide breaks down the science behind body recomposition, the optimal nutrition and
                  training protocols, and provides a practical framework for implementing these strategies in your own
                  fitness journey.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    Mar 20, 2023
                  </div>
                  <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    15 min read
                  </div>
                </div>

                <Link href="/blog/body-recomposition-guide">
                  <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                    Read Full Article
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
            <p className="text-zinc-700 dark:text-zinc-300 md:text-lg">
              Get the latest fitness tips, nutrition advice, and exclusive content delivered directly to your inbox.
            </p>
            <div className="w-full max-w-md space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/80 dark:bg-zinc-900/80 border-zinc-200 dark:border-zinc-700 flex-1"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

