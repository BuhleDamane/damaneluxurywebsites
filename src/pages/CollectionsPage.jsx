import React from 'react';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const CollectionsPage = ({ products, wishlist, onToggleWishlist, onAddToCart }) => {
  return (
    <>
      <section
        className="relative flex flex-col justify-end items-center text-center px-6 pb-20"
        style={{
          height: '80vh',
          backgroundImage: "url('/images/products/hero.jpg')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: 'white',
          minHeight: '500px',
          width: '100%',
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg"
            style={{ color: '#D2B48C' }}
          >
            Our Exclusive Collections
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed drop-shadow-md"
            style={{ color: '#ffffff' }}
          >
            Explore our curated collection of luxury furniture pieces crafted to transform your living spaces with timeless elegance and superior comfort.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <ProductGrid
          products={products}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onAddToCart={onAddToCart}
        />
      </main>

      <Footer />
    </>
  );
};

export default CollectionsPage;
