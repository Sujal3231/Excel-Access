'use client';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './Access.module.css';

export default function Access() {
  const [activeTab, setActiveTab] = useState<number | null>(1);

  const cardData = [
    {
      id: 1,
      title: 'Database Design & Development',
      image: '/1b.svg',
      hoverImage: '/1.png',
      description: 'We design structured, scalable, and user-friendly MS Access databases tailored to your business processes.'
    },
    {
      id: 2,
      title: 'Migration & Upgrades',
      image: '/2.png',
      hoverImage: '/2r.svg',
      description: 'We migrate your outdated systems to modern MS Access versions with seamless data transfer.'
    },
    {
      id: 3,
      title: 'Performance Optimization',
      image: '/3.png',
      hoverImage: '/3r.svg',
      description: 'We enhance database performance through query optimization and efficient design.'
    },
    {
      id: 4,
      title: 'Multi-User Access & Security',
      image: '/4.png',
      hoverImage: '/4r.svg',
      description: 'We implement secure multi-user access with proper permissions and data protection.'
    },
    {
      id: 5,
      title: 'Custom Forms & Reports',
      image: '/5.png',
      hoverImage: '/5r.svg',
      description: 'We create intuitive forms and comprehensive reports tailored to your business needs.'
    }
  ];

  return (
    <div className={styles.homepage_devServices__UoLoq} id="services">
      <Container>
        <div className={`text-center ${styles.homepage_developmentServicesTitle__Gk769}`}>
          <h3>MS Access <span>Development Services</span></h3>
          <p>
            We design and optimize scalable databases, migrate outdated systems, enhance performance,
            secure multi-user access, and create custom forms and reports to streamline business operations.
          </p>
        </div>

        <div className={`${styles.homepage_servicesTabs__ESiSQ}`}>
          {cardData.map((card) => (
            <div key={card.id}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveTab(activeTab === card.id ? null : card.id)}

                className={`
                  ${styles.homepage_tab__aTH3v} 
                  ${activeTab === card.id ? styles.homepage_active__1nRmJ : ''}
                `}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center justify-content-around mb-3 mb-lg-0">
                  <div className={`${styles.homepage_imageWrapper__V0xf7}`}>
                    <img
                      alt={card.title}
                      loading="lazy"
                      width="60"
                      height="60"
                      className={styles.homepage_iconImage__uWoYU}
                      src={activeTab === card.id ? card.hoverImage : card.image}
                    />
                  </div>
                  <span
                    className="ps-3"
                    style={{
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: '1.4',
                      color: activeTab === card.id ? '#B02739' : '#000',
                      textAlign: 'left'
                    }}
                  >
                    {card.title}
                  </span>
                </div>

                {activeTab === card.id && (
                  <div
                    className="Card1 d-md-none mt-3"
                    style={{
                      backgroundColor: '#333a45',
                      borderRadius: '20px',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <div className={`${styles.homepage_tabsDetailsSection__mobile} pt-3`}>
                      <div className={`${styles.homepage_textContent__mobile} px-3`}>
                        <h5>{card.title}</h5>
                        <p>{card.description}</p>
                      </div>
                      <div className="mt-3">
                        <img
                          alt={card.title}
                          src="/access-database-image.svg"
                          className="img-fluid"
                          style={{ borderRadius: '8px' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View (Always Visible) */}
        <div className={`d-none d-md-block ${styles.homepage_tabsDetailsSection__9JhuM}`}>
          <section className={styles.homepage_section}>
            <div className={styles.homepage_contentWrapper}>
              <div className={styles.homepage_textContent}>
                <h2>{cardData.find(card => card.id === activeTab)?.title || cardData[0].title}</h2>
                <p>{cardData.find(card => card.id === activeTab)?.description || cardData[0].description}</p>
              </div>
              <div className={styles.homepage_imageWrapper}>
                <img
                  alt={cardData.find(card => card.id === activeTab)?.title || cardData[0].title}
                  src="/access-database-image.svg"
                  className={styles.homepage_image}
                />
              </div>
            </div>
          </section>
        </div>


        {/* CTA Section */}
        <div className="homepageNeedExcelAuto">
          <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-3 mb-md-0">
              <img
                src="/call2.jpg"
                alt="contact icon"
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
                style={{ color: 'transparent' }}
              />
              <p
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: '24px',
                  color: '#272d36',
                  marginLeft: '20px',
                  marginBottom: 0
                }}
              >
                Need an Access Data?
              </p>
            </div>

            <a className="text-decoration-none" href="contact-us">
              <button className={`btn ${styles['lets-talk-btn']}`}>
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
      </Container>
    </div>
  );
}
