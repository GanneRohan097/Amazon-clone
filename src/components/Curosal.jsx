import React from "react";
import Slider from "react-slick";

const Carousal = () => {
  const images = [
    "https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="" className="w-full" />
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
