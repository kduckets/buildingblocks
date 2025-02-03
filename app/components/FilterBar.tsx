"use client"
import { Button } from "@/components/ui/button"
import Dropdown from "./Dropdown"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
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
  // const [openGroups, setOpenGroups] = useState<string[]>([])

  // const toggleGroup = (groupName: string) => {
  //   setOpenGroups((prev) =>
  //     prev.includes(groupName) ? prev.filter((name) => name !== groupName) : [...prev, groupName],
  //   )
  // }

  return (
    <div className="mb-6 bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
Filter by Tags      
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
      <div className="md:hidden">
        <Dropdown
          categoryGroups={categoryGroups}
          selectedCategories={selectedCategories}
          onToggle={onToggleCategory}
          onClearAll={onClearAll}
        />
      </div>
      <div className="hidden md:flex flex-wrap gap-2">
        {categoryGroups.flatMap((group) =>
          group.categories.map((category) => (
            <Button
              key={category}
              onClick={() => onToggleCategory(category)}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              className={`text-sm ${
                selectedCategories.includes(category)
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white border-gray-600"
              }`}
            >
              {category}
            </Button>
          )),
        )}
      </div>
    </div>
  )
}

