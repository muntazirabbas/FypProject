/**
 *  Contact Detail Page
 */
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';



function ContactDetail() {

  return (
    <Container>
      <Row>
        <Col sm={12} className="col-sm-12">
          <div className="section-title text-center mb-2">
            <h2 className="title">Get in Touch With Us</h2>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium
                doloremque.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={4} >
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-map-marker" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                    <h6 className="ciyashop_info_box_2-title inline_hover">Location : </h6>
                    <div className="ciyashop_info_box_2-content">
                      <p>1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} lg={4} >
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left mb-3 mb-sm-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-phone" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                    <h6 className="ciyashop_info_box_2-title inline_hover">
                      Phone : </h6>
                    <div className="ciyashop_info_box_2-content">
                      <p>126-632-2345<br />
                        857-778-1265</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-border ciyashop_info_box_2-icon-size-lg ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left pb-0">
            <div className="ciyashop_info_box_2-inner clearfix">
              <div className="ciyashop_info_box_2-icon">
                <div className="ciyashop_info_box_2-icon-wrap">
                  <div className="ciyashop_info_box_2-icon-outer">
                    <div className="ciyashop_info_box_2-icon-inner">
                      <i className="fa fa-envelope-o" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box_2-content">
                <div className="ciyashop_info_box_2-content-wrap">
                  <div className="ciyashop_info_box_2-content-inner">
                    <h6 className="ciyashop_info_box_2-title inline_hover">Mail : </h6>
                    <div className="ciyashop_info_box_2-content">
                      <p>support@ciyashop.com<br />
                        gethelp@ciyashop.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  )

}

export default ContactDetail;

