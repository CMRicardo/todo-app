import { useState } from 'react'

export function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')
  const handleSubmit = (evt) => {
    evt.preventDefault()
    createNewTask({ taskName: newTaskName })
    setNewTaskName('')
  }

  return (
    <form
      className='flex flex-wrap max-w-md place-items-center justify-center mx-auto gap-2'
      onSubmit={handleSubmit}
    >
      <label
        className='text-xl block mb-2 font-medium text-gray-300'
        htmlFor='task'
      >
        Enter a new task
      </label>
      <input
        type='text'
        id='task'
        className='text-xl rounded-lg  block w-full p-2.5 bg-gray-700  placeholder-gray-400 text-white focus:ring-blue-500 focus:outline-blue-500'
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button className='text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium text-xl rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600  focus:ring-blue-800'>
        Save task
      </button>
    </form>
  )
}
