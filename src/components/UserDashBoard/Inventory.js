import React from 'react'

export const Inventory = () => {
  return (
    <div className='inventory-bg'>
         <div className="row gx-5">
                            <div className="col-md-4 col-xm-12 col-lg-4 pt-4">
                              <div className="inventry-all-item d-flex justify-content-between align-items-center">
                                <h6 className='inventory-head'>Your Inventory</h6>
                                 <div className="nft-filter d-flex flex-wrap justify-content-center">
                                <div className="form-floating">
                                    <select className="form-select-inventory" id="days"
                                        aria-label="Floating label select example">
                                        <option selected>All items</option>
                                        <option value="1">Trending</option>
                                        <option value="2">Most Viewed</option>
                                        <option value="3">Less Viewed</option>
                                        <option value="3">Ending Soon</option>
                                        <option value="3">Recently Sold </option>
                                        <option value="3">Recently Created </option>
                                        <option value="3">Recently Viewed </option>
                                        <option value="3">Ending Soon</option>
                                    </select>
                                    
                                </div>
                              </div> 
                              </div>
                              <div className="search-bar mt-5">
                                <form action="#" className="header__search" id="header-search">
                                  <input type="text" placeholder="Search your inventory" className='searched' />
                                  <button type="button" className='search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                              </div>
                              <div className="row">
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory image-active">
                                    <i className="icofont-check inventory-check"></i>
                                    <img src="assets/image/image-3.png" alt="images" className="img-fluid d-block m-auto" />
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory">
                                    <img src="assets/image/image-3.png" className="img-fluid m-auto d-block"/>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory">
                                    <img src="assets/image/image-3.png" className="img-fluid m-auto d-block"/>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory">
                                    <img src="assets/image/image-3.png" className="img-fluid m-auto d-block"/>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory">
                                    <img src="assets/image/image-3.png" className="img-fluid m-auto d-block"/>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-6 col-lg-4">
                                  <div className="image-inventory">
                                    <img src="assets/image/image-3.png" className="img-fluid m-auto d-block"/>
                                  </div>
                                </div>
                              </div>
                            </div> 
                            <div className="col-md-4 col-sm-12 col-lg-4 your-auction-queues">
                              <h6 className='inventory-head'>Set Auction Price</h6>
                              <div className="set-auction-price-box">
                                  <p className=''>vel repey as eaque quod nesc add accusa sequatur error</p>
                                  <div className="set-auction-price-image">
                                      <img src="assets/image/image-3.png" className="img-fluid" />
                                  </div>
                                  <div className="set-auction-price-details">
                                    <h6>Market Statistics</h6>
                                    <div className="purchase-price d-flex justify-content-between align-items-center pb-1 pt-3">
                                      <p>Purchase Price:</p>
                                      <p>$0</p>
                                    </div>
                                    <div className="purchase-price d-flex justify-content-between align-items-center py-1">
                                      <p>Lowest Price:</p>
                                      <p>$0</p>
                                    </div>
                                    <div className="purchase-price d-flex justify-content-between align-items-center py-1 pb-4">
                                      <p>Average Price:</p>
                                      <p>$0</p>
                                    </div>
                                      <label>Buy Now Price</label>
                                      <input type="number" placeholder="$0.00" className="set-auction-price-input" />
                                      <div className="input-price d-flex justify-content-between align-items-center py-1 pb-4">
                                          <div className="reserve-price">
                                            <label>Reserve Price</label>
                                            <input type="number" placeholder="$0.00" className="set-auction-price-input1" />
                                          </div>
                                          <div className="auction-state-price">
                                            <label>Auction Form</label>
                                            <input type="number" placeholder="$0.00" className="set-auction-price-input1" />
                                          </div>
                                      </div>
                                      <div className='dropdown-container'>
                                      <label>Set Duration (Days)</label>
                                      <select className="days-form-control" aria-label="Default select example" id="days12" >
                                        <option selected>1</option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                      </select>
                                      <i className="fa-solid fa-caret-down"></i>
                                      </div>
                                  </div>
                                  <button className="top-blance-button-auction">Add To Auction Queue</button>
                              </div>
                              
                            </div>
                            <div className="col-md-4 col-sm-12 col-lg-4 pt-4 pb-4">
                              <h6 className='inventory-head'>Your Auction Queue</h6>
                              <div className="auction-queue">
                                  <div className="row">
                                    <div className="col-md-4 col-sm-12 col-lg-4">
                                        <div className="auction-queue-image">
                                          <img src="assets/image/image-3.png" className="img-fluid"/>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-12 col-lg-8">
                                          <div className="auction-queue-detail">
                                            <h6>Entrepreneurship</h6>
                                            <p className="pt-3 purchase-price1">Serial No. <span>PSBLHS113446</span></p>
                                            <div className="purchase-price auction-price d-flex justify-content-between align-items-center py-1">
                                              <p>Buy Now Price:</p>
                                              <span>$255.00</span>
                                            </div>
                                            <div className="purchase-price auction-price d-flex justify-content-between align-items-center py-1">
                                              <p>Reserve Price:</p>
                                              <span>$244.00</span>
                                            </div>
                                            <div className="purchase-price auction-price d-flex justify-content-between align-items-center py-1">
                                              <p>Auction Starts Form:</p>
                                              <span>$244.00</span>
                                            </div>
                                            <div className="purchase-price auction-price d-flex justify-content-between align-items-center py-1">
                                              <p>Auction Duration:</p>
                                              <span>1 Days</span>
                                            </div>
                                          </div>
                                    </div>
                                  </div >
                              </div>
                              
                              <button className="top-blance-button">List Item(s) For Auction</button>
                            </div>
            </div> 
    </div>
  )
}
