import swal from 'sweetalert';
import Swal from 'sweetalert2'
import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

import {Form} from 'react-bootstrap';



export const Profile = () => {
        const handleClick = event => {
          event.currentTarget.classList.toggle('bg-salmon');
        }
        const [show, setShow] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [etherem, setEtherem] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleCloseModal = () => setShowModal(false);
        const handleShowModal = () => setShowModal(true);
        const handleCloseModalEth = () => setEtherem(false);
        const handleEthereum = () => setEtherem(true);
      

  return (
    
    <div>

    <Modal
        show={show}
        size="sm"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <span className="reset-passwords">Reset Password</span>
        </Modal.Header>
        <Modal.Body>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <div className="name-filed-modal">
            <input type="text" className="input-filed" placeholder="Old Password" />
          </div>
          <div className="name-filed-modal">
            <input type="text" className="input-filed" placeholder="New Password" />
          </div>
          <div className="name-filed-modal">
            <input type="text" className="input-filed" placeholder="Confirm New Password" />
          </div>
          <div className="name-filed-modal1">
          <button class="update-password">Update Password</button>
          </div>
        </div>
        </Modal.Body>
    </Modal>
    <Modal
        show={showModal}
        size="sm"
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <span className="reset-passwords">Are You Sure?</span>
        </Modal.Header>
        <Modal.Body>
          <p className="decative-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis,
           facere, mollitia laudantium harum animi nesciunt consequatur
           sapiente nostrum ullam fuga. Similique, quam sint perferendis laboriosam distinctio consectetur id praesentium?
          </p>
          <div className='d-flex justify-content-center align-items-center'>
          <button class="top-blance-button cancel deactivate-cancel" onClick={() => handleCloseModal(false)}>Cancel</button>
          <button class="top-blance-button deactivate deactivate-cancel">Deactivate Account</button>
          </div>
        </Modal.Body>
    </Modal>
   
    <Modal
        show={etherem}
        size="sm"
        onHide={handleCloseModalEth}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <span className="reset-passwords">Add an Ethereum Account</span>
        </Modal.Header>
        <Modal.Body>
          <p className="decative-text mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis,
           facere, mollitia laudantium harum animi nesciunt consequatur
           sapiente nostrum ullam fuga. Similique, quam sint perferendis laboriosam distinctio consectetur id praesentium?
          </p>
          <p className="decative-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti consectetur pariatur autem a inventore molestiae nemo quis placeat et alias,
             fugiat vel repellendus assumenda eaque quod nesciunt accusantium consequatur error!</p>
          <div className='d-flex justify-content-center align-items-center'>
              <div className='connect-with-account'>
                <img src='assets/image/metamask.png' className='img-fluid' />
                <h4>Connect With Metamask</h4>
              </div>
              <div className='connect-with-account'>
                <img src='assets/image/metamask.png' className='img-fluid' />
                <h4>Connect With Metamask</h4>
              </div>
          </div>
        </Modal.Body>
    </Modal>

         <div className="dashborad-user-details your-auction-queues-user-dashboard">
        <h2>User Details</h2>
        <div className="user-details-name d-flex justify-content-between align-items-center">
          <h6>User Name</h6>
          <h6 className="user-email">Email Adress</h6>
        </div>
        <div className="user-details-name d-flex justify-content-between align-items-center">
          <p>Joe Yates</p>
          <p className="user-email">Joeyates@gmail.com</p>
        </div>

        <div className="dashboard-eth">
          <h4>Your Ethereum Address</h4>
          <p>Disclaimer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="etherem-account" onClick={() => handleEthereum()}><span className="plus-sign"><i class="fa-solid fa-plus"></i></span> Create an Ethereum Account</a>
        </div>
        <div className="personal-info-details">
          <h4 className="personal-info">Personal Info</h4>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">First Name</label>
            <input type="text" className="input-filed" placeholder="Name" />
          </div>
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">Last Name</label>
            <input type="text" className="input-filed" placeholder="Last Name" />
          </div>
        </div>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">Date of Birth (Optional)</label>
            <input type="text" className="input-filed" placeholder="" />
          </div>
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">Contact Number (Optional)</label>
            <input type="text" className="input-filed" placeholder="Contact Number" />
          </div>
        </div>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">Select Country</label>
            <select id="select-country">
              <option value="pakistan">Pakistan</option>
              <option value="saab">one</option>
              <option value="opel">Two</option>
              <option value="audi">Three</option>
            </select>
          </div>
          <div className="name-filed">
            <label className="dasboard-labels" Forhtml="name">Select City</label>
            <select id="select-country">
              <option value="pakistan">Lahore</option>
              <option value="saab">one</option>
              <option value="opel">Two</option>
              <option value="audi">Three</option>
            </select>
          </div>
        </div>
        <div className="dashboard-personal-info d-flex justify-content-between align-items-center flex-wrap">
          <div className="name-filed1">
            <label className="dasboard-labels" Forhtml="name">Town/City</label>
            <input type="text" className="input-filed" placeholder="Town/City" />
          </div>
          <div className="name-filed1">
            <label className="dasboard-labels" Forhtml="name">Postcode/zip</label>
            <input type="text" className="input-filed" placeholder="Postcode/zip" />
          </div>
          <div className="name-filed1">
            <label className="dasboard-labels" Forhtml="name">Referral Code</label>
            <input type="text" className="input-filed" placeholder="Referral Code" />
          </div>
        </div>
        </div>
        <button class="top-blance-button update-info learn-more on-hover-effect top-to-bottom-effect">Update Info</button>

        <div className="dashboard-personal-info d-flex justify-content-between align-items-center">
          <h6 className="etherem-account reset-account" onClick={() =>handleShow()}>Reset Password</h6>
          <h6 className="etherem-account reset-account" onClick={() =>handleShowModal()}>Deactivate Account</h6>
        </div>
        
      </div>
            <div className="row banners my-4">
                  <div className="col-sm-12 col-md-6 col-lg-6">
                      <div className="banner-1">
                          <h4 className="own-nfts">Create Your <br /> Own NFT</h4>
                          <button className="streat-sale streat-sale1">Strat sale</button>
                      </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="banner-2">
                          <h4 className="own-nfts">Create Your <br /> Own NFT</h4>
                          <button className="streat-sale streat-sale2">Strat sale</button>
                    </div>
                  </div>
            </div>
            <div className="dash-board-option my-3">
                  <div className="select-option d-flex justify-content-end align-items-center">
                    <select id="days">
                      <option value="volvo">Last 7 dasy</option>
                      <option value="saab">Last 2 dasy</option>
                      <option value="opel">Last 4 dasy</option>
                      <option value="audi">Last 8 dasy</option>
                    </select>
                    <select id="days">
                      <option value="">All times</option>
                      <option value="saab">All days</option>
                      <option value="opel">All months</option>
                      <option value="audi">All years</option>
                    </select>
                  </div>
            </div>
            <div className="dash-board-collection">
                  <table id="customers">
                    <tr>
                      <th></th>
                      <th className="use-paddinng">Collection</th>
                      <th>Volum</th>
                      <th>24%</th>
                      <th>Owners</th>
                      <th>Items</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td className="use-paddinng"><div className="dash-board-page-details-image">
                      <img src="assets/image/image-3.png" alt="images" className="img-fluid dash-board-image" />
                      <p className="clint-name">Abstrac paint</p>
                    </div></td>
                      <td>$8,021.99</td>
                      <td className="minus">-28.28%</td>
                      <td>10.5K</td>
                      <td>121</td>

                    </tr>
                    <tr>
                      <td>2</td>
                      <td className="use-paddinng"><div className="dash-board-page-details-image">
                      <img src="assets/image/image-3.png" alt="images" className="img-fluid dash-board-image" />
                      <p className="clint-name">3D Circle Art</p>
                    </div></td>
                      <td>$5,210.09</td>
                      <td className="plus">+11.28%</td>
                      <td>12.3K</td>
                      <td>210</td>

                    </tr>
                    <tr>
                      <td>3</td>
                      <td className="use-paddinng"><div className="dash-board-page-details-image">
                      <img src="assets/image/image-3.png" alt="images" className="img-fluid dash-board-image" />
                      <p className="clint-name">3D Digital Art</p>
                    </div></td>
                      <td>$4,421.10</td>
                      <td className="minus">-18.28%</td>
                      <td>14.5K</td>
                      <td>451</td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td className="use-paddinng"><div className="dash-board-page-details-image">
                      <img src="assets/image/image-3.png" alt="images" className="img-fluid dash-board-image" />
                      <p className="clint-name">3D Cubo Art</p>
                    </div></td>
                      <td>$7,058.02</td>
                      <td className="plus">+10.23%</td>
                      <td>20.3K</td>
                      <td>132</td>

                    </tr>
                   
                  </table>
            </div>
            <div className="row equal">
                      <div className="col-md-7 col-sm-12 col-lg-7">
                      <div className="top-creators">
                      <div className="top-see-all d-flex justify-content-between align-items-center pb-4">
                        <h4>Top Creators</h4>
                        <p>See all</p>
                      </div>
                      <div className="top-creators-details d-flex justify-content-between align-items-center flex-wrap">
                        <div className="top-creators-details-image d-flex justify-content-left align-items-center flex-wrap">
                        <img src="assets/image/image-3.png" alt="images" className="img-fluid top-creators-image" />
                        <div className="top-creators-name">
                          <h6>Joe Yates</h6>
                          <p>@joy-y25</p>
                        </div>
                        </div>
                        
                        <button className="btn-follow">Follow</button>
                      </div>
                      <div className="top-creators-details d-flex justify-content-between align-items-center flex-wrap">
                        <div className="top-creators-details-image d-flex justify-content-left align-items-center flex-wrap">
                        <img src="assets/image/image-3.png" alt="images" className="img-fluid top-creators-image" />
                        <div className="top-creators-name">
                          <h6>Joe Yates</h6>
                          <p>@joy-y25</p>
                        </div>
                        </div>
                        
                        <button className="btn-follow">Follow</button>
                      </div>
                      <div className="top-creators-details d-flex justify-content-between align-items-center flex-wrap">
                        <div className="top-creators-details-image d-flex justify-content-left align-items-center flex-wrap">
                        <img src="assets/image/image-3.png" alt="images" className="img-fluid top-creators-image" />
                        <div className="top-creators-name">
                          <h6>Joe Yates</h6>
                          <p>@joy-y25</p>
                        </div>
                        </div>
                        
                        <button className="btn-follow">Follow</button>
                      </div>
                      <div className="top-creators-details d-flex justify-content-between align-items-center flex-wrap">
                        <div className="top-creators-details-image d-flex justify-content-left align-items-center flex-wrap">
                        <img src="assets/image/image-3.png" alt="images" className="img-fluid top-creators-image" />
                        <div className="top-creators-name">
                          <h6>Joe Yates</h6>
                          <p>@joy-y25</p>
                        </div>
                        </div>
                        
                        <button className="btn-follow">Follow</button>
                      </div>
                    </div>
                    </div>                  
                  <div className="col-md-5 col-sm-12 col-lg-5">
                      <div className="top-creators">
                      <div className="top-see-all d-flex justify-content-between align-items-center pb-4">
                        <h4>Recently add</h4>
                        <p>See all</p>
                      </div>
                      <div className="recently-img">
                        <img src="assets/image/recently-image.jpg" className="img-fluid recently-img1" />
                      </div>
                      <h5 className="d-circle">3D Circle Art </h5>
                      <div className="recently-bid d-flex justify-content-between align-items-center">
                        <p>Current-bid</p>
                        <h6>0.05 ETH</h6>
                        <button className="btn-follow">Place Bid</button>
                      </div>
                      </div>
                    </div>
        </div>
    </div>
  )
}
