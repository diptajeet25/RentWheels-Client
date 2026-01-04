import React,{useContext,useEffect,useState} from 'react'
import {Link,NavLink,useNavigate} from 'react-router'
import logo from "../assets/logo.png"
import {AuthContext} from '../Context/AuthContext'
import {toast} from 'react-toastify'

const Navbar=()=>{
const {user,logoutUser}=useContext(AuthContext)
const navigate=useNavigate()
const [dark,setDark]=useState(localStorage.getItem("theme")==="dark")
useEffect(()=>{
if(dark){
document.documentElement.classList.add("dark")
document.documentElement.setAttribute("data-theme","dark")
localStorage.setItem("theme","dark")
}else{
document.documentElement.classList.remove("dark")
document.documentElement.setAttribute("data-theme","light")
localStorage.setItem("theme","light")
}
},[dark])
const handleLogOut=()=>{
logoutUser().then(()=>{
toast.success("Logged Out Successfully")
navigate("/auth")
}).catch(err=>toast.error(`${err.message}`))
}
const link=<div className='text-semibold flex flex-col lg:flex-row gap-2 font-semibold lg:gap-4'>
<NavLink to="/" className={({isActive})=>isActive?"text-purple-600":""}>Home</NavLink>
<NavLink to="/about" className={({isActive})=>isActive?"text-purple-600":""}>About Us</NavLink>
<NavLink to="/blogs" className={({isActive})=>isActive?"text-purple-600":""}>Blog</NavLink>
<NavLink to="/cars" className={({isActive})=>isActive?"text-purple-600":""}>Browse Cars</NavLink>
{user?<NavLink to="/Dashboard" className={({isActive})=>isActive?"text-purple-600":""}>DashBoard</NavLink>:""}
</div>
return(
<div className="navbar bg-base-100 text-base-content shadow-sm">
<div className="navbar-start">
<div className="dropdown">
<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
</div>
<ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">{link}</ul>
</div>
<Link to="/" className="btn btn-ghost text-xl"><img src={logo} className='w-36 bg-white p-2' alt="RentWheels Logo"/></Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1 flex gap-4">{link}</ul>
</div>
<div className="navbar-end flex gap-2">
<button onClick={()=>setDark(!dark)} className="btn btn-ghost text-xl">{dark?"🌙":"🌞"}</button>
{user?
<div className="dropdown dropdown-end">
<div tabIndex={0} role="button" className="btn btn-ghost rounded-full">
<img src={user.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full object-cover"/>
</div>
<ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg">
<Link to="/myprofile" className='mb-2 text-md p-2 rounded-2xl cursor-pointer'>My Profile</Link>
<li onClick={handleLogOut} className='mb-2 text-md p-2 rounded-2xl cursor-pointer'>Sign Out</li>
</ul>
</div>
:<Link to="/auth" className="btn btn-primary">Login</Link>}
</div>
</div>
)
}
export default Navbar
