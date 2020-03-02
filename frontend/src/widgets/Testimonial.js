/**
 *  Testimonial Widgets
 */
import React , {Component} from 'react';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
     adaptiveHeight: true,
    slidesToScroll: 1
  };


class Testimonial extends Component {


   render() {
    return (
            <div className="ciyashop_testimonials_wrapper ciyashop_testimonials-1">
                <div className="testimonial testimonial-style-1">
                <div className="testimonials slick-carousel">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="slick-caption">
                            <i className="fa fa-quote-left" />
                            <p>I had a few things I needed help with on this theme... Their customer service was amazing and helped me out many times. One of the complete themes with different requirements.</p>
                            <div className="client-info">
                                <h5 className="author-name">- John Doe</h5>
                                <span>Support</span>
                            </div>
                            <div className="author-photo">
                                 <img className="img-responsive rounded-circle"  src={require(`../assets/images/testimonials/img-01.jpg`)}  alt="Paul Flavius" />
                            </div>
                            </div>

                        </div>
                        <div className="item">
                            <div className="slick-caption">
                            <i className="fa fa-quote-left" />
                            <p>Excellent Customer support! These guys reply within minutes sometimes and really help you with when you need them. The theme itself is very extended as well. Happy with my purchase!</p>
                            <div className="client-info">
                                <h5 className="author-name">- Paul Flavius</h5>
                                <span>Marketing</span>
                            </div>
                            <div className="author-photo">
                              <img className="img-responsive rounded-circle" src={require(`../assets/images/testimonials/img-02.jpg`)}  alt="Paul Flavius" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slick-caption">
                            <i className="fa fa-quote-left" />
                            <p>One of the most complete themes here. Thanks a lot for such great features, pages, shortcodes and home variations. And the best of all, great introductions prices.</p>
                            <div className="client-info">
                                <h5 className="author-name">- Felicia Queen</h5>
                                <span>CEO</span>
                            </div>
                            <div className="author-photo">
                                <img className="img-responsive rounded-circle" src={require(`../assets/images/testimonials/img-03.jpg`)}  alt="Paul Flavius" />
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slick-caption">
                            <i className="fa fa-quote-left" />
                            <p>The resulting page looks very well. It was very easy to change colors and fill with my info. Since is well based in Bootstrap 4 it is very easy to make changes and still don't lose the style</p>
                            <div className="client-info">
                                <h5 className="author-name">- Sara Lisbon</h5>
                                <span>CEO</span>
                            </div>
                            <div className="author-photo">
                                <img className="img-responsive rounded-circle" src={require(`../assets/images/testimonials/img-04.jpg`)}  alt="Paul Flavius" />
                            </div>
                            </div>
                        </div>

                    </Slider>

                    </div>
                    </div>
                </div>
        )
    }
 }

 export default Testimonial;

