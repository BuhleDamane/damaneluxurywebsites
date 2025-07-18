import React from 'react';
import { X, Trash2, ShoppingCart } from 'lucide-react';

const WishlistSidebar = ({ show, wishlist, onClose, onRemoveItem, onAddToCart }) => {
  if (!show) return null;

  const handleRemove = (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to remove "${name}" from your wishlist?`);
    if (confirmDelete) {
      onRemoveItem(id);
    }
  };

  return (
    <aside className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg z-50 flex flex-col">
      <header className="flex items-center justify-between p-5 border-b border-gray-200">
        <h2 className="text-2xl font-serif font-semibold text-[#5A432E]">Your Wishlist</h2>
        <button onClick={onClose} aria-label="Close wishlist" className="text-[#8B4513] hover:text-[#5A432E] transition-colors">
          <X size={24} />
        </button>
      </header>

      <div className="flex-grow overflow-y-auto px-5 py-4">
        {wishlist.length === 0 ? (
          <p className="text-center text-[#8B4513] text-lg mt-10">
            Your wishlist is empty.
          </p>
        ) : (
          wishlist.map(product => (
            <div key={product.id} className="flex items-center justify-between border-b border-gray-100 py-4">
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md shadow-sm"
                />
                <div>
                  <h3 className="text-[#5A432E] font-semibold">{product.name}</h3>
                  <p className="text-[#8B4513] font-serif font-semibold">${product.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => onAddToCart(product)}
                  className="flex items-center space-x-1 px-3 py-1 bg-[#8B4513] text-white rounded transition hover:bg-[#5A432E]"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart size={16} />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => handleRemove(product.id, product.name)}
                  className="text-[#8B4513] hover:text-[#D2691E] transition"
                  aria-label={`Remove ${product.name} from wishlist`}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default WishlistSidebar;
