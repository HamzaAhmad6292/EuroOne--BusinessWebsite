import React from "react";
import { Fade } from "react-awesome-reveal";
import colors from "../../utils/colors";

function Showcase5() {
  return (
    <div className="flex h-[700px]    items-center justify-center  overflow-hidden" style={{backgroundColor:colors.secondary}}>
      <div className="flex flex-col   md:flex-row items-center ">

        {/* <Fade direction="left" triggerOnce> */}

    <div className=" py-4 w-6/12 h-full flex justify-center md:justify-center bg-black">
  <img
    src="https://loremflickr.com/g/600/600/girl"
    className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
    alt=""
  />
</div>

       {/* </Fade> */}







 <div class="w-full md:w-6/12 lg:pl-32 h-full " style={{backgroundColor:colors.secondary}}>
        <h1 className="mt-4" style={{color:colors.primary}}>-Why Choose us</h1>
        <h1 className="font-bold"  style={{fontSize:'3rem',color:'#fff'}}>Why Trust Our Client</h1>

<ol class="border-l-2 border-primary dark:border-primary-500 mt-8" style={{color:'#fff',borderColor:colors.primary}}>
  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h4 class="-mt-2 text-xl font-semibold">Title of section 1</h4>
    </div>
    <div class="mb-6 ml-6 pb-6">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 
      </p>
 
    </div>
  </li>

  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h4 class="-mt-2 text-xl font-semibold">Title of section 2</h4>
    </div>
    <div class="mb-6 ml-6 pb-6">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa

      </p>

    </div>
  </li>

  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h4 class="-mt-2 text-xl font-semibold">Title of section 3</h4>
    </div>
    <div class="mb-6 ml-6 pb-6">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos
    
      </p>

    </div>
  </li>
</ol>
        </div>










        
      </div>
    </div>
  );
}

export default Showcase5;
