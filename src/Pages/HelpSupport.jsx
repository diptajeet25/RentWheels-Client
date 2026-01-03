import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { HelpCircle, Phone, Mail, MapPin, Car, CreditCard, User } from "lucide-react"

const HelpSupport = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16 card-light p-10 rounded-3xl shadow-lg">
          <h1 className="text-4xl lg:text-5xl font-extrabold  flex justify-center items-center gap-3">
            <HelpCircle className="w-10 h-10 text-blue-600" />
            Help & Support
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Need help with booking, payments, or your account? We’re here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="card-light p-6 rounded-2xl shadow-md text-center">
            <Car className="w-10 h-10 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Booking Issues</h3>
            <p className="text-gray-600 mt-2">
              Problems with reserving, canceling, or viewing your bookings.
            </p>
          </div>
          <div className="card-light p-6 rounded-2xl shadow-md text-center">
            <CreditCard className="w-10 h-10 mx-auto" />
            <h3 className="mt-4 text-xl font-semibold">Payment Support</h3>
            <p className="text-gray-600 mt-2">
              Questions related to rental charges, refunds, or payment methods.
            </p>
          </div>
          <div className="card-light p-6 rounded-2xl shadow-md text-center">
            <User className="w-10 h-10 mx-auto " />
            <h3 className="mt-4 text-xl font-semibold">Account Help</h3>
            <p className="text-gray-600 mt-2">
              Assistance with login, profile updates, or account security.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                How do I book a car?
              </h4>
              <p className="text-gray-600 mt-2">
                Simply browse available cars, view details, and click the “Book this car” button if the car is available.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Can I cancel a booking?
              </h4>
              <p className="text-gray-600 mt-2">
                Yes, you can cancel your booking from your dashboard before the rental period starts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                What payment methods are supported?
              </h4>
              <p className="text-gray-600 mt-2">
                We currently support secure online payments and cash-based rental confirmation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contact Support
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            <textarea placeholder="Describe your issue" className="textarea textarea-bordered w-full h-32"></textarea>
            <button className="btn md:col-span-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Submit Request
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-10">
          <div className="card-light p-6 rounded-2xl ">
            <Phone className="w-8 h-8 mx-auto " />
            <p className="mt-3 font-semibold">+880 1234-567890</p>
          </div>
          <div className="card-light p-6 rounded-2xl">
            <Mail className="w-8 h-8 mx-auto" />
            <p className="mt-3 font-semibold">support@carrental.com</p>
          </div>
          <div className="card-light p-6 rounded-2xl">
            <MapPin className="w-8 h-8 mx-auto " />
            <p className="mt-3 font-semibold">Bangladesh</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HelpSupport
