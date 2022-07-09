export function TaskRow({ task, toggleTask }) {
  return (
    <tr className='border-b  bg-gray-800 border-gray-700  odd:bg-gray-800 even:bg-gray-700'>
      <td className='flex gap-4 place-items-center mx-auto justify-between px-6 py-4'>
        <label htmlFor={`${task.name}`}>{task.name}</label>
        <input
          type='checkbox'
          id={`${task.name}`}
          className='w-4 h-4 text-blue-600 rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
          checked={task.done}
          onChange={() => toggleTask({ task })}
        />
      </td>
    </tr>
  )
}
