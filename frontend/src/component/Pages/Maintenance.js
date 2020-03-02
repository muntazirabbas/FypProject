/**
 *  Maintenance Page
 */
import React, { Component } from 'react';
import pyamentimg from '../../assets/images/payments.png';
import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import maintenanceimg from '../../assets/images/maintenance.png';


class Maintenance extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render() {
        return (
            <div className="maintenance">
                    <div className="site-content">
                        <div className="content-wrapper">
                            <Container>
                                <Row className="align-items-center justify-content-center">
                                        <Col md={11} lg={7} className="text-center">
                                        <div className="mntc-cs-item mntc-cs-content text-center">
                                            <h1>Site is Under Maintenance</h1>
                                            <p>This Site is Currently Under Maintenance. We will back shortly</p>
                                            <img className="mb-2 mt-3" src={maintenanceimg} title="maintenance" alt="maintenance" />
                                            <p className="mt-4 mt-md-5">We apologize for the inconvenience, we” re doing out best to get things back to working order for you.</p>
                                            <div className="coming-soon-social">
                                                <ul>
                                                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                                    <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                                    <li><a href="#"> <i className="fa fa-google"></i> </a></li>
                                                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default Maintenance;
