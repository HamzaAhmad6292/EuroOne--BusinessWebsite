import React, { useEffect, useRef } from "react";
import "./component1.scss";
import { TimelineLite, TweenMax, Power3 } from "gsap";
import colors from "../utils/colors";
import imgGirl from "../images/girl.webp";
import imgBoy from "../images/boy.webp";
import arrow from "../images/arrow-right.svg";
import backgroundImage from ".././utils/tempPVC.jpg";
import { Link } from "react-scroll";
import Showcase from "./Home/showcase";

function Component1() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: "visible" } });

    //Images Animation
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
      .from(boyImage, 1.4, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(boyImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div
      className={`bg-${colors.background} text-${colors.text} hero mt-4`}
      ref={(el) => (app = el)}
    >
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={(el) => (content = el)}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">EuroOne..</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"> Revolution </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">the world needs</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <Link
                  to="showcase" // Id of the next component
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button className="explore-button">
                    Explore
                    <div className="arrow-icon">
                      <img src={arrow} alt="row" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={(el) => (images = el)} className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component1;
