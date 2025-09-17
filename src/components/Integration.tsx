'use client';
import { Row, Col, Card } from 'react-bootstrap';
import 'src/app/globals.css';


export default function Integration() {
    return (
        <section>
            <div className="container">
                <div
                    className="px-4"
                    style={{
                        width: '100%',

                        marginBottom: '30px',
                        padding: '20px',
                        textAlign: 'center',
                    }}
                >
                    <h2>
                        <span style={styles.black}> Integration Services</span>
                    </h2>
                    <p style={styles.para}>
                        Seamless integration between Excel, Access, and other business systems.
                    </p>
                </div>
                {/* First Row of Cards */}
                <Row className="justify-content-center">
                    {/* Card 1 */}
                    <Col sm={6} className="d-flex justify-content-center align-items-stretch mb-3 card-col">
                        <Card className="card-responsive" style={{
                            background: 'linear-gradient(216.94deg, #F2F6FF 55.32%, #D2EFFF 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <Card.Body>
                                <Card.Title style={{ color: '#5779FF', fontFamily: 'Montserrat-Bold', fontSize: '20px' }}>For</Card.Title>
                                <Card.Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: '24px',
                                    margin: '8px 0 12px',
                                    color: '#272d36'
                                }}>
                                    Excel & SQL Database Integration
                                </Card.Text>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#59606c',
                                    marginBottom: '20px',
                                    fontFamily: 'Montserrat-Medium'
                                }}>
                                    We connect Excel spreadsheets with SQL Server, MySQL, and other databases for real-time data access and reporting.
                                </p>
                                <div className="mt-3 text-start">
                                    <img src="/database.png" alt="API Integration" className="img-fluid" style={{ maxWidth: '40px', height: '40px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Card 2 */}
                    <Col sm={6} className="d-flex justify-content-center align-items-stretch mb-3 card-col">
                        <Card className="card-responsive" style={{
                            background: 'linear-gradient(216.94deg, #F2F6FF 55.32%, #FFF7E6 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <Card.Body>
                                <Card.Title style={{ color: '#E1A421', fontFamily: 'Montserrat-Bold', fontSize: '20px' }}>For</Card.Title>
                                <Card.Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: '24px',
                                    margin: '8px 0 12px',
                                    color: '#272d36'
                                }}>
                                    MS Access & Cloud Services
                                </Card.Text>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#59606c',
                                    marginBottom: '20px',
                                    fontFamily: 'Montserrat-Medium'
                                }}>
                                    Leverage cloud computing to enhance your MS Access database. Store, access, and manage data securely from anywhere.
                                </p>
                                <div className="mt-3 text-start">
                                    <img src="/cloud.png" alt="Database Connectivity" className="img-fluid" style={{ maxWidth: '40px', height: '40px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-center mt-2">
                    {/* Card 3 */}
                    <Col sm={6} className="d-flex justify-content-center align-items-stretch mb-3 card-col">
                        <Card className="card-responsive" style={{
                            background: 'linear-gradient(216.94deg, #F2F6FF 55.32%, #EBE0E3 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <Card.Body>
                                <Card.Title style={{ color: '#D12835', fontFamily: 'Montserrat-Bold', fontSize: '20px' }}>For</Card.Title>
                                <Card.Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: '24px',
                                    margin: '8px 0 12px',
                                    color: '#272d36'
                                }}>
                                    Excel to Web Applications
                                </Card.Text>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#59606c',
                                    marginBottom: '20px',
                                    fontFamily: 'Montserrat-Medium'
                                }}>
                                    We help businesses transition from complex Excel files to web-based apps for scalability and automation.
                                </p>
                                <div className="mt-3 text-start">
                                    <img src="/webapplication.png" alt="Cloud Services" className="img-fluid" style={{ maxWidth: '40px', height: '40px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Card 4 */}
                    <Col sm={6} className="d-flex justify-content-center align-items-stretch mb-3 card-col">
                        <Card className="card-responsive" style={{
                            background: 'linear-gradient(216.94deg, #F2F6FF 55.32%, #F2FEE4 100%)',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <Card.Body>
                                <Card.Title style={{ color: '#5DB770', fontFamily: 'Montserrat-Bold', fontSize: '20px' }}>For</Card.Title>
                                <Card.Text style={{
                                    fontFamily: 'Montserrat-Bold',
                                    fontSize: '24px',
                                    margin: '8px 0 12px',
                                    color: '#272d36'
                                }}>
                                    API & Third-Party Software Integration
                                </Card.Text>
                                <p style={{
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    color: '#59606c',
                                    marginBottom: '20px',
                                    fontFamily: 'Montserrat-Medium'
                                }}>
                                    We connect your Excel and Access applications with external APIs, ERP, CRM, and accounting software.
                                </p>
                                <div className="mt-3 text-start">
                                    <img src="/api.png" alt="Legacy Systems" className="img-fluid" style={{ maxWidth: '40px', height: '40px' }} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>




                {/* Contact Section */}
                <div className="homepageNeedExcelAuto" style={{
                    boxShadow: '0 5px 20px rgba(43, 54, 74, 0.16)',
                    border: 'none',
                    borderRadius: '22px',
                    margin: '5% 0',
                    padding: '3%',

                }}>
                    <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
                        <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3 mb-md-0">
                            <img
                                src="/callblue.svg"
                                alt="contact icon"
                                width="50"
                                height="50"
                                loading="lazy"
                                decoding="async"
                                style={{ color: 'transparent' }}
                            />
                            <p style={{
                                fontFamily: 'Montserrat-Bold',
                                fontSize: '24px',
                                color: '#272d36',
                                marginLeft: '20px',
                                marginBottom: 0
                            }}>
                                Need Seamless Integration?
                            </p>
                        </div>

                        <div className="d-flex justify-content-md-end justify-content-center">
                            <a className="text-decoration-none" href="contact-us">
                                <button className="btn letsTalkBtn">
                                    Let's Talk
                                    <img
                                        alt="Arrow"
                                        loading="lazy"
                                        width="18"
                                        height="18"
                                        className="ms-2"
                                        style={{ color: 'transparent' }}
                                        src="/arrow.svg"
                                    />
                                </button>
                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

const styles = {
    black: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        lineHeight: '1.2',
        color: 'black',
    },

    para: {
        color: '#59606c',
        fontFamily: 'Montserrat-Medium',
        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
        marginTop: '15px',
    },
};