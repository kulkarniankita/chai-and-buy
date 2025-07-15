import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import AddToCart from "@/components/add-to-cart/add-to-cart";
import CartCount from "@/components/add-to-cart/cart-count";
import Image from "next/image";
import { products } from "@/lib/data";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Products</h2>
        <CartCount />
      </div>
      <div className="space-y-4">
        {products.map(({ id, name, price, image }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row justify-between items-center rounded-lg border border-pink-200 p-4 hover:border-pink-300 transition-all duration-300 ease-in-out"
          >
            <Card className="w-full mx-auto border border-purple-200 shadow-lg">
              <CardContent className="flex justify-between">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Image
                    src={image}
                    alt={name}
                    width={320}
                    height={320}
                    className="rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                  <span className="font-medium text-xl text-center sm:text-left">
                    {name}
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                  <span className="font-semibold">${price.toFixed(2)}</span>
                  <AddToCart />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-sm text-gray-600 border border-purple-100 decoration-dotted p-4">
        <p className="text-base mb-2">
          This demo uses real Server Actions to update the cart count.
        </p>
        <p className="text-base">
          The cart count is stored on the server and updated instantly.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
