"use client"

import { useState } from "react"
import type { Milestone } from "../../data/milestones"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MilestoneDetails from "./MilestoneDetails"
import Comments from "./Comments"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react"

interface MilestoneCardProps {
  milestone: Milestone
  isLeft: boolean
  commentCount: number
  onCategoryClick: (category: string) => void
}

export default function MilestoneCard({ milestone, isLeft, commentCount, onCategoryClick }: MilestoneCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"} mb-6 md:mb-0`}>
      <motion.div
        className="w-full md:w-[calc(50%-1rem)] flex items-center"
        initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hidden md:flex flex-col items-center justify-center mr-4">
          <div className="bg-black text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center border-4 border-blue-500">
            {milestone.year}
          </div>
          <div className="h-full w-1 bg-blue-500 my-2"></div>
        </div>
        <Card className="flex-grow overflow-hidden shadow-lg border border-gray-700 bg-gray-800">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
            <div className="flex items-center space-x-4">
              <div className="md:hidden bg-black text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center border-2 border-white">
                {milestone.year}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg md:text-xl">{milestone.title}</CardTitle>
                  {commentCount > 0 && (
                    <Badge
                      variant="secondary"
                      className="bg-blue-600 text-white flex items-center gap-1 cursor-pointer hover:bg-blue-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsExpanded((prev) => !prev)
                      }}
                    >
                      <MessageCircle size={14} />
                      {commentCount}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap items-center mt-1 gap-2">
                  {milestone.categories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="text-xs md:text-sm bg-black text-white cursor-pointer hover:bg-gray-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        onCategoryClick(category)
                      }}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 text-gray-300">
            <p className="text-sm md:text-base">{milestone.description}</p>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 w-full justify-between bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
            >
              {isExpanded ? "Hide Details and Comments" : "Show Details and Comments"}
              {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MilestoneDetails milestone={milestone} />
                  <Comments milestoneId={milestone.id} />
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

