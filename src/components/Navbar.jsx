import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({
  onCartClick,
  onWishlistClick,
  onLoginClick,
  searchInput,
  setSearchInput,
  onSearchSubmit,
  onSearchKeyPress,
  wishlistCount,
  cartItemCount,
  user,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const iconStyle = "text-[#8B4513] cursor-pointer transition-colors duration-300 ease-in-out";

  return (
    <nav className="bg-white shadow-md fixed w-full z-30 top-0 left-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-bold text-[#8B4513] tracking-wide select-none">
          Damane Luxury
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-semibold text-[#5A432E] tracking-wide">
          <Link to="/" className="hover:text-[#D2B48C] transition-colors duration-300">Home</Link>
          <Link to="/collections" className="hover:text-[#D2B48C] transition-colors duration-300">Collections</Link>
          <Link to="/about" className="hover:text-[#D2B48C] transition-colors duration-300">About</Link>
          <Link to="/contact" className="hover:text-[#D2B48C] transition-colors duration-300">Contact</Link>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center space-x-8 pl-6">

          {/* Search */}
          <div className="relative flex items-center">
            {!isSearchOpen && (
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
                className={`${iconStyle} mr-4`}
              >
                <Search size={28} />
              </button>
            )}
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              onKeyDown={onSearchKeyPress}
              className={`border border-[#8B4513] rounded px-3 py-1 text-sm
                transition-all duration-300 ease-in-out
                ${isSearchOpen ? 'w-48 opacity-100 visible' : 'w-0 opacity-0 invisible'}
              `}
              style={{
                transitionProperty: 'width, opacity, margin-left',
                marginLeft: isSearchOpen ? '0' : '-48px',
              }}
            />
            {isSearchOpen && (
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchInput('');
                }}
                aria-label="Close search"
                className={`${iconStyle} ml-2`}
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Wishlist */}
       <div className="relative">
    <Heart
      onClick={onWishlistClick}
      title={`Wishlist (${wishlistCount || 0})`}
      className={iconStyle}
      size={24}
    />
    {wishlistCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
        {wishlistCount}
      </span>
    )}
  </div>


          {/* Cart */}
         <div className="relative">
    <ShoppingCart
      onClick={onCartClick}
      title={`Cart (${cartItemCount || 0})`}
      className={iconStyle}
      size={24}
    />
    {cartItemCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
        {cartItemCount}
      </span>
    )}
  </div>

          {/* User */}
          <User
            onClick={onLoginClick}
            title={user ? `Logged in as ${user}` : 'Login'}
            className={iconStyle}
            size={24}
          />
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-5">
          <Heart
            onClick={onWishlistClick}
            className={iconStyle}
            size={22}
            title={`Wishlist (${wishlistCount || 0})`}
          />
          <ShoppingCart
            onClick={onCartClick}
            className={iconStyle}
            size={22}
            title={`Cart (${cartItemCount || 0})`}
          />
          {isOpen ? (
            <X
              onClick={() => setIsOpen(false)}
              className={iconStyle}
              size={28}
              title="Close menu"
            />
          ) : (
            <Menu
              onClick={() => setIsOpen(true)}
              className={iconStyle}
              size={28}
              title="Open menu"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-6 shadow-lg z-20 fixed w-full left-0 top-[68px]">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-[#8B4513] text-xl font-semibold tracking-wide hover:text-[#D2B48C] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/collections"
            onClick={() => setIsOpen(false)}
            className="block text-[#8B4513] text-xl font-semibold tracking-wide hover:text-[#D2B48C] transition-colors"
          >
            Collections
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block text-[#8B4513] text-xl font-semibold tracking-wide hover:text-[#D2B48C] transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-[#8B4513] text-xl font-semibold tracking-wide hover:text-[#D2B48C] transition-colors"
          >
            Contact
          </Link>

          {/* Search and Login */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={() => setIsSearchOpen(prev => !prev)}
              aria-label="Toggle search"
              className={iconStyle}
            >
              <Search size={24} />
            </button>
            {isSearchOpen && (
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                onKeyDown={onSearchKeyPress}
                className="border border-[#8B4513] rounded px-3 py-1 text-sm w-full"
                autoFocus
              />
            )}
            <User
              onClick={onLoginClick}
              title={user ? `Logged in as ${user}` : 'Login'}
              className={iconStyle}
              size={24}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
