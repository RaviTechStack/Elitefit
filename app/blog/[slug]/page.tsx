"use client"

import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function BlogPostPage() {
  const { slug } = useParams()
  const { toast } = useToast()
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === slug) || blogPosts[0]

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    toast({
      title: isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
      description: isBookmarked ? "Article removed from your saved items" : "Article saved to your bookmarks",
    })
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    toast({
      title: isLiked ? "Like removed" : "Article liked",
      description: isLiked ? "You've removed your like" : "Thanks for liking this article!",
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied!",
        description: "Article link copied to clipboard",
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white dark:from-black/90 dark:via-black/80 dark:to-black"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col space-y-6 max-w-4xl mx-auto">
            <Link href="/blog" className="flex items-center text-blue-500 hover:text-blue-400">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>

            <Badge variant="outline" className="self-start border-blue-500 text-blue-500 bg-blue-500/10">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-zinc dark:prose-invert max-w-none">
                <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <p className="lead">{post.description}</p>

                <h2>Understanding the Science</h2>
                <p>
                  When it comes to fitness transformation, understanding the underlying science is crucial. The human
                  body adapts to stress through a process called supercompensation, where it rebuilds stronger after
                  being challenged appropriately.
                </p>

                <p>
                  This principle applies to both strength training and cardiovascular conditioning. When you lift
                  weights, you create microscopic tears in muscle fibers. During recovery, your body repairs these
                  tears, making the muscle stronger and potentially larger. Similarly, cardiovascular training improves
                  heart efficiency, mitochondrial density, and oxygen utilization.
                </p>

                <h2>Nutrition: The Foundation of Results</h2>
                <p>
                  No training program, regardless of how well-designed, can overcome poor nutrition. Your body requires
                  appropriate fuel to perform optimally and recover effectively. The three macronutrients—protein,
                  carbohydrates, and fats—all play vital roles in this process.
                </p>

                <ul>
                  <li>
                    <strong>Protein:</strong> Essential for muscle repair and growth
                  </li>
                  <li>
                    <strong>Carbohydrates:</strong> Primary energy source for high-intensity activities
                  </li>
                  <li>
                    <strong>Fats:</strong> Hormone production, cell membrane integrity, and energy for low-intensity
                    activities
                  </li>
                </ul>

                <h2>Progressive Overload: The Key to Continuous Improvement</h2>
                <p>
                  The principle of progressive overload states that to continue making gains, you must gradually
                  increase the stress placed on your body. This can be accomplished through:
                </p>

                <ul>
                  <li>Increasing weight</li>
                  <li>Increasing repetitions</li>
                  <li>Decreasing rest periods</li>
                  <li>Increasing training volume</li>
                  <li>Improving exercise technique</li>
                </ul>

                <p>
                  Without progressive overload, your body has no stimulus to adapt further, leading to plateaus in
                  performance and physique development.
                </p>

                <h2>Recovery: Where the Magic Happens</h2>
                <p>
                  Training creates the stimulus for adaptation, but recovery is where those adaptations actually occur.
                  Adequate sleep, proper nutrition, and stress management are all critical components of effective
                  recovery.
                </p>

                <p>
                  Sleep, in particular, is often undervalued in fitness programs. During deep sleep, your body releases
                  growth hormone, which facilitates muscle repair and fat metabolism. Aim for 7-9 hours of quality sleep
                  per night to maximize your results.
                </p>

                <h2>Consistency: The Ultimate Determinant of Success</h2>
                <p>
                  The most perfectly designed program is worthless without consistent execution. Small, sustainable
                  actions performed consistently over time yield far greater results than sporadic intense efforts.
                </p>

                <p>
                  This is why finding an approach that fits your lifestyle and preferences is crucial. The "best"
                  workout is the one you'll actually do consistently.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Transforming your physique is a journey that requires understanding of exercise science, nutrition,
                  recovery, and psychology. By implementing the principles discussed in this article, you can optimize
                  your fitness journey and achieve the results you desire. Remember that transformation doesn't happen
                  overnight. It's the result of consistent effort, intelligent programming, and patience. Trust the
                  process, stay committed to your goals, and celebrate the small victories along the way. If you're
                  ready to take your fitness to the next level, consider working with a professional coach who can
                  provide personalized guidance tailored to your specific needs and goals.
                </p>
              </div>

              <div className="flex items-center justify-between mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${isLiked ? "bg-blue-500/10 text-blue-500 border-blue-500" : "border-zinc-200 dark:border-zinc-800"}`}
                    onClick={handleLike}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    {isLiked ? "Liked" : "Like"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`flex items-center gap-2 ${isBookmarked ? "bg-blue-500/10 text-blue-500 border-blue-500" : "border-zinc-200 dark:border-zinc-800"}`}
                    onClick={handleBookmark}
                  >
                    <Bookmark className="h-4 w-4" />
                    {isBookmarked ? "Saved" : "Save"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-zinc-200 dark:border-zinc-800"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>

                <Link href="/blog">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold mb-4">About the Author</h3>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-xl">
                    R
                  </div>
                  <div>
                    <p className="font-semibold">{post.author}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Head Coach & Nutritionist</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  With over a decade of experience in fitness and nutrition, Ravi Singh has helped hundreds of clients
                  transform their bodies and lives through evidence-based coaching methods.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter((p) => p.slug !== slug)
                    .slice(0, 3)
                    .map((relatedPost, index) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={index}>
                        <div className="flex items-start space-x-3 group">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium group-hover:text-blue-500 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Ready to Transform?</h3>
                <p className="text-sm mb-4">
                  Take the first step towards your fitness goals with a free consultation call.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
                    Book Your Free Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-green-900/20 mt-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Start Your Transformation?</h2>
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

