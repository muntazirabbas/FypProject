/**
 * Home Slider
 */
import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
   slidesToScroll: 1
  };

class HomSlider extends Component {

   render() {
    return (
        <Slider className="slider-01 slider-simple-arrow" {...settings}>
               <div key={1} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/img-01.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content">
                       <div class="container">
                       <div class="row">
                          <div class="col-xl-6 col-md-8">
                          <div class="slide-left">
                            <div class="slide-sale">20 <span>%<br/>off</span></div>
                            <div class="slide-title">
                               <h1 style={{background : "#fff2d5"}}>Spring</h1>
                            </div>
                            <div style={{background : "#fff2d5"}} class="slide-subtitle">Season festival</div>
                            <span class="slide-since">Catalogue 2018</span>
                          </div>
                          </div>
                          <div class="col-xl-6 col-md-4 text-right d-none d-md-block">
                             <div class="slide-offer">
                                 Limited time offer
                             </div>
                             <Link class="slide-button" to="/shop">Get the Offer</Link>
                          </div>
                          </div>
                       </div>
                       </div>
                    </div>
                    </div>

                <div key={2} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/img-02.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content">
                       <div class="container">
                       <div class="row">
                          <div class="col-xl-6 col-md-8">
                            <div class="slide-left">
                            <div class="slide-title">
                               <h1 style={{background : "#fff2d5"}}>New Arrival</h1>
                            </div>
                            <div style={{background : "#fff2d5"}} class="slide-subtitle">For women</div>
                             <Link class="slide-button-flat" to="/shop">Shop now</Link>
                          </div>
                          </div>
                          <div class="col-xl-6 col-md-4 text-right d-none d-md-block">
                             <div  class="slide-offer">
                                 Limited time offer
                             </div>
                             <Link class="slide-button" to="/shop">Get the Offer</Link>
                          </div>
                       </div>
                       </div>
                    </div>
                    </div>
                </div>
                <div key={3} className="slide-01-item">
                    <div className="slide-inner">
                    <div className="slide-image">
                        <img src={require(`../assets/images/home-01-slider/img-03.jpg`)} alt="slide-1" />
                    </div>
                    <div className="slide-content">
                       <div class="container">
                       <div class="row">
                          <div class="col-xl-6 col-md-8">
                            <div class="slide-left">
                            <div class="slide-title">
                               <h1 style={{background : "#fff2d5"}}>New Arrival</h1>
                            </div>
                            <div class="slide-subtitle" style={{background : "#fff2d5"}}>For women</div>
                             <Link class="slide-button-flat" to="/shop">Shop now</Link>
                          </div>
                          </div>
                          <div class="col-xl-6 col-md-4 text-right d-none d-md-block">
                             <div class="slide-offer">
                                 Limited time offer
                             </div>
                             <Link class="slide-button" to="/shop">Get the Offer</Link>
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

export default HomSlider;
