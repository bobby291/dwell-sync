"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const businesses = [
  {
    name: "HP Pavilion 15 Laptop",
    category: "Tech Electronics • ₦750,000",
    image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
    rating: "4.9",
    reviews: "230",
    badge: "Verified",
    featured: true,
  },
  {
    name: "iPhone 14 Pro Max",
    category: "Gadgets • ₦1,280,000",
    image:
      "https://images.unsplash.com/photo-1678911820864-e4c7c4f8c6d5?q=80&w=1200&auto=format&fit=crop",
    rating: "4.8",
    reviews: "180",
    badge: "Verified",
  },
  {
    name: "Nike Air Jordan",
    category: "Essentials • ₦120,000",
    image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    rating: "4.7",
    reviews: "98",
    badge: "Fast Delivery",
  },
  {
    name: "Elepaq Generator",
    category: "Power Solution • ₦320,000",
    image:
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
    rating: "4.6",
    reviews: "76",
    badge: "Verified",
  },
  {
    name: "Dior Sauvage 100ml",
    category: "Beauty • ₦95,000",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",    rating: "4.9",
    reviews: "140",
    badge: "Verified",
  },
];

export default function Featured() {
  return (
    <section className="relative py-20 bg-[#0B0B16]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <motion.h2
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-3xl font-bold text-amber-600"
          >
            Trends Products
          </motion.h2>

          <button className="hidden md:flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all">
            View all products
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">

          {/* LEFT NAV */}
          <button
            className="
              absolute
              -left-8
              top-1/2
              z-20
              hidden
              lg:flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
            "
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* RIGHT NAV */}
          <button
            className="
              absolute
              -right-8
              top-1/2
              z-20
              hidden
              lg:flex
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
              border
              border-slate-100
            "
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {businesses.map((business, index) => (
              <motion.div
                key={business.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  bg-[#0B0B16]
                  shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                "
              >
                {/* IMAGE */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.name}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                  {business.featured && (
                    <div className="absolute left-3 top-3 rounded-full bg-violet-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                      Featured
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-5">

                  <motion.h3
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="text-xl font-bold text-slate-300"
                  >
                    {business.name}
                  </motion.h3>

                  <p className="mt-1 text-sm text-slate-300">
                    {business.category}
                  </p>

                  {/* RATING */}
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-semibold text-slate-300">
                        {business.rating}
                      </span>

                      <span className="text-slate-400">
                        ({business.reviews})
                      </span>
                    </div>

                    {business.badge === "Verified" ? (
                      <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        <ShieldCheck className="h-3 w-3" />
                        Verified
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        <Truck className="h-3 w-3" />
                        Fast Delivery
                      </div>
                    )}
                  </div>

                  {/* BUTTON */}
                  <button
                    className="
                      mt-6
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-200
                      py-3
                      font-semibold
                      text-violet-600
                      transition-all
                      hover:bg-violet-50
                      hover:gap-3
                    "
                  >
                    Buy Now
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-violet-600 font-semibold">
              View all businesses
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}