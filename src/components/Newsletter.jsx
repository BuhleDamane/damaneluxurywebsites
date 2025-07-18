import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="bg-[#f9f6f0] py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8B4513] mb-4">
        Join Our Exclusive Mailing List
      </h2>
      <p className="max-w-xl mx-auto mb-8 text-[#5A432E] font-medium">
        Get inspired by timeless luxury furniture and be the first to receive updates, special offers, and design tips.
      </p>

      {submitted ? (
        <p className="text-green-700 font-semibold text-lg">
          Thank you for subscribing to Damane Luxury!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 border border-[#8B4513] rounded-md px-4 py-3 text-[#5A432E] placeholder-[#b79967] focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition"
            required
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-[#8B4513] hover:bg-[#a25c1a] text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
      )}

      {error && <p className="mt-3 text-red-600 font-medium">{error}</p>}
    </section>
  );
};

export default Newsletter;
