import React from 'react';

const LuxuryStyles = () => (
  <style>{`
    /* Elegant luxury gradient background */
    .luxury-gradient {
      background: linear-gradient(135deg, #8B4513 0%, #D2B48C 50%, #F5F1E6 100%);
      min-height: 100vh;
      color: #4B2E05;
      font-family: 'Playfair Display', serif;
    }

    /* Smooth button hover */
    button {
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Links styling */
    a {
      color: #8B4513;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #D2B48C;
    }

    /* Scrollbar style for luxury feel */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #F5F1E6;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #8B4513;
      border-radius: 4px;
      border: 2px solid #F5F1E6;
    }

    /* Headings */
    h1, h2, h3, h4, h5, h6 {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      color: #4B2E05;
    }

    /* Paragraphs */
    p {
      font-family: 'Lora', serif;
      color: #5A432E;
      line-height: 1.6;
    }

    /* Input focus */
    input:focus, textarea:focus, select:focus {
      outline: none;
      box-shadow: 0 0 5px 2px #D2B48C;
      border-color: #D2B48C;
    }
  `}</style>
);

export default LuxuryStyles;
