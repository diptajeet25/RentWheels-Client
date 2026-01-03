import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddCarForm = () => {
  const {user}=useContext(AuthContext);


    const handleAddCar = (e) => {
  e.preventDefault();

  const form = e.target;

  const newCar = {
    carName: form.carname.value,
    description: form.description.value,
    category: form.category.value,
    rent: form.rent.value,
    location: form.location.value,
    image: form.image.value,
    video: form.video.value,
    providerName: form.username.value,
    providerEmail: form.useremail.value,
    createdAt: form.date.value,
    status: form.status.value
  };

  fetch('https://car-rental-server-six-gold.vercel.app/cars',{
   method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newCar)

  })
  .then(res=>res.json())
  .then(data=>
    {
      if(data.insertedId)
      {
       Swal.fire({
  position: "center",
  icon: "success",
  title: "Car added successfully!",
  showConfirmButton: false,
  timer: 1500
});
        form.reset();
      }
    }
    )

};

  return (
    <div className="w-[95%] lg:w-[60%] mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Add a New Car
      </h2>

      <form className="space-y-5" onSubmit={handleAddCar}>

        <div>
          <label className="font-semibold text-black">Car Name</label>
          <input
            type="text" name="carname"
            placeholder="Enter car name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Description</label>
          <textarea name="description"
            placeholder="Write a short description about the car"
            className="textarea textarea-bordered w-full h-28"
            required
          ></textarea>
        </div>

        <div>
          <label className="font-semibold text-black">Category</label>
          <select  name="category" className="select select-bordered w-full" required>
            <option disabled selected>Select category</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
            <option>Luxury</option>
            <option>Electric</option>
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
          />
        </div>

        <div>
          <label className="font-semibold text-black">Location</label>
          <input
            type="text" name="location"
            placeholder="Enter car location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">Car Image URL</label>
          <input
            type="url" name="image"
            placeholder="Paste image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

                <div>
          <label className="font-semibold text-black">Car Video URL</label>
          <input
            type="url" name="video"
            placeholder="Paste video URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        

        <div>
          <label className="font-semibold text-black">Provider Name</label>
          <input
            type="text" name="username"
            placeholder="Provider name"
            className="input input-bordered w-full"
            defaultValue={user.displayName}
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
            defaultValue={user.email}
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
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;
