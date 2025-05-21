import React, { createContext, useState } from 'react'
import { getLocalStorage } from '../Utills/LocalStorage'
import { useEffect } from 'react'



export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    
    const [userdata, setuserData] = useState(null)

   useEffect(()=>{
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
