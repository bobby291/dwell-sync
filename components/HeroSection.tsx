"use client";

import { motion } from "framer-motion";
import {
  Search,
  Home,
  Store,
  Wrench,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Live",
    description: "Find your perfect stay",
    icon: Home,
  },
  {
    title: "Businesses",
    description: "Shop & discover",
    icon: Store,
  },
  {
    title: "Services",
    description: "Book trusted pros",
    icon: Wrench,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#0B0B16]">
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-0 top-[35%] h-[400px] w-[400px] rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-0 top-[30%] h-[400px] w-[400px] rounded-full bg-indigo-700/10 blur-[140px]" />

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl items-center justify-center px-5 py-16 lg:px-10">
        {/* =================================================
            CENTERED CONTENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full max-w-6xl flex-col items-center text-center"
        >
          {/* =================================================
              BADGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-[#8B7CFF]" />

            <span className="text-xs font-semibold uppercase tracking-wider text-[#A99EFF]">
              AI-Powered. Community Driven.
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block">Live.</span>

            <span className="block">
              Connect.{" "}
              <span className="bg-gradient-to-r from-[#8B7CFF] via-[#A78BFA] to-[#6C4AF2] bg-clip-text text-transparent">
                Thrive.
              </span>
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg"
          >
            DwellSync is an all-in-one infrastructure that connects
            accommodation, living, amenities, businesses and services into
            one intelligent ecosystem.
          </motion.p>

          {/* =================================================
              SEARCH SECTION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-9 w-full max-w-3xl"
          >
            {/* Search Box */}

            <div className="flex w-full overflow-hidden rounded-2xl border border-purple-800/30 bg-[#141424] shadow-2xl shadow-purple-950/20 transition-all duration-300 focus-within:border-purple-500/50">
              <div className="flex flex-1 items-center gap-3 px-5">
                <Search className="h-5 w-5 shrink-0 text-gray-500" />

                <input
                  type="text"
                  placeholder="Search for accommodation, services, businesses..."
                  className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-500 sm:text-base"
                />
              </div>

              <button
                type="button"
                className="bg-gradient-to-r from-[#6C4AF2] to-[#8B7CFF] px-7 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 sm:px-10"
              >
                Search
              </button>
            </div>

            {/* =================================================
                POPULAR SEARCHES
            ================================================== */}

           {/* <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-medium text-gray-500">
                Popular Searches:
              </span>

              {[
                "Apartments in Abuja",
                "Transport to Lagos",
                "Laundry Services",
                "Delivery",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-gray-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
                >
                  {item}
                </button>
              ))}
            </div> */} 
          </motion.div>

          {/* =================================================
              SERVICE CARDS
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-10 flex w-full max-w-3xl flex-wrap items-center justify-center gap-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="group flex w-full max-w-[220px] flex-col items-center rounded-2xl border border-purple-900/20 bg-[#131325] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#17172B] hover:shadow-xl hover:shadow-purple-950/20 sm:w-[200px]"
                >
                  {/* Icon */}

                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 transition-all duration-300 group-hover:bg-purple-500/20">
                    <Icon className="h-5 w-5 text-[#8B7CFF]" />
                  </div>

                  {/* Title */}

                  <h3 className="text-sm font-semibold text-white">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-1 text-xs text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}