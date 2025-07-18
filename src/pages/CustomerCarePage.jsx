import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';

const faqData = [
  {
    question: 'Do you offer custom furniture?',
    answer:
      'Yes! We specialize in bespoke pieces tailored specifically to your taste and requirements. Contact our design team for a consultation.',
  },
  {
    question: 'Where are you based?',
    answer:
      'We are proudly based in South Africa, operating nationwide with reliable shipping to all provinces.',
  },
  {
    question: 'What materials do you use?',
    answer:
      'Our furniture is crafted from premium hardwoods, complemented by soft velvet upholstery and ethically sourced finishes to ensure durability and elegance.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Typical delivery is within 5 to 7 business days, with secure packaging and insurance for your peace of mind.',
  },
  {
    question: 'What is your returns policy?',
    answer:
      'If you are not satisfied, returns are accepted within 14 days of delivery. Items must be in original condition and packaging to qualify for a full refund or exchange.',
  },
];

const CustomerCarePage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-20 font-serif text-[#8B4513] space-y-32">
        {/* Delivery Section */}
        <section
          id="delivery"
          className="fade-slide-in"
          style={{ animationDelay: '0.1s' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center tracking-wide">
            Delivery
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center">
            At Damane Luxury, we prioritize delivering your exquisite furniture safely and on time. We offer reliable nationwide delivery within 5–7 business days. Every piece is carefully packaged, insured, and tracked, so you can shop with confidence and enjoy a seamless experience from our workshop to your doorstep.
          </p>
        </section>

        {/* Returns Section */}
        <section
          id="returns"
          className="fade-slide-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center tracking-wide">
            Returns & Exchanges
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center">
            Your satisfaction is our commitment. If you are not completely happy with your purchase, you may return it within 14 days in its original condition and packaging for a full refund or exchange. Our customer service team is ready to assist you throughout the process with care and professionalism.
          </p>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="fade-slide-in"
          style={{ animationDelay: '0.5s' }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center tracking-wide">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map(({ question, answer }, index) => (
              <div
                key={index}
                className="border border-[#D2B48C] rounded-md shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#8B4513] hover:bg-[#F7E7CE]"
                  aria-expanded={expandedIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      expandedIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`px-6 pb-6 text-base leading-relaxed transition-max-height duration-500 ease-in-out overflow-hidden ${
                    expandedIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .fade-slide-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeSlideIn 0.6s forwards;
        }
        @keyframes fadeSlideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .transition-max-height {
          transition-property: max-height;
        }
      `}</style>
    </>
  );
};

export default CustomerCarePage;
