'use client';

import 'src/app/globals.css';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Hero2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="homepage_excelDevelopment__a9kFY">
      <div className="container">
        {/* Title & description */}
        <div className="homepage_excelDevelopmentTitle___kHEp text-center">
          <h3>MS Excel <span>Development</span></h3>
          <p>
            We provide expert MS Excel & MS Access Development services tailored to your business needs.
            Whether you need automation, database optimization, or system integration, we have the expertise
            to deliver efficient, scalable solutions.
          </p>
        </div>

        {/* Feature rows + image */}
        <div className="mt-5 me-3">
          <div className="row1">
            {/* Left: Feature list */}
            <div className="homepage_featuresList__cxb_z col-xl-7 col-lg-12 col-md-12">
              <div>
                {[
                  {
                    icon: "/Customexcel.svg",
                    iconHover: "/ex1.svg",
                    title: "Custom Excel Automation & Macros",
                    desc: "We develop VBA macros and custom scripts to automate repetitive tasks, saving you hours of manual work."
                  },
                  {
                    icon: "/advanceb.svg",
                    iconHover: "/advance.svg",
                    title: "Advanced Formulas & Functions",
                    desc: "We create dynamic Excel formulas, array functions, and Power Query solutions to enhance data processing."
                  },
                  {
                    icon: "/Interactiveb.svg",
                    iconHover: "/Interactive.svg",
                    title: "Interactive Dashboards & Reports",
                    desc: "We build professional, real-time dashboards with charts, pivot tables, and visual analytics to help you make informed decisions."
                  },
                  {
                    icon: "/datacleanb.svg",
                    iconHover: "/dataclean.svg",
                    title: "Data Cleaning & Transformation",
                    desc: "We automate data extraction, validation, and transformation to ensure accuracy and consistency in your reports."
                  },
                  {
                    icon: "/databaseb.svg",
                    iconHover: "/database.svg",
                    title: "Excel-to-Database Solutions",
                    desc: "We connect Excel with databases like SQL Server, MySQL, and cloud storage, enabling seamless data integration."
                  },
                ].map((item, index) => (
                  <div key={index} className="homepage_featureRow__uOrSf py-4 align-items-center row"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="d-flex justify-content-center col-md-2 col-12">
                      <div className="homepage_iconWrapper__wZBao">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="40"
                          height="40"
                          decoding="async"
                          src={hoveredIndex === index ? item.iconHover : item.icon}
                          style={{ color: 'transparent' }}
                        />
                      </div>
                    </div>
                    <div className="ps-3 text-center text-md-start pt-3 pt-md-0 col-md-10 col-12">
                      <h5 className="homepage_featureTitle__ufKqO">{item.title}</h5>
                      <p className="homepage_featureDesc__j1mLc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image container */}
            <div className="d-flex align-items-center justify-content-center col-xl-5 col-lg-12 col-md-12">
              <div className="homepage_developmentImg__IBd2O">
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="homepage_needExcelAuto__AYhrI mt-5">
          <div className="d-flex justify-content-between align-items-center row">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start col-lg-6 col-md-12 mb-3 mb-lg-0">
              <img
                alt="contact icon"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                style={{ color: 'transparent' }}
                src="/call.svg"
              />
              <p className="mb-0 ms-3" style={{ fontSize: '24px', fontFamily: 'Montserrat-Bold', color: '#272d36' }}>
                Need Excel Automation?
              </p>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-end col-lg-6 col-md-12">
              <a className="text-decoration-none" href="contact-us">
                <button type="button" className="homepage_contactButton___D73E btn btn-primary">
                  Get a Free Consultation
                  <img
                    alt="Arrow"
                    loading="lazy"
                    width="18"
                    height="18"
                    decoding="async"
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
  );
}
