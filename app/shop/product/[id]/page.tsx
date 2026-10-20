
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

import ShopUtilityBar from "@/components/shop/ShopUtilityBar";
import { getProductById, shopProducts } from "@/data/shopData";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return shopProducts.map((product) => ({
    id: product.id,
  }));
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function ProductDetailsPage({
  params,
}: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : null;

  return (
    <main className="min-h-screen bg-[#F7F8FC]">
      <ShopUtilityBar cartCount={0} favoriteCount={0} />

      <div className="mx-auto max-w-[1400px] space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href={`/shop/category/${product.category}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#2979FF]"
        >
          <ArrowLeft size={17} />
          Back to category
        </Link>

        <div className="grid gap-8 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-12 lg:p-10">
          <div className="space-y-4">
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-2xl bg-[#F7F8FC] p-6 sm:min-h-[480px]">
              {discount !== null && (
                <span className="absolute left-4 top-4 z-10 rounded-lg bg-red-500 px-3 py-1.5 text-sm font-bold text-white">
                  -{discount}%
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="max-h-[440px] w-full object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-2 text-xs font-medium text-green-700">
                <ShieldCheck size={15} />
                Secure shopping
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                <Truck size={15} />
                Delivery options available
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#2979FF]">
              DwellSync Marketplace
            </p>

            {product.brand && (
              <p className="mt-3 text-sm text-gray-500">{product.brand}</p>
            )}

            <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#0D1B2A] sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 font-semibold text-amber-500">
                <Star size={17} fill="currentColor" />
                {product.rating.toFixed(1)}
              </span>

              <span className="text-sm text-gray-500">
                ({product.reviewCount} reviews)
              </span>

              <span className="text-gray-300">•</span>

              <span
                className={`text-sm font-medium ${
                  product.inStock ? "text-green-600" : "text-red-500"
                }`}
              >
                {product.inStock ? "In stock" : "Currently unavailable"}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-extrabold text-[#0D1B2A]">
                {formatPrice(product.price)}
              </span>

              {product.originalPrice &&
                product.originalPrice > product.price && (
                  <span className="text-lg text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
            </div>

            <div className="my-6 border-t border-gray-100" />

            <h2 className="text-lg font-bold text-[#0D1B2A]">
              Product description
            </h2>

            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-600 sm:text-base">
              {product.description}
            </p>

            <div className="mt-6 rounded-xl bg-[#F7F8FC] p-4">
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 shrink-0 text-[#2979FF]" size={20} />
                <div>
                  <p className="font-semibold text-[#0D1B2A]">
                    Delivery information
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Delivery availability, charges, and estimated arrival
                    times can be confirmed during checkout.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-3 pt-8">
              <button
                type="button"
                disabled={!product.inStock}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2979FF] px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <ShoppingBag size={19} />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 font-semibold text-[#0D1B2A] transition hover:border-[#2979FF] hover:text-[#2979FF]"
              >
                <Heart size={19} />
                Add to Favourites
              </button>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-gray-400">
              Product information and availability may change.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
