import {Car,Clock,ShieldCheck,Headphones,MapPin,Wallet} from "lucide-react"

const Services=()=>{
return(
<section className="pt-24">
<div className="w-[90%] lg:w-[80%] mx-auto">
<div className="text-center mb-6">
<h2 className="text-3xl lg:text-4xl font-extrabold text-base-content">
Our <span className="text-primary">Services</span>
</h2>
<p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">
We provide reliable, flexible, and affordable car rental services designed to make your journey smooth and stress-free.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<Car className="w-12 h-12 text-blue-600 mb-4"/>
<h3 className="text-xl font-semibold mb-2">Wide Range of Cars</h3>
<p className="text-base-content/70">
Choose from hatchbacks, sedans, SUVs, and premium vehicles to suit every travel need.
</p>
</div>
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<Clock className="w-12 h-12 text-green-600 mb-4"/>
<h3 className="text-xl font-semibold mb-2">Flexible Rental Duration</h3>
<p className="text-base-content/70">
Rent cars hourly, daily, or weekly with flexible plans that match your schedule.
</p>
</div>
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<ShieldCheck className="w-12 h-12 text-indigo-600 mb-4"/>
<h3 className="text-xl font-semibold mb-2">Safe & Verified Vehicles</h3>
<p className="text-base-content/70">
All cars are verified, well-maintained, and regularly inspected for safety.
</p>
</div>
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<MapPin className="w-12 h-12 text-red-500 mb-4"/>
<h3 className="text-xl font-semibold mb-2">Multiple Locations</h3>
<p className="text-base-content/70">
Pick up and drop off cars from multiple locations across the city for convenience.
</p>
</div>
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<Wallet className="w-12 h-12 text-orange-500 mb-4"/>
<h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
<p className="text-base-content/70">
Transparent pricing with no hidden charges and great value for money.
</p>
</div>
<div className="card-light p-8 rounded-2xl transition hover:shadow-xl">
<Headphones className="w-12 h-12 text-purple-600 mb-4"/>
<h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
<p className="text-base-content/70">
Our support team is always available to help you with bookings, issues, or inquiries.
</p>
</div>
</div>
</div>
</section>
)
}
export default Services
