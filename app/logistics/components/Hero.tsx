"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Truck,
  Ship,
  Clock3,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <span className="h-2 w-2 rounded-full bg-purple-600"></span>
              SMART LOGISTICS, RELIABLE DELIVERY
            </div>

            <motion.h1
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-purple-600"
            >
              Move Anything.
              <br />
              Deliver Anywhere.
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-slate-200 bg-clip-text text-transparent">
                Powered By DwellSync.
              </span>
            </motion.h1>

            <p className="mt-6 text-lg text-slate-200 max-w-xl">
              Compare logistics and delivery services, get quotes,
              and connect with trusted providers across Nigeria
              and beyond.
            </p>

            {/* SEARCH BOX */}

            <div className="mt-10 bg-[#0B0B16]  rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 text-amber-50">

                <Field
                  label="Pickup Location"
                  value="Lagos, Nigeria"
                />

                <Field
                  label="Delivery Location"
                  value="Abuja, Nigeria"
                />

                <Field
                  label="Package Type"
                  value="Electronics"
                />

                <Field
                  label="Weight / Size"
                  value="10kg"
                />
              </div>

              <div className="p-4">
                <button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-700 to-violet-500 text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition">
                  <Search size={18} />
                  Find Logistics Services
                </button>
              </div>
            </div>

            {/* TAGS */}

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Same Day Delivery",
                "Truck Haulage",
                "Cargo Shipping",
                "Moving Services",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white border text-sm text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <div className="relative h-[700px] hidden lg:block">

            {/* MAP */}

            <div className="absolute inset-0 rounded-[40px] overflow-hidden bg-[#0B0B16] ">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
                alt=""
                fill
                className="object-cover opacity-20"
              />
            </div>

            {/* FLOATING CARD 1 */}

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-10 left-0 w-[280px]"
            >
              <ServiceCard
                image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
                title="QuickShip Logistics"
                type="Same Day Delivery"
                route="Port Harcourt → Abuja"
                price="₦4,500"
                status="Available Today"
              />
            </motion.div>

            {/* FLOATING CARD 2 */}

            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-24 left-28 w-[280px]"
            >
              <ServiceCard
                image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492"
                title="Prime Haulage"
                type="Truck Delivery"
                route="Lagos → Kano"
                price="5 Ton Capacity"
                status="Available"
              />
            </motion.div>

            {/* FLOATING CARD 3 */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
              }}
              className="absolute bottom-14 right-20 w-[250px]"
            >
              <ServiceCard
                image="https://images.unsplash.com/photo-1578575437130-527eed3abbec"
                title="Global Cargo"
                type="International Shipping"
                route="Nigeria → UK"
                price="Air Freight"
                status="Quote Available"
              />
            </motion.div>

            {/* AI ASSISTANT */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-0 top-8 w-[320px]"
            >
              <div className="rounded-[28px] overflow-hidden bg-[#0B0B16]  shadow-2xl">
                <div className="bg-gradient-to-r from-purple-700 to-violet-500 p-5 text-white">
                  <div className="font-semibold">
                    Dwell AI Assistant
                  </div>
                  <p className="text-xs opacity-80">
                    Online
                  </p>
                </div>

                <div className="p-5 space-y-4">
                  <div className="bg-[#0B0B16] text-white  p-4 rounded-2xl">
                    Hi I'm Dwell AI 👋
                    <br />
                    How can I help you with your
                    logistics today?
                  </div>

                  <div className="bg-gradient-to-r from-purple-700 to-violet-500 text-white p-4 rounded-2xl ml-auto max-w-[220px]">
                    I need a delivery service for
                    electronics
                  </div>

                  <div className="space-y-3 text-sm bg-[#0B0B16]  text-white">
                    <p>Here are the best options:</p>

                    {[
                      "15 verified providers",
                      "Same-day delivery available",
                      "Best rated options",
                      "Starting from ₦3,500",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <Check
                          size={16}
                          className="text-green-500"
                        />
                        {item}
                      </div>
                    ))}
                  </div>

                  <button className="w-full rounded-xl border py-3 font-medium hover:bg-slate-50 transition flex items-center justify-center gap-2">
                    View All Options
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="p-5">
      <p className="text-sm text-slate-500 mb-2">
        {label}
      </p>

      <button className="flex items-center justify-between w-full font-medium">
        <span>{value}</span>
        <ChevronDown size={18} />
      </button>
    </div>
  );
}

function ServiceCard({
  image,
  title,
  type,
  route,
  price,
  status,
}: any) {
  return (
    <div className="bg-[#0B0B16]  rounded-3xl shadow-xl overflow-hidden">
      <div className="relative h-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h4 className="font-bold text-slate-300">
          {title}
        </h4>

        <p className="text-slate-400 text-sm mt-1">
          {type}
        </p>

        <div className="flex items-center gap-2 mt-4 text-sm text-slate-300">
          <MapPin size={15} />
          {route}
        </div>

        <div className="flex items-center gap-2 mt-3 text-sm text-slate-300">
          <Clock3 size={15} />
          {price}
        </div>

        <div className="mt-4 inline-flex items-center rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
          ✓ {status}
        </div>
      </div>
    </div>
  );
}