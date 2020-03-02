/**
 * Home 3 page Feature Product
 */
import React , {Component} from 'react';
import ProductSlider from '../ProductSlider';
import { Row, Col,Container } from 'reactstrap';

const homesaleslider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
    }
    }
  ]
};

class FeatureProduct extends Component {

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
        <div>
            <Row className="text-center">
                <div className="col-sm-12">
                    <div className="section-title">
                            <h2 className="title">Featured products</h2>
                            <p>Forget about struggling to do everything at once taking care of the family.</p>
                        </div>
                    </div>
                </Row>
                <div className="row">
                    <div className="col-12">
                    <div className="products products-loop grid ciyashop-products-shortcode row">
                    <ProductSlider settings={homesaleslider} />
                    </div>
                </div>

                </div>
            </div>
        )
    }
 }

export default FeatureProduct;
