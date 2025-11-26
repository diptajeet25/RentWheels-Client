import React from "react";
import { Car, ShieldCheck, Clock, DollarSign } from "lucide-react";

const WhyRentUs = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-gray-800">
        Why Rent <span className="text-primary">Us?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


        <div className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-4 text-primary">
            <Car size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Wide Variety of Cars
          </h3>
          <p className="text-gray-600">
            SUVs, Sedans, Luxury & Electric—choose the perfect car for every need.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-4 text-primary">
            <ShieldCheck size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Safe & Maintained
          </h3>
          <p className="text-gray-600">
            Regular servicing ensures your ride is smooth, clean & absolutely safe.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-4 text-primary">
            <Clock size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Fast & Easy Booking
          </h3>
          <p className="text-gray-600">
            Book any car within minutes—clean UI & smooth user experience.
          </p>
        </div>


        <div className="p-6 bg-white shadow-lg rounded-2xl border hover:shadow-xl transition duration-300 text-center">
          <div className="flex justify-center mb-4 text-primary">
            <DollarSign size={40} />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800">
            Affordable Pricing
          </h3>
          <p className="text-gray-600">
            Best rental rates with zero hidden fees—100% transparent billing.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyRentUs;
