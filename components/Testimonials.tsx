"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maryam B.",
    school: "UNIPORT",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop",
    text: `"Dwell Sync helped me find a clean, safe apartment near my school. The process was so easy!"`,
  },
  {
    id: 2,
    name: "Emeka T.",
    school: "UNN",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=400&auto=format&fit=crop",
    text: `"The AI assistant really understands what you need. I found my perfect place in just 2 days!"`,
  },
  {
    id: 3,
    name: "Blessing A.",
    school: "OAU",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop",
    text: `"No agent stress, no scam. Everything was transparent and secure. I highly recommend Dwell Sync!"`,
  },
];

export default function Testimonies() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <h2 className="text-center text-[32px] md:text-[38px] font-bold text-black mb-12 tracking-tight">
          Trusted by Students Across Nigeria
        </h2>

        {/* Main Testimonial Area */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-0 md:-left-6 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-12 md:px-20">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-[22px] px-7 py-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-300"
              >
                {/* Top */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-[18px] font-semibold text-black leading-none">
                      {item.name}
                    </h3>

                    <span className="text-[14px] text-gray-500 mt-1 font-medium">
                      {item.school}
                    </span>

                    {/* Stars */}
                    <div className="flex items-center gap-[2px] mt-2">
                      {[...Array(5)].map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-[18px] leading-[34px] text-gray-600 font-normal">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 md:-right-6 z-20 flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
            <ChevronRight className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
          <div className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}