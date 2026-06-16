"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const providers = [
  {
    name: "QuickShip Logistics",
    service: "Courier & Express Delivery",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
    rating: "4.9",
    reviews: "320",
    stat: "500+ Deliveries Today",
    button: "Request Quote",
  },
  {
    name: "Prime Haulage",
    service: "Truck & Heavy Haulage",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
    rating: "4.8",
    reviews: "210",
    stat: "50+ Trucks Available",
    button: "Book Truck",
  },
  {
    name: "Global Cargo",
    service: "International Shipping",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    rating: "4.7",
    reviews: "180",
    stat: "Worldwide Coverage",
    button: "Get Quote",
  },
  {
    name: "MoveIt Services",
    service: "Home & Office Moving",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200",
    rating: "4.8",
    reviews: "150",
    stat: "100+ Moves Completed",
    button: "Book Service",
  },
  {
    name: "Speedy Riders",
    service: "Bike & Same Day Delivery",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
    rating: "4.7",
    reviews: "130",
    stat: "Available in 25+ Cities",
    button: "Request Delivery",
  },
  {
    name: "Vault Warehouse",
    service: "Storage & Warehousing",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    rating: "4.6",
    reviews: "110",
    stat: "Secure & Monitored",
    button: "View Options",
  },
];

export default function Featured() {
  return (
    <section className="py-14 bg-[#0B0B16] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[32px] font-bold text-amber-600">
            Featured Logistics Providers
          </h2>

          <button className="flex items-center gap-2 text-purple-700 font-semibold hover:gap-3 transition-all">
            View all providers
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative">

          {/* LEFT ARROW */}

          <button
            className="
              absolute
              -left-6
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              border
              border-slate-200
              flex
              items-center
              justify-center
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}

          <button
            className="
              absolute
              -right-6
              top-1/2
              -translate-y-1/2
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              border
              border-slate-200
              flex
              items-center
              justify-center
            "
          >
            <ChevronRight size={20} />
          </button>

          {/* CARDS */}

          <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5">

            {providers.map((provider, index) => (
              <motion.div
                key={provider.name}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="
                  bg-[#0B0B16] 
                  rounded-[20px]
                  overflow-hidden
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                "
              >
                {/* IMAGE */}

                <div className="relative h-[150px]">
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}

                <div className="p-4">

                  <motion.h3
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      font-bold
                      text-[17px]
                      text-slate-300
                      mb-1
                    "
                  >
                    {provider.name}
                  </motion.h3>

                  <p className="text-sm text-slate-300 mb-4">
                    {provider.service}
                  </p>

                  {/* RATING */}

                  <div className="flex items-center gap-1 mb-4">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="font-semibold text-sm">
                      {provider.rating}
                    </span>

                    <span className="text-sm text-slate-200">
                      ({provider.reviews})
                    </span>
                  </div>

                  {/* STATS */}

                  <p className="text-[14px] font-medium text-slate-300 mb-5">
                    {provider.stat}
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                      w-full
                      h-11
                      rounded-xl
                      border
                      border-slate-200
                      text-purple-700
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                      hover:bg-purple-50
                      transition-all
                    "
                  >
                    {provider.button}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
