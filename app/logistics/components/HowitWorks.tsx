"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardList,
  WalletCards,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Search Service",
    description:
      "Tell us what and where you need to move.",
    icon: Search,
  },
  {
    id: "2",
    title: "Compare Providers",
    description:
      "View options, prices and delivery times.",
    icon: ClipboardList,
  },
  {
    id: "3",
    title: "Request Quote",
    description:
      "Request a quote or select a service that fits you.",
    icon: WalletCards,
  },
  {
    id: "4",
    title: "Book & Confirm",
    description:
      "Confirm your booking and make secure payment.",
    icon: BadgeCheck,
  },
  {
    id: "5",
    title: "We Deliver",
    description:
      "Sit back while we move it safely to you.",
    icon: PackageCheck,
  },
];

export default function HowitWorks() {
  return (
    <section className="py-24 bg-[#0B0B16]  overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-[36px] font-bold text-amber-600">
            How It Works
          </h2>
        </motion.div>

        {/* Desktop */}

        <div className="hidden lg:flex items-start justify-between relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center w-[220px]"
              >
                {/* Connector */}

                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      top-[34px]
                      left-[130px]
                      w-[180px]
                      border-t-2
                      border-dashed
                      border-purple-200
                    "
                  />
                )}

                {/* Arrow */}

                {index < steps.length - 1 && (
                  <motion.div
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="
                      absolute
                      top-[25px]
                      left-[305px]
                      text-purple-300
                      text-xl
                    "
                  >
                    →
                  </motion.div>
                )}

                {/* Icon Circle */}

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + index,
                  }}
                  className="
                    relative
                    w-16
                    h-16
                    rounded-full
                    bg-purple-50
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    shadow-purple-100
                    mb-5
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-purple-500/10
                      blur-xl
                    "
                  />

                  <Icon
                    size={28}
                    className="text-purple-600 relative z-10"
                  />
                </motion.div>

                {/* Title */}

                <motion.h3
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="
                    font-bold
                    text-[17px]
                    text-slate-300
                    mb-2
                    text-center
                  "
                >
                  {step.id}. {step.title}
                </motion.h3>

                {/* Description */}

                <p
                  className="
                    text-slate-400
                    text-sm
                    leading-relaxed
                    text-center
                    max-w-[180px]
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile */}

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  bg-white
                  rounded-2xl
                  p-5
                  border
                  border-slate-200
                  flex
                  gap-4
                  items-start
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-purple-50
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <Icon
                    size={24}
                    className="text-purple-600"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {step.id}. {step.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}