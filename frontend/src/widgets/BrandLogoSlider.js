/**
 * Brand Logo Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Row, Col, Container } from 'reactstrap';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

class BrandLogoSlider extends Component {
   render() {
    return (
            <Col sm={12}>
                <div className="ciyashop_clients ciyashop_clients-list-type-slider">
                   <Slider {...settings} className="slider-arrow-hover">
                           <div className="item">
                               <img className="img-fluid mx-auto" src={require(`../assets/images/categories/new-fashion/brand-1.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-2.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                 <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-3.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                 <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-4.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                  <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-5.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                 <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-6.png`)}  alt="clients-logo" />
                            </div>
                            <div className="item">
                                <img className="img-fluid mx-auto"  src={require(`../assets/images/categories/new-fashion/brand-7.png`)}  alt="clients-logo" />
                            </div>
                    </Slider>
                </div>
            </Col>
      )
   }
}

export default BrandLogoSlider;
