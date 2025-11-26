import React from 'react';
import Carousel from '../Components/Carousel';
import WhyRentUs from '../Components/WhyRentUs';
import ClientReview from '../Components/ClientReview';
import RecentCars from '../Components/RecentCars';
const latestCars=fetch("http://localhost:3000/latestcars").then(res=>res.json())
const Home = () => {
  
  console.log(latestCars);
  return (
    <div>
        <Carousel></Carousel>
       <RecentCars latestCars={latestCars}></RecentCars>
        <WhyRentUs></WhyRentUs>
        <ClientReview></ClientReview>
    </div>
  );
};

export default Home;