import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Login(){
  const navigate=useNavigate()
  const[email,setemail]=useState("")
  const[password,setpasswprd]=useState("")
  const handlelogin=(e)=>{
    if(!email||!password){
      alert("please Fill All data")
      return;
    }
    e.preventDefault()
    
    const users=JSON.parse(localStorage.getItem("users"))||[]
    const founduser=users.find((i)=>i.email===email&&i.password===password)
    if(!founduser){
      alert("Invalid cardentials")
      return
    }
    localStorage.setItem("currentuser",JSON.stringify(founduser))
    navigate("/")
   
  }
    return(
        <>
        


{/* Form Card */}
      <div className="animate-login mx-auto mt-[180px] relative  max-w-lg bg-white backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-orange-500">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Login to your account
        </p>

        {/* Form */}
        <form onSubmit={handlelogin} className="space-y-5">

          
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
            onChange={(e)=>setemail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

        
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e)=>setpasswprd(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-orange-500 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>

          {/* Register */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-500 cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>

        </form>
        </div>
        <Footer/>
        
        
        </>




    )




}