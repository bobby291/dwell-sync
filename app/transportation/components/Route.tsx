"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plane,
  Train,
  Bus,
  Car,
  Truck,
  ArrowRight,
  Star,
  ChevronRight,
} from "lucide-react";

const routes = [
  {
    route: "Lagos → Abuja",
    type: "Flights • Buses • Trains",
    icon: Plane,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    route: "Abuja → Kaduna",
    type: "From ₦6,500",
    icon: Train,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    route: "Port Harcourt → Lagos",
    type: "From ₦28,000",
    icon: Bus,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    route: "Enugu → Abuja",
    type: "From ₦12,000",
    icon: Car,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    route: "Ibadan → Lagos",
    type: "From ₦12,500",
    icon: Truck,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    route: "Kano → Abuja",
    type: "From ₦35,000",
    icon: Bus,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

const providers = [
  {
    name: "Air Peace",
    rating: "4.8",
    reviews: "230",
    trips: "120 Routes",
    button: "View Flights",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  {
    name: "ABC Transport",
    rating: "4.7",
    reviews: "180",
    trips: "50 Daily Trips",
    button: "Book Seat",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    name: "NRC Railway",
    rating: "4.6",
    reviews: "150",
    trips: "30 Routes",
    button: "View Schedule",
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
  },
  {
    name: "Bolt",
    rating: "4.8",
    reviews: "320",
    trips: "Available Nationwide",
    button: "Book Ride",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
  },
  {
    name: "Chisco Transport",
    rating: "4.5",
    reviews: "98",
    trips: "15 Daily Trips",
    button: "Book Seat",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
  },
];

export default function Route() {
  return (
    <section className="bg-[#0B0B16] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[420px_1fr] gap-10">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-3xl font-bold">
                Popular Routes
              </h2>

              <button className="flex items-center gap-2 text-purple-500 font-medium">
                View all routes
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

              {routes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      px-6
                      py-5
                      border-b
                      border-white/10
                      last:border-b-0
                      hover:bg-white/[0.03]
                      transition
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`
                          h-12
                          w-12
                          rounded-full
                          ${item.bg}
                          flex
                          items-center
                          justify-center
                        `}
                      >
                        <Icon
                          size={22}
                          className={item.color}
                        />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold">
                          {item.route}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          {item.type}
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      className="text-gray-500"
                      size={20}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-3xl font-bold">
                Featured Providers
              </h2>

              <button className="flex items-center gap-2 text-purple-500 font-medium">
                View all providers
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

              {providers.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    overflow-hidden
                    shadow-[0_0_40px_rgba(124,58,237,0.08)]
                  "
                >
                  <div className="relative h-40">
                    <Image
                      src={provider.image}
                      alt={provider.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5">

                    <h3 className="text-white font-bold text-lg">
                      {provider.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-3">
                      <Star
                        size={14}
                        className="fill-amber-500 text-amber-500"
                      />

                      <span className="text-amber-500 text-sm font-medium">
                        {provider.rating}
                      </span>

                      <span className="text-gray-400 text-sm">
                        ({provider.reviews})
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm mt-4">
                      {provider.trips}
                    </p>

                    <button
                      className="
                        mt-5
                        w-full
                        h-11
                        rounded-xl
                        border
                        border-purple-600/30
                        bg-purple-600/10
                        text-purple-400
                        font-medium
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-purple-600
                        hover:text-white
                        transition-all
                      "
                    >
                      {provider.button}
                      <ArrowRight size={15} />
                    </button>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}