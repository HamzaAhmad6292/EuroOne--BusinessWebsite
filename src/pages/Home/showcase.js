import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import img from "../../utils/water.jpg"
function Showcase() {
  return (
    <div class="flex flex-wrap " id="showcase">
      <div class="w-full sm:w-8/12 mb-10">
        <div class="container mx-auto h-full sm:p-10">
          <nav class="flex px-4 justify-between items-center">
            <div class="text-4xl  px-2">
              Euro<span class="text-[#ff9000]">One.</span>
            </div>
            <div>
              <img
                src="https://image.flaticon.com/icons/svg/497/497348.svg"
                alt=""
                class="w-8"
              />
            </div>
          </nav>
          <header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div class="w-full">
              <h1 class="text-4xl lg:text-6xl  px-2" style={{ fontWeight: "600" }}>
                Choose Euro One
              </h1>
              <div class="w-20 h-2 bg-[#ff9000] my-4 ml-2.5"></div>
              <p class="text-xl mb-6 px-2">
                Euro One is the manufacturer of HDPE Butt fusion and PP compression fittings used for water supply applications. Our wide range of products includes Tees, Elbows, Reducing Tees, Reducers, Flanges, Adapters, and more, all manufactured under strict compliance with ISO-4427. All our products are warranted against any working failure and are available in different pressure ratings.
              </p>
              <p class="text-xl mb-6 px-2" style={{ color: "#ff9000", fontWeight: "600" }}>
  A&H International holds the sole distribution rights and is the importer of the complete range of Euro One products in Pakistan. We are dedicated to providing high-quality, reliable fittings to meet your water supply needs.
</p>
              <p class="text-xl mb-10 px-2">
                Find your greeny stuff for your room with Euro One. Take the first step towards a reliable water supply system today.
              </p>
              <button class="bg-[#ff9000] text-white border-2 border-[#ff9000] hover:text-[#ff9000] hover:bg-white md:text-2xl  px-4 py-2 ml-2 rounded shadow">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>

      <Fade direction="right" triggerOnce>
        <img
          src={img}
          alt="Leafs"
          className="lg:w-full h-48 object-cover h-screen sm:w-4/12 w-screen transition duration-300 ease-in-out hover:scale-110 "
        />
      </Fade>
    </div>
  );
}

export default Showcase;