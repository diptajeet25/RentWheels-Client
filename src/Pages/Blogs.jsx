import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

const Blogs=()=>{
return(
<div className="min-h-screen bg-base-100 text-base-content">
<Navbar/>
<div className="max-w-7xl mx-auto px-4 py-16">
<div className="text-center mb-16">
<h1 className="text-4xl lg:text-5xl font-extrabold">Our Blogs</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">
Tips, guides, and insights to help you make the most of your car rental experience.
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Travel • Car Rental</p>
<h3 className="text-xl font-bold mb-3">How to Choose the Right Rental Car for Your Trip</h3>
<p className="text-base-content/70 mb-4">
Learn how to select the perfect car based on trip duration, passenger count, and road conditions.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1511910849309-0a1a16c64f07" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Maintenance • Safety</p>
<h3 className="text-xl font-bold mb-3">Essential Car Safety Tips Before a Long Drive</h3>
<p className="text-base-content/70 mb-4">
Simple safety checks and driving tips to ensure a smooth and worry-free journey.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1517940310602-26535839fe84" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Electric Cars</p>
<h3 className="text-xl font-bold mb-3">Why Electric Cars Are the Future of Car Rentals</h3>
<p className="text-base-content/70 mb-4">
Discover the benefits of renting electric vehicles and how they help reduce travel costs and emissions.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Luxury Cars</p>
<h3 className="text-xl font-bold mb-3">When Should You Rent a Luxury Car?</h3>
<p className="text-base-content/70 mb-4">
From weddings to business trips, find out when renting a luxury car makes the most sense.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1502877338535-766e1452684a" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Savings • Tips</p>
<h3 className="text-xl font-bold mb-3">7 Smart Ways to Save Money on Car Rentals</h3>
<p className="text-base-content/70 mb-4">
Learn practical tips to reduce rental costs without compromising comfort or convenience.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
<div className="card-light rounded-2xl overflow-hidden">
<img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d" className="h-56 w-full object-cover"/>
<div className="p-6">
<p className="text-sm text-base-content/60 mb-2">Beginner Guide</p>
<h3 className="text-xl font-bold mb-3">First-Time Car Rental: A Complete Guide</h3>
<p className="text-base-content/70 mb-4">
Everything you need to know before renting a car for the first time.
</p>
<button className="text-primary font-semibold hover:underline">Read More →</button>
</div>
</div>
</div>
</div>
<Footer/>
</div>
)
}
export default Blogs
