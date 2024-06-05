import React from 'react'
import { Link } from 'react-router-dom'

export default function Calltoaction() {
  return (
    <div>
        <section className='cta-section pt-5 pb-5' style={{backgroundColor: "#f5f5f5"}}>
            <div className='container'>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-8 mb-5' data-aos="fade-up" data-aos-offset="200">
                        <h2 className='cta-head'>We Are Here To Provide You <span style={{color: "#0069d9"}}>The Best Legal Services</span></h2>
                    </div>
                    <div className='col-md-4' data-aos="fade-up" data-aos-offset="200">
                        <div className='cta-button'>
                        <Link to="/contact"><button className='btn btn-primary px-4 py-3 free-quote'>Get An Appointment</button></Link>
                        </div>
                    </div>
                </div>
            </div>





        </section>
</div>
  )
}