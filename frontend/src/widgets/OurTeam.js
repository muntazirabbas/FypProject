/**
 * OurTeam Widget
 */
import React , {Component} from 'react';
import Slider from "react-slick";
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

function OurTeam(props) {
   const settings = props.settings;
   return (
            <Col sm={12}>
                <div className="ciyashop_team_member_list ciyashop_team_members_style_style-3">
                    <Slider {...settings} className="slider-arrow-hover slider-spacing-10">
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-01.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Joana Williams</h4>
                                <span>CTO</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook" target="_blank">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter" target="_blank">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest" target="_blank">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance" target="_blank">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-02.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Frank Smith</h4>
                                <span>Community</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook" target="_blank">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter" target="_blank">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest" target="_blank">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance" target="_blank">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-03.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>John Doe</h4>
                                <span>Support</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-04.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Felica Queen</h4>
                                <span>Site Supervisor</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-05.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Joana Williams</h4>
                                <span>CTO</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-06.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Joana Williams</h4>
                                <span>CTO</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="team shadow">
                            <div className="team-images">
                                <img className="img-fluid" src={require(`../assets/images/team/img-07.jpg`)}  />
                            </div>
                            <div className="team-info">
                                <div className="team-description">
                                <h4>Joana Williams</h4>
                                <span>CTO</span>
                                </div>
                                <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                                <ul>
                                    <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                    <a href="http://www.facebook.com" title="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                    <a href="http://www.twitter.com" title="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                    <a href="http://www.pinterest.com" title="Pinterest">
                                        <i className="fa fa-pinterest-p" />
                                    </a>
                                    </li>
                                    <li className="ciyashop-social-item ciyashop-social-color-behance">
                                    <a href="http://www.behance.net" title="Behance">
                                        <i className="fa fa-behance" />
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="item">
                        <div className="team shadow">
                        <div className="team-images">
                            <img className="img-fluid" src={require(`../assets/images/team/img-08.jpg`)}  />
                        </div>
                        <div className="team-info">
                            <div className="team-description">
                            <h4>Joana Williams</h4>
                            <span>CTO</span>
                            </div>
                            <div className="team-social-icon ciyashop-social-icons ciyashop-social-shape-round ciyashop-social-effect-color-hover ciyashop-social-size-small">
                            <ul>
                                <li className="ciyashop-social-item ciyashop-social-color-facebook">
                                <a href="http://www.facebook.com" title="Facebook">
                                    <i className="fa fa-facebook" />
                                </a>
                                </li>
                                <li className="ciyashop-social-item ciyashop-social-color-twitter">
                                <a href="http://www.twitter.com" title="Twitter">
                                    <i className="fa fa-twitter" />
                                </a>
                                </li>
                                <li className="ciyashop-social-item ciyashop-social-color-pinterest">
                                <a href="http://www.pinterest.com" title="Pinterest">
                                    <i className="fa fa-pinterest-p" />
                                </a>
                                </li>
                                <li className="ciyashop-social-item ciyashop-social-color-behance">
                                <a href="http://www.behance.net" title="Behance">
                                    <i className="fa fa-behance" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </Col>
        )

    }

export default OurTeam;
