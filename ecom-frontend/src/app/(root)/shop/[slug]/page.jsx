'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const products = [
  {
    slug: 'lexicon-luxe',
    name: 'Lexicon Luxe',
    price: 10,
    image: 'https://readymadeui.com/images/product1.webp',
    description: 'High-quality organic cotton T-shirt, perfect for casual wear.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#ffffff', '#6b21a8', '#3b82f6'], // black, white, purple, blue
    rating: 4.5,
    reviews: 120,
  },
  {
    slug: 'adjective-attire',
    name: 'Adjective Attire',
    price: 12,
    image: 'https://readymadeui.com/images/product2.webp',
    description: 'Comfortable, breathable, and stylish everyday T-shirt.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#ffffff', '#ef4444', '#facc15'], // black, white, red, yellow
    rating: 4.0,
    reviews: 80,
  },
  {
    slug: 'threadcraft-vibes',
    name: 'ThreadCraft Vibes',
    price: 14,
    image: 'https://readymadeui.com/images/product3.webp',
    description: 'Premium quality fabric with durable stitching and unique design.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#10b981', '#3b82f6', '#f97316'], // black, green, blue, orange
    rating: 4.2,
    reviews: 95,
  },
];

const ProductPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div className="p-4 text-center text-red-600">Product not found</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover rounded shadow"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl font-semibold text-purple-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-500 mb-4">
            ⭐ {product.rating} ({product.reviews} reviews)
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Sizes:</h3>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-3 py-1 rounded hover:border-purple-600 transition ${
                    selectedSize === size ? 'bg-purple-600 text-white border-purple-600' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Colors:</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer transition ${
                    selectedColor === color ? 'border-black' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors mb-4">
            Add to Cart
          </button>

          {/* Additional Info */}
          <div className="text-sm text-gray-500 space-y-1">
            <p>Free shipping on orders over $50.</p>
            <p>30-day returns for a full refund.</p>
            <p>All products are made with sustainable materials.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
