"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedCartCount({
  cartCount,
}: {
  cartCount: number;
}) {
  const [displayCount, setDisplayCount] = useState(cartCount);

  useEffect(() => {
    setDisplayCount(cartCount);
  }, [cartCount]);

  return (
    <div className="relative w-8 h-8">
      <AnimatePresence>
        <motion.span
          key={displayCount}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-xl font-bold"
        >
          {displayCount}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
