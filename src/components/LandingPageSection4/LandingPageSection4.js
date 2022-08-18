import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image6 from "../assetsIMG/Image-6.png";
import image1 from "../assetsIMG/hand.png";
import Menu from "../Menu";
import AOS from 'aos';
export const LandingPageSection4 = () => {

  const handleClick = event => {
    event.currentTarget.classList.toggle('bg-salmon');
  }

  useEffect(() => {
     
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      delay: .5,
    });
  }, []);

  const [carousel, setCarousel] = useState(Menu);
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },

      1300: {
        items: 1,
      },
    },
  };
  return (
    <div>
      <div className="Section-4 padding-bottom padding-top">
        <div className="container">
          <div className="check-out-cart padding-top padding-bottom">
            <div className="row equal g-3">
              <div className="col-md-6 col-lg-4 col-sm-12 border rounded-4 cart-checkout" data-aos="fade-right">
                <div className="check-out-carousel">
                  <h1>Hottest Sale Offers</h1>
                  <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={20}
                    items={4}
                    {...options}
                    autoWidth={true}
                  >
                    {carousel.map((item, index) => (
                      <div className="latest-item-detail" key={index}>
                        <div className="latest-item-image-checkout">
                          <img
                            src={item.image}
                            alt="iamges"
                            className="image-latest"
                          />
                        </div>
                        <div className="latest-item-heading-details">
                          <div className="latest-item-heading">
                            <h4>Dui accumsan leo vestibulam ornear uio</h4>
                          </div>
                          <hr />
                          <div className="latest-item-timer m-0">
                            <div className="timer-item-section">
                              <p>
                                <span>
                                  <i className="fa-solid fa-stopwatch"></i>
                                  {item.timer}
                                </span>
                              </p>
                            </div>
                            <p className="latest-time-eth">{item.eth}</p>
                          </div>
                          <div className="avatar">
                            <div className="people-heading-detail">
                              <p className="people-bidding">
                                101 people are bidding
                              </p>
                            </div>
                            <div className="wishlist">
                              <p>
                                <i className="fa-solid fa-heart" onClick={handleClick}></i>
                                {item.wishlist}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                  <button className="show-me-more learn-more on-hover-effect top-to-bottom-effect ">Show me more</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 cart-checkout cart-checkout1" data-aos="fade-up">
                 <div className="cart-checkout-hand">
                <div className="card-checkout-window">
                <span className="dot">
                  <i className="fa-solid fa-circle"></i>
                  <i className="fa-solid fa-circle"></i>
                  <i className="fa-solid fa-circle"></i>
               </span>
                </div>
                <div className="hand-section">
                  <div className="hand-image-1">
                    <img src={image1} alt="images" className="image-hande" />
                  </div>
                  </div>
                  <div id="started-text">
                    <h2>Get started creating <br/> $ selling your NFTs</h2>
                    <p id="started-p">
                      show the texy in the worl of thw one derication and uni
                      drication
                    </p>
                    <button className="getstarted-selling-button get-started get-hover-effect get-bottom-to-top">
                      Show me more
                    </button>
                  </div>
                </div> 
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 border rounded-4 cart-checkout" data-aos="fade-left">
                <h1 className="top-nft-price">
                  Top NFT at lower
                 price
                </h1>
                <div className="lower-price-detail-main-detail">
                <div className="lower-price-detail">
                  <div className="lower-price-image">
                    <img src={image6} alt="Image3" className="lower-image" />
                  </div>
                  <div className="lower-price-text">
                    <p>
                      show the texy in the worl of thw one derication and uni
                      drication
                    </p>
                    <div className="latest-item-timer m-0">
                      <div className="timer-item-section">
                        <p>
                          <span>
                            <i className="fa-solid fa-stopwatch"></i>22:59
                          </span>
                        </p>
                      </div>
                      <p className="latest-time-eth">1.25 ETH</p>
                    </div>
                    <div className="avatar-price avatar">
                      <div className="people-heading-detail">
                        <p className="people-bidding">101 people are bidding</p>
                      </div>
                      <div className="wishlist">
                        <i className="fa-solid fa-heart" onClick={handleClick}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-price-detail">
                  <div className="lower-price-image">
                    <img src={image6} alt="Image3" className="lower-image" />
                  </div>
                  <div className="lower-price-text">
                    <p>
                      show the texy in the worl of thw one derication and uni
                      drication
                    </p>
                    <div className="latest-item-timer m-0">
                      <div className="timer-item-section">
                        <p>
                          <span>
                            <i className="fa-solid fa-stopwatch"></i>22:59
                          </span>
                        </p>
                      </div>
                      <p className="latest-time-eth">1.25 ETH</p>
                    </div>
                    <div className="avatar-price avatar">
                      <div className="people-heading-detail">
                        <p className="people-bidding">101 people are bidding</p>
                      </div>
                      <div className="wishlist">
                        <i className="fa-solid fa-heart" onClick={handleClick}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-price-detail">
                  <div className="lower-price-image">
                    <img src={image6} alt="Image3" className="lower-image" />
                  </div>
                  <div className="lower-price-text">
                    <p>
                      show the texy in the worl of thw one derication and uni
                      drication
                    </p>
                    <div className="latest-item-timer m-0">
                      <div className="timer-item-section">
                        <p>
                          <span>
                            <i className="fa-solid fa-stopwatch"></i>22:59
                          </span>
                        </p>
                      </div>
                      <p className="latest-time-eth">1.25 ETH</p>
                    </div>
                    <div className="avatar-price avatar">
                      <div className="people-heading-detail">
                        <p className="people-bidding">101 people are bidding</p>
                      </div>
                      <div className="wishlist">
                        <i className="fa-solid fa-heart" onClick={handleClick}></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lower-price-detail">
                  <div className="lower-price-image">
                    <img src={image6} alt="Image3" className="lower-image" />
                  </div>
                  <div className="lower-price-text">
                    <p>
                      show the texy in the worl of thw one derication and uni
                      drication
                    </p>
                    <div className="latest-item-timer m-0">
                      <div className="timer-item-section">
                        <p>
                          <span>
                            <i className="fa-solid fa-stopwatch"></i>22:59
                          </span>
                        </p>
                      </div>
                      <p className="latest-time-eth">1.25 ETH</p>
                    </div>
                    <div className="avatar-price avatar">
                      <div className="people-heading-detail">
                        <p className="people-bidding">101 people are bidding</p>
                      </div>
                      <div className="wishlist">
                        <i className="fa-solid fa-heart" onClick={handleClick}></i>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <button className="show-me-more top-nft-lowers-price learn-more on-hover-effect top-to-bottom-effect">Show me more</button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
