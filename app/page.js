"use client"
import Navbar from "./Component/Navbar";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Star } from 'lucide-react';
import { useState } from "react";
import { MdOutlineTimer } from "react-icons/md";
import img from '../public/hero-variant-c.jpg'
import Image from "next/image";
import img1 from "../public/search.png"
import Footer from "./Component/Footer"
import img2 from "../public/img2.png"
import CenterDiv from "./Component/CenterDiv"
export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState('Arian');
  
  const testimonials = [
    {
      name: 'Arian',
      role: 'Better Mortgage customer',
      quote: 'The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.'
    },
    {
      name: 'Amanda',
      role: 'Better Mortgage customer',
      quote: 'Sample testimonial for Amanda'
    },
    {
      name: 'Paul',
      role: 'Better Mortgage customer',
      quote: 'Sample testimonial for Paul'
    }
  ];

  const activeTestimonialData = testimonials.find(t => t.name === activeTestimonial);
  return (
  <div className="overflow-x-hidden">
  <Navbar/>
<div className="h-[calc(100%-64px)] bg-[#0b3b0b] pt-10 ">

  <h1 className="text-[50px] text-center text-green-500 font-semibold ">Mortgages
    <br />
      made simple
  </h1>

<div className="flex flex-col items-center">
  <button className="w-[320px] bg-green-500 text-black rounded-full py-4">
    start my approval
  </button>
  <p className="flex  items-center gap-2 text-[13px] mt-2 text-slate-300 font-light"><MdOutlineTimer/> 3 min | No credit impact</p>

<div>
  <Image src={img} alt="photo" />
<div className="flex flex-col relative bottom-20 items-center gap-2 bg-[#050505c4] text-white p-2 rounded-lg w-max mx-auto">
      {/* Google Logo */}
      <div className="flex">

      <Image src={img1} alt="Google" className="mr-4" width={20} height={20} />

      {/* Stars */}
      <div className="flex text-yellow-400 text-lg">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      </div>

      {/* Review Text */}
      <p className="text-sm ml-2">4.6 Stars | 3177 Google reviews</p>
    </div>
</div>
</div>


</div>
<div className="md:flex md:justify-between md:flex-row-reverse md:py-12 bg-white md:px-[100px] ">
<div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full mx-auto bg-white rounded-xl p-6 sm:p-8">
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold lg:text-semibold leading-tight text-black text-center md:4xl lg:text-[50px]">
            Find out why
            <br className="hidden lg:block"/>
             we're better.
          </h2>
          
          <div className="flex justify-center">
            <button className="w-full sm:w-[320px] bg-green-800 text-white py-3 sm:py-4 px-4 rounded-full text-sm hover:bg-green-900 transition-colors">
              See all our stories
            </button>
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-md">
              <Star className="w-4 h-4 fill-current text-green-500" />
              <span className="font-medium text-black mr-2">Trustpilot</span>
              <span className="text-gray-600">Excellent</span>
              <span className="text-gray-600">4.4 out of 5</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {['Arian', 'Amanda', 'Paul'].map((name) => (
                <button
                  key={name}
                  className="px-3 py-1.5 rounded-full bg-white text-black border-2 border-gray-200 
                           hover:border-green-800 hover:text-green-800 focus:text-green-800 
                           focus:border-green-800 transition-colors text-sm"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="rounded-lg flex items-center justify-center  ">
        <Image src={img2} alt="photo" className="  rounded-lg max-w-[400px] h-[600px]"/>
      </div>
</div>

<CenterDiv/>
   <Footer/>
  </div>
  )
}
