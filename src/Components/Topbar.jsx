import React from 'react'

function Topbar() {
  return (
    <div>
      <div className="top-bar d-none d-md-block">
            <div className="container-fluid px-4">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            <div className="text mt-2">
                                <i className="far fa-clock"></i>&nbsp;
                                <h2>9:00AM - 6:00PM</h2>
                                {/* <p>Mon - Fri</p> */}
                            </div>
                            <div className="text mt-2">
                                <i className="fa fa-phone-alt"></i>&nbsp;
                                <h2>+92 302 9655723</h2>
                                {/* <p>For Appointment</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social mt-2">
                                <a href="/#"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/SheikhLawCompany"><i className="fab fa-facebook-f"></i></a>
                                <a href="/#"><i className="fab fa-youtube"></i></a>
                                <a href="/#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="/#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
