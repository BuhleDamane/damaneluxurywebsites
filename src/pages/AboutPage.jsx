import React from 'react';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/products/about two.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative z-10 text-5xl font-bold font-serif animate-fadeInDown text-[#D2B48C]">
          The Essence of Damane Luxury
        </h1>
      </section>

      {/* Main About Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 text-[#5A3A1E] font-serif space-y-14">
        <section className="text-center animate-fadeIn">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            At <span className="italic font-semibold">Damane Luxury</span>, we believe luxury isn’t loud—it’s intentional.
            Our passion lies in creating refined, soulful furniture that transforms a house into a haven.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn delay-200">
          <img
            src="/images/products/about hero.jpg"
            alt="Elegant Velvet Armchair"
            className="rounded-lg shadow-lg w-full object-cover h-[400px]"
          />
          <p className="text-lg leading-relaxed">
            Every piece we design is a tribute to timeless style and artisan craftsmanship. With premium fabrics, sustainably sourced wood,
            and hand-finished details, our furniture is made to elevate your home and last for decades.
          </p>
        </section>

        <section className="text-center animate-fadeIn delay-300">
          <h2 className="text-2xl font-semibold mb-4 text-[#8B4513]">Crafted With Care, Designed for Life</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            From hand-stitched finishes to natural materials, Damane Luxury embraces slow design and purposeful living.
            Experience what it means to surround yourself with elegance that feels like home.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
