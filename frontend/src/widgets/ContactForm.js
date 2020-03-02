/**
 * Contact Form
 */
import React , {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Form,  Input } from 'reactstrap';


function ContactForm() {

    return (
        <div className="contact-wrapper bg-gray w-100">
            <div className="section-title">
                <h2 className="title text-left">Send Us Message</h2>
                <p>Proin gravida nibh vel velit auctor aliquet aenean sollicitudin lorem quis
                bibendum auctor.</p>
                </div>
                <Form>
                    <Row>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Name" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Email Address" />
                        </div>
                        </Col>
                        <Col lg={4}>
                        <div className="form-group">
                            <Input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        </Col>
                        <Col md={12}>
                        <div className="form-group">
                            <textarea name="your-message" cols={30} rows={4} className="form-control" placeholder="Please Write Your Text Here" defaultValue={""} />
                        </div>
                        </Col>
                        <Col md={12} >
                        <Input type="button" defaultValue="Send Message" className="btn btn-default" />
                        </Col>
                    </Row>
                </Form>
            </div>
           )

}

export default ContactForm;
