"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      setIsVisible(scrollTop > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const radius = 28
  const circumference = 2 * Math.PI * radius

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-16 h-16" aria-label="Scroll progress & scroll to top">
        {/* Progress ring */}
        <svg className="absolute top-0 left-0 -rotate-90" width="64" height="64">
          {/* Background ring */}
          <circle cx="32" cy="32" r={radius} stroke="#e5e7eb" strokeWidth="4" fill="transparent" />
          {/* Progress ring */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="#2563eb"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - scrollProgress / 100)}
            style={{
              transition: "stroke-dashoffset 0.25s ease-out",
            }}
          />
        </svg>

        {/* Button sits slightly inside */}
        <button
          onClick={scrollToTop}
          className="absolute inset-[6px] flex items-center justify-center rounded-full bg-[#2563eb] text-white shadow-lg hover:cursor-pointer hover:scale-105 transition-transform transform ease-in-out duration-500"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
