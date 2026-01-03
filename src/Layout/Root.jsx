import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import {Outlet} from 'react-router'
import Footer from '../Components/Footer'

const Root=()=>{
return(
<div className="min-h-screen bg-base-100 text-base-content">
<Navbar/>
<Outlet/>
<Footer/>
</div>
)
}
export default Root
