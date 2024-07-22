'use client'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true)
    }, 300) // Show loading after 300ms

    return () => clearTimeout(timer)
  }, [])

  if (!showLoading) {
    return null
  }

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
    </div>
  )
}