import React, { createContext, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utills/LocalStorage'
import { useEffect } from 'react'



export const AuthContext = createContext()
const AuthProvider = ({children}) => {
// localStorage.clear()
    
    const [userdata, setuserData] = useState(null)

   useEffect(()=>{
    setLocalStorage()
     const {employeesdata , adminsdata } = getLocalStorage()
    setuserData({employeesdata,adminsdata})
   },[])
    // console.log(data)
  return (
    <div>
        <AuthContext.Provider value={userdata}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
