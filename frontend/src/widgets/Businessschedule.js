/**
 * Business Schedule Page
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';


class Businessschedule extends Component {
   render() {
    return (
      <Row>
        <Col md={4} className="mb-4 mb-md-0">
          <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
            <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
              <div className="ciyashop_info_box-icon">
                <div className="ciyashop_info_box-icon-wrap">
                  <div className="ciyashop_info_box-icon-outer">
                    <div className="ciyashop_info_box-icon-inner text-dark">
                      <i className="fa fa-clock-o" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box-content">
                <div className="ciyashop_info_box-content-wrap">
                  <div className="ciyashop_info_box-content-inner">
                    <h4 className="ciyashop_info_box-title">
                      Business Hours </h4>
                    <div className="ciyashop_info_box-description">
                      <p className="mb-1">Our Support team is available from</p>
                      <p><strong>Monday to Friday</strong> : 10 a.m. – 7 p.m. (GMT +1)<br />
                        <strong>Saturday</strong> : 9 a.m. – 1 p.m. (GMT +1)<br />
                        <strong>Sunday</strong> : Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="mb-4 mb-md-0">
          <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
            <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
              <div className="ciyashop_info_box-icon">
                <div className="ciyashop_info_box-icon-wrap">
                  <div className="ciyashop_info_box-icon-outer">
                    <div className="ciyashop_info_box-icon-inner text-dark">
                      <i className="fa fa-life-ring" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box-content">
                <div className="ciyashop_info_box-content-wrap">
                  <div className="ciyashop_info_box-content-inner">
                    <h4 className="ciyashop_info_box-title">
                      Our Support Center </h4>
                    <div className="ciyashop_info_box-description">
                      <p>We are available 24x7 online.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="ciyashop_info_box ciyashop_info_box-layout-style_2 ciyashop_info_box-content_alignment-left ciyashop_info_box-with-icon ciyashop_info_box-icon-source-font ciyashop_info_box-icon-style-default ciyashop_info_box-icon-size-sm ciyashop_info_box-icon_position-left info_box-step_position-above_title">
            <div className="ciyashop_info_box-inner clearfix ciyashop-info-left-icon">
              <div className="ciyashop_info_box-icon">
                <div className="ciyashop_info_box-icon-wrap">
                  <div className="ciyashop_info_box-icon-outer">
                    <div className="ciyashop_info_box-icon-inner text-dark">
                      <i className="fa fa-info-circle" /> </div>
                  </div>
                </div>
              </div>
              <div className="ciyashop_info_box-content">
                <div className="ciyashop_info_box-content-wrap">
                  <div className="ciyashop_info_box-content-inner">
                    <h4 className="ciyashop_info_box-title">
                      Some Information </h4>
                    <div className="ciyashop_info_box-description">
                      <p className="mb-1">Our Support team is available from</p>
                      <p><strong>Monday to Friday</strong> : 10 a.m. – 7 p.m. (GMT +1)<br />
                        <strong>Saturday</strong> : 9 a.m. – 1 p.m. (GMT +1)<br />
                        <strong>Sunday</strong> : Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        </Row>

      )
    }
 }

 export default Businessschedule;

