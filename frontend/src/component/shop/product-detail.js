/**
 *  Shop Product Detail Page
 */
import React, { Component } from "react";
import PostDetail from "../../templates/post-detail";
import ProductSlider from "../../widgets/ProductSlider";
import { Link } from "react-router-dom";
import { receiveProducts } from "../../actions";
import {
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const relatedslider = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllProduct: this.props.products,
      ProductId: parseInt(this.props.match.params.id),
      CurrentProduct: null,
      activeTab: "1"
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount = async () => {
    console.log("PROPS RECEIVED", this.props);
    window.scrollTo(0, 0);
    // await this.props.receiveProducts()
    let CurrentProductId = this.state.ProductId;
    let allproductdata = this.state.AllProduct;
    if (allproductdata && allproductdata.length > 0) {
      allproductdata.map(product => {
        if (product.id === CurrentProductId) {
          this.setState({
            ...this.state,
            CurrentProduct: product
          });
        }
      });
    }
  };
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const Productedit = this.state.CurrentProduct;
    return (
      <div>
        {Productedit !== null ? (
          <div className="site-content">
            <div className="inner-intro">
              <Container>
                <Row className="intro-title align-items-center">
                  <div className="col-12">
                    <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                      <li className="home">
                        <span>
                          <Link className="bread-link bread-home" to="/">
                            Home
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>{Productedit.category}</span>
                      </li>
                      <li>
                        <span>{Productedit.name}</span>
                      </li>
                    </ul>
                  </div>
                </Row>
              </Container>
            </div>
            <div className="content-wrapper section-ptb">
              <Container>
                <PostDetail
                  product={Productedit}
                  tabid={this.state.activeTab}
                />
                <div className="product-content-bottom">
                  <Nav tabs>
                    <NavItem active>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "1"
                        })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        Description
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "2"
                        })}
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        Reviews
                      </NavLink>
                    </NavItem>
                    <NavItem disabled>
                      <NavLink
                        className={classnames({
                          active: this.state.activeTab === "3"
                        })}
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        Custom Tab
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="description"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <h2>What is Lorem Ipsum?</h2>
                          <p>
                            <strong>Lorem Ipsum</strong> is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry’s standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <h2>Why do we use it?</h2>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            ‘Content here, content here’, making it look like
                            readable English. Many desktop publishing packages
                            and web page editors now use Lorem Ipsum as their
                            default model text, and a search for ‘lorem ipsum’
                            will uncover many web sites still in their infancy.
                            Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose
                            (injected humour and the like).
                          </p>
                          <h2>Where does it come from?</h2>
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of “de
                            Finibus Bonorum et Malorum” (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics, very popular
                            during the Renaissance. The first line of Lorem
                            Ipsum, “Lorem ipsum dolor sit amet..”, comes from a
                            line in section 1.10.32.
                          </p>
                          <p>
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from “de Finibus
                            Bonorum et Malorum” by Cicero are also reproduced in
                            their exact original form, accompanied by English
                            versions from the 1914 translation by H. Rackham.
                          </p>
                          <h2>Where can I get some?</h2>
                          <p className="mb-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don’t look even slightly believable. If
                            you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isn’t anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum
                            generators on the Internet tend to repeat predefined
                            chunks as necessary, making this the first true
                            generator on the Internet. It uses a dictionary of
                            over 200 Latin words, combined with a handful of
                            model sentence structures, to generate Lorem Ipsum
                            which looks reasonable. The generated Lorem Ipsum is
                            therefore always free from repetition, injected
                            humour, or non-characteristic words etc.
                          </p>
                          <div className="product-info-box border-top border-bottom mt-5  pt-4 pt-lg-0 pb-2 pb-sm-0">
                            <Row>
                              <Col sm={6} md={4}>
                                <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                  <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                    <div className="ciyashop_info_box_2-icon">
                                      <div className="ciyashop_info_box_2-icon-wrap">
                                        <div className="ciyashop_info_box_2-icon-outer">
                                          <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="glyph-icon pgsicon-ecommerce-delivery-truck-1" />{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ciyashop_info_box_2-content">
                                      <div className="ciyashop_info_box_2-content-wrap">
                                        <div className="ciyashop_info_box_2-content-inner">
                                          <h6 className="ciyashop_info_box_2-title inline_hover">
                                            Free shipping{" "}
                                          </h6>
                                          <div className="ciyashop_info_box_2-content">
                                            <p>Free Shipping on orders $199.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={6} md={4} className="py-3 py-md-0">
                                <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                  <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                    <div className="ciyashop_info_box_2-icon">
                                      <div className="ciyashop_info_box_2-icon-wrap">
                                        <div className="ciyashop_info_box_2-icon-outer">
                                          <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="glyph-icon pgsicon-ecommerce-headphones-1" />{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ciyashop_info_box_2-content">
                                      <div className="ciyashop_info_box_2-content-wrap">
                                        <div className="ciyashop_info_box_2-content-inner">
                                          <h6 className="ciyashop_info_box_2-title inline_hover">
                                            24/7 Support:{" "}
                                          </h6>
                                          <div className="ciyashop_info_box_2-content">
                                            <p>
                                              Online and phone support 24 / 7
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col sm={6} md={4}>
                                <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font  ciyashop_info_box_2-icon-size-md  ciyashop_info_box_2-icon_position-left icon-left-spacing">
                                  <div className="ciyashop_info_box_2-inner clearfix align-items-center">
                                    <div className="ciyashop_info_box_2-icon">
                                      <div className="ciyashop_info_box_2-icon-wrap">
                                        <div className="ciyashop_info_box_2-icon-outer">
                                          <div className="ciyashop_info_box_2-icon-inner">
                                            <i className="glyph-icon pgsicon-ecommerce-reload" />{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="ciyashop_info_box_2-content">
                                      <div className="ciyashop_info_box_2-content-wrap">
                                        <div className="ciyashop_info_box_2-content-inner">
                                          <h6 className="ciyashop_info_box_2-title inline_hover">
                                            30 Days Return{" "}
                                          </h6>
                                          <div className="ciyashop_info_box_2-content">
                                            <p>
                                              30 days money back guarantee.{" "}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="product-reviews">
                        <h6>Add a Review</h6>
                        <p>
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                        <form>
                          <div class="form-group">
                            <label>Name</label>
                            <input type="Text" class="form-control"></input>
                          </div>
                          <div class="form-group">
                            <label>Email</label>
                            <input type="Text" class="form-control"></input>
                          </div>
                          <div class="form-group">
                            <label className="mb-0">Your rating *</label>
                            <ul class="rating list-unstyled">
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star-half-o"></i>
                              </li>
                              <li>
                                <i class="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                          <div class="form-group">
                            <label>Your review *</label>
                            <textarea class="form-control" rows="3"></textarea>
                          </div>
                          <div class="form-group form-check">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="exampleCheck1"
                            ></input>
                            <label class="form-check-label" for="exampleCheck1">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                          <div class="form-group">
                            <Link class="btn btn-primary">Submit</Link>
                          </div>
                        </form>
                      </div>
                    </TabPane>
                    <TabPane tabId="3">
                      <p>
                        The Crochet-Shoulder Chevron Sweatshirt ipsum dolor sit
                        amet, consectetur adipisicing elit. Tenetur, libero,
                        ratione. Tenetur dolor vitae voluptatem, earum nam,
                        voluptas culpa ex vel et aliquid aperiam pariatur ad hic
                        commodi, dicta tempora.
                      </p>
                      <p>
                        Wearing a sweatshirt in public doesn’t mean you can’t
                        look put-together doing it. The Crochet-Shoulder Chevron
                        Sweatshirt from Knox Rose is slightly more tailored for
                        a pullover, though it still gives you a loose fit that
                        remains comfortable and flexible as you move. The
                        textured fabric is enhanced with crochet sleeve details.
                        Throw this long-sleeve sweatshirt over a pair of jeans
                        and you’re ready to go.{" "}
                      </p>
                    </TabPane>
                  </TabContent>
                  <div className="related products">
                    <h2>Related products</h2>
                    <div className="row">
                      <ProductSlider
                        products={this.props.products}
                        productSub={Productedit.category}
                        settings={relatedslider}
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

export default connect(AppMapStateToProps)(withRouter(ProductDetail));
