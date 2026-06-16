"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Filter,
  ArrowRight,
  ShieldCheck,
  Lock,
  BadgeDollarSign,
  Clock3,
  MapPinned,
  Phone,
} from "lucide-react";

const tabs = [
  "All Services",
  "Courier",
  "Trucks",
  "Cargo",
  "Warehousing",
  "Moving",
  "International",
];

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200",
    company: "QuickShip Logistics",
    type: "Same Day Delivery",
    from: "Port Harcourt",
    to: "Abuja",
    duration: "24 Hours",
    price: "From ₦4,500",
    note: "Available Today",
    button: "Request Service",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200",
    company: "Prime Haulage",
    type: "Truck Service",
    from: "Lagos",
    to: "Kano",
    duration: "3 Days",
    price: "From ₦150,000",
    note: "5 Ton Capacity",
    button: "Book Truck",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200",
    company: "Global Cargo",
    type: "Air Freight",
    from: "Nigeria",
    to: "United Kingdom",
    duration: "5 - 7 Days",
    price: "Quote Required",
    note: "Get best rates",
    button: "Get Quote",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200",
    company: "MoveIt Services",
    type: "Office Relocation",
    from: "Abuja",
    to: "Lagos",
    duration: "2 Days",
    price: "From ₦200,000",
    note: "Full Service",
    button: "Request Service",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Verified & Trusted Providers",
    text: "All logistics companies are verified for your peace of mind.",
    color: "text-purple-600 bg-purple-100",
  },
  {
    icon: Lock,
    title: "Secure & Safe",
    text: "Packages and goods protected every step of the way.",
    color: "text-cyan-600 bg-cyan-100",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Quotes",
    text: "Compare pricing and choose the best option.",
    color: "text-orange-500 bg-orange-100",
  },
  {
    icon: Clock3,
    title: "Real-Time Availability",
    text: "Instant booking and availability updates.",
    color: "text-teal-600 bg-teal-100",
  },
  {
    icon: MapPinned,
    title: "Nationwide Coverage",
    text: "Available across major cities in Nigeria.",
    color: "text-yellow-600 bg-yellow-100",
  },
  {
    icon: Phone,
    title: "Direct Communication",
    text: "Chat or call providers directly.",
    color: "text-green-600 bg-green-100",
  },
];

export default function Available() {
  return (
    <section className="py-14 bg-[#0B0B16] ">
      <div className="container mx-auto px-6">

        <div className="grid xl:grid-cols-[1.8fr_1fr] gap-6">

          {/* SERVICES PANEL */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B0B16]  rounded-[28px] shadow-sm p-5"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-purple-600">
                Available Logistics Services
              </h2>

              <button className="h-11 px-4 rounded-xl border border-slate-200 flex items-center gap-2 text-slate-600">
                <Filter size={16} />
                Filter
              </button>
            </div>

            {/* TABS */}

            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`h-10 px-4 rounded-xl text-sm font-medium transition
                    ${
                      index === 0
                        ? "bg-gradient-to-r from-purple-700 to-violet-500 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* SERVICES */}

            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.company}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    p-3
                    flex
                    items-center
                    gap-4
                    bg-white
                  "
                >
                  <div className="relative h-16 w-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.company}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 grid grid-cols-5 items-center gap-4">

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {service.company}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {service.type}
                      </p>
                    </div>

                    <div className="text-sm font-medium text-slate-700">
                      {service.from}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <ArrowRight size={14} />
                      {service.to}
                    </div>

                    <div className="text-sm text-slate-600">
                      {service.duration}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {service.price}
                      </h4>
                      <p className="text-green-600 text-sm font-medium">
                        {service.note}
                      </p>
                    </div>
                  </div>

                  <button
                    className="
                      h-11
                      px-5
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-700
                      to-violet-500
                      text-white
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    {service.button}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WHY CHOOSE US */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[28px]
              border
              border-slate-200
              shadow-sm
              p-6
            "
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Why Choose DwellSync Logistics?
              </h3>

              <button className="text-purple-700 font-semibold text-sm flex items-center gap-2">
                View all services
                <ArrowRight size={15} />
              </button>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                    }}
                    className="flex gap-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${feature.color}`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>

                      <p className="text-sm text-slate-500 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}