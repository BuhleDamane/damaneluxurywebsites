import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';

const CartSidebar = ({
  show,
  cart,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onProceedToCheckout,
}) => {
  if (!show) return null;

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleRemove = (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to remove "${name}" from your cart?`);
    if (confirmDelete) {
      onRemoveItem(id);
    }
  };

  return (
    <aside className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl z-50 flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-[#8B4513]">Your Cart</h2>
        <button
          onClick={onClose}
          aria-label="Close cart"
          className="text-[#8B4513] hover:text-[#5A3311] transition"
        >
          <X size={24} />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 italic">Your cart is currently empty.</p>
        ) : (
          cart.map(({ id, name, price, quantity, image }) => (
            <div key={id} className="flex items-center mb-6 border-b border-gray-100 pb-4">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 object-cover rounded-lg border border-gray-200"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-medium text-[#8B4513]">{name}</h3>
                <p className="text-gray-600">${price.toFixed(2)}</p>

                <div className="flex items-center mt-2 space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(id, quantity - 1)}
                    disabled={quantity <= 1}
                    className="p-1 border border-gray-300 rounded hover:bg-[#F5E1B8] transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="px-3 py-1 bg-[#F9F6F1] rounded text-[#8B4513] font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => onUpdateQuantity(id, quantity + 1)}
                    className="p-1 border border-gray-300 rounded hover:bg-[#F5E1B8] transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleRemove(id, name)}
                aria-label={`Remove ${name} from cart`}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <footer className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between mb-4 text-lg font-semibold text-[#8B4513]">
            <span>Total:</span>
            <span>${getTotalPrice()}</span>
          </div>
          <button
            onClick={onProceedToCheckout}
            className="w-full bg-[#8B4513] hover:bg-[#5A3311] text-white py-3 rounded-md transition font-semibold"
          >
            Proceed to Checkout
          </button>
        </footer>
      )}
    </aside>
  );
};

export default CartSidebar;
