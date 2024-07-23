'use client'
import { useState, useEffect } from 'react'

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 500) // Hide loading after 500ms

    return () => clearTimeout(timer)
  }, [])

  if (!showLoading) {
    return null
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-background z-50">
      <div className="rounded-full h-20 w-20 bg-violet-800 animate-pulse"></div>
    </div>
  )
}