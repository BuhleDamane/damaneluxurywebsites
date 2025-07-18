import React from 'react';
import ProductGrid from '../components/ProductGrid';

const CollectionsPage = ({ products, wishlist, onToggleWishlist, onAddToCart }) => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-serif text-[#8B4513] mb-8 text-center">Our Exclusive Collections</h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Explore our curated collection of luxury furniture pieces crafted to transform your living spaces with timeless elegance and superior comfort.
      </p>

      <ProductGrid
        products={products}
        wishlist={wishlist}
        onToggleWishlist={onToggleWishlist}
        onAddToCart={onAddToCart}
      />
    </main>
  );
};

export default CollectionsPage;
