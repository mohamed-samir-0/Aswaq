import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Signup(){
    const navigate=useNavigate()
    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const handleSignup=(e)=>{
        e.preventDefault()
        if(!firstname||!lastname||!email||!password){
            alert("please fill all data");
            return; //عشان الكود يقف هنا ميكملش
        }
        const users=JSON.parse(localStorage.getItem("users"))||[]
        const exists=users.find((i)=>i.email===email)
        if(exists){
            alert("this email already exists")
            return;
        }
        const newuser={
            firstname,
            lastname,
            email,
            password
        }
        users.push(newuser)
        localStorage.setItem("users",JSON.stringify(users))
        alert("Account created succefully  ✅")
        navigate("/login")

    }



    return(
        <>




        <div className="mt-[180px] max-w-lg border border-orange-500 mx-auto p-8 shadow-xl backdrop-blur-md rounded-3xl  animate-login">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-2">Create Account</h2>
            <p className="text-gray-500 text-center mb-8">Join us and start shopping</p>

            <form onSubmit={handleSignup} className="space-y-5">
                <div className="flex gap-2  ">
                <div>
                    <label className="text-sm font-medium">First name</label>
                    <input
                    value={firstname} onChange={(e)=>setfirstname(e.target.value)}
                     placeholder="Enter your first name"
                      className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500" type="text" />

                </div>
                 <div>
                    <label className="text-sm font-medium">last name</label>
                    <input
                    value={lastname}
                    onChange={(e)=>setlastname(e.target.value)}
                     placeholder="Enter your last name" 
                     className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500"
                      type="text" />

                </div>
                </div>

                <div>
                    <label  className="text-sm font-medium" >Email</label>
                    <input
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}
                     placeholder="Enter your email"
                      className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 "
                       type="email" />

                </div>
                <div>
                    <label  className="text-sm font-medium" >Password</label>
                    <input
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                     placeholder="Create password" 
                     className="w-full border border-gray-300 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 " type="Password" />

                </div>
                <button 
                type="submit"
                className="w-full bg-orange-500 text-white rounded-xl p-2">Submit</button>
                <p className="text-gray-500 text-sm text-center"> Already have an account? 
                    <Link to="/login" className="text-orange-500 cursor-pointer hover:underline"> Sign In
            </Link>
                </p>


            </form>
        </div>
        <Footer/>
        </>

    )
}