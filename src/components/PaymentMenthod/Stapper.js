import React, {useState} from 'react'

export const Stapper = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className='staper padding-top'>
        <div className='container'>
        <div className='make-payment-icon d-flex justify-content-between flex-wrap align-items-center'>
            <i className="fa-solid fa-arrow-left"></i>
            <i className="fa-solid fa-xmark"></i>
        </div>
        <div className='make-paymment-subheading'>
            <h4>Make Payment</h4>
        </div>
        </div>
    </div>
  )
}
