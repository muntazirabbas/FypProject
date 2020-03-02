/**
 *  CommingSoon Page
 */
import React, { Component } from 'react';
import pyamentimg from '../../assets/images/payments.png';
import { Link } from 'react-router-dom';
import { Row, Col,Container } from 'reactstrap';
import CommingSoonCounter from '../../widgets/CommingSoonCounter';
import CommingSoonimg from '../../assets/images/comingsoon.png';


class ComingSoon extends Component {

    constructor(props){
        super(props)
    }

     componentDidMount() {
        window.scrollTo(0, 0)

     }

    render() {
        return (
            <body>
                <div className="coming-soon">
                    <div className="site-content">
                        <div className="content-wrapper">
                            <Container>
                            <Row className="align-items-center justify-content-center">
                            <Col md={11} lg={7} className="text-center">
                            <div className="mntc-cs-item mntc-cs-content pb-0">
                                <h1 className="text-blue">Coming soon</h1>
                                <p>We are currently working on a website and won't take long. Don't forget to check out our Social updates.</p>
                            </div>
                            <img src={CommingSoonimg} title="CommingSoon" alt="CommingSoon" />
                            <div className="mntc-cs-item mntc-cs-content coming-soon-countdown p-0">
                                <CommingSoonCounter time={'100150'}></CommingSoonCounter>
                            </div>
                            <div className="coming-soon-social">
                                <ul>
                                    <li><a href="#"> <i className="fa fa-facebook"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-linkedin"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-google"></i> </a></li>
                                    <li><a href="#"> <i className="fa fa-instagram"></i> </a></li>
                                </ul>
                            </div>
                            </Col>
                            </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default ComingSoon;
