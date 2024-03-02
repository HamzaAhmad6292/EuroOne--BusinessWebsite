import React from 'react';
import img from "../../utils/landingPage.jpg";
import colors from '../../utils/colors';
import { Fade } from 'react-awesome-reveal';
import 'typeface-inter';
import { Link } from "react-scroll";
  

function LandingPage() {
  return (
    <div className='w-screen h-screen mb-4'>
      <div 
        className='flex justify-center items-center w-screen h-screen overflow-hidden' 
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          fontFamily: 'Inter, sans-serif'  ,
          fontWeight: '700',

        
        }}
      >
        <Fade direction='up' duration={1500} triggerOnce > 
        <div className='flex-row justify-center items-center'>
          <h1 className='px-3 text-2xl text-center md:text-4xl' style={{fontSize:"2.5rem"}}>
           EuroOne
          </h1> 
          <h1 className='text-xl text-center px-3' style={{fontWeight:'300'}}>
            The way to revolutionize the world
          </h1> 
        <div className='flex justify-center items-center mt-24 '>
            <Fade direction='up' duration={1500} triggerOnce>
            <Link
                  to="showcase" // Id of the next component
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
          <button
            className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md text-white border-2 "
            style={{
              color: "#fff",
              borderColor: colors.primary,
              backgroundColor: colors.primary,
              transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
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
          </Link>
          </Fade>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default LandingPage;
