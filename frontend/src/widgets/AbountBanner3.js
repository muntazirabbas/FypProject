/**
 * About Banner 3
 */
import React , {Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutBanner3 extends Component {

    constructor(){
        super();
        this.state = { showText: false };
      }
      getMoreTextDiv(){
        if (this.state.showText) {
            return  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>;
          } else {
            return null;
          }
      }
   render() {
    var expandedDiv = this.getMoreTextDiv();
    return (
            <Row className="section-ptb">
            <div className="col-sm-12">
                <Row className="d-flex align-items-center">
                <Col sm={12} lg={7}>
                <div className="ciyashop_banner_wrapper">
                    <div className="ciyashop_banner ciyashop_banner-style-style-1 ciyashop_banner-effect-none banner-1">
                        <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../assets/images/sub-banner-01-1.png`)} />
                        <div className="ciyashop_banner-content ciyashop_banner-content-hcenter ciyashop_banner-content-vbottom ">
                            <div className="ciyashop_banner-content-wrapper ">
                                <div className="ciyashop_banner-content-inner-wrapper ">
                                    <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-1 ciyashop_banner-text-bg_color hidden-lg hidden-md hidden-sm hidden-xs ">
                                        <div className="ciyashop_banner-text bg-dark text-white px-3 px-sm-5 font-weight-bold">
                                        End of Season</div>
                                    </div>
                                    <div class="ciyashop_button_wrapper ciyashop_button_width_default mt-0">
                                        <div className="inline_hover ciyashop_button_default ciyashop_button_border_square ciyashop_button_size_medium"> <Link to="/shop" className="ciyashop_banner-btn ">Shop now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ciyashop_banner-badge-wrap ">
                            <div className="ciyashop_banner-badge-inner-wrap ">
                                <div className="ciyashop_banner-badge ciyashop_banner-badge_style-style-1 ciyashop_banner-badge_type-flat ciyashop_banner-badge_align-vtop ciyashop_banner-badge_align-hleft ">
                                    <div className="ciyashop_banner-badge-inner "> <span className="ciyashop_banner-badge-text ">Sale</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
                <Col sm={12} lg={5} className="mt-4 mt-md-5 mt-lg-0">
                <div className="section-title mb-4">
                    <span className="banner-title">Know More</span>
                    <h2 className="title text-left"> About CiyaShop</h2>
                    <p className="mb-0 mb-md-2">We are CiyaShop ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.</p>
                    { expandedDiv }
                </div>
                <div className="ciyashop_button_wrapper ciyashop_button_width_default ">
                    <div className="inline_hover ciyashop_button_default">
                    <Link className="banner-link"  onClick={() => this.setState({ showText: !this.state.showText }) }> {(this.state.showText) ? "Read Less.." : "Read More.."}   </Link>
                    </div>
                </div>
                </Col>
                </Row>
            </div>
            </Row>
      )
   }
}

export default AboutBanner3;
