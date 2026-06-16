"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Bus,
  Train,
  Car,
  Route,
  Van,
  Ship,
  Truck,
  MoreHorizontal,
} from "lucide-react";

const services = [
  {
    title: "Flights",
    icon: Plane,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Bus Transport",
    icon: Bus,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Train Services",
    icon: Train,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Ride Hailing",
    icon: Car,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Interstate Travel",
    icon: Route,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Airport Shuttle",
    icon: Van,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Water Transport",
    icon: Ship,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Logistics Fleet",
    icon: Truck,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function Badge() {
  return (
    <section className="bg-[#0B0B16] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            overflow-hidden
            shadow-[0_0_60px_rgba(124,58,237,0.08)]
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    py-8
                    px-4
                    border-r
                    border-b
                    lg:border-b-0
                    border-white/10
                    last:border-r-0
                    cursor-pointer
                    transition-all
                    duration-500
                    hover:bg-white/[0.04]
                  "
                >
                  {/* Glow Effect */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-all
                      duration-500
                      bg-gradient-to-b
                      from-purple-600/5
                      to-transparent
                    "
                  />

                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    className={`
                      relative
                      h-16
                      w-16
                      rounded-full
                      ${service.bg}
                      flex
                      items-center
                      justify-center
                      border
                      border-white/10
                    `}
                  >
                    <Icon
                      size={28}
                      className={service.color}
                    />
                  </motion.div>

                  {/* Label */}
                  <span
                    className="
                      text-white
                      text-sm
                      font-medium
                      text-center
                      leading-tight
                      group-hover:text-purple-400
                      transition-colors
                    "
                  >
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}