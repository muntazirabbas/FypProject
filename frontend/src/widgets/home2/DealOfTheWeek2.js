/**
 * Day Of the Week Banner
 */
import React , {Component} from 'react';
import CountDownTimer from '../CountDownTimer';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class DealOfTheWeek2 extends Component {

   render() {
    return (
            <Row className="justify-content-center">
              <Col sm={12} lg={8} xl={6}>
                <Row>
                  <Col sm={12}>
                    <div className="section-title-wrapper text-center">
                        <h2 className="title text-capitalize">Special Offer</h2>
                      <p className="mb-1">AVAIL 50-80% OFF CLOTHING</p>
                    </div>
                    <div className="deal-counter-wrapper mb-3 counter-size-sm counter-style-style-6">
                      <div className="deal-counter text-center">
                         <CountDownTimer time={'152350'}></CountDownTimer>
                      </div>
                    </div>
                    <div className="ciyashop-btn-wrap ciyashop-btn-style-middle ciyashop-btn-shape-square text-center">
                      <Link to="/shop" className="ciyashop-btn inline_hover">Get the offer</Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
      )
    }
 }

 export default DealOfTheWeek2;
