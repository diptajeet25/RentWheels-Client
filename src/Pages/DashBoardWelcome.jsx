import React, { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { useQuery } from "@tanstack/react-query"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Link } from "react-router"

const DashboardHome = () => {
  const { user } = useContext(AuthContext)

  const COLORS = ["#4f46e5", "#16a34a", "#ca8a04", "#dc2626", "#0891b2"]

  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-car-stats"],
    queryFn: async () => {
      const res = await fetch(
        "https://car-rental-server-six-gold.vercel.app/dashboard/car-stats"
      )
      if (!res.ok) throw new Error("Failed to fetch dashboard stats")
      return res.json()
    }
  })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    )
  }

  const carsData = [
    { category: "SUV", count: data?.suvCars },
    { category: "Sedan", count: data?.sedanCars },
    { category: "Hatchback", count: data?.hatchbackCars },
    { category: "Luxury", count: data?.luxuryCars },
    { category: "Electric", count: data?.electricCars }
  ]

  return (
    <div className="px-6 py-6 text-black">

      {/* Welcome */}
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Welcome back{user?.displayName ? `, ${user.displayName}` : ""}
        </h1>
        <p className="text-gray-500 mt-1">
          Dashboard overview of your car rental activity
        </p>
      </div>

   <h2 className="text-2xl font-bold text-center mb-6">Key Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">Total Cars</p>
          <p className="text-3xl font-semibold mt-2">{data?.totalCars}</p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">Booked Cars</p>
          <p className="text-3xl font-semibold mt-2">{data?.bookedCars}</p>
        </div>

        <div className="border rounded-xl p-6">
          <p className="text-sm text-gray-500">Available Cars</p>
          <p className="text-3xl font-semibold mt-2">{data?.availableCars}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Car Distribution by Category
        </h2>

        <div className="w-full h-[320px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={carsData}
                dataKey="count"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {carsData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      
     

    </div>
  )
}

export default DashboardHome
