/**
 * EndOfSeason Widget
 */
import React , {Component} from 'react';

import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';


class EndOfSeason extends Component {

   render() {
    return (
        <Row className="section-ptb section-1 align-items-center">
            <Col sm={12} lg={3} className="text-right mb-4 mb-lg-0">
            <div className="section-title text-md-right">
                <h2 className="title text-right"> End of Season</h2>
                <p>Avail massive discounts and get exciting offers with our shopping across all new arrival categories</p>
            <div className="border-space" />
            </div>
            <div className="ciyashop_button_wrapper ciyashop_button_width_default">
                <div className="inline_hover ciyashop_button_default ciyashop_button_border_square ciyashop_button_size_medium">
                <Link to="/shop"> Shop Now </Link>
                </div>
            </div>
            </Col>
            <Col md={4} lg={3} className="mb-5 pb-1">
            <div className="single_image-wrapper">
                <img src={require(`../assets/images/categories/default/season-img1.jpg`)} className="img-fluid attachment-full" alt="season-img1" />
            </div>
            <Row className="single_image-content">
                <Col sm={3} className="col-2 px-0">
                <div className="border-space border-space-light" />
                </Col>
                <Col sm={9} className="col-10">
                <div className="text-wrapper">
                    <p>Women’s</p>
                </div>
                </Col>
            </Row>
            </Col>
            <Col md={4} lg={3} className="mb-5 mt-4 mt-md-0">
            <div className="single_image-wrapper">
                <img src={require(`../assets/images/categories/default/season-img2.jpg`)} className="img-fluid attachment-full" alt="season-img2" />
            </div>
            <Row className="single_image-content">
                <Col sm={3} className="col-2 px-0">
                <div className="border-space border-space-dark" />
                </Col>
                <Col sm={9} className="col-10">
                <div className="text-wrapper">
                    <p className="text-dark">Kids</p>
                </div>
                </Col>
            </Row>
            </Col>
            <Col sm={12} md={4} lg={3} className="mb-5 mt-4 mt-md-0 pt-1 pt-md-0">
            <div className="single_image-wrapper">
                <img src={require(`../assets/images/categories/default/banner-video-bg.png`)} className="img-fluid attachment-full" alt="season-img2" />
            </div>
            <Row className="single_image-content">
                <Col sm={3} className="col-2 px-0">
                <div className="border-space border-space-dark" />
                </Col>
                <Col sm={9} className="col-10">
                <div className="text-wrapper">
                    <p className="text-dark">Men</p>
                </div>
                </Col>
            </Row>
            </Col>
        </Row>

      )
   }
}

export default EndOfSeason;
