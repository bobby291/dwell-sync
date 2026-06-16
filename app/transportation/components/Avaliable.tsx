"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeftRight,
  Filter,
} from "lucide-react";

const trips = [
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    provider: "Air Peace",
    from: "Lagos (LOS)",
    departure: "08:30 AM",
    to: "Abuja (ABV)",
    arrival: "09:45 AM",
    duration: "1h 15m",
    price: "₦95,000",
    status: "15 Seats Left",
    statusColor: "text-amber-500",
    button: "Book Ticket",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    provider: "ABC Transport",
    from: "Port Harcourt",
    departure: "06:00 AM",
    to: "Lagos",
    arrival: "03:30 PM",
    duration: "9h 30m",
    price: "₦28,000",
    status: "12 Seats Left",
    statusColor: "text-amber-500",
    button: "Book Ticket",
  },
  {
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    provider: "NRC Railway",
    from: "Abuja",
    departure: "10:00 AM",
    to: "Kaduna",
    arrival: "12:00 PM",
    duration: "2h 00m",
    price: "₦6,500",
    status: "Available",
    statusColor: "text-green-500",
    button: "Book Ticket",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
    provider: "Bolt Ride",
    from: "Lagos",
    departure: "—",
    to: "Abuja",
    arrival: "—",
    duration: "—",
    price: "From ₦35,000",
    status: "Available",
    statusColor: "text-green-500",
    button: "Book Ride",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e",
    provider: "Chisco Transport",
    from: "Lagos",
    departure: "07:00 AM",
    to: "Enugu",
    arrival: "04:00 PM",
    duration: "9h 00m",
    price: "₦20,000",
    status: "10 Seats Left",
    statusColor: "text-amber-500",
    button: "Book Ticket",
  },
];

const upcoming = [
  {
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    provider: "Air Peace",
    route: "Lagos → Abuja",
    date: "29 July, 2026",
    time: "08:30 AM",
    ref: "AP12345LOSABV",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    provider: "ABC Transport",
    route: "Port Harcourt → Lagos",
    date: "30 July, 2026",
    time: "06:00 AM",
    ref: "ABC9876PHCLAG",
  },
  {
    image:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    provider: "NRC Railway",
    route: "Abuja → Kaduna",
    date: "02 Aug, 2026",
    time: "10:00 AM",
    ref: "NRC5567ABVKAD",
  },
];

export default function Available() {
  return (
    <section className="bg-[#0B0B16] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.9fr_0.9fr] gap-8">

          {/* LEFT */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10">

              <div className="flex items-center justify-between">

                <h2 className="text-3xl font-bold text-white">
                  Available Trips
                </h2>

                <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-gray-300 hover:border-purple-600">
                  <Filter size={16} />
                  Filter
                </button>

              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-3 mt-6">

                {[
                  "All",
                  "Flights",
                  "Buses",
                  "Trains",
                  "Shuttle",
                  "Rides",
                ].map((tab, index) => (
                  <button
                    key={tab}
                    className={`px-5 py-2 rounded-xl text-sm font-medium transition ${
                      index === 0
                        ? "bg-purple-600 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Trips */}
            <div className="p-4">

              {trips.map((trip, index) => (
                <motion.div
                  key={trip.provider}
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                  }}
                  className="
                    grid
                    grid-cols-[95px_1fr]
                    lg:grid-cols-[95px_140px_1fr_40px_1fr_100px_130px_140px]
                    items-center
                    gap-4
                    p-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    mb-4
                  "
                >
                  <div className="relative h-16 w-full rounded-xl overflow-hidden">
                    <Image
                      src={trip.image}
                      alt={trip.provider}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="font-semibold text-white">
                    {trip.provider}
                  </h3>

                  <div>
                    <p className="text-gray-400 text-sm">{trip.from}</p>
                    <p className="text-white font-medium">
                      {trip.departure}
                    </p>
                  </div>

                  <ArrowLeftRight
                    size={18}
                    className="text-purple-500"
                  />

                  <div>
                    <p className="text-gray-400 text-sm">{trip.to}</p>
                    <p className="text-white font-medium">
                      {trip.arrival}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {trip.duration}
                  </p>

                  <div>
                    <h4 className="font-bold text-white">
                      {trip.price}
                    </h4>

                    <p
                      className={`text-sm ${trip.statusColor}`}
                    >
                      {trip.status}
                    </p>
                  </div>

                  <button className="h-11 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
                    {trip.button}
                  </button>
                </motion.div>
              ))}

              <div className="text-center pt-6">
                <button className="inline-flex items-center gap-2 text-purple-500 font-medium">
                  View more trips
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-white">
                My Upcoming Trips
              </h2>

              <button className="text-purple-500 flex items-center gap-2">
                View all bookings
                <ArrowRight size={15} />
              </button>

            </div>

            <div className="p-5 space-y-5">

              {upcoming.map((trip, index) => (
                <motion.div
                  key={trip.provider}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <div className="p-4 flex gap-4">

                    <div className="relative h-20 w-24 rounded-xl overflow-hidden">
                      <Image
                        src={trip.image}
                        alt={trip.provider}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-white">
                        {trip.provider}
                      </h3>

                      <p className="text-gray-300 mt-1">
                        {trip.route}
                      </p>

                      <div className="flex justify-between mt-3">
                        <span className="text-gray-400 text-sm">
                          {trip.date}
                        </span>

                        <span className="text-white text-sm">
                          {trip.time}
                        </span>

                        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
                          Confirmed
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-white/10 p-4 flex justify-between items-center">

                    <div>
                      <p className="text-gray-500 text-xs">
                        Booking Ref:
                      </p>

                      <p className="text-gray-300 text-sm">
                        {trip.ref}
                      </p>
                    </div>

                    <button className="px-5 py-2 rounded-xl border border-purple-600/30 text-purple-400 hover:bg-purple-600 hover:text-white transition">
                      View Ticket
                    </button>

                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}