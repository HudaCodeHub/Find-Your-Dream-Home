import React from "react";
import group3 from '../../assets/photos/Group 3.png';
import maskGroup from "../../assets/photos/hero image 1.png"
import group4 from '../../assets/photos/Group 4.png';
import group5 from '../../assets/photos/Group 5.png';
import group6 from '../../assets/photos/Group 6.png';
import group7 from '../../assets/photos/Group 7.png';


const Hero = () => {
  
  return (
    <div className="flex min-h-0 flex-1 flex-col px-6 pb-6 md:px-20">
<div className="flex min-h-0 flex-1 items-center justify-between gap-8">
        <div className="max-w-md flex-1">
          <h1 className="mb-6 text-[clamp(2rem,7vh,4rem)] font-extrabold leading-tight">
            Find Your
            <br />
            Dream Home
          </h1>
          <p className="mb-6 max-w-xs text-sm font-bold leading-6">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>
          <img src={group3} alt="group1" className=""></img></div>
 
 <div className="flex ">
          <img src={maskGroup} alt="Modern" className="h-auto max-h-full w-full max-w-[640px] object-contain md:h-full"></img>
          
</div></div>
<div className="mx-auto flex w-full max-w-4xl shrink-0 gap-4 rounded-2xl bg-[#d9bcab] p-4 shadow-lg ">
<img src={group4}/>
<img src={group5}/>
<img src={group6}/>
<img src={group7}/>
</div></div>
 
  );
};

export default Hero;