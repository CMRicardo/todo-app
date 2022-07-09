export function VisibilityControl({
  showCompleted,
  setShowCompleted,
  cleanTasks,
}) {
  const handleClick = () => {
    if (
      window.confirm(
        'Are you sure you want to delete all of the completed tasks?'
      )
    ) {
      cleanTasks()
    }
  }

  return (
    <section className='border-slate-50 border-y py-4 flex flex-col gap-2 place-items-center justify-center text-xl'>
      <div className='flex gap-2 place-items-center'>
        <label
          className='px-6 py-4 text-3xl font-medium text-white whitespace-nowrap'
          htmlFor='doneTask'
        >
          Show Done
        </label>
        <input
          className='h-[1.5ch] w-[1.5ch] rounded'
          onChange={() => setShowCompleted(!showCompleted)}
          type='checkbox'
          id='doneTask'
          checked={showCompleted}
        />
      </div>
      <button
        className='rounded px-2 py-1 bg-red-600 hover:bg-red-800 transition focus:outline-white'
        onClick={handleClick}
      >
        Clear all completed tasks
      </button>
    </section>
  )
}
