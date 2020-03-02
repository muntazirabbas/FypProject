/**
 * Deal of The Week
 */
import React , {Component} from 'react';
import CountDownTimer from './CountDownTimer';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

import BG_Image from '../assets/images/categories/default/deal-bg.png';

class DealOfTheWeek extends Component {

   render() {
    return (
            <Row>
                <Col sm={12} className="px-0">
                <div className="ciyashop_banner_wrapper" style={{backgroundImage: `url(${BG_Image})`}} >
                <div className="ciyashop_banner ciyashop_banner-style-deal-1 ciyashop_banner-effect-none">
                    <div className="ciyashop_banner-content">
                        <div className="ciyashop_banner-content-wrapper">
                        <div className="ciyashop_banner-content-inner-wrapper">
                            <div className="ciyashop_banner-label-wrap ciyashop_banner-text-wrap-1 ciyashop_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                            <div className="ciyashop_banner-label"> 50% Off</div>
                            </div>
                            <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                            <div className="ciyashop_banner-text">
                            <h2> Deal of The Week</h2>
                            </div>
                            </div>
                            <div className="deal-counter-wrapper mb-3 counter-size-sm counter-style-style-6  vc_custom_1540463711798">
                                <div className="deal-counter">
                                    {/* <CountDownTimer time={'152350'}></CountDownTimer> */}
                                </div>
                            </div>
                            <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-flat ciyashop_banner-btn-size-md ciyashop_banner-btn-shape-square justify-content-center mt-lg-5 mt-2"> <Link to="/shop" className="ciyashop_banner-btn">Shop Now</Link></div>
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

export default DealOfTheWeek;
