import React from 'react';
import Navbar from '../Components/Navbar';
import Carousel from '../Components/Carousel';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <div className='bg-gray-200'>
        <Navbar></Navbar>
       <Outlet></Outlet>
       <Footer></Footer>
    </div>
  );
};

export default Root;