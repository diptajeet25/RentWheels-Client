import React,{useContext,useEffect,useRef,useState} from "react"
import {AuthContext} from "../Context/AuthContext"
import Swal from "sweetalert2"

const MyCars=()=>{
const {user}=useContext(AuthContext)
const [mycars,setMycars]=useState([])
const [updatecar,setUpdatecar]=useState(null)
const [loading,setLoading]=useState(true)
const carRef=useRef(null)

useEffect(()=>{
if(!user?.email)return
fetch(`https://car-rental-server-six-gold.vercel.app/mycars?email=${user.email}`)
.then(res=>res.json())
.then(data=>{
setMycars(data)
setLoading(false)
})
},[user])

const handleUpdate=car=>{
setUpdatecar(car)
carRef.current.showModal()
}

const handleDeleteCar=id=>{
Swal.fire({
title:"Are you sure?",
text:"This car will be permanently removed from your list.",
icon:"warning",
showCancelButton:true,
confirmButtonText:"Yes, delete it!"
}).then(result=>{
if(result.isConfirmed){
fetch(`https://car-rental-server-six-gold.vercel.app/cars/${id}`,{method:"DELETE"})
.then(res=>res.json())
.then(data=>{
if(data.deletedCount>0){
setMycars(prev=>prev.filter(car=>car._id!==id))
Swal.fire({title:"Deleted!",text:"Your car has been deleted.",icon:"success"})
}
})
}
})
}

const handleCarUpdate=e=>{
e.preventDefault()
const form=e.target
const updatedCar={
_id:updatecar._id,
carName:form.carname.value,
description:form.description.value,
category:form.category.value,
rent:form.rent.value,
location:form.location.value,
image:form.image.value,
providerName:form.username.value,
providerEmail:form.useremail.value,
createdAt:form.date.value,
status:form.status.value
}
fetch("https://car-rental-server-six-gold.vercel.app/updatecars",{
method:"PATCH",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(updatedCar)
})
.then(res=>res.json())
.then(()=>{
carRef.current.close()
setMycars(prev=>prev.map(car=>car._id===updatecar._id?{...car,...updatedCar}:car))
Swal.fire({position:"center",icon:"success",title:"Car Info Updated Successfully",showConfirmButton:false,timer:1500})
})
}

return(
<div className="flex flex-col min-h-screen text-base-content">
<main className="flex-1">
<h2 className="text-2xl lg:text-3xl font-bold text-center my-8">
My <span className="text-primary">Cars</span>
</h2>
<div className="overflow-x-auto w-[98%] lg:w-[70%] mx-auto flex justify-center">
{loading?(
<div className="flex flex-col items-center gap-4">
<span className="loading loading-ring loading-lg"></span>
<p className="text-lg font-semibold text-base-content/60 animate-pulse">
Please wait...
</p>
</div>
):(
<table className="table">
<thead>
<tr>
<th></th>
<th>Name</th>
<th>Rent(per hour)</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{mycars.map((car,i)=>(
<tr key={i}>
<td>{i+1}</td>
<td>{car.carName}</td>
<td>{car.rent}</td>
<td>{car.status}</td>
<td>
<button onClick={()=>handleUpdate(car)} className="btn btn-warning btn-sm mr-2">
Update
</button>
<button onClick={()=>handleDeleteCar(car._id)} className="btn btn-error btn-sm">
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
)}
</div>

<dialog ref={carRef} className="modal modal-bottom sm:modal-middle">
<div className="modal-box bg-base-100 text-base-content">
<h2 className="text-center text-2xl my-4 font-bold">Update Car</h2>
<form className="space-y-5" onSubmit={handleCarUpdate}>
<div>
<label className="font-semibold">Car Name</label>
<input type="text" name="carname" className="input input-bordered w-full" required defaultValue={updatecar?.carName}/>
</div>
<div>
<label className="font-semibold">Description</label>
<textarea name="description" className="textarea textarea-bordered w-full h-28" required defaultValue={updatecar?.description}></textarea>
</div>
<div>
<label className="font-semibold">Category</label>
<select name="category" className="select select-bordered w-full" readOnly defaultValue={updatecar?.category}>
<option>{updatecar?.category}</option>
</select>
</div>
<div>
<label className="font-semibold">Rent Price (Per Day)</label>
<input type="number" name="rent" className="input input-bordered w-full" required defaultValue={updatecar?.rent}/>
</div>
<div>
<label className="font-semibold">Location</label>
<input type="text" name="location" className="input input-bordered w-full" required defaultValue={updatecar?.location}/>
</div>
<div>
<label className="font-semibold">Car Image URL</label>
<input type="url" name="image" className="input input-bordered w-full" required defaultValue={updatecar?.image}/>
</div>
<div>
<label className="font-semibold">Provider Name</label>
<input type="text" name="username" className="input input-bordered w-full" readOnly defaultValue={user?.displayName}/>
</div>
<div>
<label className="font-semibold">Provider Email</label>
<input type="email" name="useremail" className="input input-bordered w-full" readOnly defaultValue={user?.email}/>
</div>
<div>
<label className="font-semibold">Created At</label>
<input type="date" name="date" className="input input-bordered w-full" required defaultValue={updatecar?.createdAt}/>
</div>
<div>
<label className="font-semibold">Status</label>
<select name="status" className="select select-bordered w-full" defaultValue={updatecar?.status}>
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
<button className="btn">Close</button>
</form>
</div>
</div>
</dialog>

</main>
</div>
)
}
export default MyCars
