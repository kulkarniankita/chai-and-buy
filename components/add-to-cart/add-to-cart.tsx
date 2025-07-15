"use client";

import { addToCart } from "@/actions/cartActions";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React, { useState, useCallback } from "react";

export default function AddToCart() {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddToCart = useCallback(async () => {
    if (isUpdating) return; // Prevent multiple clicks while updating

    setIsUpdating(true);
    try {
      await addToCart();
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setIsUpdating(false);
    }
  }, [isUpdating]);

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isUpdating}
      className="bg-pink-600 hover:bg-pink-700 hover:cursor-pointer text-white hover:scale-105 transition-all duration-300 ease-in-out w-32"
    >
      {isUpdating ? (
        <RefreshCw className="w-4 h-4 animate-spin" />
      ) : (
        "Add to Cart"
      )}
    </Button>
  );
}
