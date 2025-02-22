import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Timeline from "../Component/Timeline";

const Page = () => {
  return (
    <div className='overflow-x-hidden bg-white'>
      {/* Ensure Navbar has a high z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Ensure first section has enough margin-top to prevent overlap */}
      <div className='bg-white mt-[80px]'>  
        <div className="relative px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex items-center justify-center">
          <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[980px] mx-auto text-center">
            <p className="text-green-700 font-medium sm:text-base mb-2 text-2xl sm:mb-3 md:mb-4">
              Our mission
            </p>
            <h1 className="text-[26px] xs:text-[28px] sm:text-[32px] md:text-[40px] lg:text-[40px] xl:text-[45px] font-semibold leading-[1.2] text-gray-700">
              We're making homeownership simpler, faster - and most importantly, more accessible for all Americans.
            </h1>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-16 bg-gray-100">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-900">
              The status quo is broken
            </h2>
            <p className="mt-4 max-w-80 text-gray-700">
              The traditional processes around homeownership are opaque and stressful.
              Fees aren’t transparent and some are simply outrageous in size.
              Traditional mortgage lending is rife with unnecessary fees and slow,
              painful processes. It’s a system set up to benefit insiders — not you.
              Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800">
              Read Vishal’s story
            </button>
          </div>

          {/* Video/Image Section */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-md">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
                alt="Vishal Garg"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-800 text-white py-16 px-8 md:px-32 text-center md:text-left">
          <h2 className="text-4xl font-bold">How we’re changing things</h2>
          <p className="mt-4 text-lg max-w-4xl">
            Homeownership is a huge part of our economy. Housing overall is a $33
            trillion business, and mortgages account for $15 trillion. Yet home finance
            operates in the same way it has for decades — through opaque systems and
            expensive intermediaries whose interests are misaligned with consumers’.
          </p>
          <p className="mt-4 text-lg max-w-4xl">
            That’s why Better.com is redefining the homeownership process from the
            ground up. We’re using technology to make it faster and more efficient, and
            humans to help make it friendly and enjoyable.
          </p>
        </div>

        <Timeline />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
