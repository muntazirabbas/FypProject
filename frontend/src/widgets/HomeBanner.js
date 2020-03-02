/**
 * HomeBanner
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

class HomeBanner extends Component {

   render() {
    return (
        <Row className="row section-pb">
            <Col md={6} className="mb-2 mb-sm-0">
            <div className="ciyashop_banner_wrapper mb-4 pb-2">
            <div className="ciyashop_banner ciyashop_banner-style-style-1 ciyashop_banner-effect-none">
                <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../assets/images/categories/default/adv-banner-img1.png`)}  />
                <div className="ciyashop_banner-content ciyashop_banner-content-1">
                    <div className="ciyashop_banner-content-wrapper">
                    <div className="ciyashop_banner-content-inner-wrapper">
                        <div className="ciyashop_banner-label-wrap gscore_banner-text-wrap-1 ciyashop_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-label"> New</div>
                        </div>
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text"><h2> Checked Blouse With Ruffle Trims</h2></div>
                        </div>
                        <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-link ciyashop_banner-btn-shape-square"> <Link to="/shop" className="ciyashop_banner-btn inline_hover">Shop Now</Link></div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="ciyashop_banner_wrapper">
            <div className="ciyashop_banner ciyashop_banner-style-style-1 ciyashop_banner-effect-none">
                <img className="ciyashop_banner-image img-fluid inline img-fluid" alt="Banner" src={require(`../assets/images/categories/default/adv-banner-img3.png`)} />
                <div className="ciyashop_banner-content ciyashop_banner-content-2">
                    <div className="ciyashop_banner-content-wrapper">
                    <div className="ciyashop_banner-content-inner-wrapper">
                        <div className="ciyashop_banner-label-wrap ciyashop_banner-text-wrap-1 ciyashop_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-label ciyashop_banner-lanel-yellow"> Sale</div>
                        </div>
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text"><h2> trousers with contrasting topstitching</h2></div>
                        </div>
                        <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-link ciyashop_banner-btn-shape-square justify-content-end"> <Link to="/shop" className="ciyashop_banner-btn inline_hover">Shop Now</Link></div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </Col>
            <Col md={6} className="mt-4 mt-md-0">
            <div className="ciyashop_banner_wrapper" style={{backgroundImage: 'url(categories/default/adv-banner-img2.png)'}}>
            <div className="ciyashop_banner ciyashop_banner-3 ciyashop_banner-style-style-1 ciyashop_banner-effect-none">
                <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../assets/images/categories/default/adv-banner-img2.png`)} />
                <div className="ciyashop_banner-content position-md-r ciyashop_banner-content-hleft ciyashop_banner-content-vtop">
                    <div className="ciyashop_banner-content-wrapper">
                    <div className="ciyashop_banner-content-inner-wrapper">
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-1 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text">
                        <h2 className="mt-sm-0">Tops</h2>
                        </div>
                        </div>
                        <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-2 hidden-lg hidden-md hidden-sm hidden-xs">
                        <div className="ciyashop_banner-text">
                        <h3>Season festival</h3>
                        </div>
                        </div>
                        <div  className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-flat ciyashop_banner-btn-size-md ciyashop_banner-btn-shape-square"> <Link to="/shop" style={{backgroundColor:"#d65e46"}} className="ciyashop_banner-btn">Buy now!</Link></div>
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

export default HomeBanner;
