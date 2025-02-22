"use client"

import { useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const zipCode = 110043;

  const loanAmount = homePrice - (homePrice * downPayment) / 100;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanLength * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

  const handleHomePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setHomePrice(Number(value) || 0);
  };

  return (
    <div className="overflow-x-hidden">
    
      <Navbar/>
    <div className="bg-white min-h-screen w-full p-4 ">
      <div className="bg-green-100 px-4 md:px-8 py-6 md:py-8 rounded-lg"> 
        <div>
          <h1 className="text-3xl md:text-[40px] text-[#1d1616] leading-tight">
            Mortgage calculator
          </h1>
          <p className="text-slate-700 max-w-full md:max-w-[50%] mt-4 text-sm md:text-base">
            Our mortgage calculator includes key factors like homeowners association fees,
            property taxes, and private mortgage insurance (PMI). Get the whole picture
            and calculate your total monthly payment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-black my-6 md:my-8 gap-6">
          <div className="space-y-2 flex flex-col">
            <label className="text-lg">Home price</label>
            <input
              className="bg-white w-full md:w-72 p-4 text-2xl md:text-4xl border rounded-lg"
              type="text"
              value={`$${homePrice.toLocaleString()}`}
              onChange={handleHomePriceChange}
            />
          </div>
          <div className="space-y-2">
            <label>Monthly payment</label>
            <div className="text-2xl md:text-4xl">
              ${Math.round(monthlyPayment).toLocaleString()}/mo
            </div>
          </div>
          <button className="py-2 text-xl bg-green-600 text-white h-[50px] md:h-[70px] w-full md:w-[200px] rounded-md mt-4 md:mt-auto">
            Get pre-approved
          </button>
        </div>

        <input
          type="range"
          className="w-full bg-white my-6"
          min="50000"
          max="1000000"
          step="1000"
          value={homePrice}
          onChange={(e) => setHomePrice(Number(e.target.value))}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          <div className="bg-white text-black w-full text-start text-bold flex flex-col gap-1 p-4 rounded-lg">
            <div className="text-[10px] text-gray-600">ZIP code</div>
            <div className="font-bold text-xl">{zipCode}</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 flex overflow-hidden col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex-1 p-4">
              <div className="text-sm text-gray-500 mb-1">Down payment</div>
              <input
                className="w-full text-xl font-normal bg-white border-none outline-none p-0 text-black"
                type="text"
                value={`$ ${Math.round(homePrice * downPayment / 100).toLocaleString()}`}
                readOnly
              />
            </div>
            <div className="border-l border-gray-200 p-4 min-w-[100px] flex">
              <div className="flex items-center gap-1 ">
                <input
                  className="w-12 text-xl text-right bg-white border-none outline-none text-black"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Math.max(0, Math.min(100, Number(e.target.value))))}
                />
                <span className="text-gray-900">%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-500 mb-1">Interest rate</div>
            <div className="flex items-center">
              <input
                className="w-full text-xl bg-white border-none outline-none p-0 text-black"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                step="0.1"
              />
              <span className="text-gray-900 ml-1">%</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-500 mb-1">Length of loan</div>
            <div className="relative text-black">
              <select
                className="w-full text-xl bg-white border-none outline-none appearance-none cursor-pointer"
                value={loanLength}
                onChange={(e) => setLoanLength(Number(e.target.value))}
              >
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={30}>30 years</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}