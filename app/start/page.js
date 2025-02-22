import React from 'react';
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import { Home, RefreshCw, DollarSign } from 'lucide-react';

const Page = () => {
  const stats = [
    { value: "$100B", description: "home loans funded entirely online" },
    { value: "400K", description: "Customers who chose a Better Mortgage" }
  ];

  const options = [
    { icon: <Home className="w-6 h-6" />, text: "Buying a home" },
    { icon: <RefreshCw className="w-6 h-6" />, text: "Refinance my mortgage" },
    { icon: <DollarSign className="w-6 h-6" />, text: "Get cash from my home" }
  ];

  const features = [
    { text: "Custom mortgage rates" },
    { text: "Exclusive offers" },
    { text: "A personalized dashboard" }
  ];

  return (
    <div className=' w-full h-full bg-white overflow-x-hidden'>
        <Navbar/>

    <div className="max-w-2xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full mb-4" />
        <h1 className="text-3xl font-semibold mb-2 text-black">Hi, I'm Betsy!</h1>
        <p className="text-xl text-black">What can I help you with?</p>
      </div>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full p-4 flex items-center gap-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors text-left bg-white shadow-sm hover:shadow-md"
          >
            <div className="text-green-600">{option.icon}</div>
            <span className="text-lg text-black">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
            <div className="text-4xl font-bold mb-2 text-black">{stat.value}</div>
            <div className="text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>

      {/* Features Card */}
      <div className="bg-green-50 rounded-lg p-6 shadow-sm border border-green-100">
        <p className="text-black mb-4">After a few questions, you'll unlock:</p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-black">
              <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3 h-3"
                  stroke="currentColor"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
<Footer/>
    </div>
  );
};

export default Page;