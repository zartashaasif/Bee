import React from "react";
import forest from "../assests/forest.png";
function Category(){
  return (
    <>
      <div name="category" className="w-full md:h-[471px] max-w-[1200px] mx-auto bg-[#FBFBFB] md:mb-[30px]">
        <div className="h-[190px] md:flex justify-center items-center flex-col md:mt-[50px] md:px-[0px] px-[80px]">
          <h4 className="text-[#F8B742] font-medium mb-[5px] md:text-left text-center">Category</h4>
          <h2 className="text-[25px] font-semibold mb-[5px] md:text-left text-center ">Type Of Honey</h2>
          <p className="md:w-[466px] w-[305px] text-[14px] font-normal text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div className="md:flex justify-center items-center md:gap-2 md:px-[0px] px-[80px]">
          <div className="shadow-custom w-[291px] h-[255px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <div className="bg-[#F8B742] w-[70px] h-[80px]  rounded-[4px]">
              <img src={forest} alt="img is not show" />
            </div>
            <h2 className="text-[16px] font-bold mt-[10px]">Forest Honey</h2>
            <p className="text-[14px] font-normal text-justify w-[224px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="shadow-custom w-[291px] h-[255px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <div className="bg-[#F8B742] w-[70px] h-[80px]  rounded-[4px]">
              <img src={forest} alt="img is not show" />
            </div>
            <h2 className="text-[16px] font-bold mt-[10px]">Meadow Honey</h2>
            <p className="text-[14px] font-normal text-justify w-[224px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="shadow-custom w-[291px] h-[255px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col md:mb-[0px] mb-[10px]">
            <div className="bg-[#F8B742] w-[70px] h-[80px]  rounded-[4px]">
              <img src={forest} alt="img is not show" />
            </div>
            <h2 className="text-[16px] font-bold mt-[10px]">Creamed Honey</h2>
            <p className="text-[14px] font-normal text-justify w-[224px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
          <div className="shadow-custom w-[291px] h-[255px] bg-[#FFFFFF] rounded-4 flex justify-center  items-center flex-col">
            <div className="bg-[#F8B742] w-[70px] h-[80px]  rounded-[4px]">
              <img src={forest} alt="img is not show" c />
            </div>
            <h2 className="text-[16px] font-bold mt-[10px]">Liquid Honey</h2>
            <p className="text-[14px] font-normal text-justify w-[224px] mt-[10px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
