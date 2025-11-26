import React from 'react';
import Carousel from '../Components/Carousel';
import WhyRentUs from '../Components/WhyRentUs';
import ClientReview from '../Components/ClientReview';

const Home = () => {
  return (
    <div>
        <Carousel></Carousel>
        <WhyRentUs></WhyRentUs>
        <ClientReview></ClientReview>
    </div>
  );
};

export default Home;