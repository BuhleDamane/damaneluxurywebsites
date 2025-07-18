import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LuxuryStyles from './components/LuxuryStyles';

import CartSidebar from './components/CartSidebar';
import WishlistSidebar from './components/WishlistSidebar';
import LoginModal from './components/LoginModal';
import CheckoutModal from './components/CheckoutModal';

import CollectionsPage from './pages/CollectionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import productsData from './data/product'; // 

const App = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts =
    searchQuery.trim() === ''
      ? productsData
      : productsData.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleSearchSubmit = () => {
    setSearchQuery(searchInput.trim());
  };

  useEffect(() => {
    if (searchQuery !== '' && filteredProducts.length === 0) {
      alert(`No data found for "${searchQuery}"`);
    }
  }, [searchQuery, filteredProducts]);

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleToggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="min-h-screen luxury-gradient">
      <LuxuryStyles />

      <Navbar
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onWishlistClick={() => setShowWishlist(true)}
        onCartClick={() => setShowCart(true)}
        wishlistCount={wishlist.length}
        cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        onSearchSubmit={handleSearchSubmit}
        onSearchKeyPress={handleSearchKeyPress}
      />

      {searchInput.trim() !== '' && (
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-[#8B4513] text-lg font-semibold">
          {filteredProducts.length === 0
            ? `No results found for "${searchInput}".`
            : `Results found! Please scroll down.`}
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection user={user} />
              <ProductGrid
                products={filteredProducts.slice(0, 6)} // Only featured products
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onAddToCart={handleAddToCart}
              />
              <Newsletter />
              <Footer />
            </>
          }
        />

        <Route
          path="/collections"
          element={
            <CollectionsPage
              products={filteredProducts}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onAddToCart={handleAddToCart}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Modals and Sidebars */}
      <CartSidebar
        show={showCart}
        cart={cart}
        onClose={() => setShowCart(false)}
        onRemoveItem={(id) => setCart(cart.filter((item) => item.id !== id))}
        onUpdateQuantity={(id, qty) => {
          if (qty <= 0) {
            setCart(cart.filter((item) => item.id !== id));
          } else {
            setCart(
              cart.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
            );
          }
        }}
        onProceedToCheckout={() => {
          setShowCart(false);
          setShowCheckout(true);
        }}
      />

      <WishlistSidebar
        show={showWishlist}
        wishlist={wishlist}
        onClose={() => setShowWishlist(false)}
        onRemoveItem={(id) => setWishlist(wishlist.filter((item) => item.id !== id))}
        onAddToCart={(product) => {
          handleAddToCart(product);
          setWishlist(wishlist.filter((item) => item.id !== product.id));
        }}
      />

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={(name) => {
          if (name.trim()) {
            setUser(name);
            setShowLogin(false);
          }
        }}
      />

      <CheckoutModal
        show={showCheckout}
        onClose={() => setShowCheckout(false)}
        totalPrice={cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      />
    </div>
  );
};

export default App;
