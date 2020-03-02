
/**
 *  Shop Main Page
 */
import React, { Component } from 'react';
import HorizontalFilter from '../../widgets/shopfilter/HorizontalFilter';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import AllProduct from '../../api/product';
import ProductList from '../../widgets/ProductList';
import { getFilterProductsdata } from '../../services';
import { connect } from 'react-redux';
import TopFilter from '../../widgets/shopfilter/TopFilter';

class ShopPage1 extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            limit: 8,
            hasMoreProduct: true,
            getproduct: AllProduct,
        }
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
    }
    render() {
        let { products } = this.props;
        let layoutstyle = localStorage.getItem('setLayoutStyle')

        if (layoutstyle == null) {
            layoutstyle = localStorage.setItem('setLayoutStyle', 'col-sm-6 col-xl-3 col-lg-4')
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
                                            <Link className="bread-link bread-home" to="/">Home</Link>
                                        </span>
                                    </li>
                                    <li><span>Products</span></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="content-wrapper section-pt mb-3 mb-md-5">
                    <Container>
                        <Row>
                            <div className="content col-xl-12 col-lg-12">
                                <div className="products-header">
                                    <div className="right-banner">
                                        <img alt="Shop Banner" src={require(`../../assets/images/shop/shop-banner.jpg`)} className="img-fluid" />
                                    </div>
                                    <div className="sticky-filter" id="sticky-filter">
                                        <Container className="px-0">
                                            <div className="d-flex align-items-center">
                                                <div className="horizontal-sidebar sidebar desktop">
                                                    <div className="shop-sidebar-widgets">
                                                        <HorizontalFilter />
                                                    </div>
                                                </div>
                                            </div>
                                        </Container>
                                    </div>
                                    <div className="loop-header">
                                        <div className="loop-header-tools">
                                            <div className="loop-header-tools-wrapper">
                                                <TopFilter productlength={products.length} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {products.length > 0 ?
                                    <div>
                                        <Row className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                                            {products.slice(0, this.state.limit).map((product, index) =>
                                                <ProductList product={product} key={index} layoutstyle={layoutstyle} />
                                            )
                                            }
                                        </Row>
                                        <div className="text-center">
                                            <a onClick={this.onLoadMore} className="loadmore-btn">Load More</a>
                                        </div>
                                    </div>
                                    :
                                    <Row className="products products-loop grid ciyashop-products-shortcode">
                                        <div className="col-sm-12 text-center  mt-5" >
                                            <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4" />
                                            <h3>Sorry! No products were found matching your selection!    </h3>
                                            <p>Please try to other words.</p>
                                            <Link to="/shop" className="btn btn-solid">Continue Shopping</Link>
                                        </div>
                                    </Row>
                                }
                            </div>

                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (state) => ({
    products: getFilterProductsdata(state.data, state.filters)
})
export default connect(
    mapDispatchToProps, {}
)(ShopPage1)