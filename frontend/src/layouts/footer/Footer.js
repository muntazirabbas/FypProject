/**
 *  Footer Main
 */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.Checkscroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.Checkscroll);
  }

  Checkscroll() {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollTop > 350) {
      if (document.getElementById("back-to-top") != null) {
        document
          .getElementById("back-to-top")
          .setAttribute("style", "display:block");
      }
    } else {
      if (document.getElementById("back-to-top") != null) {
        document
          .getElementById("back-to-top")
          .setAttribute("style", "display:none");
      }
    }
  }
  ClicktoTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  render() {
    let backtotop = { display: "none" };
    return (
      <div>
        <footer className="site-footer">
          <div className="footer-wrapper">
            <div className="footer-widgets-wrapper">
              <div className="footer">
                <Container>
                  <Row>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      <div className="logo-wrapper widget">
                        <p>
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={require(`../../assets/images/logo.svg`)}
                              alt="logo"
                            />
                          </Link>
                        </p>
                      </div>
                      <div className="text-content">
                        <p className="mb-3 mt-4">
                          WebHype is a future store. Which brought a new way to shop products.
                        </p>
                        <p className="mb-4">
                          It includes every thing you related to your clothes
                        </p>
                      </div>
                      {/* <div className="pgs-social-profiles mt-4">
                        <div className="social-profiles-wrapper">
                          <div className="social-profiles-wrapper-inner social-profiles-default social-profiles-shape-square">
                            <div className="social-profiles">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.facebook.com"
                                    title="Facebook"
                                    target="_blank"
                                  >
                                    <i className="fa fa-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://twitter.com"
                                    title="Twitter"
                                    target="_blank"
                                  >
                                    <i className="fa fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://google.com/"
                                    title="Google"
                                    target="_blank"
                                  >
                                    <i className="fa fa-google" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://vimeo.com/"
                                    title="Vimeo"
                                    target="_blank"
                                  >
                                    <i className="fa fa-vimeo" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://in.pinterest.com/"
                                    title="Pinterest"
                                    target="_blank"
                                  >
                                    <i className="fa fa-pinterest" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      {/* <div className="footer-nav-menu widget">
                        <h4 className="footer-title title">Useful Links</h4>
                        <div className="menu-useful-links-container">
                          <ul className="menu">
                            <li className="menu-item active">
                              <Link to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/shop">Shop</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/Contactus">Contact Us</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Privacy Policy</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Terms Conditions</Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      {/* <div className="footer-nav-menu widget mt-4 mt-lg-0">
                        <h4 className="footer-title title">Information</h4>
                        <div className="menu-useful-links-container">
                          <ul className="menu">
                            <li className="menu-item active">
                              <Link to="#">Look Book</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Information</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Instagram Wall</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Typography</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Parallax Presentation</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Modern Process</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="#">Warranty and Services</Link>
                            </li>
                          </ul>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-lg-3 col-md-6 footer-align-left">
                      <div className="pgs-contact-widget widget mt-4 mt-lg-0">
                        <h4 className="footer-title title">Contact Info</h4>
                        <div className="footer-address">
                          <ul>
                            <li>
                              <i style={{color:"#d65e46"}} className="fa fa-map-marker" />
                              <span>
                                Park Road Islamabad
                              </span>
                            </li>
                            <li className="pgs-contact-email">
                              <i style={{color:"#d65e46"}} className="fa fa-envelope-o" />
                              <span>support@WebHype.com</span>
                            </li>
                            <li>
                              <i style={{color:"#d65e46"}} className="fa fa-phone" />
                              <span>+92-3xx-xxxxxxx</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="widget pgs-newsletter-widget">
                        <h4 className="footer-title title">Newsletter</h4>
                        <div className="newsletter">
                          <div className="section-field">
                            <form className="newsletter_form">
                              <div className="input-area">
                                <input
                                  type="text"
                                  className="placeholder newsletter-email"
                                  name="newsletter_email"
                                  placeholder="Enter your email"
                                />
                              </div>
                              <div className="button-area">
                                <span className="input-group-btn">
                                  <button
                                    style={{backgroundColor:"#d65e46"}}
                                    className="btn btn-icon newsletter-mailchimp submit"
                                    type="button"
                                  >
                                    Subscribe
                                  </button>
                                </span>
                                <span className="newsletter-spinner spinimg-pgs_newsletter_widget_2" />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
            </div>
            {/* <div className="footer-bottom-wrapper">
              <Container>
                <Row>
                  <div className="col-12">
                    <div className="footer-bottom">
                      <Row className="align-items-center">
                        <Col lg={6}>
                          <Row>
                            <div className="col-12">
                              <div className="footer-content">
                                CiyaShop Mobile app is Available now. Download
                                it now on your favorite device and indulge in a
                                seamless shopping experience.
                              </div>
                            </div>
                          </Row>
                        </Col>
                        <Col lg={6}>
                          <div className="app-group row text-lg-right">
                            <Col md={4}>
                              <div className="app-img">
                                <img
                                  src={require(`../../assets/images/appbtntext.png`)}
                                  className="img-fluid"
                                  alt
                                />
                              </div>
                            </Col>
                            <Col md={8}>
                              <Link to="#" className="apps-store-img">
                                <img
                                  src={require(`../../assets/images/google-play-img.png`)}
                                  className="img-fluid"
                                  alt
                                />
                              </Link>
                              <Link to="#" className="apps-store-img">
                                <img
                                  src={require(`../../assets/images/appstorebtn.png`)}
                                  className="img-fluid"
                                  alt
                                />
                              </Link>
                            </Col>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Row>
              </Container>
            </div> */}
            {/* <div className="site-info">
              <div className="footer-widget">
                <Container>
                  <div className="row align-items-center">
                    <Col md={6} className="float-left">
                      <p>
                        {" "}
                        © Copyright 2019 <Link to="#">CiyaShop</Link> All Rights
                        Reserved.
                      </p>
                    </Col>
                    <Col md={6} className="float-right">
                      <div className="payments text-right">
                        <img
                          src={require(`../../assets/images/payments.png`)}
                          className="img-fluid"
                          alt
                        />
                      </div>
                    </Col>
                  </div>
                  <div className="clearfix" />
                </Container>
              </div>
            </div> */}
          </div>
        </footer>
        {/* Back to Top */}
        <div id="back-to-top" style={backtotop} onClick={this.ClicktoTop}>
          <Link style={{backgroundColor:"#d65e46"}} class="top arrow">
            <i class="fa fa-angle-up"></i>
          </Link>
        </div>
      </div>
    );
  }
}
export default Footer;
