import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const MyBookings = () => {
  const {user}=useContext(AuthContext)
  const [mybooking,setMybooking]=useState([])
  const [loading,setLoading]=useState(true);

  useEffect(() => {
  if (!user?.email) return;

  fetch(`https://car-rental-server-six-gold.vercel.app/mybooking?email=${user.email}`)
    .then(res => res.json())
    .then(data =>
      { 
       
        setMybooking(data)
        setLoading(false)
      
  })
    .catch(err => console.error(err));

}, [user]);

const handleUnbook=(car)=>
{
  console.log(car);

              Swal.fire({
    title: "Are you sure?",
    text: "The booking will be deleted permanently.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Unbook it!"
  })
.then((result)=>
{
  if(result.isConfirmed)
  {
     fetch(`https://car-rental-server-six-gold.vercel.app/booking/${car._id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{console.log(data)
        if(data.deletedCount>0)
        {

            const statusCar=
          {
            _id:car.carId,
            status:"Available"
          }
          fetch("https://car-rental-server-six-gold.vercel.app/bookcar",
            {
                method:"PATCH",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(statusCar)
            }
          )
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            setMybooking(prev => prev.filter(c => c._id !== car._id));
              Swal.fire({
                title: "Cancled!",
                text: "Your Booking has been Cancled.",
                icon: "success"
              });
          })
                            


        }
      })
  }
})

}


  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-1">
        <h2 className='text-2xl lg:text-3xl font-bold text-center my-8 mb-8 text-gray-800'>
          My <span className='text-primary'>Bookings</span>
        </h2>

        {loading ? (
                    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-ring loading-lg text-blue-600"></span>
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Please wait...
        </p>
      </div>
    </div>
      ) : 


        <table className="table w-[90%] lg:w-[80%] mx-auto  ">

    <thead>
      <tr className='text-black'>
        <th></th>
        <th>Name</th>
        <th>Rent(per hour)</th>
        <th className='hidden md:block'>Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {mybooking.map((car, i) => (
      <tr key={i} className=" text-black">
        <td className=" px-4 py-2">{i + 1}</td>
        <td className=" px-4 py-2">{car.carName}</td>
        <td className=" px-4 py-2">{car.rent}</td>
        <td className=" px-4 py-2 hidden md:block">{car.location}</td>
        <td className='px-4 py-2'>
            
<button onClick={()=>handleUnbook(car)} className="btn btn-error btn-sm text-black rounded-md">
 Unbook
</button>


        </td>



      </tr>
    ))}
    </tbody>
  </table>
}
       
      </main>

      <Footer />
    </div>
  );
};

export default MyBookings;
