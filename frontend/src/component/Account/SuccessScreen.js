/**
 *  Success Screen
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import CommonList from '../../api/common';

class SuccessScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          ShippingFlatRate: 0,
          ShippingLocalPickUp: 0,
          TotalShippingCarge: 0,
          Adress1: "",
          Adress2: "",
          Adress3: "",
          CartITems:[],
          firstname:"",
          lastname:""
      }
      this.SetAddress = this.SetAddress.bind(this);
    }

    componentDidMount() {
      this.SetAddress(document, 'script');
      var evt = document.createEvent('Event');
      evt.initEvent('load', false, false);
      window.dispatchEvent(evt);
      window.scrollTo(0, 0)
    }

    SetAddress() {
        if(localStorage.getItem("ShippingAddress1") != null)
        {
          this.state.Adress1 = localStorage.getItem("ShippingAddress1")
        }
        if(localStorage.getItem("ShippingAddress2") != null)
        {
          this.state.Adress2 = localStorage.getItem("ShippingAddress2")
        }
        if(localStorage.getItem("ShippingAddress3") != null)
        {
          this.state.Adress3 = localStorage.getItem("ShippingAddress3")
        }
        if(localStorage.getItem("TotalShippingCharge") != null)
        {
          this.state.TotalShippingCarge =  parseFloat(localStorage.getItem("TotalShippingCharge"));
        }
        if(localStorage.getItem("firstname") != null)
        {
          this.state.firstname =  parseFloat(localStorage.getItem("firstname"));
        }
        if(localStorage.getItem("lastname") != null)
        {
          this.state.lastname =  parseFloat(localStorage.getItem("lastname"));
        }
        this.ReadCartItems();
        this.forceUpdate();
      }


    ReadCartItems() {
      this.state.CartItems = JSON.parse(localStorage.getItem("FinalCheckoutCartItems"));
      localStorage.removeItem("FinalCheckoutCartItems");
      localStorage.removeItem("ShippingAddress1");
      localStorage.removeItem("ShippingAddress2");
      localStorage.removeItem("ShippingAddress3");
      localStorage.removeItem("TotalShippingCharge");
      localStorage.removeItem("ShippingType");
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      if (this.state.CartItems == null) {
        this.props.history.push(`/`)
      }

    }


  render() {


const date = new Date();

   return (
    <div>
    <div className="inner-intro">
      <Container>
          <Row className="intro-title align-items-center">
              <Col md={6} className="text-left">
                  <div className="intro-title-inner">
                  <h1>My Account</h1>
                  </div>
              </Col>
              <Col md={6}  className="text-right">
                  <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                  <li className="home">
                      <span>
                      <Link className="bread-link bread-home" to="/">Home</Link>
                      </span>
                  </li>
                  <li><span>My Account</span></li>
                  </ul>
              </Col>
          </Row>
      </Container>
      </div>
            <div className="section-ptb">
            <Container>
              <Row className="justify-content-center">
                <Col lg={7}>
                  <div className="success-screen">
                    <div className="thank-you text-center">
                      <i className="fa fa-check-circle-o"></i>
                      <h1 className="text-white">Thank You</h1>
                      <span>Success! We received your payment. Your order will be processed soon.</span>
                      <strong className="text-white">Transaction ID:637686G154T154485</strong>
                    </div>
                    <div className="delivery p-4 p-md-5 bg-light text-center">
                      <span className="h5">Expected Date Of Delivery</span>
                      <h2 className="mb-0 mt-2"> { date.toLocaleString('en-us', { month: 'long' }) } {new Date().getDay()+2}, {new Date().getFullYear()}  </h2>
                    </div>
                    {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                    <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                    <Row>
                      <Col lg={6}>
                       <h6>Ship To</h6>
                        <ul className="list-unstyled mb-0">
                          <li>{CommonList[0].profile.firstname} {CommonList[0].profile.lastname}</li>
                          <li>{this.state.Adress1}</li>
                          <li>{this.state.Adress2}</li>
                          <li>{this.state.Adress3}</li>

                        </ul>
                      </Col>
                      <Col lg={6} className="text-lg-right mt-4 mt-lg-0">
                        <h6>Summary</h6>
                        <ul className="list-unstyled mb-0">
                          <li><span>Order ID:</span> <strong>7582654455365</strong></li>
                          <li><span>Order Date:</span> <strong> { date.toLocaleString('en-us', { month: 'long' }) } {new Date(). getDay()}, {new Date().getFullYear()}</strong></li>
                          <li><span>Order Total:</span> <strong>${parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })} </strong></li>
                        </ul>
                      </Col>
                    </Row>
                    </div>
                      :
                      <div>No Items found
                      </div>
                    }
                    {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                    <div className="ordered-detail">
                      <h5 className="mb-4">Your Ordered Details</h5>
                      <div className="table-responsive">
                      {(this.state.CartItems != null && this.state.CartItems.length > 0) ?
                      <table class="table mb-0">
                        <tbody>

                        {this.state.CartItems.map((CartItem, index) => (
                          <tr className="ordered-item">
                            <td className="ordered-image">
                              <img alt="img 01"  src={require(`../../assets/images/${CartItem.ProductImage}`)}    className="img-fluid" />
                            </td>
                            <td  className="ordered-name">
                              <h6 className="mb-0">Product Name</h6>
                              <span>{CartItem.ProductName}</span>
                            </td>
                            <td className="ordered-quantity">
                              <h6 className="mb-0">Quantity</h6>
                              <span>{CartItem.Qty}</span>
                            </td>
                            <td className="ordered-price">
                             <h6 className="mb-0">Price</h6>
                             <span>${(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</span>
                            </td>
                          </tr>
                         ))}
                        </tbody>
                      </table>
                      :
                      <div>No Items found</div>
                      }
                      </div>
                      <div className="table-responsive">
                      <table class="table total-table table-borderless mt-4 mb-0">
                        <tbody>
                          <tr>
                            <td>Subtotal</td>
                            <td className="text-right">${parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0))).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</td>
                          </tr>
                          <tr>
                          <td>Shipping</td>
                            <td className="text-right">${this.state.TotalShippingCarge.toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</td>
                          </tr>
                          <tr className="border-top">
                          <td><strong className="h5">Total</strong></td>
                            <td className="text-right h5"><strong>${parseFloat(parseFloat(this.state.CartItems.reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}</strong></td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                    </div>
                    :
                    <div>
                      No Items found
                    </div>
                    }
                    <div className="d-sm-flex px-4 pb-4 px-md-5 pb-md-5">
                      <Link className="button ml-auto" to="/">Go to home</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
            </div>
        )

    }
}
export default SuccessScreen;
