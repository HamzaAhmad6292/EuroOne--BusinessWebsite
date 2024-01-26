import React from 'react'
import colors from '../../utils/colors'

function CTA() {
  return (
    <div className=' flex w-screen h-[140px] justify-between px-40' style={{backgroundColor:colors.primary}}>
        <div className='flex justify-center items-center' style={{color:'#fff',fontSize:'1.5rem'}}> Contact with us for customer support</div>
        <div className='flex justify-center items-center'>         
            
      <button
      className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md  text-white border-2"
      style={{
       color: "#fff", // Set text color
       borderColor: colors.primary, // Set initial border color
       backgroundColor: colors.secondary,
       transition: "background-color 0.3s, color 0.3s, border-color 0.3s", // Add a transition for a smooth effect
       }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#fff", e.target.style.color = colors.secondary, e.target.style.borderColor = colors.secondary)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = colors.secondary, e.target.style.color = "#fff", e.target.style.borderColor = colors.secondary)}
>
  Get Support
</button></div>
    </div>
  )
}

export default CTA