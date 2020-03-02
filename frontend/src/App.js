import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Headers from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

//Component
import HomePage from "./component/home/index";
import "./App.css";
import "./Vendor.js";

import { IntlProvider } from "react-intl";
import ShopPage from "./component/shop";
import ShopPage1 from "./component/shop/index1";
import ShopPage2 from "./component/shop/index2";
import ShopPage3 from "./component/shop/index3";
import ShopPage4 from "./component/shop/index4";
import ProductDetail from "./component/shop/product-detail";
import ShopingCart from "./component/shop/ShopingCart";
import PageNotFound from "./component/Pages/PageNotFound";
import ComingSoon from "./component/Pages/ComingSoon";
import WishList from "./component/WishList/WishList";
import Aboutus from "./component/AboutUs/Aboutus";
import Contactus from "./component/ContactUs/Contactus";
import Maintenance from "./component/Pages/Maintenance";
import CheckOut from "./component/shop/CheckOut";
import Address from "./component/Account/Address";
// import AdminDashboard from "./component/admin";
import { receiveProducts } from "./actions";
import { connect } from "react-redux";
import Compare from "./component/shop/Compare";

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.receiveProducts();
  };
  getUrl(pathname) {
    let pathArray = pathname.split("/");
    return `/${pathArray[1]}` === "/ComingSoon"
      ? true
      : `/${pathArray[1]}` === "/Maintenance"
        ? true
        : `/${pathArray[1]}` === "/admin-panel"
          ? true
          : false;
  }

  render() {
    const { location } = this.props;
    return (
      <IntlProvider locale="a" messages="s">
        <Fragment>
          {this.getUrl(location.pathname) ? (
            <Switch>
              {/* <Route path="/ComingSoon" component={ComingSoon} />
              <Route path="/Maintenance" component={Maintenance} />
              <Route path="/admin-panel" component={AdminDashboard} /> */}
            </Switch>
          ) : (
              <div>
                <Headers />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/shop" component={ShopPage} />
                  <Route exact path="/compare" component={Compare} />
                  <Route exact path="/shop1" component={ShopPage1} />
                  <Route exact path="/shop2" component={ShopPage2} />
                  <Route exact path="/shop3" component={ShopPage3} />
                  <Route exact path="/shop4" component={ShopPage4} />
                  <Route exact path="/ShopingCart" component={ShopingCart} />
                  <Route exact path="/wishlist" component={WishList} />
                  <Route exact path="/Aboutus" component={Aboutus} />
                  <Route exact path="/contactus" component={Contactus} />
                  <Route exact path="/CheckOut" component={CheckOut} />
                  <Route exact path="/Address" component={Address} />
                  <Route path={`/shop/:category/:id`} component={ProductDetail} />
                  <Route exact component={PageNotFound} />
                </Switch>
                <Footer />
              </div>
            )}
        </Fragment>
      </IntlProvider>
    );
  }
}

const AppMapStateToProps = state => {
  return {
    products: state.data.products
  };
};

const AppMapDispatchToProps = dispatch => {
  return {
    receiveProducts: () => {
      dispatch(receiveProducts());
    }
  };
};

export default connect(
  AppMapStateToProps,
  AppMapDispatchToProps
)(withRouter(App));
