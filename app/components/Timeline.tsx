"use client"

import { useState, useCallback, useEffect } from "react"
import type { Milestone } from "../../data/milestones"
import MilestoneCard from "./MilestoneCard"
import InfiniteScroll from "./InfiniteScroll"
import { motion, AnimatePresence } from "framer-motion"
import { db } from "../../lib/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"

interface TimelineProps {
  milestones: Milestone[]
  filteredCategories: string[]
  onCategoryClick: (category: string) => void
}

const ITEMS_PER_PAGE = 50

function groupMilestonesByDecade(milestones: Milestone[]): [string, Milestone[]][] {
  const grouped = milestones.reduce(
    (acc, milestone) => {
      const decade = Math.floor(milestone.year / 10) * 10
      if (!acc[decade]) {
        acc[decade] = []
      }
      acc[decade].push(milestone)
      return acc
    },
    {} as Record<number, Milestone[]>,
  )

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(a) - Number(b)) // Sort decades in ascending order
    .map(([decade, milestones]) => [
      `${decade}s`,
      milestones.sort((a, b) => a.year - b.year), // Sort milestones within each decade
    ])
}

export default function Timeline({ milestones, onCategoryClick }: TimelineProps) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({})

  // Sort all milestones chronologically before grouping
  const sortedMilestones = [...milestones].sort((a, b) => a.year - b.year)
  const groupedMilestones = groupMilestonesByDecade(sortedMilestones.slice(0, displayCount))

  const loadMore = useCallback(() => {
    setDisplayCount((prevCount) => prevCount + ITEMS_PER_PAGE)
  }, [])

  useEffect(() => {
    const fetchCommentCounts = async () => {
      const newCounts: Record<string, number> = {}
      const fetchPromises = sortedMilestones.slice(0, displayCount).map(async (milestone) => {
        const q = query(collection(db, "comments"), where("milestoneId", "==", milestone.id))
        const querySnapshot = await getDocs(q)
        newCounts[milestone.id] = querySnapshot.size
      })

      await Promise.all(fetchPromises)
      setCommentCounts(newCounts)
    }

    fetchCommentCounts()
  }, [sortedMilestones, displayCount])

  return (
    <div className="relative">
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <AnimatePresence initial={false}>
        <div className="space-y-6 md:space-y-16">
          {groupedMilestones.map(([decade, decadeMilestones], decadeIndex) => (
            <div key={decade}>
              <motion.h2
                className="text-2xl font-bold mb-4 text-center md:hidden bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: decadeIndex * 0.1 }}
              >
                {decade}
              </motion.h2>
              {decadeMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <MilestoneCard
                    milestone={milestone}
                    isLeft={index % 2 === 0}
                    commentCount={commentCounts[milestone.id] || 0}
                    onCategoryClick={onCategoryClick}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </AnimatePresence>
      <InfiniteScroll onLoadMore={loadMore} hasMore={displayCount < milestones.length} />
    </div>
  )
}

