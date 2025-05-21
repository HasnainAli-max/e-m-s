import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-blue-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h1 className='mt-5 text-2xl font-semibold'>{data.title}</h1>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div className="mt-4">
            <button className='bg-yellow-500 rounded-md px-2 '>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
