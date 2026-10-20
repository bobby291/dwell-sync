
import ProductCard from "@/components/shop/ProductCard";
import type { ShopProduct } from "@/types/shop";

interface ProductGridProps {
  products: ShopProduct[];
  onAddToCart?: (product: ShopProduct) => void;
  onToggleFavorite?: (product: ShopProduct) => void;
  favoriteIds?: string[];
}

export default function ProductGrid({
  products,
  onAddToCart,
  onToggleFavorite,
  favoriteIds = [],
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 px-4 py-12 text-center">
        <p className="font-semibold text-slate-700">
          No products available yet
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Check back soon for new products.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favoriteIds.includes(product.id)}
        />
      ))}
    </div>
  );
}
