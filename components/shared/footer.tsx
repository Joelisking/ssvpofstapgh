import React from 'react';

function Footer() {
  return (
    <footer className="px-12 flex items-start justify-between gap-24 mt-16">
      <p className="text-gray-500 text-sm w-1/2">
        Solara FXAI is a cutting-edge, AI-driven forex trading
        platform designed to empower institutions with advanced
        trading strategies, automated execution, and robust risk
        management. Leveraging sophisticated Long Short-Term Memory
        (LSTM) models and multi-layered signal filtering, Solara FXAI
        delivers accurate, data-driven trading signals, enabling
        institutions to navigate the complexities of the forex market
        with confidence. Our platform integrates seamless broker API
        connectivity, dynamic risk management, and comprehensive
        portfolio tracking, ensuring optimal performance and
        transparency.
      </p>
      <p className="text-gray-500 text-sm w-1/2">
        Driven Trading Signals: Predictive insights powered by
        advanced machine learning.
        <br />
        Emotion-free, 24/5 trade execution via secure broker
        integrations. <br />
        Stop-loss orders and position sizing tailored to market
        volatility. <br />
        Tailored solutions for hedge funds, asset managers, and
        proprietary trading desks.
      </p>
    </footer>
  );
}

export default Footer;
