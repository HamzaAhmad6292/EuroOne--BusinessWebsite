import React from "react";
import colors from "../../utils/colors";

function Testimonial() {
  return (
    <section className="my-8  ">
<div class="w-full md:h-[500px] sm:h-[300px] flex flex-col items-center justify-center gap-8">
    <h1 class="md:text-4xl sm:text-2xl text-gray-600 leading-relaxed text-center w-4/5">
        <span style={{color:colors.primary}}>"</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s<span style={{color:colors.primary}}>"</span>
    </h1>

</div>
    </section>
  );
}

export default Testimonial;
