import React, {useState} from 'react'
import { Stapper } from './Stapper'
import {Modal, Button} from 'react-bootstrap';
import { PaymentSuccess } from './PaymentSuccess';

export const PaymentMethodCard = () => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='payment-card'>
        <Stapper />

        <div className='payment-card-method pt-5'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <div className='credit-card-image mt-4'>
                        <img src='assets/image/CreditCard.png' className='img-fluid d-block m-auto' />
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                <input type="text" className='user-detail d-block' placeholder='Card Number' />
                <div className='row'>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                     <input type="text" className='user-detail d-block' placeholder='Expiry' />
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <input type="text" className='user-detail d-block' placeholder='CVV' />
                </div>
                </div>
                <input type="text" className='user-detail d-block' placeholder='Holder Number' />
                <p className='save-credit-card'><input type="checkbox"  />  Save this credit card</p>
                </div>
            </div>
            <button className='go-to-payment get-started get-hover-effect get-bottom-to-top' onClick={handleShow}>Confirm</button>
            <Modal show={show} onHide={handleClose} size="lg">
                <PaymentSuccess />
            </Modal>

        </div>
        </div>
    </div>
  )
}
