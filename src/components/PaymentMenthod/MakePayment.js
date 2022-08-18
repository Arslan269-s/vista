import React, {useState} from 'react'
import { PaymentMethodCard } from './PaymentMethodCard';
import { Stapper } from './Stapper'
import {Modal, Button} from 'react-bootstrap';



function MakePayment({}) {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='make-payment'>
        <Stapper handleClose="handleClose" />
        <div className='make-paymment-subheading'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <input type="text" className='user-detail d-block' placeholder='First Name' />
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                     <input type="text" className='user-detail d-block' placeholder='Last Name' />
                </div>
            </div>
             <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <input type="text" className='user-detail d-block my-0' placeholder='Email Address' />

                    <div className='select-payment-method'>
                        <h5>Select Method of  payment</h5>
                        <div className='payment-method dabit-card d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='credit-card d-flex'>
                                <i className="fa-solid fa-credit-card"></i>
                                <h6>Credit card or Debit</h6>
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" className='credit-checkbox' />
                            </div>
                        </div>
                        <div className='payment-method d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='credit-card d-flex'>
                                 <i className="fa-brands fa-paypal"></i>
                                <h6>Paypal</h6>
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" className='credit-checkbox' />
                            </div>
                        </div>
                        <div className='payment-method d-flex flex-wrap justify-content-between align-items-center'>
                            <div className='credit-card d-flex'>
                                <i className="fa-solid fa-building-columns"></i>
                                <h6>Bank Transfer</h6>
                            </div>
                            <div className='checkbox'>
                                <input type="checkbox" className='credit-checkbox' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12 order-lg-last'>
                    <textarea type="text" className='text-area-detail' rows="4" cols="50" placeholder='Address for Delivery' />
                    <input type="text" className='user-detail d-block' placeholder='Mobile Phone' />
                </div>
            </div> 
           
            <button className='go-to-payment get-started get-hover-effect get-bottom-to-top' onClick={handleShow}>Go To Payment</button>
            <Modal show={show} onHide={handleClose} size="lg">
                <PaymentMethodCard />
            </Modal>
        </div>
        </div>
    </div>
  )
}

export default MakePayment