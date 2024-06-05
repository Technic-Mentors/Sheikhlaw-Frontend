// import React from 'react'
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <div>
//       <div className="navbar navbar-expand-lg bg-dark navbar-dark">
//             <div className="container-fluid">
//                 <Link to="/" className="navbar-brand"><img src='Logo.png' alt='logo' /></Link>
//                 <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//                     <div className="navbar-nav ml-auto">
//                         <Link to="/" className="nav-item nav-link active">Home</Link>
//                         <Link to="/about" className="nav-item nav-link">About</Link>
//                         <div className="nav-item dropdown">
//                             <a href="/areas-of-practice" className="nav-link dropdown-toggle" data-toggle="dropdown">Practice Areas</a>
//                             <div className="dropdown-menu">
//                                 <Link to="/areas-of-practice" className="dropdown-item">Taxation</Link>
//                                 <Link to="areas-of-practice" className="dropdown-item">Civil Law</Link>
//                                 <Link to="areas-of-practice" className="dropdown-item">Insurance Law</Link>
//                                 <Link to="areas-of-practice" className="dropdown-item">Drafting Legal Agreements & Contracts</Link>
//                                 <Link to="areas-of-practice" className="dropdown-item">Family Law</Link>
//                                 <Link to="areas-of-practice" className="dropdown-item">Real Estate Law</Link>
//                             </div>
//                         </div>
//                         <Link to="/faqs" className="nav-item nav-link">FAQs</Link>
//                         <Link to="/contact" className="nav-item nav-link">Contact</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div>
//       <div className={`navbar navbar-expand-lg bg-dark navbar-dark ${isMobileMenuOpen ? 'show' : ''}`}>
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
//             <img src='Logo.png' alt='logo' />
//           </Link>
//           <button type="button" className="navbar-toggler" onClick={toggleMobileMenu}>
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className={`collapse navbar-collapse justify-content-between ${isMobileMenuOpen ? 'show' : ''}`}>
//             <div className="navbar-nav ml-auto">
//               <Link to="/" className="nav-item nav-link active" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//               <Link to="/about" className="nav-item nav-link" onClick={closeMobileMenu}>
//                 About
//               </Link>
//               <Link to="/areas-of-practice" className="nav-item nav-link"  onClick={closeMobileMenu}>
//                   Practice Areas
//                 </Link>

//               <Link to="/faqs" className="nav-item nav-link" onClick={closeMobileMenu}>
//                 FAQs
//               </Link>
//               <Link to="/contact" className="nav-item nav-link" onClick={closeMobileMenu}>
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isToggleButtonClicked, setToggleButtonClicked] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setToggleButtonClicked(true);
  };

  const closeMobileMenu = () => {
    if (isToggleButtonClicked) {
      setToggleButtonClicked(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".navbar-collapse")) {
        closeMobileMenu();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen, isToggleButtonClicked]);

  return (
    <div>
      <div
        className={`navbar navbar-expand-lg bg-dark navbar-light ${
          isMobileMenuOpen ? "show" : ""
        }`}
      >
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <img src="Logo.png" alt="logo" />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleMobileMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-between ${
              isMobileMenuOpen ? "show" : ""
            }`}
          >
            <div className="navbar-nav ml-auto">
              <Link
                to="/"
                className="nav-item nav-link active"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-item nav-link"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              {/* <Link to="/#" className="nav-item nav-link" onClick={closeMobileMenu}>
                Our Services
              </Link> */}
              <div className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Our Services
                </a>
                <div className="dropdown-menu">
                  <Link to="/areas-of-practice" className="dropdown-item" onClick={closeMobileMenu}>
                    Areaas Of Practices
                  </Link>
                  <Link to="more-legal-services" className="dropdown-item" onClick={closeMobileMenu}>
                    More Legal Services
                  </Link>
                </div>
              </div>
              <Link
                to="/faqs"
                className="nav-item nav-link"
                onClick={closeMobileMenu}
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="nav-item nav-link"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
