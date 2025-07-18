import React, { useState, useRef, useEffect } from 'react';

const LoginModal = ({ show, onClose, onLogin }) => {
  const [mode, setMode] = useState('login'); // login or register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  // Demo accounts
  const mockUsers = [
    { email: 'admin@example.com', password: 'admin123' },
    { email: 'user@example.com', password: 'user123' },
    { email: 'demo@example.com', password: 'demo123' }
  ];

  useEffect(() => {
    if (show) {
      setEmail('');
      setPassword('');
      setTimeout(() => inputRef.current?.focus(), 100);
      alert(
        'Demo credentials:\n\n' +
        '1. admin@example.com / admin123\n' +
        '2. user@example.com / user123\n' +
        '3. demo@example.com / demo123'
      );
    }
  }, [show]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const match = mockUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (match) {
      alert(mode === 'login' ? 'Login successful!' : 'Signup successful!');
      onLogin(email);  // Pass email to parent as logged in user
      onClose();
    } else {
      alert(
        'Invalid credentials. Please use:\n' +
        '- admin@example.com / admin123\n' +
        '- user@example.com / user123\n' +
        '- demo@example.com / demo123'
      );
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-md p-8 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold border-b-2 ${
              mode === 'login' ? 'border-[#8B4513] text-[#8B4513]' : 'border-transparent text-gray-400'
            }`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-semibold border-b-2 ml-6 ${
              mode === 'register' ? 'border-[#8B4513] text-[#8B4513]' : 'border-transparent text-gray-400'
            }`}
            onClick={() => setMode('register')}
          >
            Register
          </button>
        </div>

        <h2 className="text-2xl font-serif font-semibold text-center text-[#8B4513] mb-6">
          {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-gray-700 font-medium mb-2 block">Email</span>
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#8B4513] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700 font-medium mb-2 block">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[#8B4513] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              placeholder="Enter your password"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#D2B48C] hover:bg-[#b8976a] text-[#4B2E05] font-semibold py-3 rounded transition"
          >
            {mode === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
