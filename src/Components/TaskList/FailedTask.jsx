import React from 'react'

const FailedTask = () => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[300px] bg-green-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
          <h4 className='text-sm'>19 May 2025</h4>
        </div>
        <h1 className='mt-5 text-2xl font-semibold'>Make a youtube video</h1>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam labore, iure quos voluptate provident.
        </p>
        <div className="mt-2">
            <button className='w-full bg-red-500 rounded-md'>Failed Task</button>
        </div>
      </div>
  )
}

export default FailedTask
