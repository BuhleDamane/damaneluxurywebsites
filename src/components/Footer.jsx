import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4B2E05] text-[#F5F1E9] py-10 px-6 mt-16 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Damane Luxury</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} Damane Luxury Furniture. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
      

        {/* Social Media */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/DamaneLuxury"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#D2B48C] transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.098 2.797.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .592 23.406 0 22.675 0z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/DamaneLuxury"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#D2B48C] transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5a5.75 5.75 0 005.75-5.75v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5a3.75 3.75 0 01-3.75 3.75h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
          </a>

          <a
            href="https://www.twitter.com/DamaneLuxury"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-[#D2B48C] transition-colors"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M23.954 4.57a10 10 0 01-2.825.775 4.93 4.93 0 002.163-2.723 9.9 9.9 0 01-3.127 1.184 4.916 4.916 0 00-8.38 4.482A13.94 13.94 0 011.671 3.149a4.902 4.902 0 001.523 6.56 4.885 4.885 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.934 4.934 0 01-2.224.084 4.919 4.919 0 004.59 3.417 9.868 9.868 0 01-6.102 2.104c-.395 0-.787-.023-1.17-.067a13.951 13.951 0 007.548 2.209c9.056 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
