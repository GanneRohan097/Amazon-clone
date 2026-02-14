import React from 'react';
import locationIcon from '../assets/location_icon.png';
import { ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-black text-white px-3 py-2 flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-3">
      <Link to='/'>
          <img
            className="w-20 object-contain cursor-pointer"
            src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
            alt="Amazon"
        
          />
        </Link>

        {/* Hide location on small screens */}
        <div className="hidden md:flex items-center gap-1 border border-transparent hover:border-white p-1 cursor-pointer">
          <img className="w-5 h-5" src={locationIcon} alt="" />
          <div className="flex flex-col leading-tight overflow-hidden md:overflow-visible">
            <span className="text-gray-300 text-xs">
              Delivering to Mumbai 400001
            </span>
            <span className="font-medium text-sm">
              Update location
            </span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex flex-1 items-center min-w-[200px] max-w-[900px]">
        <select className="hidden sm:block text-black p-2 h-10 rounded-l-md bg-[#e6e6e6]">
          <option>All</option>
        </select>

        <input
          className="p-2 h-10 flex-1 text-black outline-none"
          type="text"
          placeholder="Search Amazon.in"
        />

        <button className="bg-orange-400 px-4 h-10 rounded-r-md">
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 ml-auto">

        {/* Language */}
        <h2 className="font-bold cursor-pointer hidden sm:block">
          EN
        </h2>

        {/* Sign in */}
        <div className="hidden sm:block border border-transparent hover:border-white cursor-pointer p-2 overflow-hidden md:overflow-visible">
          <p className="text-xs">Hello, sign in</p>
          <p className="font-bold text-sm">Account</p>
        </div>

        {/* Orders */}
        <div className="hidden md:block border border-transparent hover:border-white cursor-pointer p-2">
          <p className="text-xs">Returns</p>
          <p className="font-bold text-sm">& Orders</p>
        </div>

        {/* Cart */}
      <Link to='/cart'>
          <button
            className="flex items-center gap-1 border border-transparent hover:border-white p-2"
          >
            <ShoppingCart size={22} />
            <p className="font-bold hidden sm:block">Cart</p>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Header;
