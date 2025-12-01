import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from "../assets/logo.png"
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';



const Navbar = () => {
  const {user,logoutUser}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLogOut=()=>
  {
    logoutUser()
    .then(()=>
      {
       
        toast.success("Logged Out Successfully")
     navigate("/auth")
       
  })
    .catch((err)=>toast.error(`${err.message}`))
  }
  const link=<div className='text-semibold flex flex-col lg:flex-row gap-2 font-semibold  lg:gap-4'>
  <NavLink to="/" className={({ isActive }) =>isActive ? "text-purple-600" : ""}>Home</NavLink>
  <NavLink to="/cars" className={({ isActive }) =>isActive ? "text-purple-600" : "" }>Browse Cars</NavLink>
  {
    user ? <>
    <NavLink to="/mycars" className={({ isActive }) =>isActive ? "text-purple-600" : "" }>My Listings</NavLink>
    <NavLink to="/mybookings"  className={({ isActive }) =>isActive ? "text-purple-600" : ""}>My Bookings</NavLink>

      <NavLink to="/addcar" className={({ isActive }) =>isActive ? "text-purple-600" : "" }>Add Car</NavLink>
    </> :""
  }

  
      
      </div>

  return (
    <div>
        <div className="navbar bg-white text-black  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl hover:bg-gray-100"><img src={logo} className='w-36' alt="RentWheels Logo" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
     { link }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost rounded-full">
    <img
      src={user.photoURL} 
      alt="User Avatar" 
      className="w-10 h-10 rounded-full object-cover"
    />
  </div>
  <ul
    tabIndex="-1"
    className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
  >
    <li className='mb-2 text-md hover:bg-gray-300 p-2 rounded-2xl cursor-pointer'>{user.displayName}</li>
    <li className='mb-2 text-md hover:bg-gray-300 p-2 rounded-2xl cursor-pointer'>{user.email}</li>
    <li onClick={handleLogOut} className='mb-2 text-md hover:bg-gray-300 p-2 rounded-2xl cursor-pointer' >Sign Out</li>
  </ul>
</div>
 : <Link  to="/auth" className="btn btn-primary">Login</Link>
    }
   
  </div>
</div>


    </div>
  );
};

export default Navbar;