import React from 'react'
import TestimonialCarousel from './Testimonials';
// import Slider from 'react-slick'; 
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import Calltoaction from './Calltoaction';





function Home() {
  return (
    <div>
      
      {/* <section
        id="hero"
        style={{ backgroundImage: `url(${"hero-img.webp"})` }}
        className="d-flex align-items-center"
      >
        <div
          className="container text-start"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 text-center">
              <h1 style={{ color: "white", fontWeight: "bolder" }} className="mb-2">
                Committed To <span style={{ color: "black", fontWeight: "bolder", fontSize: "135%" }}>Helping Our Clients </span> <br/>Succeed
              </h1>
              <p className="mb-4 mt-2" style={{ color: "white" }}>
                Helping you grow your business by enabling technology for your
                business. We will be your technology partners to make your business standout outplay the competitors!
              </p>
              <div className="d-flex text-start">
                <Link to="/about" className="btn btn-primary btn-get-started scrollto">
                  Get Started
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=ZX3JdYyJlds"
                  className="glightbox btn-watch-video"
                  style={{ color: "white" }}
                >
                  <i
                    className="bi bi-play-circle"
                    style={{ color: "white" }}
                  ></i>
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section> */}
{/* Hero section */}

<section
  id="hero"
  style={{ backgroundImage: `url("hero-img.webp")` }}
  className="d-flex align-items-center" data-aos="fade-up"
>
  <div
    className="overlay"  // Add an overlay class
    data-aos="zoom-out"
    data-aos-delay="100"
  >
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 text-center" style={{marginTop: "9rem"}}>
          <h1 style={{ color: "white", fontWeight: "bolder" }} className="mb-2">
            Committed To Helping Our Clients Succeed
          </h1>
          <p className="mb-4 mt-2" style={{ color: "white" }}>
            The trust our clients have is what makes us the best in the business!
          </p>
          <div className="d-flex justify-content-center">
            <Link to="/about" className="btn btn-outline-primary text-light btn-get-started">
              Get Started
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Hero section ends  */}
        
         {/* Fact Start */}
        <div className="fact">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-4.png" alt="team-icon" />
                            {/* <i className='fa fa-gavel fa-3x'></i> */}
                            <h4 className='title'>Expert Attorneys</h4>
                            <p>With extensive high skill</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-1.png" alt="individual-approach" />
                            {/* <i class="fas fa-eraser fa-3x"></i> */}
                            <h4 className='title'>Case Dismissed</h4>
                            <p>Within few days</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-8.png" alt="success" />
                            <h4 className='title'>Court Performance</h4>
                            <p>Higher than others</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="fact-item">
                            <img src="img/icon-6.png" alt="satisfaction" />
                            <h4 className='title'>100% Satisfaction</h4>
                            <p>Our clients are our asset</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


{/* <div
        className="container-fluid services py-5 mb-5"
      >
        <div className="container">
          <div className="row g-5 services-inner">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                  <i class="fa fa-gavel"></i>
                    <h5 className="mb-3">Expert Attorneys</h5>
                    <p>With extensive high skill</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item1">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-computer fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Computer-Based Exam </h5>
                    <p className="mb-4">
                      Experience the future of testing with Computer-Based
                      Exams, enhancing convenience and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-memory fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">latest cutting-edge </h5>
                    <p className="mb-4">
                      Stay at the forefront of progress with the latest
                      cutting-edge advancements in various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item1">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-arrows-to-eye fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Staff assessment</h5>
                    <p className="mb-4">
                      Unlock the potential of your workforce with feature-rich
                      Staff Assessment solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div> */}





         {/* Fact Start */}
        

         {/* About Start  */}
        {/* <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" data-aos="fade-right" data-aos-offset="200">
                        <div className="about-img">
                            <div className="about-img-1">
                                <img src="about-img-1.webp" alt="about-section" />
                            </div>
                            <div className="about-img-2">
                                <img src="img/about-1.webp" alt="about-us" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-left" data-aos-offset="200">
                        <div className="section-header">
                            <h2>Get To Know Us</h2>
                            <h3> Your Trusted Legal Partner for Justice and Expertise Since 2015</h3>
                        </div>
                        <div className="about-text">
                            <p style={{textAlign: "justify"}}>
                            Looking for lawyers in Gujranwala? Sheikh Law Company stands as the best law agency in Gujranwala specialized in taxation, company registration, Legal Drafts & Contracts, Real Estate law and other legal services, established in 2015 having multiple discipline clients consisting of offshore and domestic business entities, Non-Profit Organizations, and individuals from different sectors of the economy.
                            </p>
                            <p style={{textAlign: "justify"}}>
                            For getting the advanced level and prominent position in the business community our law agency’s focus is always on innovative and distinctive solutions to our prestigious clients because we are always ready to deal with complicated atmosphere which is arising day by day in the commercial atmosphere and we provide best law solution to our clients.
                            </p>
                            <a className="btn" href="/#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
<div className='container'>
  <div className='row d-flex align-items-center'>
    <div className='col-md-6'>
      <div className='about-img'>
        <img src='about-img-1.webp' alt='about-img' className='img-fluid' />
      </div>
    </div>
    <div className='col-md-6'>
    <div className="section-header mb-4 mt-3">
                            <h2>Get To Know Us</h2>
                            <h3> Your Trusted Legal Partner for Justice and Expertise Since 2015</h3>
                        </div>
                        <p style={{textAlign: "justify"}}>
                            Looking for lawyers in Gujranwala? Sheikh Law Company stands as the best law agency in Gujranwala specialized in taxation, company registration, Legal Drafts & Contracts, Real Estate law and other legal services, established in 2015 having multiple discipline clients consisting of offshore and domestic business entities, Non-Profit Organizations, and individuals from different sectors of the economy.
                            </p>
                            <p style={{textAlign: "justify"}}>
                            For getting the advanced level and prominent position in the business community our law agency’s focus is always on innovative and distinctive solutions to our prestigious clients because we are always ready to deal with complicated atmosphere which is arising day by day in the commercial atmosphere and we provide best law solution to our clients.
                            </p>
    </div>
  </div>
</div>







         {/* About End */}


         {/* Service Start */}
        <div className="service">
            <div className="container">
                <div className="section-header mb-5" data-aos="fade-up" data-aos-offset="200">
                    <h2>Our Areas Of Expertise</h2>
                    <h3>Areas We Specialize In As A Law Firm</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-1.png" alt="business" />
                            <h4>Taxation Law</h4>
                            <p>
                            Maximize returns, minimize liabilities. Expert tax guidance for individuals and businesses.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-2.png" alt="project-management" />
                            <h4>Civil Law</h4>
                            <p>
                            Navigate civil matters seamlessly. Legal expertise for effective resolution and protection.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-4.png" alt="market-research" />
                            <h4>Insurance Law</h4>
                            <p>
                            Insurance law experts. Navigate claims, maximize coverage. Your trusted protection advocates.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-4.png" alt="hr" />
                            <h4>Legal Agreements & Contracts</h4>
                            <p>
                            Precision in contracts. Legal expertise for clarity, and seamless transactions.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-5.png" alt="online-business" />
                            <h4>Family Law</h4>
                            <p>
                            Family law support. Navigate divorce, custody, and support with compassionate legal guidance.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="service-item">
                            <img src="img/icon-6.png" alt="capital" />
                            <h4>Real Estate Law</h4>
                            <p>
                            Property law mastery. Navigate transactions, resolve disputes. Your trusted real estate advisors.
                            </p>
                            <Link to="/areas-of-practice"><button className='btn btn-outline-primary'>Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Service End  */}


         {/* Feature Start */}
        <div className="feature">
            <div className="container mb-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="feature-img mb-4">
                            <img src="img/arslan-ceo.jpeg" className='img-fluid' alt="stats-img" />
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="section-header">
                            <h2>Our Standout features</h2>
                            <h3>Why Sheikh Law Company?</h3>
                        </div>
                        <p style={{textAlign: "justify"}}>
                        Sheikh Law Company sets itself apart through a seasoned team of legal professionals, tailored solutions, and an impressive track record of success. We put your needs first, emphasizing trust and transparency as we work diligently to achieve positive outcomes for your legal matters. With us, you gain a trusted partner committed to your success.
                        </p>
                        <div className="row counters">
                            <div className="col-6 d-flex">
                                <i className="fa fa-user stat-icon"></i>
                                <div className="counters-text">
                                <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>100</h2>
                                    <p>Our Staffs</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex">
                                <i className="fa fa-users stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>200</h2>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex">
                            <i class="fas fa-trophy stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>250</h2>
                                    <p>Cases won</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex">
                                <i className="fa fa-running stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>140</h2>
                                    <p>Active Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Feature End  */}
        
        
         {/* Testimonial Start  */}



        {/* <div className="testimonial">
            <div className="container">
                <div className="section-header">
                    <p>Testimonial Carousel</p>
                    <h2>100% Positive Customer Reviews</h2>
                </div>
                <div className="owl-carousel testimonials-carousel">
                    <div className="testimonial-item">
                        <img src="img/testimonial-1.jpg" alt="testimonial-1" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src="img/testimonial-2.jpg" alt="testimonial-2" />
                        <p>
                            Phasellus pellentesque tempus pretium. Quisque in enim sit amet purus venenatis porttitor sed non velit. Vivamus vehicula finibus
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src="img/testimonial-3.jpg" alt="testimonial-3" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                    <div className="testimonial-item">
                        <img src="img/testimonial-4.jpg" alt="testimonial-4" />
                        <p>
                            Sed in lectus eu eros tincidunt cursus. Aliquam eleifend velit nisl. Sed et posuere urna, ut vestibulum massa. Integer quis magna
                        </p>
                        <h2>Client Name</h2>
                        <h3>Profession</h3>
                    </div>
                </div>
            </div>
        </div> */}

