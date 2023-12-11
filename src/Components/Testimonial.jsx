import React from "react";
import ali from "../assests/ali.png";
import geroge from "../assests/geroge.png";
import uncle from "../assests/uncle.png";
import star from "../assests/star.png";
function Testimonial() {
  return (
    <>
      <div className="w-full md:h-[671px] max-w-[1200px] mx-auto  md:mb-[30px]  md:px-[0px] px-[80px]">
        <div className="h-[190px] md:flex justify-center items-center flex-col md:mt-[0px] mt-[20px]">
          <h4 className="text-[#F8B742] font-medium mb-[5px] md:text-left text-center ">Testimonial</h4>
          <h2 className="text-[25px] font-semibold mb-[5px] md:text-left text-center">
            What Say Our Client
          </h2>
          <p className="md:w-[466px] w-[305px] text-[14px] font-normal text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever
          </p>
        </div>
        <div className="md:flex justify-center items-center ">
          <div className="left">
            <div className="w-[311px] h-[142px] bg-[#FFFFFF] shadow-custom md:mb-[10px] mb-[5px]">
              <div className="flex justify-center items-center pt-[20px]">
                <img src={ali} alt="img is not uploaded" />
                <div className="ml-[10px]">
                  <h3 className="text-[20px] font-medium">Ahsan Nawaz</h3>
                  <p className="text-[14px] ">Ceo</p>
                </div>
              </div>
            </div>
            <div className="w-[311px] h-[142px] bg-[#FFFFFF] shadow-custom md:mb-[10px] mb-[5px]">
              <div className="flex justify-center items-center pt-[20px]">
                <img src={geroge} alt="img is not uploaded" />
                <div className="ml-[10px]">
                  <h3 className="text-[20px] font-medium">James Jean</h3>
                  <p className="text-[14px]">Business Creator</p>
                </div>
              </div>
            </div>
            <div className="w-[311px] h-[142px] bg-[#FFFFFF] shadow-custom md:mb-[10px] mb-[5px]">
              <div className="flex justify-center items-center pt-[20px]">
                <img src={uncle} alt="img is not uploaded" />
                <div className="ml-[10px]">
                  <h3 className="text-[20px] font-medium">David Jeams</h3>
                  <p className="text-[14px]">Business Manger</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:ml-[50px] md:pt-[58px]">
            <h2 className="text-[20px] font-medium mb-[20px]">Ahsan Nawaz Of Food Industry</h2>
            <img src={star} alt="star is not uploaded" className="mb-[20px]" />
            <p className="md:w-[613px] h-[302px] text-justify text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.<br /><br /> Lorem Ipsum has been the industry's
              standard dummy text ever Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
