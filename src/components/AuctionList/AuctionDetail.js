import React, {useEffect} from "react";
import ModalImage from "react-modal-image";

import image3 from "../assetsIMG/Image-4.png";
import image4 from "../assetsIMG/Image-5.png";
import detail from '../assetsIMG/detail-image.jpg';

import AOS from 'aos';

export const AuctionDetail = () => {
  
  const handleClick = event => {
    event.currentTarget.classList.toggle('bg-salmon');
  }

  useEffect(() => {
    AOS.init({
    });
    }, []);
  return (
    <div className="item-detail padding-top padding-bottom">
      <div className="container">
        <div className="items-border-icon" data-aos="fade-up"  data-aos-duration="1000"  data-aos-offset="20">
            <div className="icon-item-detail">
            <i className="  icon-item fa-solid fa-heart" onClick={handleClick}></i>
            <i className="fa-solid fa-copy icon-item"></i>
            <i className="fa-solid fa-share-nodes icon-item"></i>
            </div>
          <div className="row equal">
            <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="item-detail-main-image">
                    {/* <img src={detail} alt="images" className="img-fluid d-block item-detail-main" /> */}
                    <ModalImage className="react-modal-image"
                        small={detail}
                        large={detail}
                      />
                    <div className="image-main-icon">
                        <i className="fa-solid fa-minimize"></i>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="item-detail-heading">
                <h1>
                  Scelerisque Sapien ipsum Scelerisque convallis fosce Sapien
                </h1>
                <p className="item-detail-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>

                <div className="item-detail-sab-detail d-flex flex-wrap justify-content-left align-items-center">
                  <div className="item-detail-sab-detail-1 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="item-detail-sab-detail-image">
                      <img
                        src={image3}
                        alt="images"
                        className="item-detail-img img-fluid d-block m-auto"
                      />
                    </div>
                    <div className="item-detail-sab-detail-text">
                      <p>Creator</p>
                      <h6>@brook_sim</h6>
                    </div>
                  </div>
                  <div className="item-detail-sab-detail-1 d-flex flex-wrap justify-content-between align-items-center item-detail-collection">
                    <div className="item-detail-sab-detail-image">
                      <img
                        src={image4}
                        alt="images"
                        className="item-detail-img img-fluid d-block m-auto"
                      />
                    </div>
                    <div className="item-detail-sab-detail-text">
                      <p>Collection</p>
                      <h6>After_life</h6>
                    </div>
                  </div>
                </div>

                <div className="auction-timer d-flex flex-wrap justify-content-left align-items-center ">
                <i className="fa-solid fa-stopwatch"></i> <p>Day 04 : Hours 22 : Minutes 25 : Seconds 21</p>
                </div>

                <div className="item-detail-current-price">
                  <div className="current-price d-flex flex-wrap justify-content-between align-items-center">
                    <div className="current-price-left">
                    <p>Current price</p>
                    <h4> 5.25<sub>ETH</sub></h4>
                    </div>
                    <div className="time-left">
                    <p>Time Left</p>
                    <h5>22:25 min</h5>
                    <p>(01.01.2022 - 01:40:47)</p>
                    </div>
                  </div>
                  <button className="place-a-bid get-started get-hover-effect get-bottom-to-top">place a bid</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
