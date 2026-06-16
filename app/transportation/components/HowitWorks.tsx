"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  CreditCard,
  Ticket,
  Headset,
} from "lucide-react";

const benefits = [
  {
    title: "Verified Providers",
    description:
      "All transport companies are verified and trusted.",
    icon: ShieldCheck,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "Best Prices",
    description:
      "Compare prices and get the best travel deals.",
    icon: BadgeDollarSign,
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    title: "Live Availability",
    description:
      "Real-time seats and tickets availability.",
    icon: Clock3,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "Secure Payments",
    description:
      "Your payments are safe and protected.",
    icon: CreditCard,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    title: "Instant Tickets",
    description:
      "Get your tickets instantly after booking.",
    icon: Ticket,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    title: "24/7 Support",
    description:
      "We're here to help you anytime, anywhere.",
    icon: Headset,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
];

export default function Howitwork() {
  return (
    <section className="relative py-20 bg-[#0B0B16] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-amber-600/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Book With
            <span className="text-purple-600">
              {" "}DwellSync?
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl">
            Experience a smarter way to travel with trusted
            providers, secure payments, and instant booking.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                className="
                  group
                  relative
                  p-6
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:border-purple-600/30
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-600/5 via-transparent to-amber-600/5" />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 8,
                  }}
                  className={`
                    h-16
                    w-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    border
                    mb-5
                    ${item.bgColor}
                    ${item.borderColor}
                  `}
                >
                  <Icon
                    size={30}
                    className={item.iconColor}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}