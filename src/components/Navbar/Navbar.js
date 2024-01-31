import React, { useState } from "react";
import colors from "../../utils/colors";
import logo from "../../utils/logo.png";
import 'typeface-inter';
import {useNavigate} from "react-router-dom"

export default function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const style = {
    backgroundColor: colors.background,
    color: colors.secondary,
    fontFamily: 'Inter, sans-serif' ,
    position: "sticky",  // Added this style
    top: 0,  // Add ed this style to stick the navbar to the top
    width: "100%",  // Added this style to make it full-width
    zIndex: 1000,  // Adjusted the z-index for stacking order
  };

  const navigate=useNavigate()
  


  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header
        className="border-b-1 py-2 relative z-20 w-full shadow-slate-700/3 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full  lg:backdrop-blur-xl lg:after:hidden border-b-2 border-gray-300 shadow-lg opacity-85 "
        style={style}
      >
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav

            aria-label="main navigation"
            className="flex h-[5.2rem] items-stretch justify-between   "
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className={`flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1 `}
              href=" "
            >
              <img
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                src={logo}
                alt=""
                className="h-12 w-20"
              ></img>
              EuroOne
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45  "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24  transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <button

                  className="flex items-center gap-2 py-4 transition ease-in-out duration-600 hover:border-b-4 hover:border-[#ff9000] lg:px-8"
                  onClick={()=>{navigate("/home")}}
                >
                  <span>Home</span>
                </button>
              </li>

              <div className="relative group  flex items-stretch">
                <button  className="flex items-center gap-2 py-4 transition ease-in-out duration-600 hover:border-b-4 hover:border-[#ff9000] lg:px-8"
>
                  Products
                </button>
                <div
                 className="rounded-3xl absolute hidden mt-20 space-y-2 px-2   group-hover:block bg-gray-900 min-w-60 transition-all duration-300 ease-in-out opacity-0 transform translate-y-2 group-hover:opacity-100 g  roup-hover:translate-y-0 text-white">
                  <a href="/ppcompressionfittings" className="block px-4 py-2 border-b-2 hover:border-b-8 transition-all duration-500 rounded-3xl border-gray-500">
                    PP Compression Fittings
                  </a>
                  <a href="/" className="block px-4 py-2 border-b-2 hover:border-b-8 transition-all duration-500 rounded-3xl border-gray-500">
                    PE Butt Fusion Fittings
                  </a>
                  <a href="/" className="block px-4 py-2 border-b-2 hover:border-b-8 transition-all duration-500 rounded-3xl border-gray-500">
                    Jointing Machines
                  </a>
                  <a href="/" className="block px-4 py-2 border-b-2 hover:border-b-8 transition-all duration-500 rounded-3xl border-gray-500">
                    Other Products
                  </a>
                </div>
              </div>

              {/* <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition ease-in-out duration-300  hover:underline focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="aboutus"
                >
                  <span>About Us</span>
                </a>
              </li> */}

              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition ease-in-out duration-300 hover:border-b-4 hover:border-[#ff9000] lg:px-8"
                  href="contactus"
                >
                  <span>Contact Us</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition ease-in-out duration-300 hover:border-b-4 hover:border-[#ff9000] lg:px-8"
                  href="gallery"
                >
                  <span>Gallery</span>
                </a>
              </li>

              {/* <li className="flex items-stretch ">          */}

              {/* </li> */}

              {/* <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition ease-in-out duration-300  hover:underline focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="faq"
                >
                  <span>FAQs</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  );
}
