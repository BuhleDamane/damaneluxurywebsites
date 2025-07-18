import React, { useState } from 'react';
import Footer from '../components/Footer'; 

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for reaching out. We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-20 font-serif text-[#8B4513]">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <p className="mb-10 text-center text-gray-700">
          Have questions or want to learn more about our collections? Reach out to us — we'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#8B4513] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#8B4513] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#8B4513] rounded px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#8B4513] text-white px-6 py-3 rounded hover:bg-[#6B3812] transition"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center text-green-600 font-semibold">{status}</p>
          )}
        </form>
      </main>

      <Footer /> 
    </>
  );
};

export default ContactPage;
