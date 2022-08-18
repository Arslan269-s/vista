import React, { useState, useEffect } from "react";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Avatar from "@material-ui/core/Avatar";
import DashboardMenu from '../UserDashBoard/DashboardMenu';
import AOS from 'aos';
import { Link } from "react-router-dom";

export const AuctionsDashboard = () => {

    const [explore, setExplore] = useState(DashboardMenu);
    useEffect(() => {
        AOS.init({
        });
        }, []);
        const handleClick = event => {
          event.currentTarget.classList.toggle('bg-salmon');
        }
  return (
    <div>
        <div className='activity-heading-button d-flex justify-content-between align-items-center mb-5'>
            <h4 className='collection-text'>Auctions</h4>
            <div className='button-activity'>
                <button className='button-activity-time time-unread'>My Auctions</button><button className='button-activity-unread time-unread'>My Bids</button>
            </div>
        </div>
        <div className="row equal">
                  {explore.map((item, index) => (
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
                          <div className="latest-item-heading"><h4>Dui accumsan  <br />leo  vestibulam</h4><p>1.11 ETH</p></div>
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
    </div>
  )
}
