/**
 *  Account Page in Cards Edit
 */
import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';
import { Link } from 'react-router-dom';
class SavedCards extends Component {
  state = {
      targetvalue: Common['0']['carddetail'],
      errors: {}
  };


  componentDidMount() {
      window.scrollTo(0, 0)
  }

  ValidationCart()
  {
      let targetvalue=this.state.targetvalue;
      let errors = {};
      let formIsValid = true;

      //Card Number
      if (!targetvalue["cardno"]) {
          formIsValid = false;
          errors["cardno"] = "Please Enter Card Number";
      }

      if (typeof targetvalue["cardno"] !== "undefined") {
          if (!targetvalue["cardno"].match(/\d{4}-?\d{4}-?\d{4}-?\d{4}/)) {
            formIsValid = false;
            errors["cardno"] = "Please Enter Valid Card No";
          }
      }

       //Card Holder Name
      if (!targetvalue["cardname"]) {
        formIsValid = false;
        errors["cardname"] = "Please Enter Card Holder Name";
      }

      if (typeof targetvalue["cardname"] !== "undefined") {
        if (!targetvalue["cardname"].match(/^[a-zA-Z -]+$/)) {
            formIsValid = false;
            errors["cardname"] = "Enter Valid Card Holder Name";
          }
      }

      //Card Number
      if (!targetvalue["cvv"]) {
        formIsValid = false;
        errors["cvv"] = "Please Enter CVV";
      }

      if (typeof targetvalue["cvv"] !== "undefined") {
          if (!targetvalue["cvv"].match(/^[0-9]{3}$/)) {
            formIsValid = false;
            errors["cvv"] = "Please Enter Valid CVV No";
          }
      }


      //Card Number
      if (!targetvalue["month"]) {
        formIsValid = false;
        errors["month"] = "Please Enter Month";
      }

      if (typeof targetvalue["month"] !== "undefined") {
          if (!targetvalue["month"].match(/^[0-9]{2}$/)) {
            formIsValid = false;
            errors["month"] = "Month not Valid";
          }
      }

      //Card Number
      if (!targetvalue["year"]) {
        formIsValid = false;
        errors["year"] = "Please Enter Year";
      }

      if (typeof targetvalue["year"] !== "undefined") {
          if (!targetvalue["year"].match(/^[0-9]{4}$/)) {
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


  ChangeCartValue(field, e){
    let targetvalue=this.state.targetvalue;
    targetvalue[field] = e.target.value;
    this.setState({targetvalue});
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
                      <h5 class="mb-0">Card Information Edit</h5>
                    </div>
                  <div className="woocommerce-Address-info mt-4">
                    <form className="form-row" onSubmit={this.onCardFormSubmit.bind(this)}>
                    <div class="form-group col-12">
                        <label>Card no</label>
                        <input type="Text" class="form-control" placeholder="Card no" value={this.state.targetvalue.cardno}   onChange={this.ChangeCartValue.bind(this, "cardno")}></input>
                        <span className="error">{this.state.errors["cardno"]}</span>
                      </div>
                    <div class="form-group col-12">
                        <label>Card name</label>
                        <input class="form-control" placeholder="Card name" value={this.state.targetvalue.cardname} onChange={this.ChangeCartValue.bind(this, "cardname")}></input>
                        <span className="error">{this.state.errors["cardname"]}</span>
                      </div>
                      <div class="form-group col-12">
                        <label>CVV</label>
                        <input type="Text" class="form-control" placeholder="CVV" value={this.state.targetvalue.cvv}  onChange={this.ChangeCartValue.bind(this, "cvv")}></input>
                        <span className="error">{this.state.errors["cvv"]}</span>
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label>Expiry Date</label>
                        </div>
                      <div class="form-group col-sm-6">
                        <input type="Text" class="form-control" placeholder="Month"  value={this.state.targetvalue.month} onChange={this.ChangeCartValue.bind(this, "month")}></input>
                        <span className="error">{this.state.errors["month"]}</span>
                      </div>
                      <div class="form-group col-sm-6">
                        <input type="Text" class="form-control" placeholder="Year"  value={this.state.targetvalue.year} onChange={this.ChangeCartValue.bind(this, "year")}></input>
                        <span className="error">{this.state.errors["year"]}</span>
                      </div>
                      <div class="form-group col-12 mb-0">
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
export default SavedCards;
