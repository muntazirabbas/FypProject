/**
 * Sub Scribe Widgets
 */
import React , {Component} from 'react';
import { Row, Col, Container,Button } from 'reactstrap';
import BG_Image from '../assets/images/newsletter/img-03.jpg';

class Subscribe1 extends Component {


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
            <div className="section-ptb">
            <Container >
            <Row>
            <div className="col-sm-12 newsletter-wrapper newsletter-style-1 newsletter-design-1">
            <div className="p-4" style={{backgroundImage: `url(${BG_Image})`}}>
                <Row className="align-items-center">
                <Col lg={6} className="text-left">
                    <div className="ciyashop_info_box_2_wrapper">
                    {/* shortcode-base-wrapper */}
                    <div className="ciyashop_info_box_2 ciyashop_info_box_2-layout-style_2 ciyashop_info_box_2-content_alignment-left animated ciyashop_info_box_2-with-icon ciyashop_info_box_2-icon-source-font ciyashop_info_box_2-icon-style-flat ciyashop_info_box_2-icon-size-md ciyashop_info_box_2-icon-shape-round ciyashop_info_box_2-icon_position-left">
                        <div className="ciyashop_info_box_2-inner clearfix">
                        <div className="ciyashop_info_box_2-content">
                            <div className="ciyashop_info_box_2-content-wrap">
                            <div className="ciyashop_info_box_2-content-inner">
                                <h2 className="ciyashop_info_box_2-title inline_hover font-weight-bold">
                                Sign up for our newsletter</h2>
                                <p>Keep up on our always evolving product features and technology.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="section-field p-0 p-lg-4">
                    <div className="field-widget clearfix">

                        <form className="newsletter_form" onSubmit={this.onProfileFormSubmit.bind(this)}>
                            <div className="input-area" >
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
                </Col>
                </Row>
            </div>
            </div>
            </Row>
            </Container>
            </div>

      )
   }
}

export default Subscribe1;
