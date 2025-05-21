import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Contex/AuthProvider'

const App = () => {
  const Authdata = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [logenInUserData, setLogenInUserData] = useState(null)
 
useEffect(()=>{
  const LoggedInUser = localStorage.getItem('LogedInUser')
  if(LoggedInUser){
    const userData = JSON.parse(LoggedInUser)
    setUser(userData.role)
    setLogenInUserData(userData.data)
  }
},[])



  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('LogedInUser' , JSON.stringify({role:'admin'}))
    }
    else if (Authdata ) {
      const employ =  Authdata.employeesdata.find((e)=>email === e.email && password === e.password)
      if(employ){
        setLogenInUserData(employ)
        setUser('employee')
        localStorage.setItem('LogedInUser' , JSON.stringify({role:'employee' , data : employ}))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : null}
{user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={logenInUserData} /> : null)}    </>
  )
}

export default App