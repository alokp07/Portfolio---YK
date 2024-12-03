import React from 'react'
import "./experience.css"
import { Row,Col } from 'react-bootstrap'

function Experience() {
  return (
    <>
      <div className='mt-5 py-5 position-relative d-flex flex-column justify-content-center'>
          <div className='skill-barDiv position-absolute w-100 h-100'></div>
          <div>
              <h4 className='text-warning text-center'>Why Choose Me</h4>
              <h1 className='text-center fs-2'>My Skills Area</h1>
          </div>
  
          <div class="skills-area">
        <div class="skill">
          <div class="skill-title d-flex justify-content-between">
              <h1 className='fs-5'>Cyber Security Expertise</h1>
              <h1 className='fs-5'>95%</h1>
          </div>
          <div class="skill-bar"></div>
          <div class="html skill-fill">
            <span class="skill-percent"></span>
          </div>
        </div>
        <div class="skill">
        <div class="skill-title d-flex justify-content-between">
              <h1 className='fs-5'>Network Security</h1>
              <h1 className='fs-5'>80%</h1>
          </div>
          <div class="skill-bar"></div>
          <div class="css skill-fill">
            <span class="skill-percent fs-5"></span>
          </div>
        </div>
        <div class="skill">
        <div class="skill-title d-flex justify-content-between">
              <h1 className='fs-5'>Operating System</h1>
              <h1 className='fs-5'>100%</h1>
          </div>
          <div class="skill-bar"></div>
          <div class="js skill-fill">
            <span class="skill-percent"></span>
          </div>
        </div>
        <div class="skill">
        <div class="skill-title d-flex justify-content-between">
              <h1 className='fs-5'>Web Application Security</h1>
              <h1 className='fs-5'>75%</h1>
          </div>
          <div class="skill-bar"></div>
          <div class="was skill-fill">
            <span class="skill-percent"></span>
          </div>
        </div>
        <div class="skill">
        <div class="skill-title d-flex justify-content-between">
              <h1 className='fs-5'>Cloud Security</h1>
              <h1 className='fs-5'>95%</h1>
          </div>
          <div class="skill-bar"></div>
          <div class="was skill-fill">
            <span class="skill-percent"></span>
          </div>
        </div>
      </div>
      </div>


      <div className='mt-5 mb-5'>
          <h1 className='text-center fs-2'>My Certifications</h1>

          <div className='d-flex justify-content-center flex-wrap'>
            <div className='cbox'>
                <h4>Ethical Hacker - By Cisco</h4>
            </div>

            <div className='cbox'>
                <h4>Certified Ethical Hacker v12</h4>
            </div>

            <div className='cbox'>
                <h4>Certified Soc analyst By EC-counsil</h4>
            </div>
            <div className='cbox'>
                <h4>CISCO-Intorduction to Cybersecurity</h4>
            </div>
            <div className='cbox'>
                <h4>NSE-Information Security Awareness</h4>
            </div>
            <div className='cbox'>
                <h4>NSE 2-The Evolution of Cybersecurity</h4>
            </div>
            <div className='cbox'>
                <h4>Ethical Hacking Essential By EC-Council</h4>
            </div>
            <div className='cbox'>
                <h4>CSI Certified linux Investigator</h4>
            </div>
          </div>
      </div>

      <div className='contact d-flex' id='contact'>

          <Row className='w-100 py-5'>
            <Col lg={4} className='d-flex align-items-center mt-3 ps-4'>
              <h1 className=' ms-5 fs-2'>CONTACT</h1>
            </Col>

            <Col lg={4} className='d-flex mt-3 ps-4'>
              <div className='d-flex flex-column links'>
                
                <span><a href='https://wa.me/9605339258'>Phone : 9605339258</a></span>
                <span>Email : yadhukrishna774@gmail.com</span>

                <div className='mt-3'>
                  <a href="https://www.linkedin.com/in/yadu-krishna-k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button className='btn btn-warning me-3'>Linked in</button></a>
                  <a href="https://github.com/yadukrishnak/AI-Based-Resume-Ranker.git"><button className='btn btn-warning'>Github</button></a>
                </div>
              </div>
            </Col>
            <Col lg={4} className='d-flex mt-3 ps-4'>
              <div className='add d-flex flex-column'>
                  <span className='text-warning'>Address :</span>
                  <span>Palarivattom , </span>
                  <span>Kochi</span>
              </div>
            </Col>
          </Row>

      </div>
    </>
  )
}

export default Experience