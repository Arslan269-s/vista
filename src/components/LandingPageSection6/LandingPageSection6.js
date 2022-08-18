import React, { useState, useEffect } from "react";
import image6 from "../assetsIMG/Image-6.png";
import Slide from "../Slide";
import AOS from 'aos';

import Slider from "react-slick";

export const LandingPageSection6 = () => {
  const [slid, setSlid] = useState(Slide);

  useEffect(() => { 
    AOS.init({
    });
   }, []);

  const settings = {
    className: "slider variable-width",
    loop: true,
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pause: "null"
  };
  return (
    <div>
      <div className="Section-3">
        <div className="container">
          <div className="window-shape">
            <span className="dot">
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
              <i className="fa-solid fa-circle"></i>
            </span>
          </div>
          <div className="Section-6">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="landing-page-section-3-text" data-aos="fade-right" data-aos-duration="800">
                  <span>OVERLINE</span>
                  <h1>
                    Sapien ipsum <br />
                    Scelerisque <br />
                    convallis fosce
                  </h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>

                  <div className="landing-page-button">
                    <button className="get-started get-learn-more get-hover-effect get-bottom-to-top">Get started</button>
                    <button className="learn-more get-learn-more on-hover-effect top-to-bottom-effect">Learn more</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 user-information-details" data-aos="fade-left" data-aos-duration="800">
                <div className="overlay"></div>
          <div id="background-image-landing-section">
        </div>


                <div></div>
              </div>
            </div>
          </div>
        </div>
    <div className="slider-slide py-5">
        <Slider {...settings}>
          {slid.map((item, index) => (
            <div className="slide-section-7" key={index}>
              <div className="slider-image">
                <img src={item.avatar1} alt="images"  />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};
