import React from 'react'

export const Activity = () => {
  return (
    <div className='activitys'>
        <div className='activity-heading-button d-flex justify-content-between align-items-center'>
            <h4 className='collection-text'>Activity</h4>
            <div className='button-activity'>
                <button className='button-activity-time time-unread'>ALL TIME</button><button className='button-activity-unread time-unread'>UNREAD FIRST</button>
            </div>
        </div>

        <div className='activity-details py-5'>
            <div className='collection-buttons'>
                <button className='btn-collection'>All</button>
                <button className='btn-collection'>Auction</button>
                <button className='btn-collection'>Offers Received</button>
                <button className='btn-collection'>Offer Sent</button>
                <button className='btn-collection'>Pending Payments</button>
            </div>
            <div className='row equal'>
                <div className='col-md-6 col-sm-12 col-lg-6 my-5'>
                    <h6 className=' pb-4'> 1 of 5</h6>
                    <div className='notification-details my-2'>
                        <p>usama000 has made on offer on item EUPHORIA de</p>
                        <div className='notification-details-button d-flex justify-content-between align-items-center'>
                        <button className='btn-collection'>Offer</button>
                        <h6>6 mint ago</h6>
                        </div>
                    </div>
                    <div className='notification-details my-2'>
                        <p>usama000 has made on offer on item EUPHORIA de</p>
                        <div className='notification-details-button d-flex justify-content-between align-items-center'>
                        <button className='btn-collection'>Update</button>
                        <h6>6 mint ago</h6>
                        </div>
                    </div>
                    <div className='notification-details my-2'>
                        <p>usama000 has made on offer on item EUPHORIA de</p>
                        <div className='notification-details-button d-flex justify-content-between align-items-center'>
                        <button className='btn-collection'>Rigster</button>
                        <h6>8 mint ago</h6>
                        </div>
                    </div>
                    <div className='notification-details my-2'>
                        <p>usama000 has made on offer on item EUPHORIA de</p>
                        <div className='notification-details-button d-flex justify-content-between align-items-center'>
                        <button className='btn-collection'>Auction</button>
                        <h6>2 mint ago</h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 col-lg-6 my-5'>
                    <div className='item-offers'>
                        <h4>Item Offer</h4>
                        <div className='item-offers-image'>
                            <img src='assets/image/image-3.png' className='img-fluid d-block m-auto' />
                        </div>
                        <h3>EUPHORIA de</h3>
                        <p className='congratulation'>Congratulations! Lorem ipsum dolor sit amet,</p>
                        <h6>Offer Amount: $110</h6>
                        <div className='input-counter-offers'>
                           <input type="number" placeholder="$110" className="counter-offers-input"/><button className="counter-offers">Counter Offers</button>
                        </div>
                        <button className='btn-collection'>Accept</button>
                        <button className='btn-collection'>Decline</button>
                        <h6>View Item Details</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
