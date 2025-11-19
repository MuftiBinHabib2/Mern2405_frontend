import React from "react";

const Category = () => {
  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
    },
    {
      name: "Fashion",
      image:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
    {
      name: "Home Decor",
      image:
        "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
    },
    {
      name: "Fitness",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
  ];

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group cursor-pointer rounded-lg shadow hover:shadow-lg overflow-hidden transition"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-3 text-center font-semibold">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
