  'use client';

  import { Container } from 'react-bootstrap';
  import 'src/app/globals.css';

  export default function FrequentlyAsked() {
    const faqItems = [
      {
        question: "Do you work with businesses of all sizes ?",
        answer: "Yes, we work with startups, SMEs, and large enterprises."
      },
      {
        question: "How much do your services cost ?",
        answer: "Pricing depends on the scope and requirements of the project."
      },
      {
        question: "How long does it take to complete a project ?",
        answer: "Project duration varies; simple projects may take days, complex ones a few weeks."
      },
      {
        question: "How can I get started?",
        answer: "Just contact us via the website or email and we’ll guide you through the process."
      },
      {
        question: "Do you provide ongoing support ?",
        answer: "Absolutely. We offer maintenance and long-term support packages."
      },
      {
        question: "Can you upgrade existing Excel or Access solutions ?",
        answer: "Yes, we modernize legacy Excel or Access tools to newer technologies."
      },
    ];

    return (
      <section className="homepage_faq__aY_Gr" id="faq">
        <Container>
          {/* Title */}
          <div className="homepage_faqTitle__dV8F8">
            <span>Frequently Asked Questions</span>
            <p>Find answer to common questions about our services</p>
          </div>

          {/* Native Accordion */}
          <div className="homepage_accordion__xbk8O accordion" id="faqAccordion">
            {faqItems.map((item, index) => {
              const headingId = `faqHeading-${index}`;
              const collapseId = `faqCollapse-${index}`;
              return (
                <div className="homepage_accordion_space__a7pqT accordion-item" key={index}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                      aria-expanded="false"
                      aria-controls={collapseId}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={collapseId}
                    className="accordion-collapse collapse"
                    aria-labelledby={headingId}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    );
  }
