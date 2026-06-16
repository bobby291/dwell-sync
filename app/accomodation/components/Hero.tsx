"use client";

import Image from "next/image";
import {
  Search,
  MapPin,
  Calendar,
  ChevronDown,
  Star,
  Heart,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function HeroPage() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16]  py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                Verified Properties. Trusted Hosts.
              </span>
            </div>

            <div className="animate-floatText">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-purple-600">
                Find Your Perfect
                <br />
                Stay or Property.
                <br />
                <span className="text-transparent bg-gradient-to-r from-amber-600 to-white bg-clip-text">
                  Anywhere You Want.
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
                Explore houses for rent, shortlet apartments,
                rooms, and properties for sale from trusted
                hosts and real estate agents.
              </p>
            </div>

            {/* SEARCH CARD */}
            <div className="bg-[#0B0B16]  rounded-[28px] shadow-xl overflow-hidden max-w-2xl">

              <div className="grid grid-cols-4 border-b">
                {["Rent", "Shortlet", "Rooms", "For Sale"].map(
                  (item, index) => (
                    <button
                      key={index}
                      className={`py-4 text-sm font-semibold ${
                        index === 0
                          ? "text-violet-600 border-b-2 border-violet-600"
                          : "text-slate-300"
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <div className="grid md:grid-cols-2">
                <div className="border-r border-b p-5">
                  <label className="text-sm text-slate-100">
                    Location
                  </label>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">
                      Lagos, Nigeria
                    </span>
                    <MapPin className="w-4 h-4 text-slate-100" />
                  </div>
                </div>

                <div className="border-b p-5">
                  <label className="text-sm text-slate-100">
                    Property Type
                  </label>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">
                      Any Type
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="border-r p-5">
                  <label className="text-sm text-slate-100">
                    Move In
                  </label>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">
                      Select Date
                    </span>
                    <Calendar className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="p-5">
                  <label className="text-sm text-slate-100">
                    Price Range
                  </label>

                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">
                      Any Price
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <button className="w-full h-14 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-600 text-white font-semibold flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] transition-all">
                  <Search className="w-5 h-5" />
                  Search Properties
                </button>
              </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "Shortlet in Lekki",
                "2 Bedroom Flat in Abuja",
                "Houses for Rent in PH",
                "Duplex in Ikoyi",
              ].map((tag) => (
                <div
                  key={tag}
                  className="bg-white rounded-full px-4 py-2 shadow-md text-slate-600"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative h-[760px] hidden lg:block">

            {/* MAP */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden">
              <Image
                fill
                priority
                alt="Map"
                className="object-cover"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
              />
            </div>

            {/* PROPERTY CARD 1 */}
            <div className="absolute left-0 top-4 animate-float">
              <div className="w-[280px] bg-[#0B0B16]  rounded-3xl p-4 shadow-2xl">
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  />
                  <span className="absolute top-3 left-3 bg-violet-600 text-white text-xs px-3 py-1 rounded-full">
                    Shortlet
                  </span>

                  <button className="absolute top-3 right-3 bg-white w-8 h-8 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-bold mt-4 text-amber-50">
                  Luxury 2 Bedroom Apartment
                </h3>

                <p className="text-sm text-slate-300">
                  Lekki, Lagos
                </p>

                <div className="font-bold text-xl mt-3 text-amber-50">
                  ₦120,000 / Night
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    4.8 (230)
                  </div>

                  <span className="text-red-500 text-sm">
                    Superhost
                  </span>
                </div>
              </div>
            </div>

            {/* PROPERTY CARD 2 */}
            <div className="absolute left-16 bottom-24 animate-floatSlow">
              <div className="w-[260px] bg-[#0B0B16]  rounded-3xl p-4 shadow-2xl">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
                  />
                </div>

                <h3 className="text-amber-50 font-bold mt-4">
                  2 Bedroom Flat
                </h3>

                <p className="text-sm text-slate-300">
                  Gwarinpa, Abuja
                </p>

                <div className="font-bold text-xl mt-3 text-amber-50">
                  ₦350,000 / Year
                </div>
              </div>
            </div>

            {/* PROPERTY CARD 3 */}
            <div className="absolute right-40 bottom-8 animate-float">
              <div className="w-[250px] bg-[#0B0B16]  rounded-3xl p-4 shadow-2xl">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    fill
                    alt=""
                    className="object-cover"
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
                  />
                </div>

                <h3 className="text-amber-100 font-bold mt-4">
                  Modern Duplex
                </h3>

                <p className="text-sm text-slate-300">
                  Ikoyi, Lagos
                </p>

                <div className="text-amber-100 font-bold text-xl mt-3">
                  ₦45,000,000
                </div>
              </div>
            </div>

            {/* AI CHAT CARD */}
            <div className="absolute right-0 top-16 animate-floatSlow">
              <div className="w-[320px] bg-[#0B0B16]  rounded-[30px] overflow-hidden shadow-2xl">

                <div className="bg-gradient-to-r from-violet-700 to-indigo-600 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      🤖
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        Dwell AI Assistant
                      </h4>
                      <p className="text-xs opacity-80">
                        Online
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="bg-slate-100 rounded-2xl p-4 text-sm">
                    Hi I'm Dwell AI 👋 What kind of
                    accommodation are you looking for?
                  </div>

                  <div className="bg-violet-600 text-white rounded-2xl p-4 text-sm ml-10">
                    2 bedroom shortlet in Lekki
                    under ₦150k
                  </div>

                  <div className="bg-slate-100 rounded-2xl p-4 text-sm">
                    ✓ Shortlet from ₦80k
                    <br />
                    ✓ 2 Bedroom Apartments
                    <br />
                    ✓ Top rated properties
                  </div>

                  <button className="w-full py-3 rounded-xl border font-semibold text-violet-600 hover:bg-violet-50 transition">
                    View 12 Properties
                    <ArrowRight className="inline ml-2 w-4 h-4" />
                  </button>

                  <button className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes floatText {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatSlow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-floatText {
          animation: floatText 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}