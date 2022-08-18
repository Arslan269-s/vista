import React, {useState} from 'react';
import AuthorMap from '../AuthorMap';
import TopSaleMap from '../TopSaleMap';

export const Authors = () => {
    const [author, setAuthor] = useState(AuthorMap);
    const [saler, setSaler] = useState(TopSaleMap)
  return (
    <div className='authore padding-top padding-bottom'>
        <div className='container'>
            <div className='eplore-authore'>
                <h6 className='explore-author'>Explore Authores</h6>
                <h1>Our Authores</h1>
            </div>
            <div className='our-author'>
                <div className='row equal'>
                    {author.map((items,value)=> (
                    <div className='col-md-6 col-lg-3 col-sm-6' key={value}>
                        <div className='author-card'>
                            <div className='author-card-image'>
                                    <img src={items.image} className='img-fluid d-block m-auto author-images' />
                                <div className='author-card-sub-image'>
                                     <img src={items.avatar} className='img-fluid d-block m-auto author-sub-images' />
                                </div>
                            </div>
                            <div className='authore-detail'>
                                <h4>{items.name}</h4>
                                <button className='btn-follow learn-more on-hover-effect top-to-bottom-effect'>Follow</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className='top-saller paddin-top'>
                    <div className='eplore-authore'>
                        <h2>Top Sellers</h2>
                        </div>
                        <div className='row equal'>
                        {saler.map((items,value)=> (
                            <div className='col-md-4 col-lg-4 col-sm-6' key={value}>
                                <div className='top-sale-card d-flex flex-wrap justify-content-between align-items-center'>
                                    <div className='top-sale-card-image d-flex flex-wrap justify-content-left align-items-center'>
                                        <div className='top-sale-images'>
                                            <img src={items.avatar} alt='images' className="img-fluid d-block m-auto top-sale-images" />
                                        </div>
                                        <div className='top-sale-card-name'>
                                            <h5>{items.name}</h5>
                                            <h5>{items.eth} ETH</h5>
                                        </div>
                                    </div>
                                    <div className='top-sale-items'>
                                        <h3>{items.total} </h3>
                                        <p>{items.item}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                </div>


            </div>

        </div>
        
    </div>
  )
}
