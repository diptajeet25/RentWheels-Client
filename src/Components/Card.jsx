import React from 'react';
import { Link } from 'react-router';

const Card = ({car}) => {
    console.log(car);
  return (
    <div>
        <div className="card bg-base-100 w-100 shadow-sm">
  <figure>
    <img
      src={car.image}
      className='h-[200px] w-[70%] mx-auto rounded-2xl'
      alt={car.carName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {car.carName}
      <div className="badge badge-secondary">{car.status}</div>
    </h2>
    {car.description.split(" ").slice(0, 20).join(" ")}...
<div className="card-actions justify-between items-center mt-3 flex-wrap gap-2">
  
  <span
    className={`px-3 py-1 rounded-full text-sm font-semibold shadow-sm
      ${car.category === 'SUV' ? 'bg-green-100 text-green-800' : ''}
      ${car.category === 'Sedan' ? 'bg-blue-100 text-blue-800' : ''}
      ${car.category === 'Hatchback' ? 'bg-yellow-100 text-yellow-800' : ''}
      ${car.category === 'Luxury' ? 'bg-purple-100 text-purple-800' : ''}
      ${car.category === 'Electric' ? 'bg-teal-100 text-teal-800' : ''}`}
  >
    {car.category}
  </span>

  <span className="px-3 py-1 rounded-full text-sm font-semibold shadow-sm bg-gray-100 text-gray-800">
    Rent: {car.rent} BDT/day
  </span>
</div>
<div className="flex justify-start items-center mt-2 gap-2 flex-wrap">
  <span className="px-3 py-1 rounded-full text-md font-semibold shadow-sm bg-indigo-100 text-indigo-800">
    Provider: {car.providerName}
  </span>
</div>

<Link to={`/cardetails/${car.
_id}`} className="btn btn-active btn-primary mt-2">View Details</Link>


  </div>
</div>
    </div>
  );
};

export default Card;