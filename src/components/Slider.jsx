import React, { useState, useEffect } from "react";
import banner1 from "../assets/image/mobilebaner.jpg";
import banner2 from "../assets/image/fashionbaner.jpg";
import banner3 from "../assets/image/tvbaner.jpg";

const Slider = () => {
  
  const images = [
    banner1,
    banner2,
    banner3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
  
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div >

      <img
        src={images[currentIndex]}
        alt="banner"
        className=" h-70  w-305 m-5 "
      />

    </div>
  );
};

export default Slider;
