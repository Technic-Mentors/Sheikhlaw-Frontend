import React, { useEffect } from 'react';
import 'swiper/css'; 
import Swiper from 'swiper';

const TestimonialCarousel = () => {
  useEffect(() => {
    const initSwiper = () => {
      new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    };

    initSwiper();
  }, []);

  return (
    <section id="testimonials mt-4" className="testimonials">
    <div className='test-overlay'>
      <div className="container mt-5" data-aos="zoom-in">
        <div className="testimonials-slider swiper" data-aos="fade-left" data-aos-offset="200">
          <div className="swiper-wrapper">
            {/* Testimonial slides go here */}
            <div className="swiper-slide">
            <div className="testimonial-item">
                <img src="client-testimonial.png" className="testimonial-img"
                  alt="technic" />
                <h3>Nadeem Munir</h3>
                <h4>CEO Technic Mentors</h4>
                <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                I wanted to register my company at Chamber Of Commerce. I was looking for legal services and found Sheikh Law Company. They made it so easy and smooth registration process for me. Would love to work with them again.
                   <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="swiper-slide">
            <div className="testimonial-item">
                <img src="client-testimonial.png" className="testimonial-img"
                  alt="technic" />
                <h3>Ata Ur Rehman</h3>
                <h4>Audit Officer, Client Firm</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Sheikh Law Company provided exceptional legal expertise and unwavering support. They exceeded my expectations, and I highly recommend their services.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>
            <div className="swiper-slide">
            <div className="testimonial-item">
                <img src="client-testimonial.png" className="testimonial-img"
                  alt="technic" />
                <h3>Hadeed Ul Hassan</h3>
                <h4>CEO Client Firm</h4>
                <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                We hired their services for filing taxes. Before hiring them, we as a company found it very difficult and complicating task. We were in search of someone who can handle all our tax related affairs. Thanks to Sheikh Law Company for all the great work.
                   <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>

            {/* Repeat this structure for each testimonial slide */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;