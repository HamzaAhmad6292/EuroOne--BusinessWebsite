import React from "react";
import {  Slide } from "react-awesome-reveal";
import colors from "../../utils/colors";

function Showcase5() {
  return (
    <div className="flex h-[1000px] items-center justify-center  overflow-hidden pt-8 md:pt-0"  style={{backgroundColor:colors.secondary}}>
      <div className="flex flex-col md:flex-row items-center ">



        {/* <Fade direction="left" triggerOnce> */}

    <div className="w-8/12 md:w-6/12 md:h-full h-[300px] flex justify-center md:justify-center bg-black">
  <img
    src="https://loremflickr.com/g/600/600/girl"
    className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
    alt=""
  />
</div>

       {/* </Fade> */}

 <div class="w-full md:w-6/12 lg:pl-32 h-full " style={{backgroundColor:colors.secondary}}>
        <h1 className="mt-4 md:ml-0 ml-2" style={{color:colors.primary}}>-Why Choose us</h1>
        <h1 className=" md:ml-0 ml-2"  style={{fontSize:'3rem',color:'#fff' ,fontWeight:"600"}}>Why  Our Client Trusts Us</h1>

<ol class="border-l-2 border-primary dark:border-primary-500 mt-8 md:ml-0 ml-5" style={{color:'#fff',borderColor:colors.primary}}>
  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h4 class="-mt-2 text-2xl " style={{fontWeight:"500",color:"#fff"}}>Price </h4>
    </div>
    <div class="mb-6 ml-6 pb-6">
<Slide direction="right">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300 pr-5">
      In view of the clients affordable we beleive in best possible prices. considering no compromise of quality & service
      </p>
</Slide>
 
    </div>
  </li>

  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
      <h4 class="-mt-2 text-2xl " style={{fontWeight:"500"}}>Quality</h4>
    </div>
    <div class="mb-6 ml-6 pb-6">
<Slide direction="right">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200 pr-5">
       Zero Tolerance in Quality Concerns 100% compliance is related standards. Our QC department is particular about tests on all production lots

      </p>
</Slide>

    </div>
  </li>

  <li>
    <div class="flex-start flex items-center">
      <div
        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary "></div>
      <h4 class="-mt-2 text-2xl " style={{fontWeight:"500"}}>Service</h4>
    </div>
    <div class="mb-6 ml-6 pb-6">
<Slide direction="right">

      <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200 pr-5">
        We beleive in fitting one commitments, Our vast profile of satisfied customers itself self expanding of due commitments.
    
      </p>
</Slide>

    </div>
  </li>
</ol>
        </div>
        
      </div>
    </div>
  );
}

export default Showcase5;
