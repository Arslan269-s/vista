import React from 'react';

export const Create = () => {
  return (
    <div className='create padding-top padding-bottom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-sm-12'>
                <div className='create-profile-card '>
                        <div className='author-profile-image'>
                            <img src="assets/image/Image-3.png" alt='images' className='img-fluid d-blok m-auto' />
                        </div>
                        <div className='create-profie-subheading text-center'>
                            <h3>Einstein Bariya</h3>
                            <h6>einsteinbariya011@.com</h6>
                            <div className='create-profile-icon'>
                            <i className="fa-brands fa-facebook-f bg-blue"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <button className='btn-follow-profile-create learn-more on-hover-effect top-to-bottom-effect'>Follow</button>
                        </div>

                    </div>
                </div>
                <div className='col-md-9 col-lg-9 col-sm-12'>
                    <div className='create-item'>
                    <div className='create-subheading'>
                        <h6>Create</h6>
                        <h2>Create Item</h2>
                        <div className='create-form'>
                        <label htmlFor="input-filed" className='username'>Choose file<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds2" id="input-filed" />
                        <label htmlFor="input-filed" className='username'>Item Name<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds2" id="input-filed" />
                        <label htmlFor="input-filed" className='username my-3'>Description<i className="fa-solid fa-asterisk"></i></label>
                        <textarea rows="4" cols="50" name="comment" form="usrform" className='textarea-input'> </textarea>
                        <div className='item-price d-flex flex-wrap justify-content-between align-items-center'>
                          <div className='royality'>
                        <label htmlFor="input-filed" className='username'>Item Name<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds1" id="input-filed" /></div>
                        <div className='royality'>
                        <label htmlFor="input-filed" className='username'>Royality<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds1" id="input-filed" /></div>
                        </div>
                        <div className='item-price d-flex flex-wrap justify-content-between align-items-center'>
                          <div className='royality'>
                        <label htmlFor="input-filed" className='username'>Size<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds1" id="input-filed" /></div>
                        <div className='royality'>
                        <label htmlFor="input-filed" className='username'>No of Copies<i className="fa-solid fa-asterisk"></i></label>
                        <input type="text" className="input-fileds1" id="input-filed" /></div>
                        </div>
                          <button className='create-item-button get-started get-hover-effect get-bottom-to-top'>Create Item</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
