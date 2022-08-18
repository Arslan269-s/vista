import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import {Accordion} from 'react-bootstrap'
import { Link } from "react-router-dom";

import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Avatar from "@material-ui/core/Avatar";
import AOS from 'aos';

export const Explore = () => {
  const [explore, setExplore] = useState(Menu);
  const [element, setElement] = useState(6)

  const slice = explore.slice(0, element);
  const loadMore = () => {
    setElement(element + 3);
  }

  useEffect(() => {
    AOS.init({
    });
    }, []);
    const handleClick = event => {
      event.currentTarget.classList.toggle('bg-salmon');
    }

  return (
    <>
    <div className="explore-main-background"><h4 className="text-center main-explore">Explore</h4></div>
    <div className="explore-section">
      <div className="section">
        <div className="container">
          <div className="explore-menu-button d-flex flex-wrap justify-content-between align-items-center">
            <div className="explore-exclusive" data-aos="fade-out">
              <p>exclusive assets</p>
              <h2>Explore</h2>
            </div>
            <div className="explore-button" data-aos="fade-in">
              <button className="btn-button-explore all-nft">All Nfts</button>
              <button className="btn-button-explore">Art</button>
              <button className="btn-button-explore">Collectibles</button>
              <button className="btn-button-explore">Virtual World</button>
              <button className="btn-button-explore">Tranding Cards</button>
            </div>
          </div>
          <div className="explore-detail padding-top padding-bottom">
            <div className="row equal">
              <div className="col-md-3 col-lg-3 col-sm-12">
                  <div className="explore-filter"  data-aos="fade-up"  data-aos-duration="1000"  data-aos-offset="20">
                      <div className="filter-section d-flex flex-wrap justify-content-between align-items-center">
                          <p className="filter-icon mb-0"> <i className="fa-solid fa-filter"></i>Filter</p>
                          <p className="right-arrow mb-0"><i className="fa-solid fa-arrow-left"></i></p>
                      </div>
                  <div className="explore-status">
                  <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Status</Accordion.Header>
                          <Accordion.Body>
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <button className="new get-started get-hover-effect get-bottom-to-top ">New</button>
                                  <button className="auction-explor-button learn-more on-hover-effect top-to-bottom-effect">On Auction</button>
                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                  </div>
                  <div className="explore-status">
                  <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>All Items</Accordion.Header>
                          <Accordion.Body>
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <button className="auction-explor-button-single learn-more on-hover-effect top-to-bottom-effect">Single</button>
                                  <button className="auction-explor-button-single learn-more on-hover-effect top-to-bottom-effect">Bundle</button>
                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                  </div>
                  <div className="explore-status">
                  <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Price</Accordion.Header>
                          <Accordion.Body>
                              
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <p className="usd">$USD</p>
                                  <button className="btn-status-max learn-more on-hover-effect top-to-bottom-effect">Min</button>
                                  <button className="btn-status-max learn-more on-hover-effect top-to-bottom-effect">Max</button>
                                  <button className="btn-status learn-more on-hover-effect top-to-bottom-effect">Apply</button>
                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Collection</Accordion.Header>
                          <Accordion.Body>
                              
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <div className="explore-input-section">
                                    <i className="fa-solid fa-magnifying-glass explore-search"></i>
                                      <input type="text" placeholder="Srarch" className="explore-input border" />
                                  </div>
                                  <div className="explore-buble">
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Guy Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Michael Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>William</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Guy Joseph</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Michael Hawkins</p>
                                  </div>

                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Categories</Accordion.Header>
                          <Accordion.Body>
                              
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <div className="explore-buble">
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Guy Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Michael Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>William</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Guy Joseph</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Michael Hawkins</p>
                                  </div>

                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Chain</Accordion.Header>
                          <Accordion.Body>
                              
                              <div className="status-button d-flex flex-wrap justify-content-between align-items-center">
                                  <div className="explore-buble">
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Guy Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>Michael Hawkins</p>
                                      <p className="bubble-text"><span className="bubbe1"><i className="fa-solid fa-circle"></i></span>William</p>
                                  </div>

                              </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                  </div>
              </div>
              </div>
        
              <div className="col-md-9 col-lg-9 col-sm-12" data-aos="fade-up"  data-aos-duration="1000"  data-aos-offset="20">
                <div className="row equal">
                  {slice.map((item, index) => (
                    <div className="col-md-4 col-lg-4 col-sm-6" key={index}>
                      <div className="explore-item">
                        <div className="latest-item-detail">
                          <Link to='/detail'>
                          <div className="latest-item-image explore-latest-item-image">
                            <img
                              src={item.image}
                              alt="iamges"
                              className="image-latest img-fluid d-block m-auto"
                            />
                          </div>
                          </Link>
                          <div className="latest-item-heading-details-explore" >
                            <div className="latest-item-heading flex-wrap">
                             
                              <h4>
                              <Link to='detail'>
                                Dui accumsan leo vestibulam <br /> ornear uio
                              </Link>
                              </h4>
                              
                              <p>{item.eth}</p>
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
                              <div className="wishlist">
                                <p>
                                  <i className="fa-solid fa-heart" onClick={handleClick}></i>
                                  {item.wishlist}
                                </p>
                              </div>
                            </div>
                            <div className="avatar flex-wrap">
                              <div className="avatar-group">
                                <AvatarGroup>
                                  <Avatar alt="Remy Sharp" src={item.avatar1} />
                                  <Avatar
                                    alt="Travis Howard"
                                    src={item.avatar2}
                                  />
                                  <Avatar
                                    alt="Cindy Baker"
                                    src={item.avatar3}
                                  />
                                  <Avatar
                                    alt="Agnes Walker"
                                    src={item.avatar4}
                                  />
                                </AvatarGroup>
                              </div>
                              <div className="people-heading-detail">
                                <p className="people-bidding">
                                  101 people are bidding
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                    <button className="explore-button-load-more" onClick={() => loadMore()} data-aos="fade-up"  data-aos-duration="1500"  data-aos-offset="20">Load More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
