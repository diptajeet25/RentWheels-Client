import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const AllCars = () => {
    const cars=useLoaderData();
   
  return (
    <div>
        <Navbar></Navbar>
          <h2 className='text-3xl lg:text-4xl font-bold text-center my-10 mb-8 text-gray-800'>Available <span className='text-primary'>Cars</span></h2>

          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 w-[90%] md:w-[98%] lg:w-[90%] mx-auto'>
        {
            cars.map((car,i)=> <Card key={i} car={car} ></Card>)
        }
        </div>

        <Footer></Footer>

    </div>
  );
};

export default AllCars;