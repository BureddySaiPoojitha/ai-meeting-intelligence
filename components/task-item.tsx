"use client"

export default function TaskItem({ task, updateStatus }: any) {

  return (
    <div className="p-3 bg-white border rounded shadow-sm space-y-2">

      <p className="font-medium">{task.title}</p>
      <p className="text-xs text-gray-500">{task.owner}</p>

      <div className="flex gap-2">

        {task.status === "todo" && (
          <button
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded"
            onClick={()=>updateStatus(task.id,"progress")}
          >
            Start
          </button>
        )}

        {task.status === "progress" && (
          <button
            className="text-xs bg-green-500 text-white px-2 py-1 rounded"
            onClick={()=>updateStatus(task.id,"done")}
          >
            Complete
          </button>
        )}

      </div>

    </div>
  )
}