/**
 *  Address Dislay
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';

class Address extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
  }
  render() {
    const BillingAddress=Common['0']['billingaddress'];
    const ShippingAddress=Common['0']['shippingaddress'];
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
                <Col md={6}>
                  <div className="woocommerce-Address">
                    <div className="woocommerce-Address-title">
                      <h5 class="mb-0">Billing address</h5>
                      <Link className="edit" to="/Account/Addressedit">Edit</Link>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                      <ul class="list-unstyled mb-0">
                        <li><strong>{BillingAddress.billingname}</strong></li>
                        <li><strong>{BillingAddress.address}</strong></li>
                        <li><strong>{BillingAddress.streetno}</strong></li>
                        <li><strong>{BillingAddress.state}</strong></li>
                        <li><strong>{BillingAddress.country} {BillingAddress.zipcode}</strong></li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                  <div className="woocommerce-Address">
                    <div className="woocommerce-Address-title">
                      <h5 className="mb-0">Shipping address</h5>
                      <Link className="edit" to="/Account/Addressedit">Edit</Link>
                    </div>
                    <div className="woocommerce-Address-info mt-4">
                      <ul class="list-unstyled mb-0">
                        <li><strong>{ShippingAddress.shippingname}</strong></li>
                        <li><strong>{ShippingAddress.address}</strong></li>
                        <li><strong>{ShippingAddress.streetno}</strong></li>
                        <li><strong>{ShippingAddress.state}</strong></li>
                        <li><strong>{ShippingAddress.country} {ShippingAddress.zipcode}</strong></li>
                      </ul>
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
export default Address;
