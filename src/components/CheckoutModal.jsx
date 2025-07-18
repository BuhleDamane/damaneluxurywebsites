import React from 'react';

const CheckoutModal = ({ show, onClose, totalPrice }) => {
  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50"
        onClick={onClose}
        aria-label="Close checkout modal"
      ></div>

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-60 px-4"
        aria-modal="true"
        role="dialog"
        aria-labelledby="checkout-modal-title"
      >
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-[#4B2E05] font-serif">
          <h2 id="checkout-modal-title" className="text-2xl font-semibold mb-4">
            Confirm Your Purchase
          </h2>

          <p className="mb-6 text-lg">
            Total amount: <span className="font-bold">R{totalPrice.toFixed(2)}</span>
          </p>

          <p className="mb-6 text-sm text-gray-600">
            By clicking "Checkout", you agree to our terms and conditions.
          </p>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#8B4513] rounded-md text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition"
            >
              Cancel
            </button>
            <button
              onClick={() => alert('Proceeding to payment (demo)!')}
              className="px-6 py-2 bg-[#8B4513] text-white rounded-md font-semibold hover:bg-[#5A2A00] transition"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
