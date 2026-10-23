import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import type { ShopProduct } from "@/types/shop";

export default function ProductPurchaseActions({
    product, 
} : {
    product: ShopProduct;
}) {
    const { addToCart, toggleFavorite, isFavorite } = useShop();
    const [quantity, setQuantity] = useState(1);
    const favorite = isFavorite(product.id);

    return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600">Quantity</span>

        <div className="flex items-center gap-4 rounded-xl border border-gray-200 px-3 py-2">
          <button
            type="button"
            aria-label="Decrease quantity"
            disabled={quantity <= 1}
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="text-[#0D1B2A] disabled:text-gray-300"
          >
            <Minus size={16} />
          </button>

          <span className="min-w-5 text-center font-semibold">
            {quantity}
          </span>

          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((value) => value + 1)}
            className="text-[#0D1B2A]"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      <button
        type="button"
        disabled={!product.inStock}
        onClick={() => {
          for (let i = 0; i < quantity; i++) addToCart(product);
        }}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2979FF] px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        <ShoppingBag size={19} />
        Add {quantity} to Cart
      </button>

      <button
        type="button"
        onClick={() => toggleFavorite(product)}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 font-semibold text-[#0D1B2A] transition hover:border-[#2979FF] hover:text-[#2979FF]"
      >
        <Heart
          size={19}
          fill={favorite ? "currentColor" : "none"}
        />
        {favorite ? "Remove from Favourites" : "Add to Favourites"}
      </button>
    </div>
  );
}