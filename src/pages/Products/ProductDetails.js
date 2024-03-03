import React from 'react';
import Divider from '@mui/material/Divider';
import colors from "../../utils/colors";

const ProductDetails = ({name,image,size}) => {
console.log(size[0])
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white ">
      <div className="container px-5 py-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full position-absolute object-center rounded border border-gray-200"
            src={image}
            style={{ maxHeight: "700px", height: "auto"}}

          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              EuroOne
            </h2>
            <h1 className="text-gray-900 text-3xl title-font  mb-4" style={{fontWeight:"400"}}>
              {name} 
            </h1>

            {/* Divider for heading description */}
            <Divider className="my-4 bg-gray-800" />
        


            {/* Divider for button */}
            <Divider className="my-4" />

            <div className="flex justify-center mt-40">
              <button
                className="text-black bg-[#ff9000] border-0 py-2 px-6 w-7/12 focus:outline-none rounded transition-all duration-900 ease-in-out hover:scale-106 hover:w-10/12 hover:bg-[#ff9000]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
