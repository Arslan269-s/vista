import React, { useState, useEffect } from "react";
import dummy from "../assetsIMG/Left-Image.png";
import AOS from 'aos';

export const LandingPageSection5 = () => {

  useEffect(() => { 
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      delay: .5,
    });
   }, []);
  return (
    <div>
      <div className="Section-3 padding-bottom">
        <div className="container">
          <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="landing-page-section-5-iamge" data-aos="fade-right">
                <img src={dummy} alt="iamges" className="dummy-page-image" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="landing-page-section-3-text"  data-aos="fade-left">
                <span>OVERLINE</span>
                <h1>
                  Sapien ipsum  fosce
                  Scelerisque 
                  convallis fosce
                  convallis
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>

                <div className="sub-title-landingpage">
                    <div className="sub-title-landingpage-1">
                        <div className="sub-title-icon-1">
                            <span><i className="fa-solid fa-desktop"></i></span>
                            <h4>typesetting industry</h4>
                            <p>onvallis fosce</p>
                        </div>
                    </div>
                    <div className="sub-title-landingpage-2">
                    <div className="sub-title-icon-1 margin-use">
                            <span><i className="fa-solid fa-desktop"></i></span>
                            <h4>typesetting industry</h4>
                            <p>onvallis fosce</p>
                        </div>
                    </div>
                </div>

                <div className="landing-page-button">
                  <button className="get-started get-learn-more get-hover-effect get-bottom-to-top">Get started</button>
                  <button className="learn-more get-learn-more on-hover-effect top-to-bottom-effect">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
