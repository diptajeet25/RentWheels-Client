import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About=()=>{
    return(
        <div>
<Navbar></Navbar>
<div className=" text-gray-800">

<section className="relative h-[50vh] flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white">
<div className="text-center px-4">
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">About Our Car Rental Service</h1>
<p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-gray-100">
Premium cars, transparent pricing, and a smooth rental experience
</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-16">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
<p className="text-gray-600 leading-relaxed">
We are a trusted car rental platform committed to delivering safe, comfortable, and affordable vehicles for every journey. Whether you need a luxury ride, a family car, or an adventure vehicle, we make renting simple and reliable.
</p>
<p className="mt-4 text-gray-600 leading-relaxed">
Our platform is designed with customer satisfaction at its core, ensuring quick booking, flexible options, and quality service.
</p>
</div>

<div className="rounded-2xl shadow-lg p-8 card-light">
<h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
<ul className="list-disc list-inside space-y-3 text-gray-600">
<li> Wide range of well-maintained vehicles</li>
<li> Transparent pricing with no hidden fees</li>
<li> Easy online booking & fast confirmation</li>
<li>Trusted providers & verified listings</li>
<li>Customer support you can rely on</li>
</ul>
</div>
</div>
</section>

<section className=" py-16">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="p-8 rounded-2xl card-light">
<h3 className="text-2xl font-bold mb-4">Our Mission</h3>
<p className="text-gray-700 leading-relaxed">
To make car rental effortless and accessible by offering reliable vehicles, modern technology, and customer-first service for every trip.
</p>
</div>

<div className="p-8 rounded-2xl card-light">
<h3 className="text-2xl font-bold mb-4">Our Vision</h3>
<p className="text-gray-700 leading-relaxed">
To become a leading car rental platform recognized for trust, innovation, and exceptional user experience.
</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-8">
<h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Achievements</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

<div className="bg-white p-6 rounded-2xl shadow">

<h4 className="text-3xl font-bold text-indigo-600">500+</h4>
<p className="mt-2 text-gray-600">Cars Available</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="text-3xl font-bold text-indigo-600">1K+</h4>
<p className="mt-2 text-gray-600">Happy Customers</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="text-3xl font-bold text-indigo-600">100+</h4>
<p className="mt-2 text-gray-600">Trusted Providers</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="text-3xl font-bold text-indigo-600">24/7</h4>
<p className="mt-2 text-gray-600">Customer Support</p>
</div>
</div>
</section>

</div>
<Footer></Footer>
</div>
);};

export default About;
