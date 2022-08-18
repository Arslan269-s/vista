import React from "react";
import "../NftExperience/NftExperience.css";
import { Dropdown, DropdownButton } from "react-bootstrap";

import image6 from "../assetsIMG/Image-6.png";
import image7 from "../assetsIMG/Image-5.png";
import image8 from "../assetsIMG/Image-4.png";
import image9 from "../assetsIMG/Image-3.png";
import { Header } from "../Header/Header";

// import metamask from "../assetsIMG/metamask.svg";
// import binance from "../assetsIMG/binance.svg";
// import fortmatic from "../assetsIMG/fortmatic.svg";
// import ethereum from "../assetsIMG/ethereum.svg";

export const NftExperience = () => {
  return (
    <div id="nft-experience-background">
      <Header />
      <div className="nft-experience padding-top padding-bottom">
        <div className="center-point">
        {/* <div className='plants'>
            <div className='plants1'>
              <div className='plants2'>
                <div className='plants3'>
                  <div className='plants4'>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="image_6 image_1 rotation">
            <div className="rot-1">
            <img src={image6} alt="images" className="image_1_shadow" />
            <p className="eth-255 img-rot">2.55 ETH</p>
            </div>
          </div>
           <div className="image_9 image_1 rotation1">
          <div className="rot-2">
            <img src={image9} alt="images" className="image_1_shadow " style={{height: "75px", width: "75px", opacity: "0.5"}} />
            <p className="eth-255">2.55 ETH</p>
          </div>
          </div>
            <div className="image_7 image_1 rotation2">
          <div className="rot-3">
            <img src={image7} alt="images" className="image_1_shadow" style={{height: "70px", width: "70px", opacity: "0.4"}} />
            <p className="eth-255">2.55 ETH</p>
          </div>
          </div>
          <div className="image_8 image_1 rotation3">
          <div className="rot-4">
          <img src={image8} alt="images" className="image_1_shadow" style={{height: "65px", width: "65px", opacity: "0.3"}}/>
          <p className="eth-255">2.55 ETH</p>
        </div>
        </div> 
        </div>
        {/* <p>NON FUNGIBLE TOLENS</p> */}
        <h1>
          A new NFT <br /> 
          <span className="exp"> <img src="assets/image/logo-icon-01.png" className="img-fluid logo-icon-nft-exp " /> Experience </span>
        </h1>
        
        <p className="sell">Discover, collect and sell</p>
        <div className="nft-exp-input">
          <div className="drop-down">
            <div className="c">
            <div className="dd">
              <div className="dd-a"><span>Category</span> <i className="fa-solid fa-chevron-down dd-a-icon"></i></div>
              <input type="checkbox" />
              <div className="dd-c">
                <ul>
                  <li><a href="#"><span>Latest Item</span></a></li>
                  <li><a href="#"><span>Discover</span></a></li>
                  <li><a href="#"><span>Accumsan</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
          <input
            type="text"
            className="input-items"
            placeholder="Items collections"
          />
          <i className="fa-solid fa-magnifying-glass nft-experience-serach"></i>
        </div>         
      </div>
      {/* <div className="wallet-image">
                <img src={metamask} alt="metamask" className="wallet-images" />
                <img src={binance} alt="binance" className="wallet-images"/>
                <img src={fortmatic} alt="fortmatic" className="wallet-images"/>
                <img src={ethereum} alt="ethereum" className="wallet-images"/>
          </div> */}
    </div>
  );
};
