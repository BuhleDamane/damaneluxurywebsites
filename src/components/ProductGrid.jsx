import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const ProductGrid = ({
  products = [],
  wishlist = [],
  onToggleWishlist,
  onAddToCart,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif font-semibold text-[#5A432E] mb-10 text-center">
        Explore Our Exquisite Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.length === 0 ? (
          <p className="text-center text-[#8B4513] text-lg">No products to display.</p>
        ) : (
          products.slice(0, 3).map(product => (
            <ProductCard
              key={product.id}
              product={product}
              isInWishlist={wishlist.some(item => item.id === product.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onProductClick={() => handleProductClick(product)}
            />
          ))
        )}
      </div>

      {showModal && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          show={showModal}
          onClose={() => setShowModal(false)}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isInWishlist={wishlist.some(item => item.id === selectedProduct.id)}
        />
      )}
    </section>
  );
};

export default ProductGrid;
