import React, { useState ,useEffect } from "react";
import Menu from "../Menu";
import "../LatestItem/LatestItem.css";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Avatar from "@material-ui/core/Avatar";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from 'aos';
import {Link} from 'react-router-dom';

export const LatestItem = () => {

  const handleClick = event => {
    event.currentTarget.classList.toggle('bg-salmon');
  }

  useEffect(() => {
     
      AOS.init({
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
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },

      1300: {
        items: 4,
      },

    },
  };
  return (
    <div className="latestItem">
      <h1 className="py-5 heading1" data-aos="fade-up">Latest Item</h1>

      <OwlCarousel className="owl-theme " loop margin={20} items={4} autoWidth={true}  {...options} nav={true}
      >
        {carousel.map((item, index) => (
          <div className="latest-item-detail" key={index} data-aos="fade-up" data-aos-duration="2000">
            <Link to="/detail">
            <div className="latest-item-image">
              <img src={item.image} alt="iamges" className="image-latest img-fluid d-block" />
            </div>
            </Link>
          <div className="latest-item-heading-details1">
            <div className="latest-item-heading">
              <h4>
                Dui accumsan  <br/>leo  vestibulam
              </h4>
              <p>{item.eth}</p>
            </div>
            <hr />
            <div className="latest-item-timer m-0">
              <div className="timer-item-section">
              <p>
                <span><i className="fa-solid fa-stopwatch"></i>{item.timer}</span>
              </p>
              </div>
              <div className="wishlist">
                <p><i className="fa-solid fa-heart" onClick={handleClick}></i>
                  {item.wishlist}
                </p>
              </div>
            </div>
            
            <div className="avatar">
              <div className="avatar-group">
                <AvatarGroup>
                  <Avatar alt="Remy Sharp" src={item.avatar1} />
                  <Avatar alt="Travis Howard" src={item.avatar2} />
                  <Avatar alt="Cindy Baker" src={item.avatar3} />
                  <Avatar  alt="Agnes Walker" src={item.avatar4} />
                </AvatarGroup>
              </div>
              <div className="people-heading-detail">
                <p className="people-bidding">101 people are bidding</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};
