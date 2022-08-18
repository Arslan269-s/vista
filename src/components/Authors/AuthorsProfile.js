import React, {useState} from 'react';
import AuthorMapCard from '../Authors/AuthorMapCard';
import {Link} from 'react-router-dom';

export const AuthorsProfile = () => {
    const [authrmap, setAuthorMap] = useState(AuthorMapCard);

    const handleClick = event => {
        event.currentTarget.classList.toggle('bg-salmon');
      }

  return (
    <div className='author-profile padding-top padding-bottom'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-sm-12'>
                    <div className='author-profile-card'>
                        <div className='author-profile-image'>
                           
                            <img src="assets/image/Image-3.png" alt='images' className='img-fluid d-blok m-auto' />
                        </div>
                        <div className='author-profie-subheading text-center'>
                            <h3>Einstein Bariya</h3>
                            <h6>Einsteinbariya011@.com</h6>
                            <div className='author-profile-icon'>
                            <i className="fa-brands fa-facebook-f bg-blue"></i><i className="fa-brands fa-twitter"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-linkedin-in"></i>
                            </div>
                            <button className='btn-follow-profile learn-more on-hover-effect top-to-bottom-effect'>Follow</button>
                        </div>

                    </div>
                </div>

                <div className='col-md-8 col-lg-8 col-sm-12 m-aut0'>
                    <div className='author-profile-card-detail'>
                        <div className="explore-button">
                            <button className="btn-button-author-profile all-nft">All Nfts</button>
                            <button className="btn-button-author-profile">Art</button>
                            <button className="btn-button-author-profile">Collectibles</button>
                            <button className="btn-button-author-profile">Virtual World</button>
                            <button className="btn-button-author-profile">Tranding Cards</button>
                        </div>
                        <div className='row equal'>
                            {authrmap.map((item,index) => (
                        <div className='col-md-4 col-lg-4 col-sm-12'key={index}>
                        <div className='card-author-profile mt-4'>
                            <div className='card-author-profile-image'>
                            <Link to="/author">
                                <img src={item.image} alt='images'  className='img-fluid d-block m-auto'/></Link>
                                <div className='card-author-profile-timer'>
                                    <p>03 : 18 : 24</p>
                                </div>
                            </div>
                            <div className='card-author-profile-name d-flex flex-wrap justify-content-left align-items-center'>
                                <div className='card-author-profile-sub-image'>
                                    <img src={item.avatar} alt='images' className='img-fluid d-block m-auto' />
                                </div>
                                <h2>{item.name}</h2>
                            </div>
                            <div className='card-author-profile-bottom-button d-flex flex-wrap justify-content-between align-items-center'>
                                <h6>5.4 ETH</h6>
                                <h6><i className="fa-solid fa-heart" onClick={handleClick}></i>92</h6>
                            </div>
                        </div>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
