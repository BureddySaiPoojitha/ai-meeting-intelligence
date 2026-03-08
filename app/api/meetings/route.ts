import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const { title, transcript } = body

  // Simple AI-like extraction logic
  const lines = transcript.split("\n")

  const tasks = lines
    .filter(line => line.toLowerCase().includes("todo") || line.toLowerCase().includes("task") || line.toLowerCase().includes("action"))
    .map((line, index) => ({
      id: index.toString(),
      title: line,
      owner: "Team",
      status: "todo"
    }))

  const response = {
    id: Date.now().toString(),
    title,
    transcript,
    summary: "Meeting processed successfully",
    tasks
  }

  return NextResponse.json(response)
}