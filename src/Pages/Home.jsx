import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel';
import WhyRentUs from '../Components/WhyRentUs';
import ClientReview from '../Components/ClientReview';
import RecentCars from '../Components/RecentCars';
import Newsletter from '../Components/Newsletter';
import FAQ from '../Components/FAQ'
import { Typewriter } from 'react-simple-typewriter';
import Services from '../Components/Services';
import Categories from '../Components/Catergories';
import HowItWorks from '../Components/HowItWorks';

const Home = () => {
   const [latestCars, setLatestCars] = useState([]);
   const [loading, setLoading] = useState(true);

 
  
   useEffect(() => {
    fetch("https://car-rental-server-six-gold.vercel.app/latestcars")
      .then(res => res.json())
      .then(data => {
        setLatestCars(data);
        console.log(data);
         setLoading(false);
       
      })
     
  }, []);
  return (
    <div>
 <div className="relative">
        <Carousel />
        <div className="absolute bottom-16 left-36 md:left-40 lg:left-88 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg text-yellow-400">
            <Typewriter
              words={['Drive Your Dream', 'Luxury & Comfort', 'Adventure Awaits','Electrify Your Ride']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h1>
        
        </div>
      </div>
       {loading ? (
        <p className="text-center mt-10 text-black">Loading latest cars...</p>
      ) : (
        <RecentCars latestCars={latestCars} />
      )}
      <Categories></Categories>
        <WhyRentUs></WhyRentUs>
        <Services></Services>
        <HowItWorks></HowItWorks>
        <ClientReview></ClientReview>
        <Newsletter></Newsletter>
        <FAQ></FAQ>
        
    </div>
  );
};

export default Home;