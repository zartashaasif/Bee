import React from "react";
import slide from "../assests/slide.png";
import open from "../assests/open.png";
import honeyslide from "../assests/honeyslide.png";
import puff from "../assests/puff.png";
import box from "../assests/box.png";
import close from "../assests/close.png";
import down from "../assests/down.png";
import high from "../assests/high.png";
function Gallery() {
  return (
    <>
      <div name="gallery" className="w-full max-w-[1200px] mx-auto md:px-[0px] px-[80px]">
        <div className="h-[242px] md:flex justify-center items-center flex-col md:pt-[10px]">
          <h4 className="text-[#F8B742] font-medium mb-[5px] md:text-left text-center">Gallery</h4>
          <h2 className="text-[25px] font-semibold mb-[5px] md:text-left text-center ">
            Our Trendy Products
          </h2>
          <p className="md:w-[466px] w-[305px] text-[14px] font-normal text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div className="md:flex justify-center md:gap-2">
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={slide}
              alt="slide is not available"
              className="md:w-[300px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={open}
              alt="slide is not available"
              className="md:w-[300px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={honeyslide}
              alt="slide is not available"
              className="md:w-[500px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-2 mt-[10px]">
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={puff}
              alt="slide is not available"
              className="md:w-[600px] md:h-[250px] w-[300px] h-[300px]"
            />
          </div>
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={high}
              alt="slide is not available"
              className="md:w-[500px] md:h-[250px] w-[300px] h-[300px]"
            />
          </div>
        </div>
        <div className="md:flex justify-center gap-2 md:mt-[20px]">
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={box}
              alt="slide is not available"
              className="md:w-[500px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
          <div className="md:mb-[0px] mb-[10px]">
            <img
              src={close}
              alt="slide is not available"
              className="md:w-[300px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
          <div>
            <img
              src={down}
              alt="slide is not available"
              className="md:w-[300px] md:h-[300px] w-[300px] h-[300px]"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[20px]">
          <button className="bg-[#F8B742] hover:bg-[#000000] w-[125px] h-[50px] rounded-[39px] hover:text-[#FFFFFF] ">
            View More
          </button>
        </div>
      </div>
    </>
  );
}
export default Gallery;
