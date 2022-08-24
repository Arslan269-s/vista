import React, { useState, useEffect } from "react";
import Auctions from "../AuctionMenu";
import Rating from "../Rating";
import AOS from 'aos';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Waypoint } from "react-waypoint";

import {Link} from 'react-router-dom';
export const AuctionList = () => {

  const [didViewCountUp, setDidViewCountUp] = useState(false);
  

  const onVWEnter = () => {
    setDidViewCountUp(true);
  }
  
  const handleClick = event => {
    event.currentTarget.classList.toggle('bg-salmon');
    event.currentTarget.classList.toggle('fa-solid fa-heart')
  }

  useEffect(() => { 
    AOS.init({
      offset: 100,
      duration: 400,
      easing: 'ease-in-sine',
      delay: .5,
    });
  }, []);

  const [auction, setAuction] = useState(Auctions);
  const [rate, setRate] = useState(Rating);
  return (
    <div>
      <hr/>
      <div className="auction padding-bottom padding-top">
        <div className="container">
          <div className="auctio-heading">
            <span className="overline" data-aos="zoom-in">OVERLINE</span>
            <h3  data-aos="zoom-in">Most popular live auction</h3>
            <div className="auction-button" data-aos="zoom-out">
              <button className="auction-btn ">Architecture</button>
              <button className="auction-btn">Photography</button>
              <button className="auction-btn">Games</button>
              <button className="auction-btn">Music</button>
              <button className="auction-btn auction-active">All</button>
            </div>
          </div>
          <div className="row equal g-3">
            {auction.map((value, index) => (
              <div className="col-md-6 col-lg-2 col-sm-6" key={index}>
                <div className="auction-item"  data-aos="fade-up" data-aos-duration="1000">
                  <Link to="/auction">
                  <div className="auction-item-image">
                    <img src={value.image} alt="images"className="image-item img-fluid d-block m-auto"/>
                  </div></Link>
                  <Link to="/auction">
                  <h6>Lorem Ipsum dummy text of the printing.</h6></Link>
                  <div className="latest-item-timer mx-2">
                    <div className="timer-item-section">
                      <p><span><i className="fa-regular fa-stopwatch"></i>22;39</span></p>
                    </div>
                    <p className="latest-item-timer-auction-eth">1.55 ETH</p>
                  </div>
                  <hr />
                  <div className="avatar">
                    <div className="people-heading-detail">
                      <p className="auction-bidding">102 people are bidding</p>
                    </div>
                    <div className="wishlist">
                      <p>
                        <i className="fa-solid fa-heart" onClick={handleClick}></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

    </div>
          </div>
          <button className="show-me-more-auction-list learn-more on-hover-effect top-to-bottom-effect">Show me more</button>

              <div className="border-bottom-auction">
                <hr />
              </div>
              <div className="rating">
                <div className="container">
                      <div className="row">
                        {/* {rate.map ((items,index) => ( */}
                        <div className="col-md-3 col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                          <div className="rating-list">
                              <div className="rating-icon">
                                <i className="fa-solid fa-circle-user"></i>
                              </div>
                              
                              <Waypoint onEnter={onVWEnter} onLeave={()=>{setDidViewCountUp(false)}} >
                             <div>
                             {didViewCountUp &&  <CountUp start={didViewCountUp ? null : 0} end={300} /> }
                              {({ countUpRef,start }) => (
                                  <h4 ref= {countUpRef}> </h4>
                              )}
                              <p>User Active</p>
                              
                              </div>

                              </Waypoint>


                          </div>
                          </div>
                          <div className="col-md-3 col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1100">
                          <div className="rating-list">
                              <div className="rating-icon">
                                <i className="fa-solid fa-circle-user"></i>
                              </div>
                              <Waypoint onEnter={onVWEnter} >
                             <div>
                             {didViewCountUp &&  <CountUp start={didViewCountUp ? null : 0} end={570} /> }
                              {({ countUpRef,start }) => (
                                  <h4 ref= {countUpRef}> </h4>
                              )}
                              <p>ArtWork</p>
                              
                              </div>

                              </Waypoint>
                          </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                          <div className="rating-list">
                              <div className="rating-icon">
                                <i className="fa-solid fa-circle-user"></i>
                              </div>
                              <Waypoint onEnter={onVWEnter} >
                             <div>
                             {didViewCountUp &&  <CountUp start={didViewCountUp ? null : 0} end={400} /> }
                              {({ countUpRef,start }) => (
                                  <h4 ref= {countUpRef}> </h4>
                              )}
                              <p>Artist</p>
                              
                              </div>

                              </Waypoint>
                          </div>
                      </div>
                      <div className="col-md-3 col-lg-3 col-sm-6" data-aos="fade-up" data-aos-duration="1300">
                          <div className="rating-list">
                              <div className="rating-icon">
                                <i className="fa-solid fa-circle-user"></i>
                              </div>
                              <Waypoint onEnter={onVWEnter} >
                             <div>
                             {didViewCountUp &&  <CountUp start={didViewCountUp ? null : 0} end={115} /> }
                              {({ countUpRef,start }) => (
                                  <h4 ref= {countUpRef}> </h4>
                              )}
                              <p>ETH Spent</p>
                              
                              </div>

                              </Waypoint>
                          </div>
                      </div>
                      {/* ))} */}
                  </div>
                  </div>
              </div>
        
      </div>
    </div>
  );
};
