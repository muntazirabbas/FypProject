/**
 *  Account Page in My Account 
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col,Container,FormGroup,Form,Input,Button } from 'reactstrap';

class MyAccount extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (

<div className="site-content">
        <div className="inner-intro">
            <Container>
                <Row className="intro-title align-items-center">
                    <Col md={6} className="text-left">
                        <div className="intro-title-inner">
                            <h1>My Account</h1>
                        </div>
                    </Col>
                    <Col md={6} className="text-right">
                        <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                            <li className="home">
                                <span>
                                    <Link className="bread-link bread-home" to="/">Home</Link>Math.floor(Math.random() * 10)
                                </span>
                            </li>
                            <li><span>My Account</span></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="content-wrapper pt-9 pb-9">
            <Container>
                <Row className="align-content-stretch flex-wrap">
                    <Col lg={6}>
                        <div className="woocommerce-MyAccount-navigation">
                            <h2>Login</h2>

                            <Form className="login form">
                                <FormGroup>
                                    <label for="username">Username or email address&nbsp;<span className="required">*</span></label>
                                    <Input type="text" className="form-control" name="username" id="username" autocomplete="username" value=""/>
                                </FormGroup>
                                <FormGroup>
                                    <label for="password">Password&nbsp;<span className="required">*</span></label>
                                    <Input className="form-control" type="password" name="password" id="password" autocomplete="current-password"/>
                                </FormGroup>

                                <div className="form-row">
                                    <Input type="hidden"/><Input type="hidden"/>
                                    <Button type="button" className="button" name="login" value="Log in">Log
                                        in</Button>
                                    <label className="remember">
                                        <Input name="rememberme" type="checkbox" id="rememberme" value="forever"/>
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <div className="lost_password">
                                    <Link to="#">Lost your password?</Link>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0">
                        <div className="my-account">

                            <h2>Register</h2>

                            <Form className="register form">

                                <div className="registration-info">
                                    Registering for this site allows you to access your order status and history. Just
                                    fill in the fields below, and we will get a new account set up for you in no time.
                                    We will only ask you for information necessary to make the purchase process faster
                                    and easier. </div>


                                <FormGroup>
                                    <label for="reg_email">Email address&nbsp;<span className="required">*</span></label>
                                    <Input type="email" className="form-control" name="email" id="reg_email" autocomplete="email" value=""/>
                                </FormGroup>


                                <div className="privacy-policy-text">
                                    <p>Your personal data will be used to support your experience throughout this
                                        website, to manage access to your account, and for other purposes described in
                                        our <Link to="#" className="privacy-policy-link" target="_blank">privacy policy</Link>
                                    </p>
                                </div>
                                <div className="woocommerce-FormRow form-row">
                                   <Button type="button" className="button" name="register">Register</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
        )
    }
}
export default MyAccount;
