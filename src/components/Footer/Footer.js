import React, {useEffect} from 'react';
import AOS from 'aos';
import {Link} from 'react-router-dom';

export const Footer = () => {
    useEffect(() => { 
        AOS.init({
        });
       }, []);
  return (
    <div>
        <div className='footer padding-bottom'>
            <div className='container' >
                <div className='row equal border footer-border'>
                    <div className='col-md-6 col-lg-4 col-sm-12'>
                        <div className='footer-logo-section'  data-aos="fade-up" data-aos-duration="600">
                        <div className='marketplace footer'>
                        <img src="assets/image/market-place-logo.svg" className='img-fluid market-place-logo' />
                        </div>
                            <div className='tearm-of-service'>
                                <span><a href ="">Support</a>
                                </span>
                                <span><a href ="">Tearm of service</a>

                                </span>
                                <span><a href ="">License</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-sm-12 border'>
                        <div className='footer-page' data-aos="fade-up" data-aos-duration="700">
                            <div className="row">
                                <div className='col-md-6 col-lg-6 col-sm-6'>
                                    <div className='auctions-footers' >
                                        <ul>
                                            <li><a href=''>Auctions</a></li>
                                            <li><a href=''><Link to="/create">Create</Link></a></li>
                                            <li><a href=''><Link to="/notification">Discover</Link></a></li>
                                            <li><a href=''>Community</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-6 col-lg-6 col-sm-6'>
                                <div className='auctions-footers'>
                                        <ul>
                                            <li><a href=''><Link to="/blog">Blog</Link></a></li>
                                            <li><a href=''><Link to="/activity">Activity</Link></a></li>
                                            <li><a href=''><Link to="/login-acount">My Account</Link></a></li>
                                            <li><a href=''><Link to="/author-profile">Frofile</Link></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <button className="getstarted-selling-button1 footer-button get-started get-hover-effect get-bottom-to-top">My account</button>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-facebook-f"></i><i className="fa-brands fa-linkedin-in"></i><i className="fa-brands fa-github"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-instagram"></i>
                             </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-sm-12'>
                            <div className='section-detail-footer'  data-aos="fade-up" data-aos-duration="800">
                                <p>Lorem Ipsum pasajlarının birçok çeşitlemesi vardır.
                                     Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                                </p>
                                <div className='footer-input'>
                                    <div className='input-sign-in'>
                                    <input type="text" placeholder="" className="input-footer-bottom" /><span className="signin-footer">Subcribe</span>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
