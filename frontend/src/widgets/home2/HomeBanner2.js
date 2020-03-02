/**
 * Home 2 Banner
 **/
import React , {Component} from 'react';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class HomeBanner2 extends Component {

   render() {
    return (
            <Row>
            <Col sm={12}>
                <Row className="section-ptb">
                <Col lg={4} className="mb-4 mb-lg-0">
                    <div className="single-img-wrapper single-img-wrapper-1">
                    <div className="single-img">
                        <img src={require(`../../assets/images/categories/new-fashion/adv-img1.jpg`)}  className="img-fluid" alt="abt-img" />
                    </div>
                    <div className="single-img-content content-vtop content-hright">
                        <div className="border-line" />
                        <h3 className="font-weight-bold">Always Trendy</h3>
                        <p>All your fashion &amp; lifestyle needs at an affordable price</p>
                        <div className="ciyashop-btn">
                        <Link to="/shop" className="inline_hover">Shop Now</Link>
                        </div>
                    </div>
                    <div className="text-wrapper bg-orange">
                        <div className="text-content">
                        <h5 className="text-uppercase">SHOP DRESSES 30% OFF</h5>
                        <p>On order over $99</p>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col lg={4} className="mt-3 mt-lg-0">
                    <div className="single-img-wrapper single-img-wrapper-2">
                    <div className="text-wrapper bg-sky">
                        <div className="text-content">
                        <h5 className="text-uppercase">20% STUDENT DISCOUNT</h5>
                        <p>Clothing Deals you will love</p>
                        </div>
                    </div>
                    <div className="single-img">
                        <img src={require(`../../assets/images/categories/new-fashion/adv-img2.jpg`)} className="img-fluid" alt="abt-img" />
                    </div>
                    <div className="single-img-content content-vbottom content-hleft">
                        <div className="border-line" />
                        <h3 className="font-weight-bold">Women Tops</h3>
                        <p>Massive range of Women Clothing for your wardrobe</p>
                        <div className="ciyashop-btn">
                        <Link to="/shop" className="inline_hover">Shop Now</Link>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="single-img-wrapper single-img-wrapper-3">
                    <div className="single-img">
                        <img src={require(`../../assets/images/categories/new-fashion/adv-img3.jpg`)}  className="img-fluid" alt="abt-img" />
                    </div>
                    <div className="single-img-content content-vtop content-hright pb-4 pb-sm-0">
                        <div className="border-line" />
                        <h3 className="font-weight-bold">New Backpack</h3>
                        <p>Select from New Collection Bags for Women available</p>
                        <div className="ciyashop-btn">
                        <Link to="/shop" className="inline_hover">Shop Now</Link>
                        </div>
                    </div>
                    <div className="text-wrapper bg-green">
                        <div className="text-content">
                        <h5 className="text-uppercase">UPDATE YOUR SUMMER</h5>
                        <p>Wardrobe with our selection of essential</p>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
                </Col>
            </Row>
      )
   }
}

export default HomeBanner2;
