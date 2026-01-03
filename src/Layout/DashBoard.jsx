import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import logo from "../assets/logo.png"
import { AuthContext } from '../Context/AuthContext';

const DashBoard = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Navbar */}
    <nav className="navbar w-full shadow-lg text-black">
      <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        {/* Sidebar toggle icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label>
      <div className="px-1 flex justify-between w-full">
        
        <Link to="/" className="btn btn-ghost text-xl hover:bg-gray-100"><img src={logo} className='w-36' alt="RentWheels Logo" /></Link>
      <Link><img src={user?.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full  mx-4"/></Link>
      </div>
    </nav>
    
    <div className="p-1">
        <Outlet></Outlet>
    </div>
  </div>

  <div className="drawer-side is-drawer-close:overflow-visible">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

      <ul className="menu w-full grow">

        <li>
          <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span className="is-drawer-close:hidden">Homepage</span>
          </Link>
          <Link to="/Dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard Overview">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4h6v6H4z"></path><path d="M14 4h6v10h-6z"></path><path d="M4 14h6v6H4z"></path><path d="M14 16h6v4h-6z"></path></svg>
            <span className="is-drawer-close:hidden">Dashboard Overview</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard/mybookings" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Bookings">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"></path><path d="M16 3h5v5"></path><path d="M21 3l-8.5 8.5"></path></svg>
            <span className="is-drawer-close:hidden">My Bookings</span>
          </Link>
          <Link to="/dashboard/addcar" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add A Car">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M13 16h-9"></path><path d="M4 12h9"></path><path d="M6 20h9"></path><path d="M5 8h9"></path><path d="M17 21l4-4l-4-4"></path><path d="M21 17h-13"></path></svg>
            <span className="is-drawer-close:hidden">Add A Car</span>
          </Link>
          <Link to="/dashboard/mycars" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Cars">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M5 12h14l1.5-4.5h-17z"></path><path d="M19 12v6a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-6"></path><path d="M7 12v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-6"></path><path d="M6 16h12"></path></svg>
            <span className ="is-drawer-close:hidden">My Cars</span>
            </Link>
        </li>

  
      </ul>
    </div>
  </div>
</div>
  );
};

export default DashBoard;