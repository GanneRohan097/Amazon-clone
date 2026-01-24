import { Link ,useNavigate} from "react-router-dom";
import React from "react";

const ProductCard = ({ title, images, linkText ,setPage}) => {
  const navigate=useNavigate();
  return (
    <div className="bg-white p-4 w-[400px] h-[370px] rounded shadow-md">
      <h1 className="font-semibold text-lg mb-3 text-black">{title}</h1>

      <div className="grid grid-cols-2 gap-3">
        {images.map((img, index) => (
        <img
            key={index}
            src={img}
            className="rounded cursor-pointer object-fit w-[160px] h-[115px]"
            alt="product"
        />
        ))}

      </div>

      <p className="text-sm text-blue-600 mt-3 cursor-pointer hover:underline"
       onClick={navigate('/more')}
      >
        <Link to='/more'>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default ProductCard;
