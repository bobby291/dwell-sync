"use client";

import Image from "next/image";

export default function AIFeatureds() {
  return (
    <section className="w-full px-4 md:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            px-8
            md:px-14
            py-10
            md:py-12
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          "
          style={{
            background:
              "linear-gradient(90deg, #0B46D8 0%, #0076FF 45%, #00B5D8 70%, #29D26A 100%)",
          }}
        >
          {/* Glow Effects */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 blur-3xl rounded-full -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-300/20 blur-3xl rounded-full translate-x-20 translate-y-20" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-tight tracking-tight">
                Ready to find your perfect home?
              </h2>

              <p className="text-white/90 text-[18px] md:text-[22px] mt-3 font-medium">
                Join thousands of students already using Dwell Sync
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              {/* Primary Button */}
              <button
                className="
                  bg-white
                  text-[#0B46D8]
                  font-semibold
                  text-[18px]
                  px-10
                  py-5
                  rounded-2xl
                  shadow-md
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  min-w-[230px]
                "
              >
                Get Started Now
              </button>

              {/* Secondary Button */}
              <button
                className="
                  border-2
                  border-white/60
                  text-white
                  font-semibold
                  text-[18px]
                  px-10
                  py-5
                  rounded-2xl
                  backdrop-blur-md
                  bg-white/5
                  hover:bg-white/10
                  transition-all
                  duration-300
                  min-w-[240px]
                "
              >
                Talk to AI Assistant
              </button>
            </div>

            {/* Robot Image */}
            <div className="relative hidden md:block">
              <div className="relative w-[220px] h-[220px]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                  alt="AI Robot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}