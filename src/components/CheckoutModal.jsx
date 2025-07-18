import React, { useState, useEffect } from 'react';

// CheckoutModal component
const CheckoutModal = ({ show, onClose, totalPrice, onClearCart }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Reset form and states when modal opens
  useEffect(() => {
    if (show) {
      setFormData({
        fullName: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
      setIsLoading(false);
      setOrderPlaced(false);
    }
  }, [show]);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // CVV: allow only digits, max 4
    if (name === 'cvv') {
      if (value === '' || /^[0-9]{0,3}$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    // Card Number: digits and spaces only (optional)
    if (name === 'cardNumber') {
      if (value === '' || /^[0-9\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, address, cardNumber, expiryDate, cvv } = formData;

    if (!fullName || !email || !address || !cardNumber || !expiryDate || !cvv) {
      alert('Please fill in all fields.');
      return;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      alert('CVV must be 3 or 4 digits.');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setOrderPlaced(true);

      // Clear cart via parent callback
      if (onClearCart) {
        onClearCart();
      }

      // Clear form data
      setFormData({
        fullName: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    }, 2000);
  };

  const handleClose = () => {
    setOrderPlaced(false);
    setFormData({
      fullName: '',
      email: '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 px-4"
        aria-modal="true"
        role="dialog"
        aria-labelledby="checkout-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-[#4B2E05] font-serif relative">
          {/* Close "X" button */}
          <button
            aria-label="Close modal"
            onClick={handleClose}
            className="absolute top-3 right-3 text-[#8B4513] hover:text-[#5A2A00] font-bold text-2xl leading-none"
            title="Close"
          >
            &times;
          </button>

          {orderPlaced ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">🎉 Order Successful!</h2>
              <p className="text-lg">Thank you for shopping with Damane Luxury.</p>
              <p className="text-sm mt-4 text-gray-600">
                Estimated Delivery: <span className="font-semibold">3–5 business days</span>
              </p>
              <button
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-[#8B4513] text-white rounded-md font-semibold hover:bg-[#5A2A00] transition"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 id="checkout-modal-title" className="text-2xl font-semibold mb-4">
                Checkout & Delivery
              </h2>

              <p className="mb-4 text-sm text-gray-600">
                Total: <span className="font-bold text-[#4B2E05]">R{totalPrice.toFixed(2)}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                  required
                  autoComplete="name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                  required
                  autoComplete="email"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Delivery Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                  required
                  autoComplete="street-address"
                />
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                  required
                  autoComplete="cc-number"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-1/2 border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                    required
                    autoComplete="cc-exp"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    maxLength={4}
                    pattern="\d{3,4}"
                    className="w-1/2 border border-[#8B4513] rounded px-4 py-2 focus:ring-2 focus:ring-[#D2B48C] outline-none"
                    required
                    autoComplete="cc-csc"
                  />
                </div>

                {isLoading ? (
                  <div className="text-center mt-4 text-sm text-[#4B2E05]">Placing order...</div>
                ) : (
                  <button
                    type="submit"
                    className="w-full bg-[#8B4513] text-white font-semibold py-3 rounded hover:bg-[#5A2A00] transition"
                  >
                    Place Order
                  </button>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Parent component example with cart count and modal usage
const Shop = () => {
  // Simple cart state: array of items
  const [cart, setCart] = useState([
    { id: 1, name: 'Luxury Item 1', price: 1200, quantity: 1 },
    { id: 2, name: 'Luxury Item 2', price: 800, quantity: 2 },
  ]);

  const [showModal, setShowModal] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Clear cart when order placed
  const clearCart = () => setCart([]);

  return (
    <div className="p-6 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Damane Luxury Store</h1>
        <button
          onClick={() => setShowModal(true)}
          className="relative bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#5A2A00] transition"
          aria-label="Open Checkout Modal"
        >
          Cart 🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs font-bold">
              {cartCount}
            </span>
          )}
        </button>
      </header>

      {/* Products or cart display could go here */}
      <p>Your cart has {cartCount} item(s), total R{totalPrice.toFixed(2)}</p>

      <CheckoutModal
        show={showModal}
        onClose={() => setShowModal(false)}
        totalPrice={totalPrice}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Shop;
