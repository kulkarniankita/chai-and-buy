import { ShoppingCartIcon } from "lucide-react";
import AnimatedCartCount from "./animated-cart-count";
import { getCartCount } from "@/actions/cartActions";

export default async function CartCount() {
  const cartCount = await getCartCount();
  return (
    <div className="flex items-center">
      <ShoppingCartIcon className="w-6 h-6 mr-2" />
      <AnimatedCartCount cartCount={cartCount} />
    </div>
  );
}
