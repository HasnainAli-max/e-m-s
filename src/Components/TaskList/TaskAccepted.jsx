import React from 'react'

const TaskAccepted = () => {
  return (
     <div className="h-full flex-shrink-0 p-5 w-[300px] bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
          <h4 className='text-sm'>19 May 2025</h4>
        </div>
        <h1 className='mt-5 text-2xl font-semibold'>Make a youtube video</h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam labore, iure quos voluptate provident.
        </p>
        <div className="flex justify-between mt-4">
            <button className='bg-green-500 text-sm py-1 px-2 rounded-md'>Mark As Completed</button>
            <button className='bg-red-500 text-sm py-1 px-2 rounded-md'>Mark As Failed</button>
        </div> 
      </div>
  )
}

export default TaskAccepted
