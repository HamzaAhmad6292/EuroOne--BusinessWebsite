import React, { useEffect } from 'react';
import './productsLandingPage.css'; // Make sure to import your CSS file
import Footer from '../../footer/footer';

const ProductsLandingPage = () => {
//     useEffect(() => {
//         // Animation logic
//         const animate = (element, options) => {
//             const { opacity, delay, y } = options;
      
//             setTimeout(() => {
//               element.style.opacity = 1;
//               element.style.transform = `translateY(${y}px)`;
//               element.animate(
//                 [
//                   { opacity: 0, transform: `translateY(${y}px)` },
//                   { opacity: 1, transform: 'translateY(0)' }
//                 ],
//                 { duration: 1000, easing: 'ease-in-out', fill: 'forwards' }
//               );
//             }, delay * 1000);
//           };

//         const animateElements = () => {
//             const logo = document.querySelector('.logo');
//             const navItems = document.querySelectorAll('nav ul li');
//             const search = document.querySelector('.search');
//             const menu = document.querySelector('.menu');
//             const title = document.querySelector('.title');
//             const btn = document.querySelector('.btn');
//             const lineOne = document.querySelector('.line-one');
//             const lineTwo = document.querySelector('.line-two');
//             const img = document.querySelector('.img');
//             const year = document.querySelector('.year');
//             const mediaItems = document.querySelectorAll('.media ul li');
      
//             animate(logo, { opacity: 0, x: -20, ease: 'Expo.easeInOut', delay: 0 });
//             Array.from(navItems).forEach((item, index) => animate(item, { opacity: 0, x: -20, ease: 'Power3.easeInOut', delay: 0.08 * index }));
//             animate(search, { opacity: 0, x: -20, ease: 'Expo.easeInOut', delay: 0.5 });
//             animate(menu, { opacity: 0, x: -20, ease: 'Expo.easeInOut', delay: 0.6 });
//             animate(title, { opacity: 0, y: 20, ease: 'Expo.easeInOut', delay: 1 });
//             animate(btn, { opacity: 0, y: 20, ease: 'Expo.easeInOut', delay: 1.6 });
//             animate(lineOne, { opacity: 0, y: -800, ease: 'Expo.easeInOut', delay: 2 });
//             animate(lineTwo, { opacity: 0, y: -800, ease: 'Expo.easeInOut', delay: 2.5 });
//             animate(img, { opacity: 0, y: -800, ease: 'Expo.easeInOut', delay: 2.9 });
//             animate(year, { opacity: 0, y: -20, ease: 'Expo.easeInOut', delay: 1.4 });
//             Array.from(mediaItems).forEach((item, index) => animate(item, { opacity: 0, y: 40, ease: 'Expo.easeInOut', delay: 3.2 + 0.2 * index }));
//           };
      
//           animateElements();
//   }, []);

  return (
    <div className="h-screen w-screen flex">
      <div className="stripes ">
        <div className="line-one"></div>
        <div className="line-two"></div>
      </div>
      {/* navbar============== */}
      <nav>
        <div className="logo">
          <span>Omega</span>
        </div>
        {/* <ul>
          <li><a href="">collection</a></li>
          <li><a href="">products</a></li>
          <li><a href="">offers</a></li>
          <li><a href="">Contact</a></li>
        </ul> */}
        <div className="search">
          <i className="fa fa-search"></i>
        </div>
        <div className="menu">
          <i className="fa fa-bars"></i>
        </div>
      </nav>

      <div className="img">
        <img src="watch.png" alt="" />
      </div>

      <div className="title">
        <p>speedmaster</p>
        <span>Moonwatch.</span>
      </div>

      <div className="btn">
        <a href="">Order Now</a>
      </div>

      <div className="year">2022*</div>

      <div className="media">
        <ul>
          <li><i className="fa fa-facebook"></i></li>
          <li><i className="fa fa-instagram"></i></li>
          <li><i className="fa fa-twitter"></i></li>
        </ul>
      </div>


    </div>
  );
};

export default ProductsLandingPage;
