'use client';
import { Container, Carousel } from 'react-bootstrap';
import 'src/app/globals.css';



export default function Aboutus() {
    return (
        <section className="py-5" style={{
            background: 'linear-gradient(180deg, #F2F3F5 0%, rgba(242, 243, 245, 0) 100%)',
        }}>
            <Container>
                <div className="homepage_aboutUs__jM_b_">
                {/* Header Section */}
                <div className='homepage_aboutUsTitle__prh8N'>
                    <span>
                        What People Say About Us
                    </span>
                </div>
                
                    <div className="homepage_aboutusBg__g5qSo">
                        <div className="homepage_aboutusBgImg___YHno">
                            <Carousel
                                indicators
                                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                            >
                                {/* Slide 1 */}
                                <Carousel.Item>
                                    <div className="homepage_carouselItem__FIe5K">
                                        <div className="homepage_content__Wkqpy">
                                            <img
                                                className="homepage_avatar__DqGKP"
                                                src="/client.svg" // ✅ your image location
                                                alt="Andrew Carroll"
                                            />
                                            <p className="homepage_message__kC4Qe">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris commodo.
                                            </p>
                                            <h5 className="homepage_name__fH43x">Andrew Carroll</h5>
                                            <p className="homepage_role__6eGMh">Business Owner</p>
                                        </div>
                                    </div>
                                </Carousel.Item>

                                {/* Slide 2 */}
                                <Carousel.Item>
                                    <div className="homepage_carouselItem__FIe5K">
                                        <div className="homepage_content__Wkqpy">
                                            <img
                                                className="homepage_avatar__DqGKP"
                                                src="/client.svg" // ✅ your image location
                                                alt="Sophia Davis"
                                            />
                                            <p className="homepage_message__kC4Qe">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation ullamco laboris commodo.
                                            </p>
                                            <h5 className="homepage_name__fH43x">Sophia Davis</h5>
                                            <p className="homepage_role__6eGMh">Product Manager</p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    );
}