import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
      <div className='px-9 py-6 rounded-xl w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.new}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
       <div className='px-9 py-6 rounded-xl w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
