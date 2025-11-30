import React, { useEffect, useState } from 'react';
import Carousel from '../Components/Carousel';
import WhyRentUs from '../Components/WhyRentUs';
import ClientReview from '../Components/ClientReview';
import RecentCars from '../Components/RecentCars';

const Home = () => {
   const [latestCars, setLatestCars] = useState([]);
   const [loading, setLoading] = useState(true);

 
  
   useEffect(() => {
    fetch("http://localhost:3000/latestcars")
      .then(res => res.json())
      .then(data => {
        setLatestCars(data);
         setLoading(false);
       
      })
     
  }, []);
  return (
    <div>
        <Carousel></Carousel>
       {loading ? (
        <p className="text-center mt-10">Loading latest cars...</p>
      ) : (
        <RecentCars latestCars={latestCars} />
      )}
        <WhyRentUs></WhyRentUs>
        <ClientReview></ClientReview>
    </div>
  );
};

export default Home;