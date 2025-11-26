'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const products = [
  { id: 1, slug: 'lexicon-luxe', name: 'Lexicon Luxe', price: 10, image: 'https://readymadeui.com/images/product1.webp' },
  { id: 2, slug: 'adjective-attire', name: 'Adjective Attire', price: 12, image: 'https://readymadeui.com/images/product2.webp' },
  { id: 3, slug: 'threadcraft-vibes', name: 'ThreadCraft Vibes', price: 14, image: 'https://readymadeui.com/images/product3.webp' },
  // add more products here
];

const ShopPage = () => {
  const router = useRouter();

  const goToProduct = (slug) => {
    router.push(`/shop/${slug}`); // navigate to /shop/[slug]
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Shop Our Latest Collection</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => goToProduct(product.slug)}
            className="bg-white flex flex-col rounded-md shadow hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer overflow-hidden"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[18/24] object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
              <h5 className="text-base font-semibold text-slate-900">{product.name}</h5>
              <h6 className="text-base font-semibold mt-2 text-purple-600">${product.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
