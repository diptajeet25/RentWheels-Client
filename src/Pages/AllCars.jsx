import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { motion } from "framer-motion";

import noCar from '../assets/NoCar.png'

const AllCars = () => {
    const carsData=useLoaderData();
    const [cars,setCars]=useState(carsData);
    const handleSearch=(e)=>
    {
      e.preventDefault();
      const name=e.target.value.trim();
      console.log(name);
      if(!name )
      {
        
        setCars(carsData)

        return
      }
const desiredCars=carsData.filter(car=>car.carName.toLowerCase().startsWith(name.toLowerCase()))
setCars(desiredCars);


    }
    const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };

  
   
  return (
    <div>
        <Navbar></Navbar>
          <h2 className='text-3xl lg:text-4xl font-bold text-center my-10 mb-8 text-gray-800'>Available <span className='text-primary'>Cars</span></h2>
<form  className='h-full flex gap-0 items-center justify-end mx-4 my-4'>
  <input onChange={handleSearch}  type='text' name='search' className='input input-bordered rounded-r-none ' placeholder='Search Car By Name'></input>
  
</form>
          {
            cars.length > 0  ?  
              <motion.div
        className='grid grid-col-1 md:grid-cols-2  lg:grid-cols-3 gap-6 gap-x-6 w-[90%] md:w-[98%] lg:w-[90%] mx-auto' 
     variants={containerVariants}
        initial="hidden"
        animate="visible"
       
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
      >
        {
            cars.map((car,i)=> <motion.div key={car._id} variants={cardVariants}>
<Card className="h-full" key={i} car={car} ></Card>  </motion.div>)
            
        }
        </motion.div>
         : <div className="flex flex-col items-center justify-center h-[60vh] text-center bg-gray-50 rounded-xl shadow-lg mx-4 md:mx-20 p-10 mt-10">
      <img
        src={noCar}
        alt="No cars found"
        className="w-48 h-48 mb-6  opacity-80"
      />
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Oops! No Cars Found</h3>
      <p className="text-gray-500 mb-4">
        We couldn't find any cars matching your search. Try a different name or check back later.
      </p>

    </div>
          }

        <Footer></Footer>

    </div>
  );
};

export default AllCars;