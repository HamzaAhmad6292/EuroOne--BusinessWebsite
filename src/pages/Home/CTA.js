import React from 'react'
import colors from '../../utils/colors'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
function CTA() {
  const navigate=useNavigate()

  const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateSize = () => {
      setIsPhoneSize(window.innerWidth <= 768);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div className=' flex w-screen sm:h-[100px] md:h-[140px] justify-between lg:px-40 md:flex-row px-2 ' style={{backgroundColor:colors.primary}}>
    <div className='flex justify-center items-center' style={{ color: '#fff', fontSize: isPhoneSize ? "1rem" : "1.5rem" ,fontWeight:"600" }}>Contact with us for customer support</div>
        <div className='flex justify-center items-center md:py-0 py-4'>         
            
      <button
      className="w-full sm:w-40 px-4 lg:py-3 md:py-3 py-2 rounded   text-md  text-white border-2"
      onClick={() => navigate("/contactus")} // Wrap navigate("/contactus") inside an arrow function
      style={{
       color: "#fff", // Set text color
       borderColor: colors.primary, // Set initial border color
       backgroundColor: colors.secondary,
       transition: "background-color 0.3s, color 0.3s, border-color 0.3s", // Add a transition for a smooth effect
       fontSize:"0.8rem",
       fontWeight:"500"


       }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = colors.primary, e.target.style.color = colors.secondary, e.target.style.borderColor = colors.secondary)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = colors.secondary, e.target.style.color = "#fff", e.target.style.borderColor = colors.secondary)}
>
  <p>Get Support</p>
</button></div>
    </div>
  )
}

export default CTA