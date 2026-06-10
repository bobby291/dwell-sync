"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const products = [
  {
    name: "HP Pavilion 15 Laptop",
    price: "₦750,000",
    seller: "TechHub Electronics",
    rating: "4.8",
    reviews: "180",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "iPhone 14 Pro Max",
    price: "₦1,280,000",
    seller: "TechHub Electronics",
    rating: "4.9",
    reviews: "210",
    image:
      "https://images.unsplash.com/photo-1678911820864-e4c7c4f8c6d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nike Air Jordan 1",
    price: "₦120,000",
    seller: "Urban Fashion Hub",
    rating: "4.9",
    reviews: "230",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Elepaq Generator 3.5KV",
    price: "₦320,000",
    seller: "Prime Power Solutions",
    rating: "4.7",
    reviews: "95",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dior Sauvage 100ml",
    price: "₦95,000",
    seller: "Glow Beauty Studio",
    rating: "4.8",
    reviews: "140",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ergonomic Office Chair",
    price: "₦85,000",
    seller: "Urban Furniture",
    rating: "4.6",
    reviews: "76",
    image:
      "https://images.unsplash.com/photo-1505843490701-5be5d1b54f84?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section className="relative bg-[#0B0B16] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between">
          <motion.h2
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-3xl font-bold text-amber-600"
          >
            Trending Products
          </motion.h2>

          <button className="hidden md:flex items-center gap-2 font-semibold text-violet-600 transition-all hover:gap-3">
            View all products
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            className="
              hidden lg:flex
              absolute
              left-[-30px]
              top-1/2
              z-20
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              border
              border-slate-100
              shadow-xl
            "
          >
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="
              hidden lg:flex
              absolute
              right-[-30px]
              top-1/2
              z-20
              h-12
              w-12
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-white
              border
              border-slate-100
              shadow-xl
            "
          >
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* PRODUCTS GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -12,
                }}
                className="
                  group
                  rounded-[24px]
                  bg-[#0B0B16]
                  p-4
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  transition-all
                "
              >
                {/* IMAGE */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.2,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    mb-4
                    h-[170px]
                    overflow-hidden
                    rounded-2xl
                    bg-[#0B0B16]
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="
                      object-contain
                      p-4
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </motion.div>

                {/* PRODUCT INFO */}
                <div>
                  <motion.h3
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      line-clamp-2
                      text-lg
                      font-semibold
                      text-slate-300
                    "
                  >
                    {product.name}
                  </motion.h3>

                  <motion.p
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                    }}
                    className="
                      mt-2
                      text-2xl
                      font-bold
                      text-slate-500
                    "
                  >
                    {product.price}
                  </motion.p>

                  <p className="mt-1 text-sm text-slate-300">
                    {product.seller}
                  </p>

                  {/* RATING */}
                  <div className="mt-3 flex items-center gap-2">
                    <Star
                      className="
                        h-4
                        w-4
                        fill-yellow-400
                        text-yellow-400
                      "
                    />

                    <span className="font-medium text-slate-300">
                      {product.rating}
                    </span>

                    <span className="text-slate-300">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* MOBILE LINK */}
          <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 font-semibold text-violet-600">
              View all products
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}