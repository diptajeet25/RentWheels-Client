import React from "react"

const ClientReview=()=>{
return(
<div className="w-[90%] lg:w-[80%] mx-auto mt-24">
<h2 className="text-4xl font-bold text-center mb-6 text-base-content">
What Our <span className="text-primary">Customers</span> Say
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="card card-light p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<img src="https://i.pravatar.cc/120?img=5" alt="user" className="w-14 h-14 rounded-full"/>
<div>
<h3 className="font-bold text-lg">Rahim Ahmed</h3>
<p className="text-sm text-base-content/70">Dhaka, Bangladesh</p>
</div>
</div>
<p>
“The car was in great condition and the booking process was very smooth. Highly recommended!”
</p>
<div className="rating mt-3">
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
</div>
</div>
<div className="card card-light p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<img src="https://i.pravatar.cc/120?img=12" alt="user" className="w-14 h-14 rounded-full"/>
<div>
<h3 className="font-bold text-lg">Mariya Islam</h3>
<p className="text-sm text-base-content/70">Chittagong, Bangladesh</p>
</div>
</div>
<p>
“Super fast service! I rented an SUV for a family trip, and it was absolutely perfect.”
</p>
<div className="rating mt-3">
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
</div>
</div>
<div className="card card-light p-6 rounded-2xl">
<div className="flex items-center gap-4 mb-4">
<img src="https://i.pravatar.cc/120?img=30" alt="user" className="w-14 h-14 rounded-full"/>
<div>
<h3 className="font-bold text-lg">Sabbir Hossain</h3>
<p className="text-sm text-base-content/70">Sylhet, Bangladesh</p>
</div>
</div>
<p>
“Best car rental platform! Affordable, clean cars and friendly support team.”
</p>
<div className="rating mt-3">
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
<input type="radio" className="mask mask-star-2 bg-yellow-400"/>
</div>
</div>
</div>
</div>
)
}
export default ClientReview
