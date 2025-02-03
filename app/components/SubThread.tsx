"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { db } from "../../lib/firebase"
import { collection, addDoc, query, where, orderBy, onSnapshot, limit } from "firebase/firestore"
import { Loader2, Search } from "lucide-react"

interface GifResponse {
  id: string
  gifUrl: string
  userName: string
  createdAt: Date
}

interface GiphyResult {
  id: string
  images: {
    fixed_height: {
      url: string
    }
  }
}

interface SubThreadProps {
  commentId: string
}

export default function SubThread({ commentId }: SubThreadProps) {
  const [responses, setResponses] = useState<GifResponse[]>([])
  const [isAddingGif, setIsAddingGif] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<GiphyResult[]>([])
  const [selectedGif, setSelectedGif] = useState("")
  const [userName, setUserName] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const q = query(
      collection(db, "gifResponses"),
      where("commentId", "==", commentId),
      orderBy("createdAt", "desc"),
      limit(10),
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedResponses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GifResponse[]
      setResponses(fetchedResponses)
    })

    return () => unsubscribe()
  }, [commentId])

  const searchGifs = async () => {
    if (!searchTerm.trim()) return

    setIsSearching(true)
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${encodeURIComponent(
          searchTerm,
        )}&limit=9&rating=g`,
      )
      const data = await response.json()
      setSearchResults(data.data)
    } catch (error) {
      console.error("Error searching GIFs:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleGifSelection = (gifUrl: string) => {
    setSelectedGif(gifUrl)
    setSearchResults([])
    setSearchTerm("")
  }

  const handleSubmitGif = async () => {
    if (selectedGif) {
      await addDoc(collection(db, "gifResponses"), {
        gifUrl: selectedGif,
        userName: userName.trim() || "Anonymous",
        commentId,
        createdAt: new Date(),
      })
      setSelectedGif("")
      setUserName("")
      setIsAddingGif(false)
    }
  }

  return (
    <div className="mt-2">
      <AnimatePresence>
        {responses.map((response) => (
          <motion.div
            key={response.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="mb-2"
          >
            <p className="text-sm text-blue-300">{response.userName}</p>
            <img src={response.gifUrl || "/placeholder.svg"} alt="GIF response" className="max-w-full h-auto rounded" />
          </motion.div>
        ))}
      </AnimatePresence>

      {isAddingGif ? (
        <div className="mt-2 space-y-2">
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
          />

          <div className="flex gap-2">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a GIF..."
              className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchGifs()
                }
              }}
            />
            <Button onClick={searchGifs} disabled={isSearching} className="bg-blue-500 text-white">
              {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>

          {searchResults.length > 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-3 gap-2 mt-2">
              {searchResults.map((gif) => (
                <motion.div
                  key={gif.id}
                  whileHover={{ scale: 1.05 }}
                  className={`cursor-pointer rounded overflow-hidden border-2 ${
                    selectedGif === gif.images.fixed_height.url ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => handleGifSelection(gif.images.fixed_height.url)}
                >
                  <img
                    src={gif.images.fixed_height.url || "/placeholder.svg"}
                    alt="GIF search result"
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {selectedGif && (
            <div className="mt-2 space-y-2">
              <p className="text-sm text-gray-400">Selected GIF:</p>
              <img src={selectedGif || "/placeholder.svg"} alt="Selected GIF" className="max-w-full h-auto rounded" />
            </div>
          )}

          <div className="flex gap-2">
            <Button
              onClick={handleSubmitGif}
              disabled={!selectedGif}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
            >
              Submit GIF
            </Button>
            <Button
              onClick={() => {
                setIsAddingGif(false)
                setSelectedGif("")
                setSearchResults([])
                setSearchTerm("")
              }}
              className="bg-gray-600 text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button onClick={() => setIsAddingGif(true)} className="mt-2 bg-purple-500 text-white">
          Add GIF Response
        </Button>
      )}
    </div>
  )
}

