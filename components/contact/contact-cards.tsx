import React from 'react';
import Container from '../shared/container';

const cards = [
  {
    title: 'WHATSAPP',
    detail: '+23354 272 8856',
  },
  {
    title: 'ADDRESS',
    detail: 'P.O.Box LG 1008, Legon',
  },
  {
    title: 'EMAIL ADDRESS',
    detail: 'info@ssvpofstapgh.org',
  },
  {
    title: 'PHONE NUMBER',
    detail: '+233 26523 2882',
  },
];

function ContactCards() {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-secondary border-6 border-[#AFE0F8] rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col min-h-[180px] sm:min-h-[200px] lg:min-h-[220px] shadow-sm">
              <div className="mb-3 sm:mb-4">
                {/* Message Icon SVG */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-primary sm:w-8 sm:h-8">
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="3"
                    strokeWidth="2"
                  />
                  <path d="M3 7l9 6 9-6" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-base sm:text-lg font-medium text-gray-800 mb-2">
                {card.title}
              </div>
              <hr className="border-blue-100 mb-3 sm:mb-4" />
              <div className="text-sm sm:text-base text-gray-700 font-semibold mt-auto">
                {card.detail}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ContactCards;
