import React, { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Contex/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const Authdata = useContext(AuthContext)
  console.log(Authdata.employeesdata)

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
    }
    else if (Authdata ) {
      setUser('employee')
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : null}
      {user === 'admin' ? <AdminDashboard/> : user === 'employee' ? <EmployeeDashboard/> : null}
    </>
  )
}

export default App