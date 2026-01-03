import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { MapPin, Calendar, User, Mail, Car, Tag } from "lucide-react"
import { AuthContext } from '../Context/AuthContext'
import Swal from 'sweetalert2'

const getYoutubeEmbedUrl = (url) => {
  if (!url) return null
  let videoId = null
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0]
  } else if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0]
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null
}

const CarDetails = () => {
  const carInfo = useLoaderData()
  const [car, setCar] = useState(carInfo)
  const [loading, setLoading] = useState(false)
  const { user } = useContext(AuthContext)

  const handleBooking = (car) => {
    setLoading(true)
    const bookingCar = {
      carId: car._id,
      carName: car.carName,
      rent: car.rent,
      location: car.location,
      category: car.category,
      bookedby: user.email
    }
    fetch("https://car-rental-server-six-gold.vercel.app/bookingcars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingCar)
    })
      .then(res => res.json())
      .then(() => {
        fetch("https://car-rental-server-six-gold.vercel.app/bookcar", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ _id: car._id, status: "Booked" })
        })
          .then(res => res.json())
          .then(() => {
            setCar(prev => ({ ...prev, status: "Booked" }))
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Car Reserved Successfully",
              showConfirmButton: false,
              timer: 1500
            })
            setLoading(false)
          })
      })
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="w-full">
            <img src={car.image} alt={car.carName} className="w-full h-[500px] object-contain" />
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 flex items-center gap-3">
                <Car className="w-9 h-9 text-blue-600" />
                {car.carName}
              </h1>
              <span className="px-5 py-2 rounded-full text-sm font-semibold border bg-indigo-100 text-black">
                {car.category}
              </span>
            </div>
            <p className="mt-4 text-3xl font-bold text-primary flex items-center gap-2">
              <Tag className="w-7 h-7" />
              {car.rent} BDT / day
            </p>
            <p className="mt-6 text-gray-700 text-lg leading-relaxed">
              {car.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-gray-50 rounded-2xl border flex gap-4">
                <MapPin className="w-8 h-8 text-red-500" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Location</h2>
                  <p className="text-gray-600">{car.location}</p>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border flex gap-4">
                <Tag className="w-8 h-8 text-blue-500" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Status</h2>
                  {car.status === "Available" ? (
                    <span className="badge bg-indigo-100 text-black mt-1">{car.status}</span>
                  ) : (
                    <span className="badge bg-red-300 text-black mt-1">{car.status}</span>
                  )}
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border flex gap-4">
                <User className="w-8 h-8 text-green-600" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Owner</h2>
                  <p className="font-medium text-gray-800">{car.providerName}</p>
                  <div className="flex items-center gap-2 mt-1 text-gray-500 text-sm">
                    <Mail className="w-4 h-4" />
                    {car.providerEmail}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border flex gap-4">
                <Calendar className="w-8 h-8 text-orange-500" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">Posted On</h2>
                  <p className="text-gray-600">{car.createdAt}</p>
                </div>
              </div>
            </div>
          {car.video && (
            <div className="mt-6 px-6">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Car Video</h2>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={getYoutubeEmbedUrl(car.video)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

            <div className="mt-12">
              {user ? (
                car.status === "Available" ? (
                  <button onClick={() => handleBooking(car)} disabled={loading} className="btn w-full py-5 text-xl rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
                    {loading ? <span className="loading loading-dots loading-lg"></span> : "Book this car"}
                  </button>
                ) : (
                  <button disabled className="btn w-full py-5 text-xl rounded-2xl bg-gray-400 text-white">
                    Reserved
                  </button>
                )
              ) : (
                <button disabled className="btn w-full py-5 text-xl rounded-2xl bg-gray-400 text-white">
                  Please Login to Book Car
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CarDetails
