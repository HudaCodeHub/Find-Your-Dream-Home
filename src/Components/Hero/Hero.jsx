import React from "react";
import maskGroup from "../../assets/photos/mask Group.png"; 

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center text-center relative">
      
      <img
        src={maskGroup}
        alt="mask-group"
        className="w-full max-w-xl object-contain md:scale"/>

      <h1 className="text-5xl font-bold text-white drop-shadow-lg">
        Find Your Dream Home
      </h1>
      <p className="mt-4 max-w-xl text-lg text-white drop-shadow-md">
        Explore our curated selection of exquisite properties meticulously
        tailored to your unique dream home vision.
      </p>
      <button className="mt-6 bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700">
        Sign up
      </button>
    </section>
  );
};

export default Hero;