"use client";

import Image from "next/image";
import {
  Search,
  Star,
  Heart,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16]">
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-20 h-[400px] w-[400px] rounded-full bg-[#6D4AFF]/10 blur-[120px]" />

      <div className="absolute right-[-200px] top-40 h-[500px] w-[500px] rounded-full bg-[#6D4AFF]/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="animate-fadeUp inline-flex items-center gap-2 rounded-full bg-[#6D4AFF]/10 px-4 py-2 text-xs font-semibold text-[#FAFAFA]">
              <Sparkles size={14} />
              TRUSTED PROFESSIONALS. QUALITY SERVICES.
            </div>

            <h1 className="animate-fadeUp mt-6 text-5xl font-bold leading-tight tracking-tight text-[#FAFAFA] lg:text-7xl">
              Find Trusted
              <br />
              Service Providers.
              <br />
              Book. Connect.
              <span className="block text-amber-600">
                Thrive.
              </span>
            </h1>

            <p className="animate-fadeUpDelay mt-8 max-w-xl text-lg leading-8 text-gray-200">
              Discover verified professionals for every need.
              Book services, chat directly and get the job
              done with confidence.
            </p>

            {/* SEARCH */}
            <div className="animate-fadeUpDelay2 mt-10 flex overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
              <div className="flex flex-1 items-center gap-3 px-5">
                <Search
                  size={20}
                  className="text-gray-400"
                />

                <input
                  placeholder="Search for services or professionals..."
                  className="h-16 w-full outline-none"
                />
              </div>

              <button className="m-2 rounded-xl bg-[#6D4AFF] px-8 text-white transition hover:bg-[#5c3df0]">
                Search
              </button>
            </div>

            {/* Tags */}
            <div className="animate-fadeUpDelay3 mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-500">
                Popular Searches:
              </span>

              {[
                "Web Design",
                "Makeup Artist",
                "Home Cleaning",
                "Plumbing",
                "Lawyer",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white px-4 py-2 text-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[780px]">
            {/* MAP */}
            <div className="absolute inset-0 overflow-hidden rounded-[40px] bg-[#0B0B16] shadow-2xl">
              <Image
                fill
                priority
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
                alt="Map"
                className="object-cover opacity-30"
              />

              <MapPin className="absolute left-[35%] top-[25%] h-8 w-8 animate-pin text-[#6D4AFF] fill-[#6D4AFF]" />

              <MapPin className="absolute left-[60%] top-[45%] h-8 w-8 animate-pin text-[#00C26F] fill-[#00C26F]" />

              <MapPin className="absolute left-[45%] top-[55%] h-8 w-8 animate-pin text-[#FFB300] fill-[#FFB300]" />
            </div>

            {/* CARD 1 */}
            <div className="animate-float absolute left-0 top-10 w-[260px] rounded-[28px] bg-[#0B0B16] p-4 shadow-2xl">
              <div className="relative h-[170px] overflow-hidden rounded-2xl">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt=""
                  className="object-cover"
                />
              </div>

              <button className="absolute right-6 top-6 rounded-full bg-white p-2 shadow">
                <Heart size={16} />
              </button>

              <h3 className="mt-4 font-bold text-amber-600">
                Sarah Designs
              </h3>

              <p className="text-gray-200">
                Graphics Designer
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  4.9 (320)
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  Verified
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="animate-floatSlow absolute bottom-24 left-5 w-[270px] rounded-[28px] bg-[#0B0B16] p-4 shadow-2xl">
              <div className="relative h-[160px] overflow-hidden rounded-2xl">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
                  alt=""
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 font-bold text-amber-600">
                Glow Beauty Studio
              </h3>

              <p className="text-gray-200">
                Makeup Artist
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  4.8 (180)
                </span>

                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
                  Top Rated
                </span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="animate-floatFast absolute bottom-10 left-[48%] w-[250px] rounded-[28px] bg-[#0B0B16] p-4 shadow-2xl">
              <div className="relative h-[160px] overflow-hidden rounded-2xl">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780"
                  alt=""
                  className="object-cover"
                />
              </div> 

              <h3 className="mt-4 font-bold text-amber-600">
                Prime Electricals
              </h3>

              <p className="text-gray-200">
                Electrician
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  4.7 (145)
                </span>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                  Available Today
                </span>
              </div>
            </div>

            {/* AI CHAT */}
            <div className="animate-floatSlow absolute right-[-20px] top-32 w-[320px] overflow-hidden rounded-[32px] bg-[#0B0B16] shadow-[0_25px_80px_rgba(109,74,255,0.25)]">
              <div className="bg-[#6D4AFF] p-5 text-white">
                <h3 className="font-semibold">
                  Dwell AI Assistant
                </h3>

                <p className="text-xs opacity-80">
                  Online
                </p>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-2xl bg-gray-100 p-4">
                  Hi! I'm Dwell AI 👋
                  <br />
                  What service do you need today?
                </div>

                <div className="ml-auto w-fit rounded-2xl bg-[#6D4AFF] px-4 py-3 text-white">
                  I need a website designer in Abuja
                </div>

                <div className="rounded-2xl bg-gray-100 p-4">
                  I found 12 verified professionals
                  available this week.
                </div>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl border py-3 text-[#6D4AFF]">
                  View Results
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
