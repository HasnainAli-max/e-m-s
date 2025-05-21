import React from 'react'

const TaskAccepted = ({data}) => {
    // console.log(data)
  return (
     <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div className="flex justify-between mt-4">
            <button className='bg-green-500 text-sm py-1 px-2 rounded-md'>Mark As Completed</button>
            <button className='bg-red-500 text-sm py-1 px-2 rounded-md'>Mark As Failed</button>
        </div> 
      </div>
  )
}

export default TaskAccepted
