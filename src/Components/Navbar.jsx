import React, { useContext } from 'react';
import { Link } from 'react-router';
import logo from "../assets/logo.png"
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
  const {user,logoutUser}=useContext(AuthContext);
  const handleLogOut=()=>
  {
    logoutUser()
    .then(res=>
      {
        console.log(res)
        alert("Logged Out SuccessFully")
  })
    .catch(err=>console.log(err))
  }
  const link=<div className='text-semibold flex flex-col lg:flex-row gap-2  lg:gap-4'>
  <Link to="/">Home</Link>
  <Link to="/cars">Browse Cars</Link>
  {
    user ? <>
    <Link to="/mycars">My Listings</Link>
  <Link>My Bookings</Link>
      <Link to="/addcar">Add Car</Link>
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
    <a className="btn btn-ghost text-xl hover:bg-gray-100"><img src={logo} className='w-36' alt="RentWheels Logo" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
     { link }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handleLogOut} className='btn btn-primary'>Sign Out</button> : <Link  to="/auth/reg" className="btn btn-primary">Register</Link>
    }
   
  </div>
</div>
    </div>
  );
};

export default Navbar;