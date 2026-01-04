import React, { useEffect, useState } from "react"
import Carousel from "../Components/Carousel"
import WhyRentUs from "../Components/WhyRentUs"
import ClientReview from "../Components/ClientReview"
import RecentCars from "../Components/RecentCars"
import Newsletter from "../Components/Newsletter"
import FAQ from "../Components/FAQ"
import { Typewriter } from "react-simple-typewriter"
import Services from "../Components/Services"
import Categories from "../Components/Catergories"
import HowItWorks from "../Components/HowItWorks"

const Home = () => {
    const [latestCars, setLatestCars] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://car-rental-server-six-gold.vercel.app/latestcars")
            .then(res => res.json())
            .then(data => {
                setLatestCars(data)
                setLoading(false)
            })
    }, [])

    return (
        <div className="text-base-content">
            <div className="relative">
                <Carousel />

            </div>
            {loading ? (
                <p className="text-center mt-10 text-base-content/60">
                    Loading latest cars...
                </p>
            ) : (
                <RecentCars latestCars={latestCars} />
            )}
            <Categories />
            <WhyRentUs />
            <Services />
            <HowItWorks />
            <ClientReview />
            <Newsletter />
            <FAQ />
        </div>
    )
}
export default Home
