"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Filter Building Blocks
      </h2>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryGroups.map((group) => (
          <Select
            key={group.name}
            onValueChange={(value) => {
              onToggleCategory(value)
              setOpenDropdown(null)
            }}
            value=""
            onOpenChange={(open) => {
              if (open) {
                setOpenDropdown(group.name)
              } else if (openDropdown === group.name) {
                setOpenDropdown(null)
              }
            }}
            open={openDropdown === group.name}
          >
            <SelectTrigger className="w-full bg-gray-700 text-white border-gray-600">
              <SelectValue placeholder={group.name} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{group.name}</SelectLabel>
                {group.categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                    {selectedCategories.includes(category) && " ✓"}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        ))}
      </div>
    </div>
  )
}

