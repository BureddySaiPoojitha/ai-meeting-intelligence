export interface Task {
  id: string
  title: string
  owner: string
  status: "todo" | "progress" | "done"
}

export interface Meeting {
  id: string
  title: string
  transcript: string
  summary: string
  tasks: Task[]
}