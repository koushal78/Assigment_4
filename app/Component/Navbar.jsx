"use client";
import { Poppins } from "next/font/google";
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "300"] });

const menuItems = [
  {
    title: "Buy",
    items: [
      "Apply now",
      "Purchase rates",
      "Affordability calculator",
      "Mortgage calculator",
      "Rent vs buy calculator",
      "Find an agent",
      "VA loans",
      "Learning center",
    ],
  },
  { title: "Refinance", items: ["Option 1", "Option 2", "Option 3"] },
  { title: "HELOC", items: ["HELOC 1", "HELOC 2", "HELOC 3"] },
  { title: "Rates", items: ["Rates 1", "Rates 2", "Rates 3"] },
  { title: "Better+", items: [ "Home", "about-us", "Mortgage-calculator"] },
];

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const[ showNav,setShowNav] = useState(true)
  const handleNav = ()=>{
    setShowNav(!showNav)
    console.log(showNav)
  }

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked item
    }));
  };

  return (
    <div className={` h-16 w-[100%] bg-[#0b3b0b] flex justify-between  items-center ${poppins.className}`}>
      <div className="h-16 flex items-center  ">

      <h1 className="text-2xl font-bold text-white mr-10 ml-4">Better</h1>
      <ul className=" gap-8  items-center hidden lg:flex">
{menuItems.map((menu, index) => (
    <li key={index} className="relative group text-md  font-light text-white text-lg  px-4 py-2">
      {/* Title (Hover to show dropdown) */}
      <p className="cursor-pointer">{menu.title}</p>
  
      {/* Dropdown Content (Appears on Hover) */}
      <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white shadow-lg w-max min-w-[150px] py-2 rounded-md border border-gray-300">
        {menu.items.map((item, i) => (
          item == "Home"?  <Link href = '/'  key={i} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Home</Link>:
          <Link href = {item}  key={i} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
            {item}
          </Link>
        ))}
      </div>
    </li>
  ))}
  
          </ul>


      </div>
       <ul className="flex gap-6  ">
<li className="border-2 text-white rounded-full font-light p-2 c cursor-pointer ">
  <FaPhone />
</li>
<li className="bg-green-500 text-black text-[15px] px-4 py-2 font-[600] rounded-full cursor-pointer">Continue</li>
<li className="text-4xl">
  <IoReorderThreeOutline onClick={handleNav} className="lg:hidden  block mr-4" />
</li>
</ul> 

       

      {/* Dropdown container with max height and scrolling */}
      <div className={`absolute top-0 w-screen h-screen lg:hidden    bg-white p-8 overflow-y-auto max-h-screen ${showNav ? "hidden" :'block'}`}>
        

      
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold text-black">Better</h2>
          <RxCross2 className="text-black text-3xl font-bold" onClick={handleNav} />
        </div>
<div className="flex flex-col justify-between h-[95%]">


        <ul>
          {menuItems.map((menu, index) => (
            <li key={index} className="flex flex-col text-md font-light text-black my-6">
              {/* Title + Dropdown Button */}
              <div className="flex justify-between items-center">
                <p>{menu.title}</p>
                {openMenus[index] ? (
                  <IoMdArrowDropup onClick={() => toggleMenu(index)} className="text-bold text-2xl cursor-pointer" />
                ) : (
                  <IoMdArrowDropdown onClick={() => toggleMenu(index)} className="text-bold text-2xl cursor-pointer" />
                )}
              </div>

              {openMenus[index] && (
  <ul className="flex flex-col mt-2 pl-6 transition-all duration-300 ease-in-out">
    {menu.items.map((item, i) => (
      item == "Home" ? <Link href='/' key={i} className="my-2 text-sm text-gray-700">Home</Link> :
      <Link href={item} key={i} className="my-2 text-sm text-gray-700">{item}</Link> // ✅ Now inside <ul>, which is correct
    ))}
  </ul>
)}
            </li>
          ))}
  <div className="flex items-center justify-center bg-green-50 px-4 py-2 rounded-full text-gray-700 text-sm font-medium">
    <FaPhone className="mr-2 text-gray-600" />
    Call us anytime at <a href="tel:41552388371" className="underline ml-1">(415) 523 88371</a>
  </div>
        </ul>
        <div className="flex flex-col  items-center space-y-4">
 
  <button className="bg-green-500 text-black font-semibold text-lg w-full py-3 rounded-full">
    Continue
  </button>

  {/* Sign in Button */}
  <button className="border border-gray-400 text-black font-medium w-full py-3 rounded-full flex items-center justify-center">
    Sign in <span className="ml-2"><FaUser /></span>
  </button>
  </div>

</div>
</div>
      
    </div>
  );
};

export default Navbar;


























