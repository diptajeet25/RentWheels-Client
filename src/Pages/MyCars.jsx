import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const MyCars = () => {
    const {user}=useContext(AuthContext)
    const [mycars,setMycars]=useState([]);
    useEffect(()=>
        {
            fetch(`http://localhost:3000/mycars?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setMycars(data)
            })
        },[user])

        const handleDeleteCar=(id)=>
        {
            console.log(id);
            Swal.fire({
  title: "Are you sure?",
  text: "This car will be permanently removed from your list.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
.then((result) => {
  if (result.isConfirmed) {
      fetch(`http://localhost:3000/cars/${id}`,{
        method:'DELETE'
      })
            .then(res=>res.json())
            .then(data=>

            {
                if(data.deletedCount>0)
                {
                        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

                }
                const updateMyCars=mycars.filter(car=>car._id!==id)
                setMycars(updateMyCars);

            }
            )


  }
});
          
        }
  return (
    <div>
        <Navbar></Navbar>
        <h2 className='text-2xl lg:text-3xl font-bold text-center my-8 mb-8 text-gray-800'>My <span className='text-primary'>Cars</span></h2>
        
        <div className="overflow-x-auto w-[98%] lg:w-[70%] font-semibold text-lg  flex justify-center mx-auto">
  <table className="table">

    <thead>
      <tr className='text-black'>
        <th></th>
        <th>Name</th>
        <th>Rent(per hour)</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {mycars.map((car, i) => (
      <tr key={i} className=" text-black">
        <td className=" px-4 py-2">{i + 1}</td>
        <td className=" px-4 py-2">{car.carName}</td>
        <td className=" px-4 py-2">{car.rent}</td>
        <td className=" px-4 py-2">{car.status}</td>
        <td className='px-4 py-2'>
            <button className='badge badge-warning mr-2 mb-2'>Update</button>
            <button className='badge badge-error mb-2' onClick={()=>handleDeleteCar(car._id)}>Delete</button>
        </td>


      </tr>
    ))}
    </tbody>
  </table>
</div>
        <div>
          
        </div>

        <Footer></Footer>

    </div>
  );
};

export default MyCars;