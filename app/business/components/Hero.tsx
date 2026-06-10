"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Star,
  ShieldCheck,
  MapPin,
  Bot,
  Activity,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const floating = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-600 shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              TRUSTED BUSINESSES, QUALITY PRODUCTS
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-bold leading-tight tracking-tight text-violet-600">
              Discover Businesses.
              <br />
              Shop. Connect.{" "}
              <motion.span
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-amber-600"
              >
                Thrive.
              </motion.span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl">
              Explore verified businesses and shop products
              or services directly from trusted vendors
              across Nigeria.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-10 flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="flex flex-1 items-center px-5">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for products, businesses, categories..."
                  className="w-full bg-transparent px-3 py-5 outline-none text-sm"
                />
              </div>

              <button className="bg-violet-600 hover:bg-violet-700 text-white px-10 font-medium transition-all">
                Search
              </button>
            </div>

            {/* POPULAR SEARCHES */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-500">
                Popular Searches:
              </span>

              {[
                "Phones",
                "Fashion",
                "Laptops",
                "Groceries",
                "Building Materials",
              ].map((item) => (
                <button
                  key={item}
                  className="rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:border-violet-300 hover:text-violet-600 transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="relative h-[650px] hidden lg:block">

            {/* MAP BACKGROUND */}
            <div
              className="absolute inset-0 rounded-[32px] shadow-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#0B0B16] backdrop-blur-[1px]" />
            </div>

            {/* MAP PINS */}
            <MapPin className="absolute top-28 left-40 h-10 w-10 text-blue-500 fill-blue-500" />
            <MapPin className="absolute top-48 left-72 h-10 w-10 text-orange-500 fill-orange-500" />
            <MapPin className="absolute top-64 left-36 h-10 w-10 text-emerald-500 fill-emerald-500" />

            {/* CARD 1 */}
            <motion.div
              {...floating}
              className="absolute top-0 left-0 w-[290px] rounded-[28px] bg-[#0B0B16] shadow-2xl p-4"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-white">
                  Urban Fashion Hub
                </h3>

                <p className="text-sm text-slate-300 mt-1">
                  Fashion • Accessories • Shoes
                </p>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="font-medium text-slate-300">
                      4.9 (230)
                    </span>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                    <ShieldCheck className="h-3 w-3" />
                    Verified
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-16 left-0 w-[290px] rounded-[28px] bg-[#0B0B16] shadow-2xl p-4"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-white">
                  Mama's Kitchen
                </h3>

                <p className="text-sm text-slate-300 mt-1">
                  Food • Drinks • Catering
                </p>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="font-medium text-slate-300">
                      4.8 (120)
                    </span>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                    Fast Delivery
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute bottom-4 left-[290px] w-[280px] rounded-[28px] bg-[#0B0B16] shadow-2xl p-4"
            >
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-white">
                  TechHub Electronics
                </h3>

                <p className="text-sm text-slate-300 mt-1">
                  Electronics • Gadgets • Accessories
                </p>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500" />
                    <span className="font-medium text-slate-400">
                      4.8 (180)
                    </span>
                  </div>

                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                    Verified
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
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute right-0 top-8 w-[290px] overflow-hidden rounded-[28px] bg-white shadow-2xl"
            >
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bot className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Dwell AI Assistant
                      </h4>
                      <p className="text-xs text-white/80">
                        Online
                      </p>
                    </div>
                  </div>

                  <Activity className="h-5 w-5" />
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="rounded-2xl bg-slate-100 p-4 text-sm">
                  Hi! I'm Dwell AI 👋
                  <br />
                  What are you looking for today?
                </div>

                <div className="ml-auto max-w-[170px] rounded-2xl bg-violet-600 p-4 text-sm text-white">
                  Gaming laptop
                  <br />
                  under ₦800,000
                </div>

                <div className="rounded-2xl bg-slate-100 p-4 text-sm">
                  I found 12 verified sellers
                  with great options for you.
                </div>

                <button className="w-full rounded-xl border py-3 font-medium text-violet-600 hover:bg-violet-50 transition flex justify-center gap-2">
                  View Results
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
