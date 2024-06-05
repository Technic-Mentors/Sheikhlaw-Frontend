import React from 'react'
// import { Link } from 'react-router-dom'
import TestimonialCarousel from './Testimonials'
import Calltoaction from './Calltoaction'

function About() {
  return (
    <div>
      <div
          className="background-image1"
          style={{ backgroundImage: `url(${"page-head.webp"})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white"
                // style={{ fontSize: 60 }}
              >
                 About Company
              </h1>
            </div>
          </div>
        </div>


        {/* About page content */}



        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="about-img">
                            <div className="about-img-1">
                                <img src="about-img-1.webp" className='img-fluid' alt="about-section" />
                            </div>
                            {/* <div className="about-img-2">
                                <img src="img/about-1.webp" alt="about-us" />
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="section-header" data-aos="fade-up" data-aos-offset="200">
                            <h2>Get To Know Us</h2>
                            <h3> Your Trusted Legal Partner for Justice and Expertise Since 2015</h3>
                        </div>
                        <div className="about-text" data-aos="fade-up" data-aos-offset="200">
                            <p style={{textAlign: "justify"}}>
                            Looking for lawyers in Gujranwala? Sheikh Law Company stands as the best law agency in Gujranwala specialized in taxation, company registration, Legal Drafts & Contracts, Real Estate law and other legal services, established in 2015 having multiple discipline clients consisting of offshore and domestic business entities, Non-Profit Organizations, and individuals from different sectors of the economy.
                            </p>
                            <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">
                            For getting the advanced level and prominent position in the business community our law agency’s focus is always on innovative and distinctive solutions to our prestigious clients because we are always ready to deal with complicated atmosphere which is arising day by day in the commercial atmosphere and we provide best law solution to our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* About End  */}


         {/* Feature Start  */}
         <div className="feature">
            <div className="container mb-5">
                <div className="row align-items-end">
                    <div className="col-md-6">
                        <div className="section-header" data-aos="fade-up" data-aos-offset="200">
                            <h2>Our Standout Features</h2>
                            <h3>Why Sheikh Law Company?</h3>
                        </div>
                        <p style={{textAlign: "justify"}} data-aos="fade-up" data-aos-offset="200">
                        Sheikh Law Company sets itself apart through a seasoned team of legal professionals, tailored solutions, and an impressive track record of success. We put your needs first, emphasizing trust and transparency as we work diligently to achieve positive outcomes for your legal matters. With us, you gain a trusted partner committed to your success.
                        </p>
                        <div className="row counters">
                            <div className="col-6 d-flex" data-aos="fade-up" data-aos-offset="200">
                                <i className="fa fa-user stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>100</h2>
                                    <p>Our Staffs</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex" data-aos="fade-up" data-aos-offset="200">
                                <i className="fa fa-users stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>200</h2>
                                    <p>Our Clients</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex" data-aos="fade-up" data-aos-offset="200">
                            <i class="fas fa-trophy stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>250</h2>
                                    <p>Cases won</p>
                                </div>
                            </div>
                            <div className="col-6 d-flex" data-aos="fade-up" data-aos-offset="200">
                                <i className="fa fa-running stat-icon"></i>
                                <div className="counters-text">
                                    <h2 data-toggle="counter-up stat-heading" style={{fontWeight: "bold"}}>140</h2>
                                    <p>Active Cases</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-offset="200">
                        <div className="feature-img">
                            <img src="img/arslan-ceo.jpeg" className='img-fluid' alt="stats-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
         {/* Feature End  */}

<TestimonialCarousel />

         {/* Team Start */}
        {/* <div className="team">
            <div className="container">
                <div className="section-header mb-4" data-aos="fade-up" data-aos-offset="200">
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
                                    <Link to="/#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="/#"><i className="fab fa-instagram"></i></Link>
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
                                    <Link to="/#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="/#"><i className="fab fa-instagram"></i></Link>
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
                                    <Link to="/#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="/#"><i className="fab fa-instagram"></i></Link>
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
                                    <Link to="/#"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="/#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link to="/#"><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <Calltoaction />




      
    </div>
  )
}

export default About
