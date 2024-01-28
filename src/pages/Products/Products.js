import React from "react";
import styled from "styled-components";
import ProductCard from "./productCard";
import img from "../../images/landingimg.png"
import colors from "../../utils/colors";
import { Fade } from "react-awesome-reveal";
import { Link as ScrollLink } from 'react-scroll';
const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCardWrapper = styled.div`
  width: 25%; /* Set each card to be 25% of the container width for larger screens */
  box-sizing: border-box; /* Include padding and border in the width calculation */
  padding: 10px; /* Add some spacing around the cards */

  @media (max-width: 1200px) {
    width: 33.33%; /* On screens with a width of 1200px or smaller, set each card to 33.33% width for medium-sized screens */
  }

  @media (max-width: 768px) {
    width: 50%; /* On screens with a width of 768px or smaller, set each card to 50% width for smaller screens */
  }
`;

;




const Products = ({setSelectedPage,products}) => {

  return (

    <>
       <div className='w-screen h-screen p-2 mb-4'>
      <div 
        className='flex justify-center items-center w-screen h-screen overflow-hidden' 
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <Fade direction='up' duration={2000}>
        <div className='flex-row justify-center items-center'>
          <h1 className='text-4xl ' style={{fontWeight:"700"}}>
            PP Compression Fittings
          </h1> 
          <h1 className='text-xl'>
            oh babi dol masone di oh babi dol masone di
          </h1> 
        <div className='flex justify-center items-center mt-24'>
            <Fade direction='up' duration={5000}>
            <ScrollLink
  to="products" // Id of the next component
  spy={true}
  smooth={true}
  offset={0}
  duration={500}
>
  <button
    className="w-full sm:w-40 px-4 py-3 rounded text-md text-white border-2 "
    style={{
      color: "#fff",
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
      fontWeight:"500"
    }}
    onMouseEnter={(e) => (
      e.target.style.backgroundColor = "#fff",
      e.target.style.color = colors.primary,
      e.target.style.borderColor = colors.primary
    )}
    onMouseLeave={(e) => (
      e.target.style.backgroundColor = colors.primary,
      e.target.style.color = "#fff",
      e.target.style.borderColor = colors.primary
    )}
  >
    Learn More
  </button>
</ScrollLink>

          </Fade>
          </div>
        </div>
        </Fade>
      </div>
</div>
    <div className="" id="products">
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCardWrapper key={index}>
            <ProductCard product={product} setSelectedPage={setSelectedPage} />
          </ProductCardWrapper>
        ))}
      </ProductGrid>
    </div>
    <br></br>    <br></br>

    </>
  );
};

export default Products;
