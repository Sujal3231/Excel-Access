'use client';

import { Container } from 'react-bootstrap';
import 'src/app/globals.css'; // adjust if needed

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Expert Developers',
      description: '10+ years of experience in MS Excel & Access development',
      icon: '/developer.svg'
    },
    {
      title: 'Time-Saving Automations',
      description: 'Reduce manual work & increase efficiency',
      icon: '/automation.svg'
    },
    {
      title: 'Scalable & Secure',
      description: 'Optimized solutions for long-term use',
      icon: '/secure.svg'
    },
    {
      title: 'Custom Solution',
      description: 'Tailored to your business workflows',
      icon: '/solution.svg'
    },
    {
      title: 'Ongoing Support',
      description: 'We provide post-development support & enhancements',
      icon: '/support.svg'
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations',
      icon: '/result.svg'
    }
  ];

  return (
    <div className="homepage_whyChooseUs__8dRZa" id="why-us">
      <Container>
        {/* Title */}
        <div className="homepage_whyChooseUsTitle__mHVTJ ">
          <span>Why Choose Us</span>
          <p>We deliver excellence through expertise, innovation, and dedication to your success</p>
        </div>

        {/* Benefits Cards */}
        <section className="homepage_benefitsSection__SXMM3">
          <div className="homepage_grid__Crecm">
            {features.map((feature, index) => (
              <div key={index} className="homepage_card__3RHez">
                <div
                  className="homepage_iconBox__sBTfF mb-3"
                  style={{
                    background:
                      index % 2 === 0
                        ? 'linear-gradient(rgb(117, 212, 169) 0%, rgb(2, 116, 64) 100%)'
                        : 'linear-gradient(rgb(242, 120, 136) 0%, rgb(176, 39, 57) 100%)'
                  }}
                >
                  <img
                    alt={feature.title}
                    loading="lazy"
                    width="35"
                    height="35"
                    decoding="async"
                    src={feature.icon}
                    style={{ color: 'transparent' }}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
