'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'src/app/globals.css';

export default function Hero1() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage_heroSection__EOtia" id="home">
      <div className="row">

        {/* LEFT: Carousel */}
        <div className="d-flex justify-content-center align-items-start order-2 order-xl-1 col-xl-5 col-lg-12">
          <div className="herosectionCarousal">
            <div className="w-100 carousel slide">

              {/* Indicators */}
              <div className="carousel-indicators">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target=""
                    aria-label={`Slide ${i + 1}`}
                    aria-current={activeIndex === i ? "true" : "false"}
                    className={activeIndex === i ? "active" : ""}
                    onClick={() => setActiveIndex(i)}
                  ></button>
                ))}
              </div>

              {/* Slides */}
              <div className="carousel-inner">

                {/* Slide 1 */}
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <div className="homepage_heroText__40tCR">
                    <p>
                      Expert <span>MS Excel</span>{' '}
                      <span className="homepage_blackText__X4YEE">&amp;</span>{' '}
                      <span className="homepage_redText__87U8u">MS Access</span> Solutions for Your Business
                    </p>
                    <h2>
                      We streamline your workflows with powerful automation, database solutions, and custom development.
                    </h2>
                    <div className="mt-5">
                      <a className="text-decoration-none" href="contact-us">
                        <button
                          type="button"
                          className="homepage_heroButton__ZS1gS btn btn-primary"
                        >
                          Get a Free Consultation
                          <img
                            alt="Arrow"
                            loading="lazy"
                            width="18"
                            height="18"
                            decoding="async"
                            data-nimg="1"
                            className="ms-2"
                            style={{ color: 'transparent' }}
                            src="/arrow.svg"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <div className="homepage_heroText__40tCR">
                    <p>
                      Struggling with <span>Excel</span>{' '}
                      <span className="homepage_blackText__X4YEE">&amp;</span>{' '}
                      <span className="homepage_redText__87U8u">Access? </span>We Fix It!
                    </p>
                    <h2>
                      From slow spreadsheets to unorganized databases, we transform your systems into high-performance solutions.
                    </h2>
                    <div className="mt-5">
                      <a className="text-decoration-none" href="contact-us">
                        <button
                          type="button"
                          className="homepage_heroButton__ZS1gS btn btn-primary"
                        >
                          Let’s Optimize Your Workflow
                          <img
                            alt="Arrow"
                            loading="lazy"
                            width="18"
                            height="18"
                            decoding="async"
                            data-nimg="1"
                            className="ms-2"
                            style={{ color: 'transparent' }}
                            src="/arrow.svg"
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                  <div className="homepage_heroText__40tCR">
                    <p>
                      Save Hours Every Week with Custom <span>Excel</span>{' '}
                      <span className="homepage_blackText__X4YEE">&amp;</span>{' '}
                      <span className="homepage_redText__87U8u">Access </span>Solutions!
                    </p>
                    <h2>
                      Automate tasks, build smarter databases, and boost productivity with our expert development services.
                    </h2>
                    <div className="mt-5">
                      <a className="text-decoration-none" href="contact-us">
                        <button
                          type="button"
                          className="homepage_heroButton__ZS1gS btn btn-primary"
                        >
                          Book a Free Strategy Call
                          <img
                            alt="Arrow"
                            loading="lazy"
                            width="18"
                            height="18"
                            decoding="async"
                            data-nimg="1"
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

            </div>
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div className="Heroclassimg d-flex align-items-center justify-content-center order-1 order-xl-2 col-xl-7 col-lg-12">
          <Image
            src="/hero1.png"
            alt="Hero Image"
            width={1000}
            height={940}
            className="img-fluid"
            style={{ color: 'transparent' }}
          />
        </div>

      </div>
    </div>
  );
}
