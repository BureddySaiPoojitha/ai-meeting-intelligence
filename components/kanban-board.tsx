"use client"

import { useState } from "react"
import TaskItem from "./task-item"

export default function KanbanBoard({ tasks }: any) {

  const [taskList,setTaskList] = useState(tasks)

  const updateStatus = (id:string,status:string) => {

    const updated = taskList.map((task:any)=>
      task.id === id ? {...task,status} : task
    )

    setTaskList(updated)
  }

  const todo = taskList.filter((t:any)=>t.status==="todo")
  const progress = taskList.filter((t:any)=>t.status==="progress")
  const done = taskList.filter((t:any)=>t.status==="done")

  return (
    <div className="grid grid-cols-3 gap-6">

      <div>
        <h3 className="font-bold mb-3">TODO</h3>
        <div className="space-y-3">
          {todo.map((task:any)=>(
            <TaskItem key={task.id} task={task} updateStatus={updateStatus}/>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">IN PROGRESS</h3>
        <div className="space-y-3">
          {progress.map((task:any)=>(
            <TaskItem key={task.id} task={task} updateStatus={updateStatus}/>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-3">DONE</h3>
        <div className="space-y-3">
          {done.map((task:any)=>(
            <TaskItem key={task.id} task={task} updateStatus={updateStatus}/>
          ))}
        </div>
      </div>

    </div>
  )
}