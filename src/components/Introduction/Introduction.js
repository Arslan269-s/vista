import React, {useEffect} from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from 'aos';


export const Introduction = () => {
  useEffect(() => { 
    AOS.init({});
  }, []);

  const options = {
    // autoWidth:true
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },

      

    },
  };

  return (
    <div className='introduction'>
        <div className='introduction-main padding-top pb-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-text' data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine">
                      <h1>Appear like real text, making it the perfect placeholder</h1>
                      <p>One brave soul did take a stab at translating the almost-not-quite-Latin.soul did take a stab at translating the almost-not-quite-Latin </p>
                      <div className='introduction-main-button'>
                        <button className='contact-us contact get-started get-hover-effect get-bottom-to-top'>Contact Us</button>
                        <button className='contact watch-video learn-more on-hover-effect top-to-bottom-effect'>Watch Video</button>
                      </div>
                  </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-image' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <img src='assets/Image/0002.jpg' alt='images' className='img-fluid d-block m-auto' />
                  </div>
              </div>
            </div>
          </div>
      </div>

      <div className='introduction-main1 padding-top pb-4'>
          <div className='container'>
            <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-image1' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" >
                    <img src='assets/Image/0001.jpg' alt='images' className='img-fluid d-block m-auto' />
                  </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-text1' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                      <h1>Appear making it the perfect placeholder</h1>
                      <p>One brave soul did take a stab at translating the almost-not-quite-Latin.soul did take a stab at translating the almost-not-quite-Latin </p>
                      <div className='introduction-main-button'>
                        <button className='contact-us contact get-started get-hover-effect get-bottom-to-top'>Contact Us</button>
                        
                      </div>
                  </div>
              </div>
              
            </div>
          </div>
      </div>
      <div className='introduction-main1 padding-top pb-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-text1' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                      <h1>Appear making it the perfect placeholder</h1>
                      <p>One brave soul did take a stab at translating the almost-not-quite-Latin.soul did take a stab at translating the almost-not-quite-Latin </p>
                      <div className='introduction-main-button'>
                        <button className='contact-us contact get-started get-hover-effect get-bottom-to-top'>Contact Us</button>
                        
                      </div>
                  </div>
              </div>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                  <div className='introduction-main-image2' data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                    <img src='assets/Image/0003.jpg' alt='images' className='img-fluid d-block m-auto' />
                  </div>
              </div>
              
            </div>
          </div>
      </div>

      <div className='introduction-carousel padding-top padding-bottom'>
          <div className='clint-say-about-us'>
              <h4>marketplace</h4>
              <h2 className='pb-5'>Clint's Say About Us</h2>
          </div>

        
        <OwlCarousel className="owl-theme" loop margin={30} items={3} 
        {...options}
      >
        <div className='intro-marketplace'>
          <div className="intro-item-detail" >
              <div className='intro-card'>
                  <div className='intro-card-image'>
                    <img src='assets/image/Image-3.png' className='d-block img-fluid m-auto'/>
                  </div>
                  <h3>Omaer Goues</h3>
                  <p className='text-center happy-client'>Happy Client</p>
                  <p>One brave soul did take a stab at translating the almost-not-quite-Latin.soul did take a stab at translating the almost-not-quite-Latin</p>
              </div>
              </div>
          </div>
       
      </OwlCarousel>
        
      </div>

    </div>
  )
}
