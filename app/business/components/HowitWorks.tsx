"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  Truck,
  PhoneCall,
  Bot,
} from "lucide-react";

const features = [
  {
    title: "Verified Businesses",
    description:
      "All businesses are verified for your safety.",
    icon: ShieldCheck,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    title: "Secure Payments",
    description:
      "Pay safely with multiple secure options.",
    icon: CreditCard,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery to your doorstep.",
    icon: Truck,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Direct Contact",
    description:
      "Chat or call vendors directly.",
    icon: PhoneCall,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    title: "AI Recommendations",
    description:
      "Smart suggestions tailored just for you.",
    icon: Bot,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function HowitWork() {
  return (
    <section className="relative bg-[#0B0B16] py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        {/* SECTION TITLE */}
        <motion.h2
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            mb-8
            text-3xl
            font-bold
            tracking-tight
            text-violet-600
          "
        >
          Why Shop on DwellSync?
        </motion.h2>

        {/* MAIN CONTAINER */}
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-slate-100
            bg-white
            shadow-[0_12px_40px_rgba(0,0,0,0.04)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    relative
                    flex
                    items-start
                    gap-4
                    p-8
                    transition-all
                    duration-300
                  "
                >
                  {/* DESKTOP DIVIDER */}
                  {index !== features.length - 1 && (
                    <div
                      className="
                        absolute
                        right-0
                        top-1/2
                        hidden
                        h-[70%]
                        w-px
                        -translate-y-1/2
                        bg-slate-100
                        lg:block
                      "
                    />
                  )}

                  {/* ICON */}
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
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      ${feature.iconBg}
                    `}
                  >
                    <Icon
                      className={`h-8 w-8 ${feature.iconColor}`}
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* TEXT */}
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
                        mb-2
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      animate={{
                        y: [0, -1, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                      }}
                      className="
                        text-sm
                        leading-relaxed
                        text-slate-500
                      "
                    >
                      {feature.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}