<TestimonialCarousel />


         {/* Testimonial End */}


         {/* Team Start  */}
        {/* <div className="team">
            <div className="container">
                <div className="section-header mb-4">
                    <h2>Meet Our Advisors</h2>
                    <h3>Our Professional Consulting Team</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-1.jpg" alt="team-member" />
                            </div>
                            <div className="team-text">
                                <h2>Donald John</h2>
                                <p>Founder & CEO</p>
                                <div className="team-social">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-2.jpg" alt="team-member" />
                            </div>
                            <div className="team-text">
                                <h2>Adam Phillips</h2>
                                <p>Chef Executive</p>
                                <div className="team-social">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-3.jpg" alt="team-member" />
                            </div>
                            <div className="team-text">
                                <h2>Thomas Olsen</h2>
                                <p>Chef Advisor</p>
                                <div className="team-social">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="team-item">
                            <div className="team-img">
                                <img src="img/team-4.jpg" alt="team-member" />
                            </div>
                            <div className="team-text">
                                <h2>James Alien</h2>
                                <p>Advisor</p>
                                <div className="team-social">
                                    <a href="/#"><i className="fab fa-twitter"></i></a>
                                    <a href="/#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
         {/* Team End  */}
<Calltoaction />
    </div>
  )
}

export default Home
