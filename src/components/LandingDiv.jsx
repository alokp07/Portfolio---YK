import React from 'react'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import './styles/landing.css'

function LandingDiv() {
  return (

    <Row className='w-100 m-0 position-relative'>

        <Col lg={6} sm={12} className='landingcol'>
            <div className='d-flex flex-column justify-content-center align-items h-100 px-5'>
                <span className='text-warning'>Hi, I'm</span>
                <h1 style={{fontSize:'75px'}}>Yadu Krishna</h1>
                <h5 style={{fontSize:'22px'}} className='mt-1'>Cyber Security Engineer</h5>
                <p style={{fontSize:'16px'}} className='mt-2'>Shot what able cold new the see hold. Friendly as an betrayed formerly he. <br /> Morning because as to society behaved moments</p>
                
                <div className='mt-5'>
                    <a href='https://drive.google.com/file/d/1Sr388Vdgh9q9swrtQq401ETkRTQvUVRZ/view?usp=drive_link'><Button className='btn btn-warning me-1 px-4 py-2 fs-5'>Download CV</Button></a>
                    <a href='#contact'><Button variant="outline-warning" className='btn px-4 py-2 fs-5 contact-btn'>Contact</Button></a>
                </div>
            </div>
        </Col>

        
        <Col lg={6} sm={12} className='landingcol lCol2'>
            <div className='w-100 h-100 profileDiv'></div>
        </Col>
{/* 
        <div className='d-flex justify-content-center'>
            <div className='top-box d-flex py-4 justify-content-between'>
                
                  <div className='d-flex align-items-center'>
                      <div className='me-3'>
                      <i className="fa-solid fa-certificate fs-1 text-warning"></i>
                      </div>
                      <div>
                          <h3 style={{fontSize:'24px'}}>8 Years job</h3>
                          <p className='text-warning m-0' style={{fontSize:'18px'}}>Experience</p>
                      </div>
                  </div>
      
                  <div className='d-flex align-items-center'>
                      <div className='me-3'>
                      <i className="fa-solid fa-certificate fs-1 text-warning"></i>
                      </div>
                      <div>
                          <h3 style={{fontSize:'24px'}}>8 Years job</h3>
                          <p className='text-warning m-0' style={{fontSize:'18px'}}>Experience</p>
                      </div>
                  </div>
      
                  <div className='d-flex align-items-center'>
                      <div className='me-3'>
                      <i className="fa-solid fa-certificate fs-1 text-warning"></i>
                      </div>
                      <div>
                          <h3 style={{fontSize:'24px'}}>8 Years job</h3>
                          <p className='text-warning m-0' style={{fontSize:'18px'}}>Experience</p>
                      </div>
                  </div>
                
            </div>
        </div> */}

    </Row>
    

  )
}

export default LandingDiv