/**
 *  Account Page Save Cards
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';

class SavedCards extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
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
                      <div className="woocommerce-Address-info py-5">
                          <h3>{CartDetail.cardname}</h3>
                          <h5>{CartDetail.cardno}</h5>
                          <Link className="edit" to="/Account/SavedCardsedit">Edit</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                 <Row className="mt-4">
                    <Col lg={6}>
                      <Link className="add-new-card" to="/Account/SavedCardsadd">Add new card</Link>
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
