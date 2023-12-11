import React from "react";
import full from "../assests/full.png";
import half from "../assests/half.png";
import stick from "../assests/stick.png";
function Product() {
  return (
    <>
      <div name="product" className="w-full md:h-[627px] max-w-[1200px] mx-auto bg-[#FBFBFB]">
        <div className="h-[242px] md:flex justify-center items-center flex-col md:pt-[10px] md:px-[0px] px-[80px]">
          <h4 className="text-[#F8B742] font-medium mb-[5px] md:text-left text-center">Product</h4>
          <h2 className="md:text-[25px] text-[20px] font-semibold mb-[5px] md:text-left text-center ">
            Our Trending Products
          </h2>
          <p className="md:w-[466px] w-[305px] text-[14px] font-normal text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
          <div className="md:mt-4 mt-2">
            <button className="bg-[#F8B742] hover:bg-[#000000] w-[125px] h-[50px] rounded-[39px] hover:text-[#FFFFFF] mr-2">
              Our Products
            </button>
            <button className=" hover:bg-[#F8B742]  hover:text-gray-900  border border-solid border-[#F8B742] text-[#F8B742] font-normal px-4 py-2  rounded-[39px] mr-2">
              Trending Products
            </button>
            <button className=" hover:bg-[#F8B742]  hover:text-gray-900  border border-solid border-[#F8B742] text-[#F8B742] font-normal px-4 py-2  rounded-[39px] mr-2 md:mt-[0px] mt-[13px] ">
              Top Selling Products
            </button>
           
          </div>
        </div>
        <div className="md:flex justify-center items-center md:gap-2 md:px-[0px] px-[80px] mt-[20px]">
          <div className="shadow-custom w-[291px] h-[300px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <img
              src={stick}
              alt="img is not uploaded"
              className="w-[300px] h-[200px]"
            />
            <p className="text-[14px] font-normal pb-2 pt-2">8oz</p>
            <h3 className="text-[15px] font-medium">
              100% Original Meadow Honey
            </h3>
            <p className="text-[14px] font-normal pt-2">$100</p>
          </div>
          <div className="shadow-custom w-[291px] h-[300px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <img
              src={full}
              alt="img is not uploaded"
              className="w-[300px] h-[200px]"
            />
            <p className="text-[14px] font-normal pb-2 pt-2">8oz</p>
            <h3 className="text-[15px] font-medium">
              100% Original Forest Honey
            </h3>
            <p className="text-[14px] font-normal pt-2">$100</p>
          </div>
          <div className="shadow-custom w-[291px] h-[300px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <img
              src={half}
              alt="img is not uploaded"
              className="w-[300px] h-[200px]"
            />
            <p className="text-[14px] font-normal pb-2 pt-2">8oz</p>
            <h3 className="text-[15px] font-medium">
              100% Original Creamed Honey
            </h3>
            <p className="text-[14px] font-normal pt-2">$100</p>
          </div>
          <div className="shadow-custom w-[291px] h-[300px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <img
              src={stick}
              alt="img is not uploaded"
              className="w-[300px] h-[200px]"
            />
            <p className="text-[14px] font-normal pb-2 pt-2">8oz</p>
            <h3 className="text-[15px] font-medium">
              100% Original Liquid Honey
            </h3>
            <p className="text-[14px] font-normal pt-2">$100</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
