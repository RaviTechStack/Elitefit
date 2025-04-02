"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dumbbell, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 dark:bg-black/80 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-blue-500" />
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            EliteFit
          </span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/" ? "text-blue-400" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/trainer"
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/trainer" ? "text-blue-400" : ""}`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/services" ? "text-blue-400" : ""}`}
          >
            Services
          </Link>
          {/* <Link
            href="/blog"
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/blog" ? "text-blue-400" : ""}`}
          >
            Blog
          </Link> */}
          <Link
            href="/contact"
            className={`text-sm font-medium hover:text-blue-400 transition-colors ${pathname === "/contact" ? "text-blue-400" : ""}`}
          >
            Book a Call
          </Link>
        </nav>
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="mr-2">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/contact" className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 dark:bg-black bg-white">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-blue-400 transition-colors py-2 ${pathname === "/" ? "text-blue-400" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/trainer"
              className={`text-sm font-medium hover:text-blue-400 transition-colors py-2 ${pathname === "/trainer" ? "text-blue-400" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium hover:text-blue-400 transition-colors py-2 ${pathname === "/services" ? "text-blue-400" : ""}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium hover:text-blue-400 transition-colors py-2 ${pathname === "/blog" ? "text-blue-400" : ""}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-blue-400 transition-colors py-2 ${pathname === "/contact" ? "text-blue-400" : ""}`}
              onClick={closeMenu}
            >
              Book a Call
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

