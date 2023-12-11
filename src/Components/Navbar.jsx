import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import beelogo from "../assests/beelogo.png";
import white from "../assests/white.png";
import { Link } from "react-scroll";
function Navbar() {
  const [nav, setNav] = useState(false);
  //Defining array as an object
  const links = [
    {
      id: 1,
      link: "home",
      
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "product",
    },
    {
      id: 4,
      link: "category",
    },
    {
      id: 5,
      link: "gallery",
    },
  ];
  return (
    <>
      <div className="hero">
        <div className=" bg-black">
        <div className="flex justify-between items-center w-full h-20 max-w-[1200px] mx-auto md:px-[0px] px-[20px] ">
          <div>
            <img
              src={beelogo}
              alt="img is not display"
              className="w-[124px] h-[60px]"
            />
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium
            text-[#FFFFFF] hover:scale-105 duration-200 md:text-[16px]"
              >
              <Link to={link} smooth duration={500}>
              {link}
            </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="text-[#FFFFFF] cursor-pointer md:hidden"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul
              className="flex flex-col justify-center items-center 
        absolute top-0 left-0 w-full h-full bg-gradient-to-b
        from-black to-gray-500"
            >
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium
                text-[#FFFFFF] hover:scale-105 duration-200 py-6"
                >
                <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth duration={500}
              >
                {link}
              </Link>
                </li>
              ))}
            </ul>
          )}
          <div className="hidden md:flex text-[#000000] gap-[20px]">
            <button className="bg-[#F8B742] hover:bg-[#FFFFFF] w-[125px] h-[50px] rounded-[39px] hover:text-[#000000] ">
              Signup
            </button>
            <button className="flex items-center hover:bg-[#F8B742]  hover:text-gray-900  border border-solid border-[#F8B742] text-[#F8B742] font-normal px-4 py-2  rounded-[39px]">
              <FaCartShopping className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center flex-col">
            <h3 className="md:text-[60px] font-bold text-[#FFFFFF] uppercase md:mt-[230px] mt-[150px] text-[25px]">Straight From The Hive</h3>
            <p className="md:text-[16px] font-normal text-[#FFFFFF] md:w-[714px] md:h-[49px] text-justify w-[300px] md:h-[30px] md:mt-[16px] mt-[20px]  ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
            <button className="flex items-center hover:bg-[#F8B742]  hover:text-gray-900  border border-solid border-[#F8B742] text-[#F8B742] font-normal px-4 py-2  rounded-[39px] md:mt-[24px] md:mt-[50px] mt-[30px]">
              <FaSquarePhone  className="mr-2" />
              Contact Us
            </button>
        </div>
        <div className="md:ml-[142px] md:mt-[64px] ml-[40px] mt-[70px]">
            <img src={white} alt="White image is not show" className="md:w-[359px] md:h-[300px] w-[200px]"/>
        </div>
      </div>
    </>
  );
}
export default Navbar;
