import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

function Showcase() {
  return (
    <div class="flex flex-wrap " id="showcase">
      <div class="w-full sm:w-8/12 mb-10">
        <div class="container mx-auto h-full sm:p-10">
          <nav class="flex px-4 justify-between items-center">
            <div class="text-4xl font-bold">
              EuroOne<span class="text-blue-500">.</span>
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
              <h1 class="text-4xl lg:text-6xl font-bold">
                Find your <span class="text-[#ff9000]">greeny</span> stuff for
                your room
              </h1>
              <div class="w-20 h-2 bg-[#ff9000] my-4"></div>
              <p class="text-xl mb-10"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae maiores neque eaque ea odit placeat, tenetur illum
                distinctio nulla voluptatum a corrupti beatae tempora aperiam
                quia id aliquam possimus aut.
              </p>
              <button class="bg-[#ff9000] text-white border-2 border-[#ff9000] hover:text-[#ff9000] hover:bg-white text-2xl font-medium px-4 py-2 rounded shadow">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>

      <Fade direction="right" triggerOnce>
        <img
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
          className="lg:w-full h-48 object-cover sm:h-screen sm:w-4/12 transition duration-300 ease-in-out hover:scale-110 "
        />
      </Fade>
    </div>
  );
}

export default Showcase;
