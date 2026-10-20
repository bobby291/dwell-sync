
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Check,
} from "lucide-react";
import type { ShopProduct } from "@/types/shop";

interface ProductCardProps {
  product: ShopProduct;
  onAddToCart?: (product: ShopProduct) => void;
  onToggleFavorite?: (product: ShopProduct) => void;
  isFavorite?: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleFavorite,
  isFavorite: favoriteProp,
}: ProductCardProps) {
  const [localFavorite, setLocalFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  const isFavorite = favoriteProp ?? localFavorite;

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100,
        )
      : 0;

  const formatPrice = (price: number) =>
    `₦${price.toLocaleString("en-NG")}`;

  function handleFavorite() {
    setLocalFavorite(!isFavorite);
    onToggleFavorite?.(product);
  }

  function handleAddToCart() {
    onAddToCart?.(product);
    setAdded(true);
  }

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      {/* Product image */}
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <Link
          href={`/shop/product/${product.id}`}
          aria-label={`View ${product.name}`}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Discount or new badge */}
        {(discount > 0 || product.badge) && (
          <span
            className={`absolute left-2 top-2 z-10 rounded-full px-2 py-1 text-[10px] font-bold text-white sm:text-xs ${
              discount > 0
                ? "bg-red-500"
                : "bg-emerald-600"
            }`}
          >
            {discount > 0
              ? `-${discount}%`
              : product.badge}
          </span>
        )}

        {/* Favorite button */}
        <button
          type="button"
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
          aria-pressed={isFavorite}
          className={`absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm transition hover:scale-110 ${
            isFavorite
              ? "border-red-200 text-red-500"
              : "border-slate-200 text-slate-500 hover:text-red-500"
          }`}
        >
          <Heart
            size={16}
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col p-2.5 sm:p-3">
        <Link
          href={`/shop/product/${product.id}`}
          className="line-clamp-2 min-h-9 text-xs font-semibold leading-4 text-slate-800 hover:text-blue-600 sm:text-sm"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="mt-1.5 flex items-center gap-1 text-xs">
          <Star
            size={13}
            className="shrink-0 fill-amber-400 text-amber-400"
          />
          <span className="font-medium text-slate-700">
            {product.rating.toFixed(1)}
          </span>
          <span className="truncate text-slate-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Prices */}
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-sm font-bold text-slate-900 sm:text-base">
            {formatPrice(product.price)}
          </span>

          {product.originalPrice &&
            product.originalPrice > product.price && (
              <span className="text-[10px] text-slate-400 line-through sm:text-xs">
                {formatPrice(product.originalPrice)}
              </span>
            )}
        </div>

        {/* Stock and delivery */}
        <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] sm:text-xs">
          <span
            className={
              product.inStock
                ? "font-medium text-emerald-600"
                : "font-medium text-red-500"
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>

          {product.inStock && (
            <>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <Truck size={12} />
                Delivery available
              </span>
            </>
          )}
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          disabled={!product.inStock}
          onClick={handleAddToCart}
          className={`mt-auto flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-white transition sm:mt-3 sm:text-sm ${
            !product.inStock
              ? "cursor-not-allowed bg-slate-300"
              : added
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
          }`}
        >
          {!product.inStock ? (
            "Unavailable"
          ) : added ? (
            <>
              <Check size={15} />
              Added
            </>
          ) : (
            <>
              <ShoppingCart size={15} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
