import React from 'react';
import error from '../assets/404 page.png'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-[#fdf7ee]'>
       <div
  className="bg-no-repeat bg-center  bg-contain lg:bg-cover min-h-screen w-full lg:w-[80%] mx-auto relative"
  style={{ backgroundImage: `url(${error})` }}
>
            <title>Error 404 - Page Not Found</title>
       
            
            <div className=' flex justify-center absolute bottom-70 left-[32%] lg:bottom-12 md:left-[42%] '>
            <NavLink to="/" className="btn btn-primary w-36 my-2 mb-6">Back To Home</NavLink>
            </div>
            
 
            
        </div>
        </div>
    );
};

export default ErrorPage;