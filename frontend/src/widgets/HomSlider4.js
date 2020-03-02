/**
 * Page 3 Home Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Row, Col,Container } from 'reactstrap';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

class HomSlider3 extends Component {

   render() {
    return (
        <Slider className="slider-04 slider-simple-arrow" {...settings}>
        <div key={1} className="slide-04-item">
            <div className="slide-inner">
                <div className="slide-image">
                    <img src={require(`../assets/images/home-04-slider/img-01.jpg`)} alt="slide-1" />
                </div>
                <div className="slide-content text-left">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-4 col-md-6">
                                <div class="slide-inner bg-white">
                                    <img className="mx-auto" src={require(`../assets/images/home-04-slider/sale.png`)} alt="slide-1" />
                                    <div class="slide-title">
                                        <h1>50% off</h1>
                                    </div>
                                    <div class="slide-subtitle">
                                        Final Reductions
                                    </div>
                                    <p>Layer up in style with our new arrivals</p>
                                    <Link class="slide-button" to="/shop">View the collection  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div key={2} className="slide-04-item">
            <div className="slide-inner">
                <div className="slide-image">
                    <img src={require(`../assets/images/home-04-slider/img-02.jpg`)} alt="slide-1" />
                </div>
                <div className="slide-content text-left">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-7">
                                <div class="slide-inner-02 bg-white">
                                    <img className="mx-auto slide-sale" src={require(`../assets/images/home-04-slider/sale-02.png`)} alt="slide-1" />
                                    <div class="slide-subtitle">
                                        #Introducing
                                    </div>
                                    <div class="slide-title">
                                        <h1>24/7 style</h1>
                                    </div>
                                    <p class="h4 text-dark">For the girls</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Slider>
      )
   }
}

export default HomSlider3;
