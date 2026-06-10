"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  UtensilsCrossed,
  Monitor,
  Sofa,
  SprayCan,
  HeartPulse,
  Car,
  Hammer,
  Leaf,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  {
    title: "Fashion",
    icon: Shirt,
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
  {
    title: "Food & Drinks",
    icon: UtensilsCrossed,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    title: "Electronics",
    icon: Monitor,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Home & Living",
    icon: Sofa,
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    title: "Beauty",
    icon: SprayCan,
    bg: "bg-pink-100",
    color: "text-pink-600",
  },
  {
    title: "Health",
    icon: HeartPulse,
    bg: "bg-cyan-100",
    color: "text-cyan-600",
  },
  {
    title: "Automotive",
    icon: Car,
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
  {
    title: "Construction",
    icon: Hammer,
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    title: "Agriculture",
    icon: Leaf,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    bg: "bg-slate-100",
    color: "text-slate-600",
  },
];

export default function Badges() {
  return (
    <section className="relative py-10 bg-[#0B0B16]">
      <div className="container mx-auto px-6 lg:px-12">

        {/* MAIN CONTAINER */}
        <div className="overflow-hidden rounded-[24px] bg-[#0B0B16] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    py-5
                    px-4
                    bg-[#0B0B16]
                    transition-all
                    duration-300
                    hover:bg-violet-500
                  "
                >
                  {/* Divider */}
                  {index !== categories.length - 1 && (
                    <div className="absolute right-0 top-0 h-full w-px hidden lg:block" />
                  )}

                  {/* Floating Icon */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      h-14
                      w-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ${item.bg}
                    `}
                  >
                    <Icon
                      className={`h-7 w-7 ${item.color}`}
                      strokeWidth={2.3}
                    />
                  </motion.div>

                  {/* Floating Text */}
                  <motion.span
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      text-sm
                      font-semibold
                      text-slate-300
                      text-center
                      whitespace-nowrap
                    "
                  >
                    {item.title}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}