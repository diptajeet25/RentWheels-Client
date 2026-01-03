import React,{useContext,useEffect,useState} from "react"
import {AuthContext} from "../Context/AuthContext"
import Swal from "sweetalert2"

const MyBookings=()=>{
const {user}=useContext(AuthContext)
const [mybooking,setMybooking]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{
if(!user?.email)return
fetch(`https://car-rental-server-six-gold.vercel.app/mybooking?email=${user.email}`)
.then(res=>res.json())
.then(data=>{
setMybooking(data)
setLoading(false)
})
},[user])

const handleUnbook=car=>{
Swal.fire({
title:"Are you sure?",
text:"The booking will be deleted permanently.",
icon:"warning",
showCancelButton:true,
confirmButtonText:"Yes, Unbook it!"
}).then(result=>{
if(result.isConfirmed){
fetch(`https://car-rental-server-six-gold.vercel.app/booking/${car._id}`,{method:"DELETE"})
.then(res=>res.json())
.then(data=>{
if(data.deletedCount>0){
fetch("https://car-rental-server-six-gold.vercel.app/bookcar",{
method:"PATCH",
headers:{"content-type":"application/json"},
body:JSON.stringify({_id:car.carId,status:"Available"})
})
.then(()=>{
setMybooking(prev=>prev.filter(c=>c._id!==car._id))
Swal.fire({title:"Canceled!",text:"Your booking has been canceled.",icon:"success"})
})
}
})
}
})
}

return(
<div className="flex flex-col min-h-screen text-base-content">
<main className="flex-1">
<h2 className="text-2xl lg:text-3xl font-bold text-center my-8">
My <span className="text-primary">Bookings</span>
</h2>
{loading?(
<div className="flex items-center justify-center">
<div className="flex flex-col items-center gap-4">
<span className="loading loading-ring loading-lg"></span>
<p className="text-lg font-semibold text-base-content/60 animate-pulse">
Please wait...
</p>
</div>
</div>
):(
<table className="table w-[90%] lg:w-[80%] mx-auto">
<thead>
<tr>
<th></th>
<th>Name</th>
<th>Rent(per hour)</th>
<th className="hidden md:block">Location</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{mybooking.map((car,i)=>(
<tr key={i}>
<td>{i+1}</td>
<td>{car.carName}</td>
<td>{car.rent}</td>
<td className="hidden md:block">{car.location}</td>
<td>
<button onClick={()=>handleUnbook(car)} className="btn btn-error btn-sm">
Unbook
</button>
</td>
</tr>
))}
</tbody>
</table>
)}
</main>
</div>
)
}
export default MyBookings
