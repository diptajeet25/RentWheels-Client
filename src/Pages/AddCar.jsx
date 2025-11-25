import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import CarForm from '../Components/CarForm';

const AddCar = () => {
  return (
    <div>
        <Navbar></Navbar>
        <h2>Add Car</h2>
        <CarForm></CarForm>

        <Footer></Footer>
    </div>
  );
};

export default AddCar;