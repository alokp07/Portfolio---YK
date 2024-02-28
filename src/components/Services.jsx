import React from 'react'
import './styles/services.css'
import { Row , Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

function Services() {
  return (
    <div className='mt-5'>

        <Row className='w-100 m-0 '>

          <Col lg={3} className='d-flex flex-column justify-content-center'>
              <div className='ms-5'>
                <h5 style={{fontSize:'22px'}} className='text-warning'>Services</h5>

                <h1 style={{fontSize:'28px'}}>I Provide Wide Range Of Digital Services</h1>

                {/* <div className='mt-5'>
                  <Button className='btn-warning me-3'><i class="fa-solid fa-chevron-left"></i></Button>
                  <Button className='btn-warning'><i class="fa-solid fa-chevron-right"></i></Button>
                </div> */}
              </div>
          </Col>

          <Col lg={9} sm={12}>
              <div className='box-div px-5'>
                <div className='service-box shadow d-flex flex-column justify-content-center'>
                      <h1 className='text-center'><i class="fa-solid fa-shield-halved"></i></h1>
                      <h1 className='fs-4 text-center mt-4'>VAPT</h1>
                      <p className='mt-4 text-center'>helps organizations identify and fix security weaknesses before attackers can exploit them</p>
                </div>

                <div className='service-box shadow d-flex flex-column justify-content-center'>
                      <h1 className='text-center'><i class="fa-solid fa-wifi"></i></h1>
                      <h1 className='fs-4 text-center mt-4'>NETWORK SECURITY</h1>
                      <p className='mt-4 text-center'>Network security is any activity designed to protect the usability and integrity of your network and data</p>
                </div>

                <div className='service-box shadow d-flex flex-column justify-content-center'>
                      <h1 className='text-center'><i class="fa-solid fa-mobile"></i></h1>
                      <h1 className='fs-4 text-center mt-4'>MOBILE SECURITY</h1>
                      <p className='mt-4 text-center'>protecting data on the local device and the device-connected endpoints and networking equipment.</p>
                </div>
              </div>
          </Col>

        
        </Row>

    </div>
  )
}

export default Services