import React from 'react';
import colors from '../../../utils/colors';
import img from '../../../images/landingimg.png'
import image from '../../../utils/peopleWorking.jpg';
import { useState,useEffect } from 'react';
function Achievements() {


  const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Function to update isPhoneSize based on window width
    const updateSize = () => {
      setIsPhoneSize(window.innerWidth <= 768);
    };

    // Attach the event listener
    window.addEventListener('resize', updateSize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', updateSize);
  }, []); // Empty dependency array ensures the effect runs only once on mount










  return (
    <section className={`my-8 bg-black  md:h-[55vh]  lg:h-[55vh]    ${isPhoneSize?(" flex-row h-screen justify-center items-center"):("flex")}`}>
      < div className={` bg-white ${isPhoneSize?("flex-row w-screen"):("flex w-4/12")}`}>
        <img
          src={img}
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          alt="Achievements"
        />
      </div>

      <div
        className={`  space-x-4 justify-center items-center ${isPhoneSize?("flex-row justify-center items-center w-screen"):("flex w-8/12")}`}
        style={{
            backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8, // Adjust the opacity as needed
          color:'#000',
          fontSize:'1.5rem',
        }}
      >




        <div className={` bg-[#8a63a2] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#ff9000] border-l-8  ${isPhoneSize?("w-6/12 h-[100px]"):("w-2/12 h-2/6")} `} >1000+  <br></br>Projects</div>
        <div className='w-2/12 h-2/6 bg-[#ff9000] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#8a63a2] border-l-8'>350+ <br></br> Employees </div>
        <div className='w-2/12 h-2/6 bg-[#8a63a2] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#ff9000] border-l-8'>20+ <br></br>Awards</div>
        <div className='w-2/12 h-2/6 bg-[#ff9000] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#8a63a2] border-l-8'>100+ <br></br> Client</div>











          











    
      </div>
    </section>
  );
}

export default Achievements;
