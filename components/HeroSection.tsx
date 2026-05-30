"use client";

import { motion } from "framer-motion";
import {
  Search,
  Home,
  Car,
  Truck,
  Store,
  Wrench,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Accommodation",
    description: "Find your perfect stay",
    icon: Home,
  },
  {
    title: "Transportation",
    description: "Book your ride",
    icon: Car,
  },
  {
    title: "Logistics",
    description: "Deliver anything",
    icon: Truck,
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
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-700/10 blur-[140px]" />
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-indigo-700/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 lg:px-10">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#8B7CFF]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A99EFF]">
                AI-Powered. Community Driven.
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-white lg:text-7xl">
              Live.
              <br />
              Relocate.
              <br />
              Connect.{" "}
              <span className="bg-gradient-to-r from-[#8B7CFF] via-[#A78BFA] to-[#6C4AF2] bg-clip-text text-transparent">
                Thrive.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              DwellSync is an all-in-one infrastructure that connects
              accommodation, transportation, logistics, businesses and
              services into one intelligent ecosystem.
            </p>

            {/* Search Box */}
            <div className="mt-8">
              <div className="flex overflow-hidden rounded-2xl border border-purple-800/20 bg-[#141424] shadow-xl">
                <div className="flex flex-1 items-center gap-3 px-5">
                  <Search className="h-5 w-5 text-gray-500" />

                  <input
                    type="text"
                    placeholder="Search for accommodation, services, businesses..."
                    className="w-full bg-transparent py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none"
                  />
                </div>

                <button className="bg-gradient-to-r from-[#6C4AF2] to-[#8B7CFF] px-8 text-sm font-semibold text-white transition hover:opacity-90">
                  Search
                </button>
              </div>

              {/* Popular Searches */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
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
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-gray-300 transition hover:border-purple-400 hover:bg-purple-500/20"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="group rounded-2xl border border-purple-900/20 bg-[#131325] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-[#8B7CFF]" />
                    </div>

                    <h3 className="text-sm font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative h-[620px] w-full overflow-hidden rounded-[50px] border border-purple-800/20">
              <Image
                src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Apartment"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B16]/50 to-transparent" />
            </div>

            {/* AI Assistant Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-0 w-[320px] rounded-3xl border border-purple-700/20 bg-[#161628]/95 p-5 backdrop-blur-xl"
            >
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#6C4AF2] to-[#8B7CFF]">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    Dwell AI Assistant
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Get smart recommendations and personalized help.
                  </p>

                  <button className="mt-3 flex items-center gap-2 text-sm font-medium text-[#8B7CFF]">
                    Ask Dwell AI
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}