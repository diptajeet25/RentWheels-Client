import React from "react";
import { Link } from "react-router";

const Card=({car})=>{
return(
<div className="h-full">
<div className="card card-light h-full ">
<figure>
<img src={car.image} alt={car.carName} className="h-[250px] w-full mx-auto rounded-2xl "/>
</figure>

<div className="card-body flex flex-col">
<h2 className="card-title flex items-center gap-2 flex-wrap">
{car.carName}
<span className={`px-3 py-1 text-sm font-medium rounded-full badge ${car.status==="Available"?"bg-indigo-100":"bg-red-300"} text-black`}>
{car.status}
</span>
</h2>

<p className="text-sm text-gray-700">
{car.description.split(" ").slice(0,20).join(" ")}...
</p>

<div className="flex justify-between items-center mt-3 flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-black">
{car.category}
</span>
<span className="px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-black">
{car.rent} BDT/day
</span>
</div>

<span className="mt-2 px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-black w-fit">
Provider: {car.providerName}
</span>

<Link to={`/cardetails/${car._id}`} className="btn btn-primary mt-auto">
View Details
</Link>

</div>
</div>
</div>
);};

export default Card;
