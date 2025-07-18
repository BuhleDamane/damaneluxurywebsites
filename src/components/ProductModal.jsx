import React from 'react';
import { X } from 'lucide-react';

const ProductModal = ({ product, show, onClose }) => {
  if (!show || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8B4513] hover:text-red-600 transition"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover rounded"
          />

          <div className="flex flex-col space-y-4 text-[#5A432E]">
            <h2 className="text-2xl font-semibold font-serif">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>

            {product.sizes?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Available Sizes:</h3>
                <ul className="space-y-1">
                  {product.sizes.map((sizeObj, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{sizeObj.label}</span>
                      <span className="text-[#8B4513] font-medium">${sizeObj.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!product.sizes && (
              <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
