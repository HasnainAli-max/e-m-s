import React, { useState } from 'react'

const Header = () => {
  // const [userName, setUserName] = useState('');
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.name)
  // }
  const LogoutUser = () =>{
localStorage.setItem('LogedInUser' , '')
window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'> Hellow <br />  <span className='text-3xl font-semibold'>🙂</span> </h1>
      <button onClick={LogoutUser} className=' bg-red-500 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
