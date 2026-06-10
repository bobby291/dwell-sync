"use client";

import {
  Palette,
  BadgeDollarSign,
  Monitor,
  Scale,
  Home,
  HeartPulse,
  GraduationCap,
  Ellipsis,
} from "lucide-react";

const categories = [
  {
    title: "Beauty & Makeup",
    icon: HeartPulse,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Graphics & Design",
    icon: Palette,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    title: "Web Development",
    icon: Monitor,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Legal Services",
    icon: Scale,
    color: "text-violet-500",
    bg: "bg-violet-100",
  },
  {
    title: "Home Services",
    icon: Home,
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Health & Therapy",
    icon: HeartPulse,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "More",
    icon: Ellipsis,
    color: "text-slate-500",
    bg: "bg-slate-100",
  },
];

export default function Badges() {
  return (
    <section className="relative z-20 -mt-8 px-4 lg:px-0 bg-[#0B0B16]">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto">
          <div
            className="
              flex
              min-w-max
              rounded-[28px]
              bg-[#0B0B16]
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    relative
                    flex
                    min-w-[170px]
                    flex-col
                    items-center
                    justify-center
                    px-6
                    py-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-indigo-900
                    ${
                      index !== categories.length - 1
                        ? ""
                        : ""
                    }
                  `}
                >
                  {/* Icon Circle */}
                  <div
                    className={`
                      mb-4
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      ${item.bg}
                    `}
                  >
                    <Icon
                      size={26}
                      strokeWidth={2}
                      className={item.color}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="
                      text-center
                      text-sm
                      font-semibold
                      text-[#e7eaf5]
                      whitespace-nowrap
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}