import React, { useState } from "react";

const Login = ({handleLogin}) => {


    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
  
    setemail("")
    setPassword("")
    }
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form  className="flex flex-col items-center justify-center" onSubmit={(e)=>{
            SubmitHandler(e)
        }}>
            <input
             required
             value={email}
             onChange={(e)=>{
                setemail(e.target.value)
             }}
             className="border-2 border-emerald-600 rounded-full py-3 px-5  outline-none text-xl bg-transparent placeholder:text-grey-400"  type="email" placeholder="Enter Your Email" />
            <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             className="border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 outline-none text-xl bg-transparent placeholder:text-grey-400" type="password" placeholder="Enter Your Password" />
            <button className="border-2 border-none mt-5 rounded-full py-3 px-5 mt-3 outline-none text-xl bg-emerald-600 placeholder:text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
