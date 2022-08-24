import React, {useEffect, useState} from "react";
import ModalImage from "react-modal-image";

import {Modal} from 'react-bootstrap';

import image3 from "../assetsIMG/Image-4.png";
import image4 from "../assetsIMG/Image-5.png";
import detail from '../assetsIMG/detail-image.jpg';



import AOS from 'aos';

export const ItemDetail = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init({
    });
    }, []);

    const handleClick = event => {
      event.currentTarget.classList.toggle('bg-salmon');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <>
    <Modal
        show={show}
        size="sm"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <span className="make-ofer">Make an Offer</span>
        </Modal.Header>
        <Modal.Body>
          <p className="dashboard-personal-info-detail"><strong>Caution!</strong> Once an offer is made, the action can not be reversed. </p>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <label className="dashboard-personal-info-detail">Offer Amount</label>
          <div className="name-filed-modal">
            <input type="text" className="input-filed" placeholder="0" />
          </div>
          <p className="dashboard-personal-info-detail"><strong>Caution!</strong> Once an offer is made, the action can not be reversed. </p>
          <div className="name-filed-modal1">
          <button class="update-password">Make An Offer</button>
          </div>
        </div>
        </Modal.Body>
    </Modal>

    <div className="item-detail pt-3 padding-bottom">
      <div className="container">
        <div className="items-border-icon" data-aos="fade-up"  data-aos-duration="1000"  data-aos-offset="20">
            <div className="icon-item-detail">
            <i className="fa-solid fa-heart icon-item" onClick={handleClick}></i>
            <i className="fa-solid fa-copy icon-item"></i>
            <i className="fa-solid fa-share-nodes icon-item"></i>
            </div>
          <div className="row equal">
            <div className="col-md-5 col-lg-5 col-sm-12">
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
            <div className="col-md-7 col-lg-7 col-sm-12">
              <div className="item-detail-heading">
                <h1>
                  Scelerisque Sapien ipsum
                </h1>
                <p className="item-detail-p">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry <a href="#" className="show-less">Show</a>
                </p>

                 <div class="col-lg-12 col-sm-12 col-md-12">
                                <div class="item-desc-part mt-3">
                                  <div class="item-desc-inner">
                                <div class="item-desc-content">
                                   
                                    
                                    <div class="tab-content" id="nav-tabContent">
                                        <div class="details-tab tab-pane fade show active" id="nav-details"
                                            role="tabpanel" aria-labelledby="nav-details-tab">
                                           
                                            <div class="row">
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Owner:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>metawings</p>
                                                  </div>

                                                  </div>
                                                </div>

                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Serial No.</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>0005515456416</p>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Token ID:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>0005515456416</p>
                                                  </div>

                                                  </div>
                                                </div>

                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>IP:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Sports Development Limited</p>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Brand:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Hero Indian Super League</p>
                                                  </div>

                                                  </div>
                                                </div>

                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Edition:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Hero ISL 2021-22</p>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Category:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Moments</p>
                                                  </div>

                                                  </div>
                                                </div>

                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Series:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>ATK Mohun Bagan</p>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                              <div class="row">
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Set:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Saves</p>
                                                  </div>

                                                  </div>
                                                </div>

                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Rarity:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>Legendary</p>
                                                  </div>

                                                  </div>
                                                </div>
                                                <div class="col-sm-12 col-lg-6 col-md-6">
                                                  <div class="other-info-list-detail">
                                                    <div class="item-info-title">
                                                      <h6>Asset:</h6>
                                                  </div>
                                                  <div class="item-info-details">
                                                      <p>2D Animated</p>
                                                  </div>

                                                  </div>
                                                </div>
                                              </div>
                                              
                                        </div>

                                  </div>

                                </div>
                            </div>
                        </div>
                    </div>
                   
                  
                <div className="item-detail-current-price">
                  <div className="current-price d-flex flex-wrap justify-content-between align-items-center">
                    <p>Current price</p>
                    <h4>
                      5.25<sub>ETH</sub>
                    </h4>
                  </div>
                  <div className="button-make-offer d-flex justify-content-between alogn-items-center">
                  <button className="place-a-bid get-started get-hover-effect get-bottom-to-top">Place a Bid</button>
                  <button className="place-a-bid make-offer get-started get-hover-effect get-bottom-to-top" onClick={() =>handleShow()}>Make a Offer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
