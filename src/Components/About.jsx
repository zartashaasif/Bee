import React from "react";
import honey from "../assests/honey.png";
import pure from "../assests/pure.png";
function About() {
  return (
    <>
      <div name="about" className="md:flex md:justify-between items-center w-full max-w-[1200px] mx-auto md:h-[341px] md:mt-[100px]">
        <div className="md:flex">
          <div className="md:w-[500px] md:px-[0px] px-[80px]">
            <h4 className="text-[#F8B742] font-medium md:text-left text-center ">About Us</h4>
            <h3 className="text-[25px] font-semibold md:text-left text-center">Who we are</h3>
            <p className="md:w-[550px] md:h-[360px] text-justify text-[14px] font-normal text-[#000000] w-[300px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,{" "}
            </p>
          </div>
          <div className="md:px-[0px] px-[75px]">
            <img
              src={honey}
              alt="Honey is not uploaded"
              className="md:w-[250px] h-[200px] md:mt-[-55px]"
            />
          </div>
        </div>
        <div>
          <img
            src={pure}
            alt="Honey is not uploaded"
            className="w-[450px] h-[400px] md:mt-[-72px]"
          />
        </div>
      </div>
    </>
  );
}
export default About;
