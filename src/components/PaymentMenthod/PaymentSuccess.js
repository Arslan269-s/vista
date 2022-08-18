import React from 'react'
import { Stapper } from './Stapper'

export const PaymentSuccess = () => {
  return (
    <div className='payment-success'>
        <Stapper />
        <div className='payment-succesfully'>
            <div className='container'>
                <div className='success'>
                    <i className="fa-solid fa-check"></i>
                    <h4>Success</h4>
                    <button className='go-to-payment get-started get-hover-effect get-bottom-to-top'>Complete</button>
                </div>
            </div>
        </div>
    </div>
  )
}
