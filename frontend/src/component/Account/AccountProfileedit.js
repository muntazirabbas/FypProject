/**
 *  Account Profile Edit
 */
import React, { Component } from 'react';
import { Row, Col,Container,Button } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';
import { Link } from 'react-router-dom';
class AccountProfileedit extends Component {

  state = {
      fieldvalue:Common['0']['profile'],
      errors: {}
  };
  componentDidMount() {
      window.scrollTo(0, 0)
  }

  handleValidation()
  {
        let fieldvalue=this.state.fieldvalue;
        let errors = {};
        let formIsValid = true;

        //First Name
        if (!fieldvalue["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "Please Enter First Name";
        }

        if (typeof fieldvalue["firstname"] !== "undefined") {
            if (!fieldvalue["firstname"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["firstname"] = "Please Enter Only Letter";
            }
        }

        //Last Name
        if (!fieldvalue["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "Please Enter Last Name";
        }

        if (typeof fieldvalue["lastname"] !== "undefined") {
            if (!fieldvalue["lastname"].match(/^[a-zA-Z]+$/)) {
              formIsValid = false;
              errors["lastname"] = "Please Enter Only Letter";
            }
        }

      //Male & Female Radio Button
      if (!fieldvalue["customradio"]) {
          formIsValid = false;
          errors["customradio"] = "Please Select Radio";
      }



      //Last Name
      if (!fieldvalue["phoneno"]) {
          formIsValid = false;
          errors["phoneno"] = "Please Enter Phone NO";
      }

      if (typeof fieldvalue["phoneno"] !== "undefined") {
          if (!fieldvalue["phoneno"].match(/^\d{10}$/)) {
            formIsValid = false;
            errors["phoneno"] = "Please Enter Valid Phone no";
          }
      }

      //Email ID
      if (!fieldvalue["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "Please Enter Email ID";
      }

      if (typeof fieldvalue["emailid"] !== "undefined") {
          if (!fieldvalue["emailid"].match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/)) {
            formIsValid = false;
            errors["emailid"] = "Please Enter Valid Email Address";
          }
      }

      //Address
      if (!fieldvalue["address"]) {
        formIsValid = false;
        errors["address"] = "Please Enter Address";
      }

      if (typeof fieldvalue["address"] !== "undefined") {
          if (!fieldvalue["address"].match(/^[a-zA-Z0-9 ]+$/)) {
            formIsValid = false;
            errors["address"] = "Please Enter Only Letter";
          }
      }

      this.setState({ errors: errors });
      return formIsValid;

  }

  onProfileFormSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
       return true;
    }
    else
    {
       // alert('Please Enter Valid Data.');
    }
  }


  handleChange(field, e){
    let fieldvalue=this.state.fieldvalue;
    fieldvalue[field] = e.target.value;
    this.setState({fieldvalue});
  }

   render() {
    const Profile=Common['0']['profile'];
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
                  <div className="woocommerce-Address woocommerce-Address-edit">
                    <div className="woocommerce-Address-title">
                      <h5 class="mb-0">Profile Information Edit </h5>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                    <form onSubmit={this.onProfileFormSubmit.bind(this)}>
                    <div class="form-group">
                          <label>First name</label>
                          <input type="text" class="form-control" value={this.state.fieldvalue.firstname}  onChange={this.handleChange.bind(this, "firstname")} placeholder="First name" />
                          <span className="error">{this.state.errors["firstname"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Last name</label>
                          <input type="text" class="form-control"  value={this.state.fieldvalue.lastname}  onChange={this.handleChange.bind(this, "lastname")}  placeholder="Last name"></input>
                          <span className="error">{this.state.errors["lastname"]}</span>
                        </div>
                        <div class="form-group">
                        <label className="d-block">Gender</label>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="male" name="gender" class="custom-control-input" value="Male" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Male"}></input>
                            <label class="custom-control-label" for="male" >Male</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="female" name="gender" class="custom-control-input" value="Female" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Female"}></input>
                            <label class="custom-control-label" for="female">Female</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Date of birth</label>
                          <input type="date" class="form-control" placeholder="Date of birth"  value={this.state.fieldvalue.dob} onChange={this.handleChange.bind(this, "dob")} ></input>
                        </div>
                        <div class="form-group">
                          <label>Phone</label>
                          <input type="text" class="form-control" placeholder="Phone" value={this.state.fieldvalue.phoneno} onChange={this.handleChange.bind(this, "phoneno")}></input>
                          <span className="error">{this.state.errors["phoneno"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Email</label>
                          <input type="Email" class="form-control" placeholder="Email" value={this.state.fieldvalue.email} onChange={this.handleChange.bind(this, "email")}></input>
                          <span className="error">{this.state.errors["email"]}</span>
                        </div>
                        <div class="form-group">
                          <label>Address</label>
                          <textarea class="form-control" rows="3" placeholder="Address" value={this.state.fieldvalue.address}   onChange={this.handleChange.bind(this, "address")}></textarea>
                          <span className="error">{this.state.errors["address"]}</span>
                        </div>
                        <Button type="submit" className="btn btn-primary">Save</Button>
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
export default AccountProfileedit;
