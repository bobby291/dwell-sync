"use client";

import {
  Search,
  FileText,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Search",
    description:
      "Find the service you need across all categories.",
    icon: Search,
  },
  {
    id: "2",
    title: "Choose Provider",
    description:
      "Compare ratings, reviews and pricing.",
    icon: FileText,
  },
  {
    id: "3",
    title: "Book or Contact",
    description:
      "Book instantly or chat directly with providers.",
    icon: CalendarDays,
  },
  {
    id: "4",
    title: "Get It Done",
    description:
      "Receive quality service and leave a review.",
    icon: BadgeCheck,
  },
];

export default function HowitWork() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16] py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#6D4AFF]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="animate-fadeUp text-4xl font-bold text-[#FAFAFA]">
            How It Works
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative text-center"
              >
                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[65%]
                      top-10
                      hidden
                      h-[2px]
                      w-[70%]
                      border-t-2
                      border-dashed
                      border-[#CFC6FF]
                      xl:block
                    "
                  />
                )}

                {/* Icon Circle */}
                <div
                  className="
                    animate-float
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F3F0FF]
                    shadow-[0_10px_30px_rgba(109,74,255,0.08)]
                  "
                  style={{
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <Icon
                    size={30}
                    className="text-[#6D4AFF]"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div
                  className="animate-fadeUp mt-8"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <h3 className="text-lg font-bold text-[#FAFAFA]">
                    {step.id}. {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[220px] text-sm leading-7 text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}