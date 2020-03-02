/**
 * Home Page Slider Demo 3
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
        <Slider className="slider-03 slider-simple-arrow" {...settings}>
               <div key={1} className="slide-03-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-03-slider/img-01.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content text-left">
                        <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-lg-8">
                                    <div class="slide-since">new 2018</div>
                                    <div class="slide-title">
                                        <h1>sale 65% off</h1>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-5">
                                            <img className="mx-auto" src={require(`../assets/images/home-03-slider/img-02.png`)} alt="slide-1" />
                                        </div>
                                        <div class="col-md-5">
                                            <img className="mx-auto" src={require(`../assets/images/home-03-slider/img-03.png`)} alt="slide-1" />
                                        </div>
                                    </div>
                                    <Link class="slide-button" to="/shop">Shop now </Link>
                                </div>
                            </div>
                        </div>
                       </div>
                    </div>
                    </div>

                <div key={2} className="slide-03-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-03-slider/img-04.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content text-left">
                       <div class="container">
                            <div class="row justify-content-center text-center">
                                <div class="col-lg-8">
                                    <div class="slide-since">new trendy</div>
                                    <div class="slide-title">
                                        <h1>hot & stylish</h1>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="col-md-5">
                                            <img className="mx-auto" src={require(`../assets/images/home-03-slider/img-05.png`)} alt="slide-1" />
                                        </div>
                                        <div class="col-md-5">
                                            <img className="mx-auto" src={require(`../assets/images/home-03-slider/img-06.png`)} alt="slide-1" />
                                        </div>
                                    </div>
                                    <Link class="slide-button" to="/shop">Shop now </Link>
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
