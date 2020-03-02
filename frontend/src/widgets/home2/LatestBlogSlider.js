/**
 * Home 2 Latest Blog Slider
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
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

class LatestBlogSlider extends Component {

   render() {
    return (
        <div className="latest-post-wrapper latest-post-type-carousel latest-post-style-2 latest-post-without-intro">
             <Slider {...settings} className="slider-spacing-10 slider-arrow-hover">
                <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img  src={require(`../../assets/images/categories/new-fashion/post-img1.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    14<span>Aug</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Clothing</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post With Image</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>I truly believe Augustine’s words are true and if you look at history you...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img src={require(`../../assets/images/categories/new-fashion/post-img2.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    25<span>Oct</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Fashion</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post With Image Slider</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>Success isn’t really that difficult. there is a significant portion of the...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img src={require(`../../assets/images/categories/new-fashion/post-img5.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    18<span>Sep</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Clothing</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post With Custom Quote</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>Making a decision to do something – this is the first step. we all...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img src={require(`../../assets/images/categories/new-fashion/post-img7.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    17<span>Nov</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Clothing</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post with Vimeo Video</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>It is truly amazing the damage that we, as parents, can inflict...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img src={require(`../../assets/images/categories/new-fashion/post-img8.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    18<span>Oct</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Fashion</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post with HTML5 Video</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>The price is something not necessarily defined as financial...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="latest-post-item">
                            <div className="latest-post-item-inner">
                            <div className="latest-post-image">
                                <img src={require(`../../assets/images/categories/new-fashion/post-img9.jpg`)} className="img-fluid" alt="post-img" />
                            </div>
                            <div className="latest-post-content">
                                <div className="post-date">
                                <div className="post-date-inner">
                                    10<span>Dec</span>
                                </div>
                                </div>
                                <div className="latest-post-meta">
                                <ul>
                                    <li>
                                    <i className="fa fa-user" />
                                    <Link to="#" rel="category tag">ciyashop</Link>
                                    </li>
                                    <li>
                                    <i className="fa fa-folder-open" />
                                    <Link to="#" rel="category tag">Fashion</Link>
                                    </li>
                                </ul>
                                </div>
                                <h3 className="blog-title">
                                <Link to="/BlogSinglePage">Blog Post with Youtube Video</Link>
                                </h3>
                                <div className="latest-post-excerpt">
                                <p>So, there you have it; the six steps that will help you to the...</p>
                                </div>
                                <div className="latest-post-entry-footer">
                                <Link to="/BlogSinglePage">Read More...</Link>
                                <div className="latest-post-social-share">
                                    <ul>
                                    <li>
                                        <Link to="#" className="facebook-share">
                                        <i className="fa fa-facebook" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter-share">
                                        <i className="fa fa-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin-share">
                                        <i className="fa fa-linkedin" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="google-share">
                                        <i className="fa fa-google" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="pinterest-share">
                                        <i className="fa fa-pinterest" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </Slider>
        </div>
        )
    }
    }

    export default LatestBlogSlider;


