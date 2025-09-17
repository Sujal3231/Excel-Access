'use client';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'src/app/globals.css';

export default function Contactus() {
    return (
        <section className="homepage_contactUs__xCSiR py-3 py-md-5" style={{
            background: 'linear-gradient(180deg, #F2F3F5 0%, rgba(242, 243, 245, 0) 100%)'
        }}>
            <Container>
                {/* Header */}
                <div className="homepage_contactUsTitle__arfnN text-center" style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <span>
                        Contact Us
                    </span>
                    <p 
                    >
                        Ready to optimize your business processes? Get in touch with us today.
                    </p>
                </div>

                {/* Content */}
                <Row className="align-items-center mt-5">
                    {/* Form */}
                    <Col md={5} className="homepage_formCol__C8pyZ">
                        <div className="homepage_formWrapper__Dxvzo">
                            <Form noValidate>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name" className="homepage_formLabel__3QSr8">
                                        Full Name <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control id="name" placeholder="John Doe" type="text" name="yourname" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="email" className="homepage_formLabel__3QSr8">
                                        Email Address <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control id="email" placeholder="john@example.com" type="email" name="youremail" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="phone" className="homepage_formLabel__3QSr8">
                                        Phone Number <span className="text-danger">*</span>
                                    </Form.Label>
                                    <Form.Control id="phone" placeholder="(123) 456-7890" type="tel" name="yourphone" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label htmlFor="message" className="homepage_formLabel__3QSr8">
                                        Message
                                    </Form.Label>
                                    <Form.Control id="message" as="textarea" rows={4} placeholder="Tell us about your project..." name="yourmessage" />
                                </Form.Group>

                                <Button type="submit" className="homepage_submitBtn__ocroJ btn btn-primary w-100">Send Message</Button>
                            </Form>
                        </div>
                    </Col>

                    {/* Info */}
                    <Col md={7} className="homepage_infoCol__zER9x mt-md-0">
                        <div className="homepage_infoWrapper__uLAC_">
                            <h5>Contact Information</h5>
                            <div className="d-flex mb-3 homepage_contactinfo__Z0tNG mt-5">
                                <div className="d-flex pe-md-5">
                                    <img src="/contact.svg" alt="Phone" width={50} height={50} className="me-3" />
                                    <div className='mb-2'>
                                        <p className="mb-0">Phone</p>
                                        <span>(123) 456-7890</span>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="/mail.svg" alt="Mail" width={50} height={50} className="me-3" />
                                    <div className='mb-2'>
                                        <p className="mb-0">Email</p>
                                        <span>info@example.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex">
                                <img src="/location.svg" alt="Location" width={50} height={50} className="me-3" />
                                <div>
                                    <p className="mb-0">Office</p>
                                    <span>Forem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>

                            {/* Image with overlay */}
                            <div className="homepage_imageWrapper__V0xf7">
                                <div className="homepage_overlay__qHURf"></div>
                                <img src="/contact2.svg" alt="Contact" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
