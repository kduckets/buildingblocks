"use client"

import { useState, useCallback } from "react"
import Timeline from "./components/Timeline"
import FilterBar from "./components/FilterBar"
import ScrollToTopButton from "./components/ScrollToTopButton"
import SearchBox from "./components/SearchBox"
import { buildingBlockMilestones, buildingBlockCategories } from "../data/milestones"

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleToggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }, [])

  const handleCategoryClick = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }, [])

  const handleClearAll = useCallback(() => {
    setSelectedCategories([])
    setSearchQuery("")
  }, [])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const filteredBuildingBlockMilestones = buildingBlockMilestones.filter((milestone) => {
    const matchesCategories = selectedCategories.length === 0 || selectedCategories.includes(milestone.category)

    const matchesSearch =
      searchQuery === "" ||
      milestone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      milestone.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategories && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gray-900 text-white font-mono">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-mono">
          Building Blocks of the Internet
        </h1>
        <p className="text-center text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Explore the technological evolution of the internet through its fundamental building blocks.
        </p>
        <SearchBox onSearch={handleSearch} />
        <FilterBar
          categoryGroups={[{ name: "Categories", categories: buildingBlockCategories }]}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
          onClearAll={handleClearAll}
        />
        <Timeline
          milestones={filteredBuildingBlockMilestones}
          filteredCategories={selectedCategories}
          onCategoryClick={handleCategoryClick}
        />
      </div>
      <ScrollToTopButton />
    </main>
  )
}

