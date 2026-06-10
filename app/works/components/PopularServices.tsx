"use client";

import Link from "next/link";
import {
  MonitorSmartphone,
  BadgeCent,
  Gem,
  Paintbrush,
  Wrench,
  Scissors,
  Camera,
  Ellipsis,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    providers: "120+ Providers",
    icon: MonitorSmartphone,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Logo Design",
    providers: "180+ Providers",
    icon: BadgeCent,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    title: "Bridal Makeup",
    providers: "210+ Providers",
    icon: Gem,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "House Painting",
    providers: "150+ Providers",
    icon: Paintbrush,
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    title: "Plumbing",
    providers: "130+ Providers",
    icon: Wrench,
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Hair Styling",
    providers: "200+ Providers",
    icon: Scissors,
    color: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Photography",
    providers: "160+ Providers",
    icon: Camera,
    color: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "More Services",
    providers: "Explore all",
    icon: Ellipsis,
    color: "text-slate-500",
    bg: "bg-slate-100",
  },
];

export default function PopularServices() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="animate-fadeUp text-3xl font-bold text-[#FAFAFA]">
            Popular Services
          </h2>

          <Link
            href="/services"
            className="group flex items-center gap-2 font-semibold text-[#6D4AFF]"
          >
            View all services

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  animate-float
                  rounded-[28px]
                  border
                  border-gray-100
                  bg-white
                  p-6
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_25px_60px_rgba(109,74,255,0.15)]
                "
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Icon Circle */}
                <div
                  className={`
                    mx-auto
                    mb-6
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    ${service.bg}
                  `}
                >
                  <Icon
                    size={30}
                    strokeWidth={2}
                    className={service.color}
                  />
                </div>

                {/* Title */}
                <h3 className="text-center text-base font-semibold text-[#0B1026]">
                  {service.title}
                </h3>

                {/* Providers */}
                <p className="mt-2 text-center text-sm text-gray-500">
                  {service.providers}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}