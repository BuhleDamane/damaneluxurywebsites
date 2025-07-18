import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 max-w-7xl mx-auto text-[#4B2E05] font-serif"
    >
      <h2 className="text-4xl font-semibold mb-6 text-center">Get in Touch</h2>
      <p className="text-center mb-12 max-w-xl mx-auto text-lg leading-relaxed">
        Whether you have questions about our luxurious furniture collections, custom orders,
        or anything else, we’re here to help. Reach out and we’ll get back to you promptly.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-12">
        {/* Contact Info */}
        <div className="md:w-1/3 mb-12 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
          <p className="mb-3">📍 123 Elegance Blvd, Johannesburg, South Africa</p>
          <p className="mb-3">📞 +27 11 234 5678</p>
          <p className="mb-3">✉️ info@damaneluxury.co.za</p>
          <p className="italic text-sm text-gray-600">
            Office Hours: Mon – Fri, 9:00 AM – 6:00 PM
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 bg-[#f9f6f1] p-8 rounded-lg shadow-md"
          noValidate
        >
          {submitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
              Thank you for reaching out! We will respond shortly.
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full border border-[#8B4513] rounded px-4 py-2 text-[#4B2E05] focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-[#8B4513] rounded px-4 py-2 text-[#4B2E05] focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              className="w-full border border-[#8B4513] rounded px-4 py-3 text-[#4B2E05] resize-none focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#8B4513] text-white px-6 py-3 rounded font-semibold hover:bg-[#5A2A00] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
