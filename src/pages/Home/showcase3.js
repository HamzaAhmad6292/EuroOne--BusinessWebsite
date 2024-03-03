import React from "react";
import { Fade } from "react-awesome-reveal";
import colors from "../../utils/colors";
import bg from "../../utils/showcase3Background.jpeg"
const style = {
  backgroundColor: colors.background,
  backgroundImage: `url(${bg})`,  // Set the background image
  backgroundSize: "cover",  // Adjust background size as needed
};



function Showcase3() {
  return (
    <div class="flex pt-12 px-6 md:px-20 items-center justify-center bg-hero md:h-100 overflow-hidden" style={style}>
      <div class="flex flex-col  gap-32 md:flex-row items-center max-w-8xl">
      <div class="w-full md:w-1/2 lg:pl-32">
          <h3 className="md:text-black text-white">About us</h3>
          <h2 className="text-4xl lg:text-5xl text-center md:text-left leading-tight " style={{fontWeight:"600"}}>
          <span className="" style={{colors:colors.heading}}>Euro</span>
           <span style={{ color: colors.primary }}>One</span>
            </h2>
          <h3 class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-800  tracking-wider leading-relaxed">
            Help Scout is designed with your customers in mind. Provide email
            and live chat with a personal touch, and deliver help content right
            where your customers need it, all in one place, all for one low
            price.
          </h3>
          <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
          <button
  className="w-full sm:w-40 px-4 py-3 rounded  text-md  text-white border-2 " 
  style={{
    color: "#fff", // Set text color
    borderColor: colors.primary, // Set initial border color
    backgroundColor: colors.primary,
    fontWeight:"400",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s", // Add a transition for a smooth effect
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#fff", e.target.style.color = colors.primary, e.target.style.borderColor = colors.primary)}
  onMouseLeave={(e) => (e.target.style.backgroundColor = colors.primary, e.target.style.color = "#fff", e.target.style.borderColor = colors.primary)}
>
  Learn More
</button>


            {/* <button class="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button> */}
          </div>
        </div>




        <div class="w-full md:w-1/2 flex justify-center md:justify-end">


          <Fade direction="left" triggerOnce>
          <img
            src="https://loremflickr.com/g/600/600/girl"
            className=" rounded-md transition duration-300 ease-in-out hover:scale-110"
          />
          </Fade>
        </div>


      </div>
    </div>
  );
}

export default Showcase3;
