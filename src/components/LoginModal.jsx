import React, { useState, useEffect, useRef } from 'react';

const LoginModal = ({ show, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (show) {
      setUsername('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close login modal"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
        >
          &times;
        </button>
        <h2 className="text-2xl font-serif font-semibold mb-6 text-[#8B4513] text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-2 block">Username</span>
            <input
              type="text"
              ref={inputRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-[#8B4513] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              placeholder="Enter your username"
              required
              autoComplete="username"
            />
          </label>
          <button
            type="submit"
            className="w-full bg-[#D2B48C] hover:bg-[#b8976a] text-[#4B2E05] font-semibold py-3 rounded transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
