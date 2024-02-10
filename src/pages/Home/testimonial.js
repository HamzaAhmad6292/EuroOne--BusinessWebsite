import React from "react";
import colors from "../../utils/colors";
// In your main CSS file (e.g., index.css)
import 'typeface-roboto-condensed';
import img from "../../utils/statement_background.jpg"
import { Fade } from "react-awesome-reveal";


function Testimonial() {
  return (
    <section className="my-8  md:my-2 " style={{backgroundImage: `url(${img})`}}>


    <div class="w-full md:h-[500px] sm:h-[300px] flex flex-col items-center justify-center gap-8" >

    <h1 class="md:text-4xl sm:text-2xl text-gray-600 leading-relaxed text-center w-4/5">
      
        <span style={{color:colors.secondary ,fontFamily: 'Roboto Condensed, sans-serif'}}>"</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<span style={{color:colors.secondary}}>"</span>
    </h1>

    </div>
    </section>
  );
}

export default Testimonial;
