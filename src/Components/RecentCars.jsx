import React, { useState } from 'react';
import Card from './Card';

const RecentCars = ({latestCars}) => {
   
const [cars,setCars]=useState(latestCars)
  
  return (
    <div>
        <h2 className='text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-800'>Recent <span className='text-primary'>Cars</span></h2>
<div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 w-[90%]  lg:w-[80%] mx-auto'>
        {
            cars.map((car,i)=> <Card key={i} car={car} ></Card>)
        }
        </div>
    </div>
  );
};

export default RecentCars;