/**
 * OurLatestPost Widget
 */
import React , {Component} from 'react';
import Slider from "react-slick";
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';


function OurLatestPost(props) {

    const settings = props.settings;
    return (
            <Col sm={12}>
                <div className="latest-post-wrapper latest-post-type-carousel latest-post-style-1 latest-post-without-intro">
                    <Slider {...settings} className="slider-arrow-hover slider-spacing-10">
                        <div className="item">
                            <div className="latest-post-item">
                                <div className="latest-post-item-inner">
                                <div className="latest-post-image">
                                    <img  src={require(`../assets/images/blog/img-01.jpg`)}  className="img-fluid" alt="blog" />
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
                                    <img src={require(`../assets/images/blog/img-02.jpg`)} className="img-fluid" alt="blog" />
                                </div>
                                <div className="latest-post-content">
                                    <div className="post-date">
                                    <div className="post-date-inner">
                                    24<span>Aug</span>
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
                                    <img  src={require(`../assets/images/blog/img-03.jpg`)}  className="img-fluid" alt="blog" />
                                </div>
                                <div className="latest-post-content">
                                    <div className="post-date">
                                    <div className="post-date-inner">
                                    15<span>Oct</span>
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
                                    <img  src={require(`../assets/images/blog/img-04.jpg`)}  className="img-fluid" alt="blog" />
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
                                        <Link to="#" rel="category tag">Fashion Show</Link>
                                    </li>
                                    </ul>
                                    </div>
                                    <h3 className="blog-title">
                                    <Link to="/BlogSinglePage">Blog Post with Youtube Video</Link>
                                    </h3>
                                    <div className="latest-post-excerpt">
                                    <p>So, there you have it; the six steps that will help you to the fabled land...</p>
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
            </Col>
      )

}

export default OurLatestPost;

