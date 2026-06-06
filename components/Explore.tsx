"use client";

import Image from "next/image";
import {
  Home,
  Car,
  Truck,
  Store,
  Wrench,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Accommodation",
    description: "Find verified apartments, houses etc..",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    icon: Home,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Transportation",
    description: "Book buses, flights and local rides.",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    icon: Car,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Logistics",
    description: "Fast and reliable delivery services.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    icon: Truck,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Businesses",
    description: "Discover and shop from trusted businesses.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    icon: Store,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "Services",
    description: "Book trusted professionals for any service.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    icon: Wrench,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
];

export default function Explore() {
  return (
    <section className="bg-[#0B0B16] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-amber-300 md:text-5xl">
            Explore{" "}
            <span className="text-indigo-600">
              Everything
            </span>{" "}
            You Need
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-200">
            Discover top-rated options across accommodation,
            transportation, logistics, businesses and services near you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl  border-gray-100 bg-[#0B0B16] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="relative px-6 pb-6 pt-10">
                  {/* Floating Icon */}
                  <div
                    className={`absolute -top-8 left-6 flex h-16 w-16 items-center justify-center rounded-full border-8 border-white ${item.iconBg}`}
                  >
                    <Icon
                      className={`h-7 w-7 ${item.iconColor}`}
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-gray-200">
                    {item.title}
                  </h3>

                  <p className="mb-6 text-base leading-7 text-gray-100">
                    {item.description}
                  </p>

                  <button className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:gap-3">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}