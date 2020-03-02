/**
 *  User Account Page in Card ADD
 */

import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';
import { Link } from 'react-router-dom';
class SavedCardsadd extends Component {
  state = {
      fieldvalue: {},
      errors: {}
  };
  componentDidMount() {
      window.scrollTo(0, 0)
  }

  ValidationCart()
  {
      let fieldvalue=this.state.fieldvalue;
      let errors = {};
      let formIsValid = true;

      //Card Number
      if (!fieldvalue["cardno"]) {
          formIsValid = false;
          errors["cardno"] = "Please Enter Card Number";
      }

      if (typeof fieldvalue["cardno"] !== "undefined") {
          if (!fieldvalue["cardno"].match(/\d{4}-?\d{4}-?\d{4}-?\d{4}/)) {
            formIsValid = false;
            errors["cardno"] = "Please Enter Valid Card No";
          }
      }


       //Card Holder Name
       if (!fieldvalue["cardname"]) {
        formIsValid = false;
        errors["cardname"] = "Please Enter Card Holder Name";
      }

      if (typeof fieldvalue["cardname"] !== "undefined") {
        if (!fieldvalue["cardname"].match(/^[a-zA-Z -]+$/)) {
            formIsValid = false;
            errors["cardname"] = "Enter Valid Card Holder Name";
          }
      }

      //Card Number
      if (!fieldvalue["cvv"]) {
        formIsValid = false;
        errors["cvv"] = "Please Enter CVV";
      }

      if (typeof fieldvalue["cvv"] !== "undefined") {
          if (!fieldvalue["cvv"].match(/^[0-9]{3}$/)) {
            formIsValid = false;
            errors["cvv"] = "Please Enter Valid CVV No";
          }
      }


      //Card Number
      if (!fieldvalue["month"]) {
        formIsValid = false;
        errors["month"] = "Please Enter Month";
      }

      if (typeof fieldvalue["month"] !== "undefined") {
          if (!fieldvalue["month"].match(/^[0-9]{2}$/)) {
            formIsValid = false;
            errors["month"] = "Month not Valid";
          }
      }

      //Card Number
      if (!fieldvalue["year"]) {
        formIsValid = false;
        errors["year"] = "Please Enter Year";
      }

      if (typeof fieldvalue["year"] !== "undefined") {
          if (!fieldvalue["year"].match(/^[0-9]{4}$/)) {
            formIsValid = false;
            errors["year"] = "Year Not Valid";
          }
      }




    this.setState({ errors: errors });
    return formIsValid;

  }

  onCardFormSubmit(e){
    e.preventDefault();
    if(this.ValidationCart()){
      return true;
    }
  }


  ChangeCart(field, e){
    let fieldvalue=this.state.fieldvalue;
    fieldvalue[field] = e.target.value;
    this.setState({fieldvalue});
  }


    render() {
      const CartDetail=Common['0']['carddetail'];
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
             <Row>
                <Sitebar />
              <Col lg={9} className="mt-4 mt-lg-0">
              <Row>
                <Col lg={12}>
                  <div className="woocommerce-Address">
                  <div className="woocommerce-Address-title">
                      <h5 class="mb-0">Add Card Information</h5>
                    </div>
                  <div className="woocommerce-Address-info mt-4">
                    <form className="form-row" onSubmit={this.onCardFormSubmit.bind(this)}>
                    <div class="form-group col-12">
                        <label>Card no</label>
                        <input type="Text" class="form-control" placeholder="Card no" value={this.state.fieldvalue.cardno}   onChange={this.ChangeCart.bind(this, "cardno")}></input>
                        <span className="error">{this.state.errors["cardno"]}</span>
                      </div>
                    <div class="form-group col-12">
                        <label>Card name</label>
                        <input class="form-control" placeholder="Card name" value={this.state.fieldvalue.cardname} onChange={this.ChangeCart.bind(this, "cardname")}></input>
                        <span className="error">{this.state.errors["cardname"]}</span>
                      </div>
                      <div class="form-group col-12">
                        <label>CVV</label>
                        <input type="Text" class="form-control" placeholder="CVV" value={this.state.fieldvalue.cvv}  onChange={this.ChangeCart.bind(this, "cvv")}></input>
                        <span className="error">{this.state.errors["cvv"]}</span>
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label>Expiry Date</label>
                        </div>
                      <div class="form-group col-sm-6">
                        <input type="Text" class="form-control" placeholder="Month"  value={this.state.fieldvalue.month} onChange={this.ChangeCart.bind(this, "month")}></input>
                        <span className="error">{this.state.errors["month"]}</span>
                      </div>
                      <div class="form-group col-sm-6">
                        <input type="Text" class="form-control" placeholder="Year"  value={this.state.fieldvalue.year} onChange={this.ChangeCart.bind(this, "year")}></input>
                        <span className="error">{this.state.errors["year"]}</span>
                      </div>
                      <div class="form-group col-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </form>
                  </div>
                  </div>
                </Col>
                </Row>
              </Col>
            </Row>
            </Container>

            </div>
            </div>
        )

    }
}
export default SavedCardsadd;
