"use client";

import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const providers = [
  {
    name: "Michael Tech",
    role: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "240",
    price: "₦50,000",
    action: "Book Now",
    badge: "Verified",
    featured: true,
  },
  {
    name: "Chioma Legal",
    role: "Legal Consultant",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "160",
    price: "₦50,000",
    action: "Consult Now",
    badge: "Verified",
  },
  {
    name: "Tara Makeup",
    role: "Makeup Artist",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "310",
    price: "₦25,000",
    action: "Book Now",
    badge: "Top Rated",
  },
  {
    name: "AutoFix Nigeria",
    role: "Car Mechanic",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop",
    rating: "4.7",
    reviews: "220",
    price: "₦15,000",
    action: "Book Now",
    badge: "Available",
  },
  {
    name: "PixelCraft Studio",
    role: "Graphics Designer",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "190",
    price: "₦30,000",
    action: "Hire Now",
    badge: "Verified",
  },
];

export default function FeatureServices() {
  return (
    <section className="relative bg-[#0B0B16] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="animate-fadeUp text-3xl font-bold text-white">
            Featured Service Providers
          </h2>

          <button className="group flex items-center gap-2 font-semibold text-[#6D4AFF]">
            View all providers
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl lg:flex">
          <ChevronLeft size={22} />
        </button>

        <button className="absolute right-4 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl lg:flex">
          <ChevronRight size={22} />
        </button>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className={`
                group
                animate-float
                rounded-[28px]
                bg-[#0B0B16]
                p-3
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(109,74,255,0.18)]
              `}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-[170px] overflow-hidden rounded-3xl">
                <Image
                  fill
                  src={provider.image}
                  alt={provider.name}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {provider.featured && (
                  <div className="absolute left-3 top-3 rounded-xl bg-[#6D4AFF] px-3 py-1 text-xs font-semibold text-white">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-lg font-bold text-[#FAFAFA]">
                  {provider.name}
                </h3>

                <p className="mt-1 text-sm text-amber-500">
                  {provider.role}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span>{provider.rating}</span>
                    <span className="text-gray-200">
                      ({provider.reviews})
                    </span>
                  </div>

                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-semibold

                      ${
                        provider.badge === "Verified"
                          ? "bg-green-100 text-green-700"
                          : provider.badge === "Top Rated"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-emerald-100 text-emerald-700"
                      }
                    `}
                  >
                    {provider.badge}
                  </span>
                </div>

                {/* Price */}
                <p className="mt-5 font-semibold text-[#FAFAFA]">
                  From {provider.price}
                </p>

                {/* CTA */}
                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3 font-semibold text-[#6D4AFF] transition hover:bg-[#6D4AFF] hover:text-white">
                  {provider.action}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}