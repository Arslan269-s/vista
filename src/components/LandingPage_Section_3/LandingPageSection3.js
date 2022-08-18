import React, { useState, useEffect } from "react";
import dummy from "../assetsIMG/dummy.png";
import AOS from 'aos';

export const LandingPageSection3 = () => {

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
      <div className="Section-3 padding-bottom padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="landing-page-section-3-text" data-aos="fade-right">
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
                  <button className="get-learn-more get-started get-hover-effect get-bottom-to-top">Get started</button>
                  <button className="learn-more get-learn-more on-hover-effect top-to-bottom-effect">Learn more</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="landing-page-section-3-iamge mt-3" data-aos="fade-left">
                <img src={dummy} alt="iamges" className="dummy-page-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
