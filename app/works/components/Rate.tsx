"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
} from "lucide-react";

const providers = [
  {
    name: "Peaceful Mind Therapy",
    profession: "Therapist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "98",
    badge: "Verified",
    location: "Wuse, Abuja",
    action: "Book Session",
  },
  {
    name: "Sparkle Cleaners",
    profession: "Home Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "176",
    badge: "Available",
    location: "Garki, Abuja",
    action: "Book Now",
  },
  {
    name: "Victor Law Chambers",
    profession: "Lawyer",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "210",
    badge: "Top Rated",
    location: "Maitama, Abuja",
    action: "Consult Now",
  },
  {
    name: "Cakes by Joy",
    profession: "Cake Baker",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
    rating: "4.7",
    reviews: "134",
    badge: "Verified",
    location: "Utako, Abuja",
    action: "Order Now",
  },
  {
    name: "LensPro Studios",
    profession: "Photographer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "156",
    badge: "Available",
    location: "Asokoro, Abuja",
    action: "Book Now",
  },
];

export default function Rate() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] py-24">
      {/* Glow Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="animate-fadeUp text-3xl font-bold text-[#FAFAFA]">
            Top Rated Providers Near You
          </h2>

          <Link
            href="/service/providers"
            className="group flex items-center gap-2 font-semibold text-[#6D4AFF]"
          >
            View all near you

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Desktop Arrows */}
        <button className="absolute left-4 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAFAFA] shadow-xl lg:flex">
          <ChevronLeft size={22} />
        </button>

        <button className="absolute right-4 top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#FAFAFA] shadow-xl lg:flex">
          <ChevronRight size={22} />
        </button>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              className="
                group
                animate-float
                rounded-[28px]
                bg-[#0B0B16]
                p-3
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_25px_60px_rgba(109,74,255,0.15)]
              "
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-[180px] overflow-hidden rounded-[22px]">
                <Image
                  fill
                  src={provider.image}
                  alt={provider.name}
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-lg font-bold text-[#FAFAFA]">
                  {provider.name}
                </h3>

                <p className="mt-1 text-sm text-amber-500">
                  {provider.profession}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm">
                    <Star
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span>{provider.rating}</span>

                    <span className="text-gray-400">
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
                          : provider.badge === "Available"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-purple-100 text-purple-700"
                      }
                    `}
                  >
                    {provider.badge}
                  </span>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-200">
                  <MapPin
                    size={14}
                    className="text-gray-200"
                  />

                  {provider.location}
                </div>

                {/* CTA */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3 font-semibold text-[#6D4AFF] transition-all duration-300 hover:bg-[#6D4AFF] hover:text-white">
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
