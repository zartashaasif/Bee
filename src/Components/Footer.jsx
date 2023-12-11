import React from "react";
import beelogo from "../assests/beelogo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="md:w-full md:h-[350px] bg-[#000000] md:px-[0px] w-[400px] md:mx-[0px] mx-[50px]">
        <div className="flex justify-center md:mt-[0px] mt-[16px]">
          <img
            src={beelogo}
            alt="Image is not upload"
            className="w-[124px] h-[60px] mt-[50px]"
          />
        </div>
        <div class="md:flex items-center md:max-w-[1200px] mx-auto mt-[30px]">
          <div class="flex-1 border-t border-gray-500"></div>
        </div>
        <div className="md:flex justify-between max-w-[1200px] mx-auto mt-[30px] md:px-[0px] px-[100px] ">
          <div>
            <h2 className="text-[#FFFFFF] text-[16px] font-bold md:mb-[20px] mb-[10px]">Contact Us</h2>
            <p className="text-[#FFFFFF]">0000123467677</p>
            <p className="text-[#FFFFFF]">45, taxes, 123 london</p>
          </div>
          <div>
            <h2 className="text-[#FFFFFF] text-[16px] font-bold md:mb-[20px] mb-[10px] md:pt-[0px] pt-[20px] ">Follow Us</h2>
            <div className="flex">
              <FaSquareFacebook style={{ color: "white" }} size={30} />
              <FaInstagramSquare style={{ color: "white" }} size={30}  />
              <FaGooglePlusSquare style={{ color: "white" }} size={30}  />
              <FaTwitterSquare style={{ color: "white" }} size={30}/>
            </div>
          </div>
          <div className="md:mt-[0px] mt-[20px]">
            <h3 className="text-[#FFFFFF] text-[16px] font-bold md:mb-[20px]">Details</h3>
            <p className="text-[#FFFFFF] w-[250px] text-justify text-[14px]">
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
