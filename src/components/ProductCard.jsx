import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({
  product,
  isInWishlist,
  onToggleWishlist,
  onAddToCart,
  onProductClick, 
}) => {
  return (
    <div
      onClick={() => onProductClick(product)}
      className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#d9cba3] hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
    >
      {/* Image & Wishlist Icon */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.stopPropagation(); 
            onToggleWishlist(product);
          }}
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-90 shadow-md text-[#8B4513] hover:text-[#b79967] transition-colors duration-300"
        >
          <Heart
            size={24}
            stroke="#8B4513"
            fill={isInWishlist ? '#8B4513' : 'none'}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between h-40">
        <div>
          <h3
            className="text-xl font-serif font-semibold text-[#5A432E] mb-2 truncate"
            title={product.name}
          >
            {product.name}
          </h3>
          <p className="text-[#7e6a44] text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#8B4513] font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onAddToCart(product);
            }}
            className="bg-[#8B4513] hover:bg-[#a25c1a] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart size={18} className="inline-block mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
