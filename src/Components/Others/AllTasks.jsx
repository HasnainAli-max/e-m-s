import React, { useContext } from 'react'
import { AuthContext } from '../../Contex/AuthProvider'

const AllTasks = () => {
  const authdata = useContext(AuthContext)
  console.log(authdata)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48 overflow-auto'>
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
      <div className="bg-green-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
      <div className="bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
      <div className="bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
      <div className="bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
      <div className="bg-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="">Hasnain</h2>
        <h3>Make a ui design</h3>
        <h5>status</h5>
      </div>
    </div>
    
  )
}

export default AllTasks
