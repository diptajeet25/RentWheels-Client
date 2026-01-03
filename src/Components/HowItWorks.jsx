import { Search, CalendarCheck, Car } from "lucide-react"

const HowItWorks = () => {
  return (
    <section className="pt-24 ">
      <div className="w-[90%] lg:w-[80%] mx-auto ">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-900">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Renting a car with us is quick and easy. Follow these simple steps
            to get on the road in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-light p-8 rounded-2xl text-center">
            <Search className="w-14 h-14 mx-auto text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              1. Browse Cars
            </h3>
            <p className="text-gray-600">
              Explore available cars by category, price, and location to find
              the perfect ride for your journey.
            </p>
          </div>

          <div className="card-light p-8 rounded-2xl text-center">
            <CalendarCheck className="w-14 h-14 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              2. Book Your Car
            </h3>
            <p className="text-gray-600">
              Select your preferred car, choose rental dates, and confirm your
              booking instantly.
            </p>
          </div>

          <div className="card-light p-8 rounded-2xl text-center">
            <Car className="w-14 h-14 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-2xl font-semibold mb-3">
              3. Drive & Enjoy
            </h3>
            <p className="text-gray-600">
              Pick up the car from the selected location and enjoy a smooth,
              comfortable driving experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
