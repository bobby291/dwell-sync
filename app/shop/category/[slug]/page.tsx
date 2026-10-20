
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingBag } from "lucide-react";

import ShopUtilityBar from "@/components/shop/ShopUtilityBar";
import ProductGrid from "@/components/shop/ProductGrid";
import { shopCategories, getProductsByCategory } from "@/data/shopData";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return shopCategories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function ShopCategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const category = shopCategories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <main className="min-h-screen bg-[#F7F8FC]">
      <ShopUtilityBar cartCount={0} favoriteCount={0} />

      <div className="mx-auto max-w-[1600px] space-y-8 px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#2979FF]"
        >
          <ArrowLeft size={17} />
          Back to Shop
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-[#0D1B2A]">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="relative z-10 p-6 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F5A623]">
                DwellSync Marketplace
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {category.name}
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                {category.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                <ShoppingBag size={16} />
                {products.length} {products.length === 1 ? "product" : "products"} available
              </div>
            </div>

            <div className="relative h-56 md:h-full md:min-h-[300px]">
              <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/30 to-transparent md:bg-gradient-to-l" />

              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0D1B2A]">
                Explore {category.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Discover products selected for you.
              </p>
            </div>

            <Link
              href="/shop"
              className="text-sm font-semibold text-[#2979FF] transition hover:text-blue-700"
            >
              View all categories →
            </Link>
          </div>

          <ProductGrid products={products} />
        </section>
      </div>
    </main>
  );
}
