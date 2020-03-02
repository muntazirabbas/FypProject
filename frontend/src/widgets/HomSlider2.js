/**
 * Home Slider Demo 2
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

class HomSlider2 extends Component {

   render() {
    return (
        <Slider className="slider-02 slider-simple-arrow" {...settings}>
        <div key={1} className="slide-02-item">
          <div className="slide-inner">
            <div className="slide-image">
              <img src={require(`../assets/images/home-02-slider/img-01.jpg`)} alt="slide-1" />
            </div>
            <div className="slide-content text-left">
              <div class="container">
                <div class="row justify-content-end">
                  <div class="col-lg-6 col-md-8 col-8">
                    <div class="slide-right" >
                      <div class="slide-subtitle">Only 24 Hours</div>
                      <div class="slide-title">
                        <h1>#Spring Final Sale</h1>
                      </div>
                      <Link class="slide-button-flat" >See full detail</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div key={2} className="slide-02-item">
          <div className="slide-inner">
            <div className="slide-image">
              <img src={require(`../assets/images/home-02-slider/img-02.jpg`)} alt="slide-1" />
            </div>
            <div className="slide-content text-left">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 col-md-8 col-8">
                <div class="slide-left">
                  <div class="slide-subtitle">Up to 80% Discount</div>
                  <div class="slide-title">
                    <h1>#End Of Season Sale</h1>
                  </div>
                  <Link class="slide-button-flat" >See full detail</Link>
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

export default HomSlider2;
