/**
 * Home 2 Sub Scribe
 */
import React , {Component} from 'react';
import ProductSlider from '../ProductSlider';
import { Row, Col,Input,Button } from 'reactstrap';

class Subscribe2 extends Component {

  state = {
    fieldvalue:{},
    errors: {}
  };

  handleValidation()
  {
        let fieldvalue=this.state.fieldvalue;
        let errors = {};
        let formIsValid = true;

      //Email ID
      if (!fieldvalue["newsletter_email"]) {
        formIsValid = false;
        errors["newsletter_email"] = "Please Enter Email ID";
      }

      if (typeof fieldvalue["newsletter_email"] !== "undefined") {
          if (!fieldvalue["newsletter_email"].match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            formIsValid = false;
            errors["newsletter_email"] = "Please Enter Valid Email Address";
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
  }

  handleChange(field, e){
  let fieldvalue=this.state.fieldvalue;
  fieldvalue[field] = e.target.value;
  this.setState({fieldvalue});
  }


   render() {
    return (
      <Row className="justify-content-center">
          <Col sm={10} lg={6} md={8} >
            <div className="newsletter-wrapper newsletter-style-1 newsletter-design-6">
              <h2 className="newsletter-title">Join Our Newsletter</h2>
              <div className="newsletter">
                <p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>
                <div className="section-field">
                  <div className="field-widget clearfix">
                    <form className="newsletter_form" onSubmit={this.onProfileFormSubmit.bind(this)}>
                      <div className="input-area">
                                <input type="email" className="placeholder newsletter-email" value={this.state.fieldvalue.newsletter_email} onChange={this.handleChange.bind(this, "newsletter_email")} name="newsletter_email" placeholder="Enter your email" />
                                <span className="error">{this.state.errors["newsletter_email"]}</span>
                      </div>
                      <div className="button-area">
                        <span className="input-group-btn">
                          <button type="submit" className="btn  btn-icon">Subscribe</button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
     )
    }
 }

export default Subscribe2;

