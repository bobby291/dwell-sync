"use client";

import Image from "next/image";
import {
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const agents = [
  {
    name: "PropertyPro NG",
    type: "Real Estate Agency",
    rating: "4.8",
    reviews: "320",
    listings: "250+ Listings",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Lekki Homes Realty",
    type: "Real Estate Agency",
    rating: "4.7",
    reviews: "210",
    listings: "180+ Listings",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Elixir Properties",
    type: "Real Estate Agency",
    rating: "4.6",
    reviews: "180",
    listings: "200+ Listings",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Homes",
    type: "Real Estate Agency",
    rating: "4.9",
    reviews: "150",
    listings: "120+ Listings",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Urban Space Realty",
    type: "Real Estate Agency",
    rating: "4.7",
    reviews: "300",
    listings: "100+ Listings",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Greenfield Realtors",
    type: "Real Estate Agency",
    rating: "4.6",
    reviews: "110",
    listings: "90+ Listings",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=400&auto=format&fit=crop",
  },
];

export default function RatedPage() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16]  py-16">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="animate-textFloat text-2xl lg:text-3xl font-bold text-amber-600">
            Top Real Estate Companies & Agents
          </h2>

          <button className="group flex items-center gap-2 text-sm font-semibold text-violet-600">
            View all agents
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="relative">

          {/* Left Arrow */}
          <button className="absolute -left-6 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white border border-slate-100 shadow-xl hover:scale-110 transition-all duration-300">
            <ChevronLeft className="h-5 w-5 text-slate-600" />
          </button>

          {/* Right Arrow */}
          <button className="absolute -right-6 top-1/2 z-20 hidden lg:flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white border border-slate-100 shadow-xl hover:scale-110 transition-all duration-300">
            <ChevronRight className="h-5 w-5 text-slate-600" />
          </button>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {agents.map((agent, index) => (
              <div
                key={index}
                className="group animate-float"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="rounded-[22px] border bg-[#0B0B16]  p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Logo & Details */}
                  <div className="flex items-start gap-3">

                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-slate-100">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="animate-textFloat text-sm font-bold text-slate-300">
                        {agent.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-300">
                        {agent.type}
                      </p>

                      <div className="mt-2 flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                        <span className="text-xs font-semibold text-slate-300">
                          {agent.rating}
                        </span>

                        <span className="text-xs text-slate-300">
                          ({agent.reviews})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Listings */}
                  <div className="mt-5 text-center">
                    <p className="text-sm font-medium text-slate-100">
                      {agent.listings}
                    </p>
                  </div>

                  {/* Button */}
                  <button className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-violet-600 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white">
                    Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" />

        <div className="absolute right-10 bottom-0 h-72 w-72 rounded-full bg-indigo-400/10 blur-[120px]" />
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