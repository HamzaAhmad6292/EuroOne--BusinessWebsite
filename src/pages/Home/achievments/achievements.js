import React, { useState, useEffect } from 'react';
import colors from '../../../utils/colors';
import img from '../../../images/landingimg.png';
import image from '../../../utils/peopleWorking.jpg';

function Achievements() {
  const [isPhoneSize, setIsPhoneSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const updateSize = () => {
      setIsPhoneSize(window.innerWidth <= 768);
    };

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section className={`my-8 bg-black md:h-[55vh] lg:h-[55vh] ${isPhoneSize ? 'flex flex-col items-center' : 'flex'}`}>
      <div className={`bg-white ${isPhoneSize ? 'w-full' : 'w-4/12'}`}>
        <img
          src={img}
          className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
          alt="Achievements"
        />
      </div>

      <div
        className={`flex justify-center items-center ${isPhoneSize ? 'flex-col p-8 px-16' : 'flex-row'} w-full`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          color: '#000',
          fontSize: '1.5rem',
          fontWeight:"550  "
        }}
      >
        <div className={`bg-[#8a63a2] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#ff9000] border-l-8 ${isPhoneSize ? 'w-full h-auto my-2' : 'w-2/12 h-2/6 m-2'}`}>
          1000+ <br />Projects
        </div>
        <div className={`bg-[#ff9000] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#8a63a2] border-l-8 ${isPhoneSize ? 'w-full h-auto my-2' : 'w-2/12 h-2/6 m-2'}`}>
          350+ <br />Employees
        </div>
        <div className={`bg-[#8a63a2] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#ff9000] border-l-8 ${isPhoneSize ? 'w-full h-auto my-2' : 'w-2/12 h-2/6 m-2'}`}>
          20+ <br />Awards
        </div>
        <div className={`bg-[#ff9000] flex justify-center items-center transition duration-300 ease-in-out hover:scale-110 border-[#8a63a2] border-l-8 ${isPhoneSize ? 'w-full h-auto my-2' : 'w-2/12 h-2/6 m-2'}`}>
          100+ <br />Client
        </div>
      </div>
    </section>
  );
}

export default Achievements;
