import {Swiper,SwiperSlide} from "swiper/react"
import {Autoplay,Pagination,Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Link} from "react-router"

const slides=[
{id:1,title:"Premium Car Rental Service",subtitle:"Drive your dream car at affordable prices",image:"https://pedalcommander.com/cdn/shop/articles/Jeep-Wrangler_1.webp?v=1715624546&width=1100"},
{id:2,title:"Luxury & Comfort",subtitle:"Best luxury cars for your special moments",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70"},
{id:3,title:"Fast & Easy Booking",subtitle:"Book your car in just a few clicks",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"},
{id:4,title:"Trusted by Thousands",subtitle:"Safe, reliable & well-maintained cars",image:"https://images.unsplash.com/photo-1656043595457-9e983defa6c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"},
{id:5,title:"Explore More, Pay Less",subtitle:"Best deals for long-term rentals",image:"https://wallpapergod.com/images/hd/audi-r8-1920X1080-wallpaper-a7j1l492cwl5ojgi.jpeg"}
]

const Carousel=()=>{
return(
<div className="w-full h-[80vh]">
<Swiper modules={[Autoplay,Pagination,Navigation]} autoplay={{delay:4000,disableOnInteraction:false}} pagination={{clickable:true}} navigation loop className="h-full">
{slides.map(slide=>(
<SwiperSlide key={slide.id}>
<div className="h-full w-full bg-cover bg-center relative" style={{backgroundImage:`url(${slide.image})`}}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 h-full flex items-center">
<div className="max-w-6xl mx-auto px-6 text-base-content">
<h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{slide.title}</h1>
<p className="text-lg md:text-xl mb-6 max-w-xl text-white/80">{slide.subtitle}</p>
<div className="flex gap-4">
<Link to="/cars" className="btn btn-primary rounded-lg">Book Now</Link>
<Link to="/cars" className="btn btn-outline border-white text-white rounded-lg">View Cars</Link>
</div>
</div>
</div>
</div>
</SwiperSlide>
))}
</Swiper>
</div>
)
}
export default Carousel
