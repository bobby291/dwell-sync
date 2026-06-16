"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const locations = [
  {
    name: "Lekki",
    state: "Lagos",
    properties: "1500+ Properties",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ikoyi",
    state: "Lagos",
    properties: "800+ Properties",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Victoria Island",
    state: "Lagos",
    properties: "950+ Properties",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Gwarinpa",
    state: "Abuja",
    properties: "600+ Properties",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Maitama",
    state: "Abuja",
    properties: "500+ Properties",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Port Harcourt",
    state: "Rivers",
    properties: "450+ Properties",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Popularpage() {
  return (
    <section className="relative py-12 lg:py-16 bg-[#0B0B16] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl font-bold text-purple-600 animate-textFloat">
            Popular Locations
          </h2>

          <button className="group flex items-center gap-2 text-sm font-semibold text-violet-600">
            View all locations
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">

          {/* Left Navigation */}
          <button className="absolute -left-5 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 hover:scale-110 transition-all duration-300">
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* Right Navigation */}
          <button className="absolute -right-5 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 hover:scale-110 transition-all duration-300">
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">

            {locations.map((location, index) => (
              <div
                key={index}
                className="group animate-float"
                style={{
                  animationDelay: `${index * 0.25}s`,
                }}
              >
                <div className="overflow-hidden rounded-[22px] bg-[#0B0B16]  shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Image */}
                  <div className="relative h-[135px] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4">

                    <h3 className="text-lg font-bold text-slate-300 animate-textFloat">
                      {location.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                      {location.state}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-slate-300">
                      {location.properties}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Background Glow */}
        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-violet-300/10 blur-[120px]" />
        <div className="absolute right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-300/10 blur-[120px]" />
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes textFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-textFloat {
          animation: textFloat 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}