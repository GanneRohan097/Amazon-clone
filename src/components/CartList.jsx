import React, { useState } from 'react';
import Cart from './Cart';

const CartList = ({items,setItems}) => {
  // Store items with their count


  // Handlers to increase / decrease count
  const handleIncrease = index => {
    const newItems = [...items];
    newItems[index].count += 1;
    setItems(newItems);
  };

  const handleDecrease = index => {
    const newItems = [...items];
    newItems[index].count = Math.max(1, newItems[index].count - 1);
    setItems(newItems);
  };

  // Compute subtotal
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="flex flex-col lg:flex-row bg-[#eaeded] min-h-screen">
      
      {/* Cart Items */}
      <div className="bg-white m-4 lg:m-10 px-4 sm:px-5 py-4 flex-1">
        <h1 className="text-[26px] sm:text-[30px] font-medium">
          Shopping Cart
        </h1>
        <p className="text-blue-600 cursor-pointer mb-4">
          Deselect all items
        </p>

        {items.map((item, index) => (
          <Cart
            key={index}
            logo={item.logo}
            head={item.title}
            price={item.price}
            count={item.count}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>

      <div className="bg-[#eaeded] flex justify-center">
        <div className="bg-white w-full sm:w-[300px] m-4 lg:mt-10 px-4 pb-3">
          <div className="mt-4">
            <h1 className="text-lg font-semibold">
              Sub Total ({items.length} items): <b>₹{totalPrice}</b>
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" />
              <p>This order contains a gift</p>
            </div>

            <button className="bg-[#ffd814] rounded-full mt-5 p-2 w-full">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartList;
