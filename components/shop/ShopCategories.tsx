
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { shopCategories } from "@/data/shopData";

export default function ShopCategories() {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore DwellSync
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0D1B2A] sm:text-3xl">
            Shop by category
          </h2>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Everything you need, all in one place.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {shopCategories.map((category) => (
          <Link
            key={category.id}
            href={`/shop/category/${category.slug}`}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/65 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                <h3 className="text-sm font-bold leading-snug text-white sm:text-base">
                  {category.name}
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#0D1B2A] transition group-hover:bg-[#2979FF] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </div>

            <div className="p-3">
              <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
                {category.description}
              </p>

              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#2979FF]">
                Explore category
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
