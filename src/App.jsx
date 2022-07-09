import { useState, useEffect } from 'react'
import { Footer } from './components/Footer'

import { TaskCreator } from './components/TaskCreator'
import { TaskTable } from './components/TaskTable'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = ({ taskName }) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = ({ task }) => {
    setTaskItems(
      taskItems.map((taskItem) =>
        taskItem.name === task.name
          ? { ...taskItem, done: !taskItem.done }
          : taskItem
      )
    )
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((taskItem) => !taskItem.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <>
      <main className='bg-gradient-to-b from-slate-900 to-indigo-900 min-h-screen px-20 py-8 text-white mx-auto text-center flex flex-col gap-4'>
        <h1 className='text-6xl py-2 font-bold'>Todo App 📋</h1>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable taskItems={taskItems} toggleTask={toggleTask} />

        <VisibilityControl
          setShowCompleted={setShowCompleted}
          showCompleted={showCompleted}
          cleanTasks={cleanTasks}
        />

        {showCompleted && (
          <TaskTable
            taskItems={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
