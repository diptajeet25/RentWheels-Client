import React, { useContext, useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const MyCars = () => {
    const {user}=useContext(AuthContext)
    const [mycars,setMycars]=useState([]);
    const [updatecar,setUpdatecar]=useState();
    const [loading,setLoading]=useState(true);
    
    
    const carRef=useRef(null);

    const handleUpdate=(car)=>
    {
      setUpdatecar(car)
      carRef.current.showModal();
      console.log(car);


    }
    useEffect(()=>
        {
            fetch(`http://localhost:3000/mycars?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
        
                setMycars(data)
                setLoading(false)
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
      text: "Your Car has been deleted.",
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
        
const handleCarUpdate=(e)=>
{
  e.preventDefault()
    const form = e.target;

  const updatedCar = {
    _id: updatecar._id,
    carName: form.carname.value,
    description: form.description.value,
    category: form.category.value,
    rent: form.rent.value,
    location: form.location.value,
    image: form.image.value,
    providerName: form.username.value,
    providerEmail: form.useremail.value,
    createdAt: form.date.value,
    status: form.status.value
  };
  console.log(updatedCar)


  fetch("http://localhost:3000/updatecars",{

    method:"PATCH",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(updatedCar)
  })
  .then(res=>res.json())
  .then(data=>
    {console.log(data)
 carRef.current.close();
 
 Swal.fire({
  position: "center",
  icon: "success",
  title: "Car Info Updated Successfully",
  showConfirmButton: false,
  timer: 1500
});

 const updatedCarsList = mycars.map(car =>
          car._id === updatecar._id ? { ...car, ...updatedCar } : car
        );
        setMycars(updatedCarsList);
})
}
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
        <main className="flex-1">
        <h2 className='text-2xl lg:text-3xl font-bold text-center my-8 mb-8 text-gray-800'>My <span className='text-primary'>Cars</span></h2>
        
        <div className="overflow-x-auto w-[98%] lg:w-[70%] font-semibold text-lg  flex justify-center mx-auto">
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
            <button onClick={()=>handleUpdate(car)} className='badge badge-warning mr-2 mb-2 btn'>Update</button>
            <button className='badge badge-error mb-2 btn' onClick={()=>handleDeleteCar(car._id)}>Delete</button>
        </td>



      </tr>
    ))}
    </tbody>
  </table>
}
</div>
        <div>
          
        </div>
      

<dialog id="my_modal_5" ref={carRef} className="modal  modal-bottom sm:modal-middle">
  <div className="modal-box bg-white">
    <h2 className='text-center text-2xl text-black my-4 font-bold'>Update Car</h2>
   <form className="space-y-5"  onSubmit={handleCarUpdate}>

        <div>
          <label className="font-semibold text-black">Car Name</label>
          <input
            type="text" name="carname"
            placeholder="Enter car name"
            className="input input-bordered w-full"
            required
            defaultValue={updatecar?.carName}
            
          />
        </div>

        <div>
          <label className="font-semibold text-black">Description</label>
          <textarea name="description"
            placeholder="Write a short description about the car"
            className="textarea textarea-bordered w-full h-28"
            required
            defaultValue={updatecar?.description}
          ></textarea>
        </div>

        <div>
  <label className="font-semibold text-black">Category</label>
  <select
    name="category"
    className="select select-bordered w-full"
    required
    defaultValue={updatecar?.category || ""} 
  readOnly
  >
    <option value={updatecar?.category} disabled>
    {updatecar?.category}
    </option>
    
  </select>
</div>


        <div>
          <label className="font-semibold text-black">Rent Price (Per Day)</label>
          <input
            type="number" name="rent"
            min="0"
            placeholder="Enter rent price per day"
            className="input input-bordered w-full"
            required
            defaultValue={updatecar?.rent}
          />
        </div>

        <div>
          <label className="font-semibold text-black">Location</label>
          <input
            type="text" name="location"
            placeholder="Enter car location"
            className="input input-bordered w-full"
            required
            defaultValue={updatecar?.location}
          />
        </div>

        <div>
          <label className="font-semibold text-black">Car Image URL</label>
          <input
            type="url" name="image"
            placeholder="Paste image URL"
            className="input input-bordered w-full"
            required
            defaultValue={updatecar?.image}
          />
        </div>

        <div>
          <label className="font-semibold text-black">Provider Name</label>
          <input
            type="text" name="username"
            placeholder="Provider name"
            className="input input-bordered w-full"
            defaultValue={user?.displayName}
            readOnly
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Provider Email</label>
          <input
            type="email" name="useremail"
            placeholder="Provider email"
            className="input input-bordered w-full"
            defaultValue={user?.email}
            readOnly
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Created At</label>
          <input
            type="date"  name="date"
            className="input input-bordered w-full"
            required
            defaultValue={updatecar?.createdAt}
          />
        </div>

        <div>
          <label className="font-semibold text-black">Status</label>
          <select className="select select-bordered w-full" name="status" required>
            <option>Available</option>
            <option>Booked</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4 text-lg">
          Update Car
        </button>
        </form>
    <div className="modal-action">
      <form method="dialog">
        
        <button className="btn btn-neutral">Close</button>
      </form>
    </div>
  </div>
</dialog>
</main>

        <Footer></Footer>

    </div>
  );
};

export default MyCars;