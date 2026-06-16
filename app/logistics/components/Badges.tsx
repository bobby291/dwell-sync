"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Ship,
  Move,
  Warehouse,
  Plane,
  Bike,
  MapPinned,
  Globe,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  {
    title: "Courier Delivery",
    icon: Package,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Truck Haulage",
    icon: Truck,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "Cargo Shipping",
    icon: Ship,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Moving Services",
    icon: Move,
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    title: "Warehouse",
    icon: Warehouse,
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Freight Forwarding",
    icon: Plane,
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Bike Delivery",
    icon: Bike,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Last Mile Delivery",
    icon: MapPinned,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "International Shipping",
    icon: Globe,
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    color: "bg-slate-100",
    iconColor: "text-slate-500",
  },
];

export default function Badges() {
  return (
    <section className="py-6 bg-[#0B0B16] ">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            bg-[#0B0B16] 
            rounded-3xl
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            overflow-x-auto
          "
        >
          <div className="min-w-[1200px] grid grid-cols-10">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    py-8
                    cursor-pointer
                    transition-all
                  "
                >
                  <div
                    className={`
                      w-14
                      h-14
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ${item.color}
                    `}
                  >
                    <Icon
                      size={24}
                      className={item.iconColor}
                      strokeWidth={2.2}
                    />
                  </div>

                  <motion.span
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="
                      text-[15px]
                      font-semibold
                      text-slate-200
                      text-center
                      leading-tight
                      px-2
                    "
                  >
                    {item.title}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}