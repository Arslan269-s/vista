import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';
import MakePayment from "./MakePayment";

export const Card = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='cards'>
          <nav aria-label="breadcrumb" className='cart-breadcrumbs'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Cart</a></li>
              <li className="breadcrumb-item active" aria-current="page">Cart List</li>
            </ol>
          </nav>
      <div className='container'>
        <div className='card-method'>
<table className="table table-borderless">
  <thead>
    <tr className='border-bottom my-5'>
      <th className='price-qty' scope="col" colspan="3"><h4>NFT's</h4></th>
      <th className='text-center price-qty' scope="col"><h4>PRICE</h4></th>
      <th className='text-center price-qty' scope="col"><h4>QTY</h4></th>
      <th className='text-center price-qty' scope="col"> <h4>UNIT PRICE</h4></th> 
    </tr>
  </thead>
  <tbody>
    <tr className='border-bottom my-5'>
      <td colspan="3"> 
      <div className='card-nfts-detail d-flex flex-wrap justify-content-left align-items-center'>
              <i className="fa-solid fa-x"></i>
              <div className='card-nfts-image'>
                <img src='assets/image/image-3.png' alt="iamges" className='img-fluid d-block m-auto' />
              </div>
            <h6>NFT 02120</h6>
        </div>
      </td>
      <td className='text-center cart-padding-top card-dolar-payment'> <h5>$998</h5></td>
      <td className='text-center cart-padding-top'>
        <div className='quantity'>
          <i className="fa-solid fa-minus"></i><span className='quty'> 1 </span> <i className="fa-solid fa-plus"></i>
            </div>
          </td>
      <td className='text-center cart-padding-top card-dolar-payment'><h5>$499</h5></td>
    </tr>

    <tr className='border-bottom my-5'>
      <td colspan="3"> 
      <div className='card-nfts-detail d-flex flex-wrap justify-content-left align-items-center'>
              <i className="fa-solid fa-x"></i>
              <div className='card-nfts-image'>
                <img src='assets/image/image-3.png' alt="iamges" className='img-fluid d-block m-auto' />
              </div>
            <h6>NFT 02120</h6>
        </div>
      </td>
      <td className='text-center cart-padding-top card-dolar-payment'> <h5>$998</h5></td>
      <td className='text-center cart-padding-top'>
        <div className='quantity'>
          <i className="fa-solid fa-minus"></i> <span className='quty'> 1 </span> <i className="fa-solid fa-plus"></i>
            </div>
          </td>
      <td className='text-center cart-padding-top card-dolar-payment'><h5>$499</h5></td>
    </tr>
  
   
  </tbody>
</table>

          <div className='card-schedule d-flex flex-wrap justify-content-between padding-top'>
              <div className='card-input'>
                <input type="text" className='card-input-filed' placeholder='voucher code' /><button className='card-submit get-started get-hover-effect get-bottom-to-top'>Submit</button>
              </div>


              <div className='fee-schedule'>
                  <div className='subtotal d-flex flex-wrap justify-content-around align-items-center'>
                    <h4>Subtotal</h4>
                    <h5>$998</h5>
                  </div>
                  <div className='subtotal d-flex flex-wrap justify-content-around align-items-center'>
                    <h4>Shipping fee</h4>
                    <h5>$28</h5>
                  </div>
                  <div className='subtotal d-flex flex-wrap justify-content-around align-items-center border-bottom'>
                    <h4>Coupon</h4>
                    <h5>No</h5>
                  </div>

                  <div className='subtotal d-flex flex-wrap justify-content-around align-items-center'>
                    <h3>Total</h3>
                    <h5>$118</h5>
                  </div>
                <button className='checkout-button get-started get-hover-effect get-bottom-to-top' onClick={handleShow}>Check out</button>
              </div>
          </div>

        </div>
      </div>


      <Modal show={show} onHide={handleClose} size="lg">
          <MakePayment />
      </Modal>

    </div>
  )
}
