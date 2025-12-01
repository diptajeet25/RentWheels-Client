import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MapPin, Calendar, User, Mail, Car, Tag } from "lucide-react";
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const carInfo=useLoaderData();
    const [car,setCar]=useState(carInfo);

    const {user}=useContext(AuthContext);
  

    const handleBooking=(car)=>
    {
    
      const bookingCar={
        carId:car._id,
        carName:car.carName,
        rent:car.rent,
        location:car.location,
        category:car.category,
        bookedby:user.email
      }
    
      fetch("https://car-rental-server-six-gold.vercel.app/bookingcars",
        {
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(bookingCar)
        }
      )
      .then(res=>res.json())
      .then(data=>
        {
          console.log(data)

          const statusCar=
          {
            _id:car._id,
            status:"Booked"
          }

          fetch("https://car-rental-server-six-gold.vercel.app/bookcar",{
            method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(statusCar)

          })
          .then(res=>res.json())
          .then(data=>
            {
              console.log(data)
              setCar(prev => ({ ...prev, status: "Booked" }));
              Swal.fire({
  position: "center",
  icon: "success",
  title: "Car Reserved SuccessFully",
  showConfirmButton: false,
  timer: 1500
});
        })
    }
  )

    }
  return (
    <div>
        <Navbar></Navbar>

   <div className="max-w-5xl mx-auto p-6 my-10">
      

      <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={car.image}
          alt={car.carName}
          className="w-full h-[350px] object-cover"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-2">
          <Car className="w-8 h-8 text-blue-600" />
          {car.carName}
        </h1>

        <span
          className={`px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm border
            ${car.category === "SUV" && "bg-green-100 text-green-700 border-green-300"}
            ${car.category === "Sedan" && "bg-blue-100 text-blue-700 border-blue-300"}
            ${car.category === "Hatchback" && "bg-yellow-100 text-yellow-700 border-yellow-300"}
            ${car.category === "Luxury" && "bg-purple-100 text-purple-700 border-purple-300"}
            ${car.category === "Electric" && "bg-teal-100 text-teal-700 border-teal-300"}
          `}
        >
          {car.category}
        </span>
      </div>

      <p className="mt-3 text-2xl font-bold text-orange-600 flex items-center gap-2">
        <Tag className="w-6 h-6" />
        Rent: {car.rent} BDT / day
      </p>

      <p className="mt-5 text-gray-700 leading-relaxed text-lg">
        {car.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">


        <div className="p-5 bg-white rounded-xl shadow-lg border flex gap-4 items-start">
          <MapPin className="w-7 h-7 text-red-500" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Location</h2>
            <p className="text-gray-600">{car.location}</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-lg border flex gap-4 items-start">
          <Tag className="w-7 h-7 text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Status</h2>
           {
            car.status==="Available" ?
            <span className="px-3 py-1 text-sm font-medium rounded-full badge badge-secondary ">
              {car.status}  </span> :  <span className="px-3 py-1 text-sm font-medium rounded-full badge badge-warning ">
              {car.status}  </span>

           } 
          
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-lg border flex gap-4 items-start">
          <User className="w-7 h-7 text-green-600" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Owner</h2>
            <p className="font-medium text-gray-800">{car.providerName}</p>

            <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
              <Mail className="w-4 h-4" />
              {car.providerEmail}
            </div>
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl shadow-lg border flex gap-4 items-start">
          <Calendar className="w-7 h-7 text-orange-500" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Posted On</h2>
            <p className="text-gray-600">{car.createdAt}</p>
          </div>
        </div>

      </div>

      <div className="mt-10">
       { car.status==="Available" ?  <button onClick={()=>handleBooking(car)} className="btn w-full py-4 rounded-xl text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
          Book This Car
        </button>:  <button className="btn w-full py-4 rounded-xl text-lg font-semibold  bg-gray-400 text-white hover:bg-blue-700 transition" disabled>
          Reserved
        </button> }
      </div>

    </div>

        <Footer></Footer>
    </div>
  );
};

export default CarDetails;