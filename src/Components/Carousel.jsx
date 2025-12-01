import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-[96%] lg:w-[80%] mx-[2%]   h-[500px] lg:mx-[10%] my-16 rounded-2xl shadow-lg">
     
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://wallpapergod.com/images/hd/audi-r8-1920X1080-wallpaper-a7j1l492cwl5ojgi.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide5" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1656043595457-9e983defa6c3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
         
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://pedalcommander.com/cdn/shop/articles/Jeep-Wrangler_1.webp?v=1715624546&width=1100"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          
        </div>
      </div>

      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://www.heritage.org/sites/default/files/styles/facebook_optimized/public/images/2024-03/GettyImages-1477067171.jpg?itok=ApI1zNP9"
          className="w-full object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
        <div className="absolute bottom-8 left-8 text-white">
          
        </div>
      </div>

    </div>
  );
};

export default Carousel;
