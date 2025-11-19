"use client";

import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

// Custom Next Button
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition z-10"
  >
    ➤
  </button>
);

// Custom Prev Button
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition z-10"
  >
    ←
  </button>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://images.pexels.com/photos/714522/pexels-photo-714522.jpeg",
    "https://images.pexels.com/photos/1799307/pexels-photo-1799307.jpeg",
  ];

  return (
    <div className="relative w-full ">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={`${src}?auto=compress&cs=tinysrgb&w=1600`} // ensures proper resolution
              alt={`banner-${index}`}
              className="w-full h-[400px] md:h-[500px] object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
