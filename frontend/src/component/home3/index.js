
/**
 *  Home Modern Page
 */
import React , {Component} from 'react';
import HomSlider from '../../widgets/HomSlider3';
import HomeBanner3 from '../../widgets/home3/HomeBanner3';
import BrandLogoSlider from '../../widgets/BrandLogoSlider';
import FeatureProduct from '../../widgets/home3/FeatureProduct';
import HomeSaleBanner from '../../widgets/home3/HomeSaleBanner';
import ProductSlider from '../../widgets/ProductSlider';
import CountDownTimer from '../../widgets/CountDownTimer';
import Testimonial from '../../widgets/Testimonial';
import OurLatestPost from '../../widgets/OurLatestPost';
import { Row, Col,Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const saleslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
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
      breakpoint: 975,
      settings: {
        slidesToShow: 1
    }
    }
  ]
};

class HomePage3 extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
     return (
         <div>
            <HomSlider />
            <div id="content" className="site-content" tabIndex={-1}>
                <div className="content-wrapper content-wrapper-vc-enabled">

                            <div id="primary" className="content-area">
                                <main id="main" className="site-main">
                                    <article className="page type-page status-publish hentry">
                                       <Container>
                                             <Row className="section-pt">
                                                <div className="col-sm-12 text-center">
                                                <div className="section-title">
                                                    <h2 className="title"> Categories</h2>
                                                    <p>Focus is having the unwavering attention to complete what you set out to do.</p>
                                                </div>
                                               <HomeBanner3 />
                                                </div>
                                            </Row>
                                            <Row>
                                                <BrandLogoSlider />
                                            </Row>
                                            <FeatureProduct />
                                            <Row className="section-pt">
                                                <HomeSaleBanner  />
                                            </Row>
                                            <Row className="section-ptb text-center">
                                                <Col sm={12}>
                                                <div className="section-title">
                                                    <h2 className="title">New arrival</h2>
                                                    <p>Taking care of the family, running your business etc.</p>
                                                </div>
                                                <Row>
                                                    <Col lg={6}>
                                                    <div className="ciyashop_banner_wrapper">
                                                        <div className="ciyashop_banner ciyashop_banner-style-deal-2 ciyashop_banner-effect-none">
                                                            <img className="ciyashop_banner-image img-fluid inline" alt="Banner" src={require(`../../assets/images/categories/modern/deal-1.png`)}  />
                                                        <div className="ciyashop_banner-content ciyashop_banner-content-hcenter ciyashop_banner-content-vbottom">
                                                            <div className="ciyashop_banner-content-wrapper">
                                                            <div className="ciyashop_banner-content-inner-wrapper">
                                                                <div className="ciyashop_banner-text-wrap ciyashop_banner-text-wrap-1 hidden-lg hidden-md hidden-sm hidden-xs">
                                                                <div className="ciyashop_banner-text"> Deal of The Day</div>
                                                                </div>
                                                                <div className="deal-counter-wrapper counter-size-sm counter-style-style-6">
                                                                <div className="deal-counter">
                                                                     <CountDownTimer time={'152350'}></CountDownTimer>
                                                                </div>
                                                                </div>
                                                                <div className="ciyashop_banner-btn-wrap ciyashop_banner-btn-style-link ciyashop_banner-btn-shape-square">
                                                                <Link to="/shop" className="ciyashop_banner-btn inline_hover">Shop now</Link></div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <div className="products products-loop grid ciyashop-products-shortcode row">
                                                            <ProductSlider settings={saleslider} productSub="dresswear" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                            <Row className="section-ptb testimonial-bg">
                                                <div className="col-sm-12 offset-lg-2 col-lg-8 offset-md-1 col-md-10">
                                                        <Testimonial />
                                                </div>
                                            </Row>
                                            <Row className="section-ptb text-center">
                                                <Col sm={12}>
                                                <div className="section-title ">
                                                    <h2 className="title"> Our Latest Post</h2>
                                                    <p>Read what we say on our blog. you do not have to worry about getting stuck</p>
                                                </div>
                                                <Row>
                                                    <Col sm={12}>
                                                    <div className="latest-post-wrapper latest-post-type-carousel latest-post-style-1 latest-post-without-intro text-left row">
                                                        <OurLatestPost  settings={latestblogslider} />
                                                    </div>
                                                    </Col>
                                                </Row>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </article>
                                </main>
                            </div>

                </div>
                </div>
          </div>
        )
       }
   }
export default HomePage3;
