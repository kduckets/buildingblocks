"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CategoryGroup } from "../../data/milestones"

interface DropdownProps {
  categoryGroups: CategoryGroup[]
  selectedCategories: string[]
  onToggle: (category: string) => void
  onClearAll: () => void
}

export default function Dropdown({ categoryGroups, selectedCategories, onToggle, onClearAll }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        className="w-full justify-between bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCategories.length > 0
          ? `${selectedCategories.length} filter${selectedCategories.length > 1 ? "s" : ""} selected`
          : "Filter by category"}
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
          <ScrollArea className="h-[60vh] overflow-auto">
            <div className="p-2">
              {selectedCategories.length > 0 && (
                <>
                  <Button
                    variant="ghost"
                    className="w-full text-left text-red-500 hover:text-red-400 hover:bg-gray-700"
                    onClick={() => {
                      onClearAll()
                      setIsOpen(false)
                    }}
                  >
                    Clear All Filters
                  </Button>
                  <hr className="my-2 border-gray-700" />
                </>
              )}
              {categoryGroups.map((group, index) => (
                <div key={group.name} className={index > 0 ? "mt-4" : ""}>
                  <h3 className="text-blue-400 font-bold mb-2">{group.name}</h3>
                  {group.categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className={`w-full justify-between text-left mb-1 ${
                        selectedCategories.includes(category)
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`}
                      onClick={() => onToggle(category)}
                    >
                      {category}
                      {selectedCategories.includes(category) && <Check className="h-4 w-4" />}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}
    </div>
  )
}

