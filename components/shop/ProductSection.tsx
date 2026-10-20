
import Link from "next/link";
import {
  Zap,
  Sparkles,
  Heart,
  Utensils,
  Laptop,
  Shirt,
  House,
  type LucideIcon,
} from "lucide-react";

import ProductGrid from "@/components/shop/ProductGrid";
import type { ShopProduct } from "@/types/shop";

type SectionIcon =
  | "zap"
  | "sparkles"
  | "heart"
  | "utensils"
  | "laptop"
  | "shirt"
  | "house";

const iconMap: Record<SectionIcon, LucideIcon> = {
  zap: Zap,
  sparkles: Sparkles,
  heart: Heart,
  utensils: Utensils,
  laptop: Laptop,
  shirt: Shirt,
  house: House,
};

interface ProductSectionProps {
  title: string;
  description?: string;
  products: ShopProduct[];
  href?: string;
  icon?: SectionIcon;
  iconColor?: string;
  onAddToCart?: (product: ShopProduct) => void;
  onToggleFavorite?: (product: ShopProduct) => void;
  favoriteIds?: string[];
  id?: string;
}

export default function ProductSection({
  title,
  description,
  products,
  href,
  icon,
  iconColor = "#2979FF",
  onAddToCart,
  onToggleFavorite,
  favoriteIds = [],
  id,
}: ProductSectionProps) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <section id={id} className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div className="flex min-w-0 items-start gap-2.5">
          {Icon && (
            <div
              className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100"
              style={{ color: iconColor }}
            >
              <Icon size={21} />
            </div>
          )}

          <div className="min-w-0">
            <h2 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {description}
              </p>
            )}
          </div>
        </div>

        {href && (
          <Link
            href={href}
            className="shrink-0 text-xs font-semibold text-blue-600 transition hover:text-blue-800 sm:text-sm"
          >
            View All <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>

      <ProductGrid
        products={products}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        favoriteIds={favoriteIds}
      />
    </section>
  );
}
