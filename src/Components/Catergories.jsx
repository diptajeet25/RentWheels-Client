import {Car,Zap,Crown,Layers} from "lucide-react"

const Categories=()=>{
return(
<section className="pt-24">
<div className="w-[90%] lg:w-[80%] mx-auto">
<div className="text-center mb-6">
<h2 className="text-3xl lg:text-4xl font-extrabold text-base-content">
Browse by <span className="text-primary">Category</span>
</h2>
<p className="mt-4 max-w-2xl mx-auto text-lg text-base-content/70">
Choose the perfect car category that matches your travel style, comfort needs, and budget.
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="card-light p-6 rounded-2xl text-center transition hover:scale-105">
<Car className="w-12 h-12 mx-auto text-blue-600 mb-4"/>
<h3 className="text-xl font-semibold">SUV</h3>
<p className="mt-2 text-base-content/70">
Powerful and spacious cars for long trips and rough roads.
</p>
</div>
<div className="card-light p-6 rounded-2xl text-center transition hover:scale-105">
<Layers className="w-12 h-12 mx-auto text-green-600 mb-4"/>
<h3 className="text-xl font-semibold">Sedan</h3>
<p className="mt-2 text-base-content/70">
Comfortable and stylish cars ideal for city travel.
</p>
</div>
<div className="card-light p-6 rounded-2xl text-center transition hover:scale-105">
<Zap className="w-12 h-12 mx-auto text-yellow-500 mb-4"/>
<h3 className="text-xl font-semibold">Electric</h3>
<p className="mt-2 text-base-content/70">
Eco-friendly electric vehicles with modern technology.
</p>
</div>
<div className="card-light p-6 rounded-2xl text-center transition hover:scale-105">
<Crown className="w-12 h-12 mx-auto text-purple-600 mb-4"/>
<h3 className="text-xl font-semibold">Luxury</h3>
<p className="mt-2 text-base-content/70">
Premium cars offering top-class comfort and performance.
</p>
</div>
<div className="card-light p-6 rounded-2xl text-center transition hover:scale-105">
<Car className="w-12 h-12 mx-auto text-red-500 mb-4"/>
<h3 className="text-xl font-semibold">Hatchback</h3>
<p className="mt-2 text-base-content/70">
Compact and fuel-efficient cars for everyday use.
</p>
</div>
</div>
</div>
</section>
)
}
export default Categories
