import React, { Component, Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Headers from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";

//Component
import HomePage from "./component/home/index";
import HomePage2 from "./component/home2";
import HomePage3 from "./component/home3";

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
import MyAccount from "./component/Account/MyAccount";
import PageNotFound from "./component/Pages/PageNotFound";
import ComingSoon from "./component/Pages/ComingSoon";

import BlogSinglePage from "./component/Blog/BlogSinglePage";
import WishList from "./component/WishList/WishList";
import Aboutus from "./component/AboutUs/Aboutus";
import Contactus from "./component/ContactUs/Contactus";
import Maintenance from "./component/Pages/Maintenance";
import BlogFullWidth from "./component/Blog/BlogFullWidth";
import HomePage4 from "./component/home4";
import CheckOut from "./component/shop/CheckOut";

import Address from "./component/Account/Address";
import Addressedit from "./component/Account/Addressedit";
import AccountProfile from "./component/Account/AccountProfile";
import AccountProfileedit from "./component/Account/AccountProfileedit";
import SavedCards from "./component/Account/SavedCards";
import SavedCardsedit from "./component/Account/SavedCardsedit";
import SuccessScreen from "./component/Account/SuccessScreen";

import Reports from "./component/admin/Reports";
import Invoices from "./component/admin/Invoices";

import OrderHistory from "./component/Account/OrderHistory";
import AdminDashboard from "./component/admin";
import SavedCardsadd from "./component/Account/SavedCardsadd";
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
              <Route path="/ComingSoon" component={ComingSoon} />
              <Route path="/Maintenance" component={Maintenance} />
              <Route path="/admin-panel" component={AdminDashboard} />
            </Switch>
          ) : (
            <div>
              <Headers />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/index-new-fashion" component={HomePage2} />
                <Route exact path="/index-modern" component={HomePage3} />
                <Route exact path="/index-home-classic" component={HomePage4} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/compare" component={Compare} />
                <Route exact path="/shop1" component={ShopPage1} />
                <Route exact path="/shop2" component={ShopPage2} />
                <Route exact path="/shop3" component={ShopPage3} />
                <Route exact path="/shop4" component={ShopPage4} />
                <Route exact path="/ShopingCart" component={ShopingCart} />
                <Route exact path="/MyAccount" component={MyAccount} />
                <Route
                  exact
                  path="/BlogSinglePage"
                  component={BlogSinglePage}
                />
                <Route exact path="/BlogFullWidth" component={BlogFullWidth} />
                <Route exact path="/wishlist" component={WishList} />
                <Route exact path="/Aboutus" component={Aboutus} />
                <Route exact path="/contactus" component={Contactus} />
                <Route exact path="/CheckOut" component={CheckOut} />
                <Route exact path="/Address" component={Address} />
                <Route
                  exact
                  path="/Account/Addressedit"
                  component={Addressedit}
                />
                <Route
                  exact
                  path="/Account/AccountProfile"
                  component={AccountProfile}
                />
                <Route exact path="/Account/Address" component={Address} />
                <Route
                  exact
                  path="/Account/OrderHistory"
                  component={OrderHistory}
                />
                <Route
                  exact
                  path="/Account/SavedCards"
                  component={SavedCards}
                />
                <Route
                  exact
                  path="/Account/AccountProfileedit"
                  component={AccountProfileedit}
                />
                <Route
                  exact
                  path="/Account/SavedCards"
                  component={SavedCards}
                />
                <Route
                  exact
                  path="/Account/SavedCardsedit"
                  component={SavedCardsedit}
                />
                <Route
                  exact
                  path="/Account/SavedCardsadd"
                  component={SavedCardsadd}
                />
                <Route exact path="/SuccessScreen" component={SuccessScreen} />
                <Route exact path="/Reports" component={Reports} />
                <Route exact path="/Invoices" component={Invoices} />

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
