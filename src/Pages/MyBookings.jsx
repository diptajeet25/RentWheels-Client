import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MyBookings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <h2 className='text-2xl lg:text-3xl font-bold text-center my-8 mb-8 text-gray-800'>
          My <span className='text-primary'>Bookings</span>
        </h2>
        
       
      </main>

      <Footer />
    </div>
  );
};

export default MyBookings;
