/**
 *  Home Classic Page
 */
import React , {Component} from 'react';
import HomSlider from '../../widgets/HomSlider4';
import ProductSlider from '../../widgets/ProductSlider';
import OurLatestPost from '../../widgets/OurLatestPost';
import { Row, Col,Container } from 'reactstrap';
import AboutBanner3 from '../../widgets/AbountBanner3';
import NewCollecation from '../../widgets/home2/NewCollecation';
import Subscribe1 from '../../widgets/Subscribe1';
import { Link } from 'react-router-dom';
import Instagram from '../../widgets/Instafeed';

const saleslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
    }
    }
  ]

};

const latestblogslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
    }
    }
  ]

 };

class HomePage4 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
     return (
         <div>
            <HomSlider />
            <div id="content" className="site-content">
                <div className="content-wrapper">
                <Container>
                    <AboutBanner3 />
                </Container>
                </div>
                <div className="content-wrapper">
                <Container>
                    <Row className="margin-top-8">
                    <Col sm={12}  className="text-center">
                        <div className="section-title">
                            <h2 className="title">Top Interesting</h2>
                            <p>Forget about struggling to do everything at once taking care of the family, running your business etc</p>
                        </div>
                        <Row className="margin-top-4">
                        <Col sm={12}  >
                            <div className="products products-loop grid ciyashop-products-shortcode row">
                                    <ProductSlider settings={saleslider} />
                            </div>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>
                </div>
                <div className="content-wrapper">
                        <Subscribe1 />
                </div>
                <div className="content-wrapper">
                <Container>
                    <Row className="margin-top-8 mb-7 pb-3 pb-sm-0">
                    <Col sm={12}  >
                        <Row>
                        <div className="col-lg-8">
                            <NewCollecation />
                        </div>
                         <div className="col-lg-4">
                            <div className="ciyashop_banner_wrapper">
                            {/* shortcode-base-wrapper */}
                            <div className="ciyashop_banner ciyashop_banner-style-style-1 ciyashop_banner-effect-border banner-2">
                                <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/sub-banner-02-1.jpg`)} />
                                <div className="ciyashop_banner-content ciyashop_banner-content-hleft ciyashop_banner-content-vtop">
                                <div className="ciyashop_banner-content-wrapper">
                                    <div className="ciyashop_banner-content-inner-wrapper">
                                    <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-1 hidden-lg hidden-md hidden-sm hidden-xs">
                                        <div className="ciyashop_banner-text">
                                        New Collection </div>
                                    </div>
                                    <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-link ciyashop_banner-btn-shape-square mt-0">
                                        <Link to="/shop" className="ciyashop_banner-btn inline_hover">Shop Now</Link> </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Row>
                    </Col>
                    </Row>
                </Container>
                </div>
                <div className="content-wrapper">
                    <Container>
                        <Row className="section-pb">
                            <Col sm={12}  className="text-center">
                                <div className="section-title">
                                    <h2 className="title">Latest Blog</h2>
                                    <p>Read what we say on our blog. you do not have to worry about getting stuck alone trying to figure everything out.</p>
                                </div>
                                <Row>
                                    <OurLatestPost settings={latestblogslider}  />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="content-wrapper overflow-hidden">
                    <div class="container-fluid p-0">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="instafeed insta-feeds">
                                        <Instagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>
        )
       }
   }
export default HomePage4;
