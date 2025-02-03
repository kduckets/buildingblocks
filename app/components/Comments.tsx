"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { db } from "../../lib/firebase"
import { collection, addDoc, query, where, orderBy, onSnapshot, limit } from "firebase/firestore"
import SubThread from "./SubThread"

interface Comment {
  id: string
  text: string
  userName: string
  createdAt: Date
}

interface CommentsProps {
  milestoneId: string
}

export default function Comments({ milestoneId }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("milestoneId", "==", milestoneId),
      orderBy("createdAt", "asc"),
      limit(50),
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Comment[]
      setComments(fetchedComments)
    })

    return () => unsubscribe()
  }, [milestoneId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      await addDoc(collection(db, "comments"), {
        text: newComment,
        userName: userName.trim() || "Anonymous",
        milestoneId,
        createdAt: new Date(),
      })
      setNewComment("")
      setUserName("")
    }
  }

  return (
    <div className="mt-6">
      <h3 className="font-bold text-blue-400 mb-4">Comments</h3>
      <AnimatePresence>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700 p-3 rounded-lg mb-2 border border-gray-600"
          >
            <p className="font-semibold text-blue-300">{comment.userName}</p>
            <p className="text-gray-200">{comment.text}</p>
            <SubThread commentId={comment.id} />
          </motion.div>
        ))}
      </AnimatePresence>
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <Input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full bg-gray-700 text-white border-gray-600 focus:border-blue-500"
        />
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full min-h-[100px] bg-gray-700 text-white border-gray-600 focus:border-blue-500 resize-y"
        />
        <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Submit
        </Button>
      </form>
    </div>
  )
}

