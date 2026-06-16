"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  ArrowRightLeft,
  Plane,
  Bus,
  Train,
  Search,
  Sparkles,
  MapPin,
} from "lucide-react";

const floating = {
  animated: {
    y: [0, -12, 0] as number[],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: [0.42, 0, 0.53, 1] as const,
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] min-h-screen pt-28">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-purple-600/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] bg-amber-600/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              animate={floating.animated}
              transition={floating.transition}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/40 bg-white/5 backdrop-blur-md text-purple-400 text-sm font-medium mb-8"
            >
              <Sparkles size={15} />
              TRAVEL SMARTER, BOOK FASTER
            </motion.div>

            {/* Heading */}
            <motion.div animate={floating.animated}
            transition={floating.transition}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Travel Smarter.
                <br />
                Book Faster.
                <br />
                <span className="text-purple-600">
                  Arrive Better.
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
                Compare flights, buses, trains, ride services and
                shuttle providers across Nigeria and beyond.
              </p>
            </motion.div>

            {/* Search Box */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_rgba(124,58,237,0.15)]"
            >
              <div className="grid grid-cols-2">
                <div className="p-6 border-b border-r border-white/10">
                  <p className="text-gray-400 text-sm mb-2">From</p>
                  <h3 className="text-white font-semibold text-lg">
                    Lagos
                  </h3>
                </div>

                <div className="relative p-6 border-b border-white/10">
                  <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 h-9 w-9 rounded-full flex items-center justify-center">
                    {/** <ArrowRightLeft size={16} />  */}
                  </div>

                  <p className="text-gray-400 text-sm mb-2">To</p>
                  <h3 className="text-white font-semibold text-lg">
                    Abuja
                  </h3>
                </div>

                <div className="p-6 border-r border-white/10">
                  <p className="text-gray-400 text-sm mb-2">
                    Departure
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">
                      28 Jul, 2026
                    </span>

                    <Calendar
                      size={20}
                      className="text-purple-500"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-2">
                    Passengers
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">
                      2 Passengers
                    </span>

                    <Users
                      size={20}
                      className="text-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition">
                  <Search size={18} />
                  Search Trips
                </button>
              </div>
            </motion.div>

            {/* Popular Searches */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-gray-400 text-sm">
                Popular Searches:
              </span>

              {[
                "Lagos to Abuja",
                "Abuja to Port Harcourt",
                "Lagos to Enugu",
                "Kano to Abuja",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative h-[750px] hidden lg:block">
            {/* MAP */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
                alt=""
                fill
                className="object-cover opacity-25"
              />

              <div className="absolute inset-0 bg-[#0B0B16]/70" />

              {/* Route Pins */}
              <div className="absolute top-28 left-40">
                <MapPin className="text-purple-600" size={30} />
              </div>

              <div className="absolute top-56 left-72">
                <MapPin className="text-amber-600" size={30} />
              </div>

              <div className="absolute bottom-40 left-56">
                <MapPin className="text-green-500" size={30} />
              </div>
            </div>

            {/* FLIGHT CARD */}
            <motion.div
              animate={floating.animated}
              transition={floating.transition}
              className="absolute left-0 top-0 w-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white">Air Peace</h3>

                <p className="text-gray-300 text-sm mt-1">
                  Lagos → Abuja
                </p>

                <div className="flex justify-between mt-4 text-sm">
                  <div>
                    <p className="text-white">08:30 AM</p>
                    <span className="text-gray-400">
                      Departure
                    </span>
                  </div>

                  <div>
                    <p className="text-white">09:45 AM</p>
                    <span className="text-gray-400">
                      Arrival
                    </span>
                  </div>
                </div>

                <div className="flex justify-between mt-5">
                  <span className="font-bold text-white">
                    ₦95,000
                  </span>

                  <span className="text-amber-600 text-sm">
                    15 Seats Left
                  </span>
                </div>
              </div>
            </motion.div>

            {/* BUS CARD */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
              className="absolute left-10 bottom-16 w-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white">
                  ABC Transport
                </h3>

                <p className="text-gray-300 text-sm">
                  Port Harcourt → Lagos
                </p>

                <div className="flex justify-between mt-5">
                  <span className="text-white font-bold">
                    ₦28,000
                  </span>

                  <span className="text-amber-600 text-sm">
                    12 Seats Left
                  </span>
                </div>
              </div>
            </motion.div>

            {/* TRAIN CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-0 right-40 w-64 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white">
                  NRC Railway
                </h3>

                <p className="text-gray-300 text-sm">
                  Abuja → Kaduna
                </p>

                <div className="flex justify-between mt-5">
                  <span className="text-white font-bold">
                    ₦6,500
                  </span>

                  <span className="text-green-500 text-sm">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>

            {/* AI ASSISTANT */}
            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute right-0 top-10 w-[300px] rounded-[32px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-xl"
            >
              <div className="bg-gradient-to-r from-purple-700 to-purple-600 p-4">
                <h3 className="text-white font-semibold">
                  Dwell AI Assistant
                </h3>

                <p className="text-white/80 text-xs">
                  Online
                </p>
              </div>

              <div className="p-5 space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl">
                  <p className="text-white text-sm">
                    Hi I'm Dwell AI 👋
                    <br />
                    How can I help plan your trip today?
                  </p>
                </div>

                <div className="ml-auto bg-purple-600 text-white p-3 rounded-2xl w-fit max-w-[220px] text-sm">
                  Cheapest trip from Lagos to Abuja
                </div>

                <div className="bg-white/5 p-4 rounded-2xl">
                  <p className="text-white text-sm mb-3">
                    Here are the best options:
                  </p>

                  <ul className="space-y-2 text-sm">
                    <li className="text-green-400">
                      ✓ Flight from ₦95,000
                    </li>
                    <li className="text-green-400">
                      ✓ Bus from ₦28,000
                    </li>
                    <li className="text-green-400">
                      ✓ Train from ₦12,000
                    </li>
                  </ul>

                  <div className="mt-4 text-white">
                    Recommended:
                    <span className="text-amber-600 ml-2">
                      ABC Transport
                    </span>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl border border-white/10 text-purple-400 font-medium">
                  View All Options
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}