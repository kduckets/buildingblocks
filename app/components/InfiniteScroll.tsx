"use client"

import { useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"

interface InfiniteScrollProps {
  onLoadMore: () => void
  hasMore: boolean
}

export default function InfiniteScroll({ onLoadMore, hasMore }: InfiniteScrollProps) {
  const observerTarget = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          onLoadMore()
        }
      },
      { threshold: 1.0 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [onLoadMore, hasMore])

  return (
    <div ref={observerTarget} className="h-20 flex items-center justify-center">
      {hasMore && <Loader2 className="w-6 h-6 animate-spin text-blue-500" />}
    </div>
  )
}

