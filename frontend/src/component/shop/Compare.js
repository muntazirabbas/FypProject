/**
 *  Shop Main Page
 */
import React, { Component } from "react";
import SideFilter from "../../widgets/shopfilter/SideFilter";
import SocialFilter from "../../widgets/shopfilter/SocialInfo";
import ShopBanner from "../../widgets/shopfilter/ShopBanner";
import { Link } from "react-router-dom";
import { Row, Col, Container, Form, Nav } from "reactstrap";
import AllProduct from "../../api/product";
import ProductList from "../../widgets/ProductList";
import { getFilterProductsdata, getCompareFilterProductsdata } from "../../services";
import { connect } from "react-redux";
import TopFilter from "../../widgets/shopfilter/TopFilter";
import { Button } from "antd";
import { compareProducts } from "../../actions/index";
class Compare extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      limit: 9,
      hasMoreProduct: true,
      getproduct: AllProduct,
      brands: [
        "bonanza",
        "outfitters",
        "breakout",
        "khaadi",
        "engine",
        "gulahmed",
        "junaidjamshed",
        "levi"
      ],
      brand1: "",
      brand2: "",
      brand3: ""
    };
  }
  componentWillMount() {
    if (this.state.limit < this.state.getproduct.length) {
      setTimeout(() => {
        this.setState({
          limit: this.state.limit + 8
        });
      }, 2500);
    }
  }
  onLoadMore = () => {
    this.setState({
      limit: this.state.limit + 8
    });
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  onClickCompareBtn = () => {
    const { brand1, brand2, brand3 } = this.state;
    this.props.compareProducts(this.props.products, brand1, brand2, brand3);
  };

  onChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  render() {
    let { products } = this.props;
    let layoutstyle = localStorage.getItem("setLayoutStyle");

    if (layoutstyle == null) {
      layoutstyle = localStorage.setItem("setLayoutStyle", "col-sm-6 col-md-4");
    }
    if (!this.props.products) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="site-content">
        <div className="inner-intro">
          <Container>
            <Row className="intro-title align-items-center">
              <Col md={6} className="text-left">
                <div className="intro-title-inner">
                  <h1>Shop</h1>
                </div>
              </Col>
              <Col md={6} className="text-right">
                <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                  <li className="home">
                    <span>
                      <Link className="bread-link bread-home" to="/">
                        Home
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>Products</span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="content-wrapper section-pt mb-3 mb-md-5">
          <Container>
            <Row>
              <div className="sidebar col-xl-3 col-lg-4 desktop">
                <div className="shop-sidebar-widgets">
                  <SideFilter />
                  {/* <SocialFilter />
                  <ShopBanner /> */}
                </div>
              </div>
              <div className="content col-xl-9 col-lg-8">
                <div className="d-flex justify-content-between">
                  <div>
                    <select
                      className="text-capitalize text-white m-2"
                      style={{backgroundColor:"#D65E46"}}
                      name="brand1"
                      id="dropdown1"
                      onChange={this.onChange}
                    >
                      <option selected disabled value="">
                        Select Brand 1
                      </option>
                      {this.state.brands
                        .filter(
                          brand =>
                            brand !== this.state.brand2 &&
                            brand !== this.state.brand3
                        )
                        .map(brand => (
                          <option value={brand}>{brand}</option>
                        ))}
                    </select>
                    <select
                      className="text-capitalize text-white m-2"
                      style={{backgroundColor:"#D65E46"}}
                      id="dropdown2"
                      name="brand2"
                      onChange={this.onChange}
                    >
                      <option value="">Select Brand 2</option>
                      {this.state.brands
                        .filter(
                          brand =>
                            brand !== this.state.brand1 &&
                            brand !== this.state.brand3
                        )
                        .map(brand => (
                          <option value={brand}>{brand}</option>
                        ))}
                    </select>
                    <select
                      className="text-capitalize text-white  m-2"
                      style={{backgroundColor:"#D65E46"}}
                      id="dropdown3"
                      name="brand3"
                      onChange={this.onChange}
                    >
                      <option value="">Select Brand 3</option>
                      {this.state.brands
                        .filter(
                          brand =>
                            brand !== this.state.brand1 &&
                            brand !== this.state.brand2
                        )
                        .map(brand => (
                          <option value={brand}>{brand}</option>
                        ))}
                    </select>
                  </div>
                  <div className="m-2">
                    <button
                      onClick={this.onClickCompareBtn}
                      className="btn text-white"
                      style={{backgroundColor:"#D65E46"}}
                      type="button"
                    >
                      Compare
                    </button>
                  </div>
                </div>
                {this.props.compare_products &&
                this.props.compare_products.products1.length > 0 &&
                this.props.compare_products.products2.length > 0 &&
                this.props.compare_products.products3.length > 0 ? (
                  <div>
                    <Row className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                      <div className="col-md-4 col-sm-12">
                        <h2>{this.state.brand1}</h2>
                        {this.props.compare_products.products1
                          .slice(0, this.state.limit)
                          .map((product, index) => (
                            <ProductList product={product} key={index} />
                          ))}
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <h2>{this.state.brand2}</h2>
                        {this.props.compare_products.products2
                          .slice(0, this.state.limit)
                          .map((product, index) => (
                            <ProductList product={product} key={index} />
                          ))}
                      </div>
                      <div className="col-md-4 col-sm-12">
                        <h2>{this.state.brand3}</h2>
                        {this.props.compare_products.products3
                          .slice(0, this.state.limit)
                          .map((product, index) => (
                            <ProductList product={product} key={index} />
                          ))}
                      </div>
                    </Row>
                    <div className="text-center">
                      <a onClick={this.onLoadMore} className="loadmore-btn">
                        Load More
                      </a>
                    </div>
                  </div>
                ) : (
                  <Row className="products products-loop grid ciyashop-products-shortcode">
                    <div className="col-sm-12 text-center  mt-5">
                      <img
                        src={require(`../../assets/images/empty-search.jpg`)}
                        className="img-fluid mb-4"
                      />
                      <h3>
                        Sorry! No products were found matching your selection!{" "}
                      </h3>
                      <p>Please try to other words.</p>
                      <button
                        onClick={this.refreshPage}
                        className="btn btn-solid"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </Row>
                )}
                )}
              </div>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = state => ({
  products: getFilterProductsdata(state.data, state.filters),
  compare_products: getCompareFilterProductsdata(state.data.compare_products, state.filters) });
export default connect(mapDispatchToProps, { compareProducts })(Compare);
