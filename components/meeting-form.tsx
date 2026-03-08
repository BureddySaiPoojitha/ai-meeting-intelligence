"use client"

import { useState } from "react"
import axios from "axios"
import KanbanBoard from "./kanban-board"

export default function MeetingForm() {

  const [title,setTitle] = useState("")
  const [transcript,setTranscript] = useState("")
  const [tasks,setTasks] = useState<any[]>([])

  const submitMeeting = async () => {

    const res = await axios.post("/api/meetings",{
      title,
      transcript
    })

    setTasks(res.data.tasks)
  }

  return (
    <div className="space-y-6">

      <input
        className="border p-2 w-full rounded"
        placeholder="Meeting Title"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full rounded"
        rows={6}
        placeholder="Paste meeting transcript"
        onChange={(e)=>setTranscript(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={submitMeeting}
      >
        Generate Tasks
      </button>

      {tasks.length > 0 && (
        <div className="mt-8">

          <h2 className="text-xl font-semibold mb-4">
            Task Board
          </h2>

          <KanbanBoard tasks={tasks} />

        </div>
      )}

    </div>
  )
}