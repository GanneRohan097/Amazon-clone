import React from 'react';

const Cart = ({ logo, head, price, count, onIncrease, onDecrease }) => {
  return (
    <div className="border-t-[1.9px] pt-4">
      <div className="flex flex-col md:flex-row gap-4">
        
        {/* Left section */}
        <div className="flex gap-2">
          <input type="checkbox" className="mt-2" />
          <img
            className="w-[140px] sm:w-[180px] md:w-[220px] object-contain"
            src={logo}
            alt={head}
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
            <p className="text-base sm:text-lg font-semibold">
              {head}
            </p>
            <h5 className="font-bold whitespace-nowrap mt-1 sm:mt-0">
              ₹{price}
            </h5>
          </div>

          <p className="text-xs text-green-600">In stock</p>

          <p className="text-sm">
            FREE delivery as soon as{' '}
            <span className="font-bold">
              Tue, 16 Dec, 7 am – 10 pm
            </span>
          </p>

          <img
            className="mt-1 w-[80px]"
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt="Fulfilled by Amazon"
          />

          <div className="inline-flex items-center border-2 border-[#ffd814] mt-3 rounded-full px-3">
            <button
              className="pr-4 text-xl font-bold"
              onClick={onDecrease}
            >
              -
            </button>

            <p className="pr-4 font-bold text-[18px]">{count}</p>

            <button
              className="text-xl font-bold"
              onClick={onIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
