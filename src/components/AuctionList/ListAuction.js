import React, { useState, useEffect } from "react";
import DashboardMenu from '../UserDashBoard/DashboardMenu';

import {Link} from 'react-router-dom';

export const ListAuction = () => {

    const handleClick = event => {
        event.currentTarget.classList.toggle('bg-salmon');
        event.currentTarget.classList.toggle('fa-solid fa-heart')
      }

      const [explore, setExplore] = useState(DashboardMenu);
  return (
    <div className="auctions-main pt-3">
        <div className="container">
        <div className="row equal">
                  {explore.map((item, index) => (
                    <div className="col-md-3 col-lg-3 col-sm-6" key={index}>
                      <div className="explore-item">
                        <div className="latest-item-detail">
                          <Link to='/auctiondetail'>
                          <div className="latest-item-image explore-latest-item-image">
                            <img
                              src={item.image}
                              alt="iamges"
                              className="image-latest img-fluid d-block m-auto"
                            />
                          </div>
                          </Link>
                          <div className="latest-item-heading-details-explore" >
                          <div className="latest-item-heading"><h4>Dui accumsan  <br />leo vestibulam</h4><p>1.11 ETH</p></div>
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
                            <div class="people-heading-detail pt-2"><p class="auction-bidding">102 people are bidding</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
        </div>
    </div>
    </div>
  )
}
