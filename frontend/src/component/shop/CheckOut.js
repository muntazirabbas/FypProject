/**
 *  Shop Checkout Page
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Form, NavItem, Input,Table } from 'reactstrap';
import CommonList from '../../api/common';

class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ShippingFlatRate: 1.50,
            ShippingLocalPickUp: 2.00,
            TotalShippingCarge: 1.50,
            fieldvalue:CommonList[0].profile,
            errors: {}
        }
        this.ReadShippingCharge = this.ReadShippingCharge.bind(this);
    }

    componentDidMount() {
        this.ReadShippingCharge(document, 'script');
        var evt = document.createEvent('Event');
        evt.initEvent('load', false, false);
        window.dispatchEvent(evt);
        window.scrollTo(0, 0)
    }

    ReadCartItems() {
        var cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if (cart == null) {
            this.props.history.push(`/`)
        } 
        return cart
    }

    ReadShippingCharge()
    {
        if(localStorage.getItem("TotalShippingCharge") != null)
        {
            this.state.TotalShippingCarge =  parseFloat(localStorage.getItem("TotalShippingCharge"));
        }
        else  {
            this.state.TotalShippingCarge = 0;
        }


        if(localStorage.getItem("ShippingType") != null)
        {
            if(localStorage.getItem("ShippingType") == 1)
            {
                this.refs.rd1.setAttribute("checked", "checked");
                this.refs.rd2.removeAttribute("checked");

                if (this.refs.rd1 != null)
                    this.refs.rd1.checked = true;
            }
            else if (localStorage.getItem("ShippingType") == 2)
            {
                 this.refs.rd2.setAttribute("checked", "checked");
                 this.refs.rd1.removeAttribute("checked");


                 this.refs.rd2.checked = true;

            }
        }
        this.forceUpdate();
    }

    SetShippingCharge = (CaseNo) => {

        if (CaseNo == 1) {
            this.state.TotalShippingCarge = this.state.ShippingFlatRate;

            this.refs.rd1.setAttribute("checked", "checked");
            this.refs.rd2.removeAttribute("checked");

            if (this.refs.rd1 != null)
                this.refs.rd1.checked = true;

                localStorage.setItem("TotalShippingCharge",this.state.TotalShippingCarge);
                localStorage.setItem("ShippingType",1);

        } else if (CaseNo == 2) {
            this.state.TotalShippingCarge = this.state.ShippingLocalPickUp;

            this.refs.rd2.setAttribute("checked", "checked");
            this.refs.rd1.removeAttribute("checked");


            this.refs.rd2.checked = true;

            localStorage.setItem("TotalShippingCharge",this.state.TotalShippingCarge);
            localStorage.setItem("ShippingType",2);


        }
        this.forceUpdate();
    }



    onCheckOutSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            localStorage.setItem("FinalCheckoutCartItems",localStorage.getItem("LocalCartItems"));
            localStorage.removeItem("LocalCartItems");
            this.props.history.push(`/SuccessScreen`)
        }
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


             //streetno
             if (!fieldvalue["streetno"]) {
                formIsValid = false;
                errors["streetno"] = "Please Enter Street address";
            }

             //state
             if (!fieldvalue["state"]) {
                formIsValid = false;
                errors["state"] = "Please Enter Town / City";
            }

            if (!fieldvalue["zipcode"]) {
                formIsValid = false;
                errors["zipcode"] = "Please Enter Postcode / ZIP";
            }

            if (typeof fieldvalue["zipcode"] !== "undefined") {
                if (fieldvalue["zipcode"].length < 6) {
                  formIsValid = false;
                  errors["zipcode"] = "Please Enter valid Postcode / ZIP";
                }
            }

            if (!fieldvalue["phone"]) {
                formIsValid = false;
                errors["phone"] = "Please Enter Phone";
            }

            if (typeof fieldvalue["phone"] !== "undefined") {
                if (!fieldvalue["phone"].match(/^\d{10}$/)) {
                  formIsValid = false;
                  errors["phone"] = "Please Enter Valid Phone";
                }
            }

          //Email ID
          if (!fieldvalue["email"]) {
            formIsValid = false;
            errors["email"] = "Please Enter Email ID";
          }
          this.setState({ errors: errors });
          localStorage.setItem("firstname",fieldvalue["firstname"]);
          localStorage.setItem("lastname",fieldvalue["lastname"]);
          return formIsValid;

      }

      handleChange(field, e){
        let fieldvalue=this.state.fieldvalue;
        fieldvalue[field] = e.target.value;
        this.setState({fieldvalue});
      }

    render() {
        return (

            <div class="site-content">



            <div className="inner-intro">
                <Container>
                    <Row className="intro-title align-items-center">
                        <Col md={6} className="text-left">
                            <div className="intro-title-inner">
                                <h1>Checkout</h1>
                            </div>
                        </Col>
                        <Col md={6} className="text-right">
                            <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                                <li className="home">
                                    <span>
                                        <Link className="bread-link bread-home" to="/">Home</Link>
                                    </span>
                                </li>
                                <li><span>Checkout</span></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="content-wrapper mb-7">
                <Container>
                   <form onSubmit={this.onCheckOutSubmit.bind(this)}>
                        <Row class="mt-5">
                        <Col class="col-lg-6">
                            <Row>
                                <Col sm={12} >
                                    <div class="billing-fields mt-5">
                                        <h3>Billing details</h3>
                                        <div class="billing-fields__field-wrapper">
                                            <div class="form-group">
                                                <label for="billing_first_name" class="">First name&nbsp;<abbr class="required" title="required">*</abbr>
                                                </label>
                                               <Input type="text" class="form-control" name="billing_first_name" id="billing_first_name" placeholder="" value={this.state.fieldvalue.firstname} onChange={this.handleChange.bind(this, "firstname")}/>
                                               <span className="error">{this.state.errors["firstname"]}</span>

                                            </div>
                                            <div class="form-group">
                                                <label for="billing_last_name" class="">Last name&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control " name="billing_last_name" id="billing_last_name" placeholder="" value={this.state.fieldvalue.lastname} onChange={this.handleChange.bind(this, "lastname")}/>
                                                <span className="error">{this.state.errors["lastname"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_company" class="">Company name&nbsp;<span class="optional">(optional)</span></label>
                                                <Input type="text" class="form-control" name="billing_company" id="billing_company" placeholder="" value={this.state.fieldvalue.companyname} onChange={this.handleChange.bind(this, "companyname")}/>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_country" class="">Country&nbsp;<abbr class="required" title="required"></abbr></label>
                                                <select name="billing_country" id="billing_country" class="form-control"  onChange={this.handleChange.bind(this, "country")}  >
                                                        <option value="AX">Åland Islands</option>
                                                        <option value="AF">Afghanistan</option>
                                                        <option value="AL">Albania</option>
                                                        <option value="DZ">Algeria</option>
                                                        <option value="AS">American Samoa</option>
                                                        <option value="AD">Andorra</option>
                                                        <option value="AO">Angola</option>
                                                        <option value="AI">Anguilla</option>
                                                        <option value="AQ">Antarctica</option>
                                                        <option value="AG">Antigua and Barbuda</option>
                                                        <option value="AR">Argentina</option>
                                                        <option value="AM">Armenia</option>
                                                        <option value="AW">Aruba</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="AT">Austria</option>
                                                        <option value="AZ">Azerbaijan</option>
                                                        <option value="BS">Bahamas</option>
                                                        <option value="BH">Bahrain</option>
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="BB">Barbados</option>
                                                        <option value="BY">Belarus</option>
                                                        <option value="PW">Belau</option>
                                                        <option value="BE">Belgium</option>
                                                        <option value="BZ">Belize</option>
                                                        <option value="BJ">Benin</option>
                                                        <option value="BM">Bermuda</option>
                                                        <option value="BT">Bhutan</option>
                                                        <option value="BO">Bolivia</option>
                                                        <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                        <option value="BA">Bosnia and Herzegovina</option>
                                                        <option value="BW">Botswana</option>
                                                        <option value="BV">Bouvet Island</option>
                                                        <option value="BR">Brazil</option>
                                                        <option value="IO">British Indian Ocean Territory</option>
                                                        <option value="VG">British Virgin Islands</option>
                                                        <option value="BN">Brunei</option>
                                                        <option value="BG">Bulgaria</option>
                                                        <option value="BF">Burkina Faso</option>
                                                        <option value="BI">Burundi</option>
                                                        <option value="KH">Cambodia</option>
                                                        <option value="CM">Cameroon</option>
                                                        <option value="CA">Canada</option>
                                                        <option value="CV">Cape Verde</option>
                                                        <option value="KY">Cayman Islands</option>
                                                        <option value="CF">Central African Republic</option>
                                                        <option value="TD">Chad</option>
                                                        <option value="CL">Chile</option>
                                                        <option value="CN">China</option>
                                                        <option value="CX">Christmas Island</option>
                                                        <option value="CC">Cocos (Keeling) Islands</option>
                                                        <option value="CO">Colombia</option>
                                                        <option value="KM">Comoros</option>
                                                        <option value="CG">Congo (Brazzaville)</option>
                                                        <option value="CD">Congo (Kinshasa)</option>
                                                        <option value="CK">Cook Islands</option>
                                                        <option value="CR">Costa Rica</option>
                                                        <option value="HR">Croatia</option>
                                                        <option value="CU">Cuba</option>
                                                        <option value="CW">Curaçao</option>
                                                        <option value="CY">Cyprus</option>
                                                        <option value="CZ">Czech Republic</option>
                                                        <option value="DK">Denmark</option>
                                                        <option value="DJ">Djibouti</option>
                                                        <option value="DM">Dominica</option>
                                                        <option value="DO">Dominican Republic</option>
                                                        <option value="EC">Ecuador</option>
                                                        <option value="EG">Egypt</option>
                                                        <option value="SV">El Salvador</option>
                                                        <option value="GQ">Equatorial Guinea</option>
                                                        <option value="ER">Eritrea</option>
                                                        <option value="EE">Estonia</option>
                                                        <option value="ET">Ethiopia</option>
                                                        <option value="FK">Falkland Islands</option>
                                                        <option value="FO">Faroe Islands</option>
                                                        <option value="FJ">Fiji</option>
                                                        <option value="FI">Finland</option>
                                                        <option value="FR">France</option>
                                                        <option value="GF">French Guiana</option>
                                                        <option value="PF">French Polynesia</option>
                                                        <option value="TF">French Southern Territories</option>
                                                        <option value="GA">Gabon</option>
                                                        <option value="GM">Gambia</option>
                                                        <option value="GE">Georgia</option>
                                                        <option value="DE">Germany</option>
                                                        <option value="GH">Ghana</option>
                                                        <option value="GI">Gibraltar</option>
                                                        <option value="GR">Greece</option>
                                                        <option value="GL">Greenland</option>
                                                        <option value="GD">Grenada</option>
                                                        <option value="GP">Guadeloupe</option>
                                                        <option value="GU">Guam</option>
                                                        <option value="GT">Guatemala</option>
                                                        <option value="GG">Guernsey</option>
                                                        <option value="GN">Guinea</option>
                                                        <option value="GW">Guinea-Bissau</option>
                                                        <option value="GY">Guyana</option>
                                                        <option value="HT">Haiti</option>
                                                        <option value="HM">Heard Island and McDonald Islands</option>
                                                        <option value="HN">Honduras</option>
                                                        <option value="HK">Hong Kong</option>
                                                        <option value="HU">Hungary</option>
                                                        <option value="IS">Iceland</option>
                                                        <option value="IN" >India</option>
                                                        <option value="ID">Indonesia</option>
                                                        <option value="IR">Iran</option>
                                                        <option value="IQ">Iraq</option>
                                                        <option value="IE">Ireland</option>
                                                        <option value="IM">Isle of Man</option>
                                                        <option value="IL">Israel</option>
                                                        <option value="IT">Italy</option>
                                                        <option value="CI">Ivory Coast</option>
                                                        <option value="JM">Jamaica</option>
                                                        <option value="JP">Japan</option>
                                                        <option value="JE">Jersey</option>
                                                        <option value="JO">Jordan</option>
                                                        <option value="KZ">Kazakhstan</option>
                                                        <option value="KE">Kenya</option>
                                                        <option value="KI">Kiribati</option>
                                                        <option value="KW">Kuwait</option>
                                                        <option value="KG">Kyrgyzstan</option>
                                                        <option value="LA">Laos</option>
                                                        <option value="LV">Latvia</option>
                                                        <option value="LB">Lebanon</option>
                                                        <option value="LS">Lesotho</option>
                                                        <option value="LR">Liberia</option>
                                                        <option value="LY">Libya</option>
                                                        <option value="LI">Liechtenstein</option>
                                                        <option value="LT">Lithuania</option>
                                                        <option value="LU">Luxembourg</option>
                                                        <option value="MO">Macao S.A.R., China</option>
                                                        <option value="MK">Macedonia</option>
                                                        <option value="MG">Madagascar</option>
                                                        <option value="MW">Malawi</option>
                                                        <option value="MY">Malaysia</option>
                                                        <option value="MV">Maldives</option>
                                                        <option value="ML">Mali</option>
                                                        <option value="MT">Malta</option>
                                                        <option value="MH">Marshall Islands</option>
                                                        <option value="MQ">Martinique</option>
                                                        <option value="MR">Mauritania</option>
                                                        <option value="MU">Mauritius</option>
                                                        <option value="YT">Mayotte</option>
                                                        <option value="MX">Mexico</option>
                                                        <option value="FM">Micronesia</option>
                                                        <option value="MD">Moldova</option>
                                                        <option value="MC">Monaco</option>
                                                        <option value="MN">Mongolia</option>
                                                        <option value="ME">Montenegro</option>
                                                        <option value="MS">Montserrat</option>
                                                        <option value="MA">Morocco</option>
                                                        <option value="MZ">Mozambique</option>
                                                        <option value="MM">Myanmar</option>
                                                        <option value="NA">Namibia</option>
                                                        <option value="NR">Nauru</option>
                                                        <option value="NP">Nepal</option>
                                                        <option value="NL">Netherlands</option>
                                                        <option value="NC">New Caledonia</option>
                                                        <option value="NZ">New Zealand</option>
                                                        <option value="NI">Nicaragua</option>
                                                        <option value="NE">Niger</option>
                                                        <option value="NG">Nigeria</option>
                                                        <option value="NU">Niue</option>
                                                        <option value="NF">Norfolk Island</option>
                                                        <option value="KP">North Korea</option>
                                                        <option value="MP">Northern Mariana Islands</option>
                                                        <option value="NO">Norway</option>
                                                        <option value="OM">Oman</option>
                                                        <option value="PK">Pakistan</option>
                                                        <option value="PS">Palestinian Territory</option>
                                                        <option value="PA">Panama</option>
                                                        <option value="PG">Papua New Guinea</option>
                                                        <option value="PY">Paraguay</option>
                                                        <option value="PE">Peru</option>
                                                        <option value="PH">Philippines</option>
                                                        <option value="PN">Pitcairn</option>
                                                        <option value="PL">Poland</option>
                                                        <option value="PT">Portugal</option>
                                                        <option value="PR">Puerto Rico</option>
                                                        <option value="QA">Qatar</option>
                                                        <option value="RE">Reunion</option>
                                                        <option value="RO">Romania</option>
                                                        <option value="RU">Russia</option>
                                                        <option value="RW">Rwanda</option>
                                                        <option value="ST">São Tomé and Príncipe</option>
                                                        <option value="BL">Saint Barthélemy</option>
                                                        <option value="SH">Saint Helena</option>
                                                        <option value="KN">Saint Kitts and Nevis</option>
                                                        <option value="LC">Saint Lucia</option>
                                                        <option value="SX">Saint Martin (Dutch part)</option>
                                                        <option value="MF">Saint Martin (French part)</option>
                                                        <option value="PM">Saint Pierre and Miquelon</option>
                                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                                        <option value="WS">Samoa</option>
                                                        <option value="SM">San Marino</option>
                                                        <option value="SA">Saudi Arabia</option>
                                                        <option value="SN">Senegal</option>
                                                        <option value="RS">Serbia</option>
                                                        <option value="SC">Seychelles</option>
                                                        <option value="SL">Sierra Leone</option>
                                                        <option value="SG">Singapore</option>
                                                        <option value="SK">Slovakia</option>
                                                        <option value="SI">Slovenia</option>
                                                        <option value="SB">Solomon Islands</option>
                                                        <option value="SO">Somalia</option>
                                                        <option value="ZA">South Africa</option>
                                                        <option value="GS">South Georgia/Sandwich Islands</option>
                                                        <option value="KR">South Korea</option>
                                                        <option value="SS">South Sudan</option>
                                                        <option value="ES">Spain</option>
                                                        <option value="LK">Sri Lanka</option>
                                                        <option value="SD">Sudan</option>
                                                        <option value="SR">Suriname</option>
                                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                                        <option value="SZ">Swaziland</option>
                                                        <option value="SE">Sweden</option>
                                                        <option value="CH">Switzerland</option>
                                                        <option value="SY">Syria</option>
                                                        <option value="TW">Taiwan</option>
                                                        <option value="TJ">Tajikistan</option>
                                                        <option value="TZ">Tanzania</option>
                                                        <option value="TH">Thailand</option>
                                                        <option value="TL">Timor-Leste</option>
                                                        <option value="TG">Togo</option>
                                                        <option value="TK">Tokelau</option>
                                                        <option value="TO">Tonga</option>
                                                        <option value="TT">Trinidad and Tobago</option>
                                                        <option value="TN">Tunisia</option>
                                                        <option value="TR">Turkey</option>
                                                        <option value="TM">Turkmenistan</option>
                                                        <option value="TC">Turks and Caicos Islands</option>
                                                        <option value="TV">Tuvalu</option>
                                                        <option value="UG">Uganda</option>
                                                        <option value="UA">Ukraine</option>
                                                        <option value="AE">United Arab Emirates</option>
                                                        <option value="GB">United Kingdom (UK)</option>
                                                        <option value="US" selected>United States (US)</option>
                                                        <option value="UM">United States (US) Minor Outlying Islands</option>
                                                        <option value="VI">United States (US) Virgin Islands</option>
                                                        <option value="UY">Uruguay</option>
                                                        <option value="UZ">Uzbekistan</option>
                                                        <option value="VU">Vanuatu</option>
                                                        <option value="VA">Vatican</option>
                                                        <option value="VE">Venezuela</option>
                                                        <option value="VN">Vietnam</option>
                                                        <option value="WF">Wallis and Futuna</option>
                                                        <option value="EH">Western Sahara</option>
                                                        <option value="YE">Yemen</option>
                                                        <option value="ZM">Zambia</option>
                                                        <option value="ZW">Zimbabwe</option>
                                                    </select>


                                            </div>
                                            <div class="form-group">
                                                <label for="billing_address_1" class="">Street address&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control" name="billing_address_1" id="billing_address_1" placeholder="House number and street name" value={this.state.fieldvalue.streetno}  onChange={this.handleChange.bind(this, "streetno")}/>
                                                <span className="error">{this.state.errors["streetno"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_address_2" class="screen-reader-text">Apartment, suite,
                                                    unit etc.&nbsp;<span class="optional">(optional)</span></label>
                                                <Input type="text" class="form-control" name="billing_address_2" id="billing_address_2" placeholder="Apartment, suite, unit etc. (optional)" value={this.state.fieldvalue.address} onChange={this.handleChange.bind(this, "address")}  />
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_city" class="">Town / City&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control" name="billing_city" id="billing_city" placeholder="" value={this.state.fieldvalue.state}  onChange={this.handleChange.bind(this, "state")} />
                                                <span className="error">{this.state.errors["state"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_postcode" class="">Postcode / ZIP&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="text" class="form-control" name="billing_postcode" id="billing_postcode" placeholder="" value={this.state.fieldvalue.zipcode} autocomplete="postal-code" onChange={this.handleChange.bind(this, "zipcode")} />
                                                <span className="error">{this.state.errors["zipcode"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_phone" class="">Phone&nbsp;<abbr class="required" title="required">*</abbr></label>
                                               <Input type="tel" class="form-control" name="billing_phone" id="billing_phone" placeholder="" value={this.state.fieldvalue.phone} autocomplete="tel" onChange={this.handleChange.bind(this, "phone")}/>
                                               <span className="error">{this.state.errors["phone"]}</span>
                                            </div>
                                            <div class="form-group">
                                                <label for="billing_email" class="">Email address&nbsp;<abbr class="required" title="required">*</abbr></label>
                                                <Input type="email" class="form-control" name="billing_email" id="billing_email" placeholder="" value={this.state.fieldvalue.email} autocomplete="email username" onChange={this.handleChange.bind(this, "email")}/>
                                                <span className="error">{this.state.errors["email"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} className="mt-5">
                            <h3 id="order_review_heading">Your order</h3>


                            <div id="order_review" class="checkout-review-order">
                            {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                <table class="shop_table checkout-review-order-table">
                                    <thead>
                                        <tr>
                                            <th class="product-name">Product</th>
                                            <th class="product-total">Total</th>
                                        </tr>
                                    </thead>
                                        <tbody>

                                        {this.ReadCartItems().map((CartItem, index) => (
                                                <tr class="cart_item">
                                                <td class="product-name">
                                                    {CartItem.ProductName}&nbsp; <strong class="product-quantity">× {CartItem.Qty}</strong> </td>
                                                <td class="product-total">
                                                    <span class="woocs_special_price_code"><span class="Price-amount amount"><span class="Price-currencySymbol">$</span>  {(CartItem.Rate * CartItem.Qty).toLocaleString(navigator.language, { minimumFractionDigits: 0 })} </span></span>
                                                </td>
                                                </tr>
                                        ))}


                                    </tbody>
                                    <tfoot>
                                        <tr class="cart-subtotal">
                                            <th>Subtotal</th>
                                            <td><span class="woocs_special_price_code"><span class="Price-amount amount"><span class="Price-currencySymbol">$</span>{this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span></span>
                                            </td>
                                        </tr>
                                        <tr class="shipping-totals shipping">
                                            <th>Shipping</th>
                                            <td data-title="Shipping">
                                            <ul id="shipping_method" className="shipping-methods">
                                                            <a onClick={() => this.SetShippingCharge(1)}>
                                                                <li>

                                                                    <input style={{cursor:'pointer'}}  id="rd1" ref="rd1" type="radio" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate3" value="flat_rate:3" className="shipping_method" /><label style={{cursor:'pointer'}} for="shipping_method_0_flat_rate3">Flat rate: <span className="Price-amount amount"><span className="Price-currencySymbol">$</span>{parseFloat(this.state.ShippingFlatRate).toFixed(2)} </span></label>

                                                                </li>
                                                            </a>
                                                            <a onClick={() => this.SetShippingCharge(2)}>
                                                                <li>

                                                                    <input style={{cursor:'pointer'}}  type="radio" id="rd2" ref="rd2" name="shipping_method[0]" data-index="0" id="shipping_method_0_local_pickup4" value="local_pickup:4" className="shipping_method" /><label style={{cursor:'pointer'}}  for="shipping_method_0_local_pickup4">Local pickup: <span className="Price-amount amount"><span className="Price-currencySymbol">$</span>{parseFloat(this.state.ShippingLocalPickUp).toFixed(2)}</span></label>

                                                                </li>
                                                            </a>
                                                        </ul>
                                            </td>
                                        </tr>
                                        <tr class="order-total">
                                            <th>Total</th>
                                            <td><strong><span class="woocs_special_price_code"><span class="Price-amount amount"><span class="Price-currencySymbol">$</span>{parseFloat(parseFloat(this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)) + parseFloat((this.state.TotalShippingCarge != undefined) ? this.state.TotalShippingCarge.toFixed(2) : 0)).toLocaleString(navigator.language, { minimumFractionDigits: 2 })}    </span></span></strong>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            :
                                <div>No Items found</div>
                            }
                                <div id="payment" class="checkout-payment">
                                    <ul class="payment_methods methods">
                                        <li class="payment_method_paypal">
                                            <input id="payment_method_paypal" type="radio" checked disabled class="input-radio" name="payment_method" value="paypal"
                                            data-order_button_text="Proceed to PayPal"/>

                                            <label for="payment_method_paypal">
                                                PayPal <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal acceptance mark"/> 
                                            </label>
                                        </li>
                                    </ul>
                                    <div class="form-row place-order">


                                        <div class="terms-and-conditions-wrapper">
                                            <div class="privacy-policy-text">
                                                <p>Your personal data will be used to process your order, support your
                                                    experience throughout this website, and for other purposes described in
                                                    our
                                                </p>
                                            </div>
                                            <p class="form-row validate-required ml-5">
                                                <label class="form__label form__label-for-checkbox checkbox">
                                                    <Input checked disabled type="checkbox" class="form__input form__input-checkbox input-checkbox" name="terms" id="terms"/>
                                                    <span class="terms-and-conditions-checkbox-text">I have read
                                                        and agree to the website
                                                        </span>&nbsp;<span class="required">*</span>
                                                </label>
                                                <Input type="hidden" name="terms-field" value="1"/>
                                            </p>
                                        </div>

                                        <button type="submit" class="button alt" name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">
                                         Place Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    </form>
                </Container>
            </div>

        </div>

            )
    }
}
export default CheckOut;
