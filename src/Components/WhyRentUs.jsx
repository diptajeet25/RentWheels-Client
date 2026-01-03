import React from "react"
import {Car,ShieldCheck,Clock,DollarSign} from "lucide-react"

const WhyRentUs=()=>{
return(
<div className="w-[90%] lg:w-[80%] mx-auto mt-24">
<h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 text-base-content">
Why Rent <span className="text-primary">Us?</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 card-light rounded-2xl border transition duration-300 text-center hover:shadow-xl">
<div className="flex justify-center mb-4 text-primary">
<Car size={40}/>
</div>
<h3 className="text-xl font-bold mb-2">Wide Variety of Cars</h3>
<p className="text-base-content/70">
SUVs, Sedans, Luxury & Electric—choose the perfect car for every need.
</p>
</div>
<div className="p-6 card-light rounded-2xl border transition duration-300 text-center hover:shadow-xl">
<div className="flex justify-center mb-4 text-primary">
<ShieldCheck size={40}/>
</div>
<h3 className="text-xl font-bold mb-2">Safe & Maintained</h3>
<p className="text-base-content/70">
Regular servicing ensures your ride is smooth, clean & absolutely safe.
</p>
</div>
<div className="p-6 card-light rounded-2xl border transition duration-300 text-center hover:shadow-xl">
<div className="flex justify-center mb-4 text-primary">
<Clock size={40}/>
</div>
<h3 className="text-xl font-bold mb-2">Fast & Easy Booking</h3>
<p className="text-base-content/70">
Book any car within minutes—clean UI & smooth user experience.
</p>
</div>
<div className="p-6 card-light rounded-2xl border transition duration-300 text-center hover:shadow-xl">
<div className="flex justify-center mb-4 text-primary">
<DollarSign size={40}/>
</div>
<h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
<p className="text-base-content/70">
Best rental rates with zero hidden fees—100% transparent billing.
</p>
</div>
</div>
</div>
)
}
export default WhyRentUs
