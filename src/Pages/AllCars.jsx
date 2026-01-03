import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import noCar from '../assets/NoCar.png'
import { useQuery } from '@tanstack/react-query'

const AllCars = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const limit = 8

  const { data = {}, isLoading } = useQuery({
    queryKey: ['allcars', search, category, status, sort, page],
    queryFn: async () => {
      const res = await fetch(
        `https://car-rental-server-six-gold.vercel.app/allcars?search=${search}&category=${category}&status=${status}&sort=${sort}&page=${page}&limit=${limit}`
      )
      return res.json()
    }
  })

  const cars = data.cars || []
  const totalPages = data.totalPages || 1

  if (isLoading) {
    return (
      <div className="flex items-center min-h-screen justify-center">
        <span className="loading loading-ring loading-lg text-blue-600"></span>
      </div>
    )
  }

  return (
    <div>
      <Navbar />

      <h2 className="text-3xl lg:text-4xl font-bold text-center my-10 text-gray-800">
        Explore <span className="text-primary">Cars</span>
      </h2>

      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by car name"
          className="input input-bordered"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setPage(1)
          }}
        />

        <select
          className="select select-bordered"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setPage(1)
          }}
        >
          <option value="">All Categories</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Electric">Electric</option>
          <option value="Luxury">Luxury</option>
          <option value="Hatchback">Hatchback</option>
        </select>

        <select
          className="select select-bordered"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value)
            setPage(1)
          }}
        >
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Booked">Booked</option>
        </select>

        <select
          className="select select-bordered"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="latest">Latest</option>
        </select>
      </div>

      {cars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90%] mx-auto">
          {cars.map(car => (
            <Card key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <img src={noCar} className="w-48 mb-4 opacity-80" />
          <p className="text-gray-500">No cars found</p>
        </div>
      )}

      <div className="flex justify-center gap-3 my-10">
        {[...Array(totalPages).keys()].map(num => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`btn ${page === num + 1 ? 'btn-primary' : ''}`}
          >
            {num + 1}
          </button>
        ))}
      </div>

      <Footer />
    </div>
  )
}

export default AllCars
