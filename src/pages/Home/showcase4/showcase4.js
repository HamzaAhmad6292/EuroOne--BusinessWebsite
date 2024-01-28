import React from "react";
import { Fade } from "react-awesome-reveal";
import colors from "../../../utils/colors";
import Cards from "./cards";

function Showcase4() {
  const style={
    backGroundColor:colors.secondary
  }
  return (

    <div className="w-screen h-100 mt-10 bg-[#e7dac9]"  style={style}>
<div className="flex-row items-center justify-center text-center pt-4">
  <h1 className=" text-3xl my-8" style={{color:'#000',fontSize:'3rem',fontWeight:"600"}}>What we do</h1>
  <div className="opacity-70" style={{color:colors.text}}>oa qi j iuef kje wifhwk fwi fwil fwi fwuf w</div>
</div>


<div className="mt-5 pb-4"><Cards></Cards></div>
    </div>
  );
}

export default Showcase4;
