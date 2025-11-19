import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$59.99",
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg",
    },
    {
      id: 2,
      name: "Modern Chair",
      price: "$129.99",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    },
    {
      id: 3,
      name: "Sports Shoes",
      price: "$79.99",
      rating: 4.3,
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "$99.99",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    },
  ];

  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer group"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg group-hover:scale-105 transition duration-300"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>

              <p className="text-gray-600">{item.price}</p>

              {/* Rating */}
              <div className="text-yellow-500 text-sm mt-1">
                {"★".repeat(Math.floor(item.rating))}
                {"☆".repeat(5 - Math.floor(item.rating))}
              </div>

              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
