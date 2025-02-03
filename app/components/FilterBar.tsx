"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp, X } from "lucide-react"
import Dropdown from "./Dropdown"
import { Badge } from "@/components/ui/badge"
import type { CategoryGroup } from "../../data/milestones"

interface FilterBarProps {
  categoryGroups: CategoryGroup[]
  selectedCategories: string[]
  onToggleCategory: (category: string) => void
  onClearAll: () => void
}

export default function FilterBar({
  categoryGroups,
  selectedCategories,
  onToggleCategory,
  onClearAll,
}: FilterBarProps) {
  const [openGroups, setOpenGroups] = useState<string[]>([])

  const toggleGroup = (groupName: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupName) ? prev.filter((name) => name !== groupName) : [...prev, groupName],
    )
  }

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      {selectedCategories.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Selected Filters:</h3>
            <Button
              variant="destructive"
              size="sm"
              onClick={onClearAll}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Clear All Filters
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-colors"
                onClick={() => onToggleCategory(category)}
              >
                {category}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            ))}
          </div>
        </div>
      )}
      <div className="md:hidden">
        <Dropdown
          categoryGroups={categoryGroups}
          selectedCategories={selectedCategories}
          onToggle={onToggleCategory}
          onClearAll={onClearAll}
        />
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categoryGroups.map((group) => (
          <Collapsible
            key={group.name}
            open={openGroups.includes(group.name)}
            onOpenChange={() => toggleGroup(group.name)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
              >
                {group.name}
                {openGroups.includes(group.name) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {group.categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => onToggleCategory(category)}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  className={`w-full text-sm ${
                    selectedCategories.includes(category)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  )
}

