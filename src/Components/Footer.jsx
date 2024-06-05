import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className="footer">
            <div className="container">
            <a href="https://wa.me/923029655723" target='blank'><i class="fab fa-whatsapp fa-2x WA-integration" style={{color: "white"}}></i></a>
                <div className="row">
                <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>About Us</h2>
                            <p>
                            Sheikh Law Company a Law Firm specialized in Taxation laws, established in 2015 having multiple discipline clients consisting of offshore and domestic business entities, Non-Profit Organizations, and individuals from different sectors of the economy.
                            </p>
                            <div className="footer-social">
                                        <Link to="/#"><i className="fab fa-twitter" style={{color: "white"}}></i></Link>
                                        <Link to="https://www.facebook.com/SheikhLawCompany"><i className="fab fa-facebook-f" style={{color: "white"}}></i></Link>
                                        <Link to="/#"><i className="fab fa-youtube" style={{color: "white"}}></i></Link>
                                        <Link to="/#"><i className="fab fa-instagram" style={{color: "white"}}></i></Link>
                                        <Link to="/#"><i className="fab fa-linkedin-in" style={{color: "white"}}></i></Link>
                                    </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Areas Of Practice</h2>
                                    <Link to="/areas-of-practice#tax-law">Tax Law</Link>
                                    <Link to="/areas-of-practice#civil-law">Civil Law</Link>
                                    <Link to="/areas-of-practice#insurance-law">Insurance Law</Link>
                                    <Link to="/areas-of-practice#legal-agreements-and-drafts">Legal Agreements & Contracts</Link>
                                    <Link to="/areas-of-practice#family-law">Family Law</Link>
                                    <Link to="/areas-of-practice#real-estate-law">Real Estate Law</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Our Head Office</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>1st floor office # 7, F block Trust Plaza, G.T Road، Model Town, Gujranwala, Punjab Pakistan</p>
                                    <p><i className="fa fa-phone-alt"></i>+92 302 9655723</p>
                                    <p><i className="fa fa-envelope"></i>arslan.sh.adv@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p style={{color: "white"}}>&copy; <a href="/#">Sheikh Law Company</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p style={{color: "white"}}>Developed With<span style={{color: "red"}}> &hearts;</span> By <a href="https://technicmentors.com">Technic Mentors</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
