import { TaskRow } from './TaskRow'

export function TaskTable({ taskItems, toggleTask, showCompleted = false }) {
  const createTaskRow = () => {
    return taskItems
      .filter((task) => task.done === showCompleted)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ))
  }

  return (
    <table className='w-full text-sm text-left text-gray-400 rounded'>
      <thead className='text-xs text-gray-50 uppercase bg-gray-700 '>
        <tr>
          <th className='text-5xl px-6 py-3'>Tasks</th>
        </tr>
      </thead>
      <tbody className='text-3xl'>{createTaskRow()}</tbody>
    </table>
  )
}
