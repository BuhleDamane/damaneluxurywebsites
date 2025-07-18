import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white font-serif">
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg"
            style={{ color: '#D2B48C' }}
          >
            Elevate Your Living Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md text-white">
            Discover handcrafted luxury furniture designed to transform your home into a masterpiece of comfort and style.
          </p>
          <Link
            to="/collections"
            className="inline-block bg-[#D2B48C] hover:bg-[#b8976a] text-[#4B2E05] font-semibold py-3 px-8 rounded shadow-lg transition-colors duration-300"
          >
            Explore Collections
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
