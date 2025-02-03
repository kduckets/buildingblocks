"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"

interface SearchBoxProps {
  onSearch: (query: string) => void
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mx-auto mb-4">
      <div className="flex">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search milestones..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-800 text-white border-gray-700 focus:border-blue-500 rounded-l-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="bg-gray-800 border-gray-700 border-l-0 rounded-l-none hover:bg-gray-700"
          >
            <X className="h-4 w-4 text-gray-400" />
          </Button>
        )}
        <Button type="submit" className="ml-2 bg-blue-600 hover:bg-blue-700 text-white">
          Search
        </Button>
      </div>
    </form>
  )
}

