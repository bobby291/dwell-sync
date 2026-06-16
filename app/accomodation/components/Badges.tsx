"use client";

import {
  Building2,
  Hotel,
  Users,
  Home,
  Landmark,
  Map,
  Building,
  Store,
  MapPinned,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  {
    title: "Rent Apartments",
    icon: Building2,
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "Shortlet Homes",
    icon: Hotel,
    color: "from-orange-400 to-amber-500",
  },
  {
    title: "Rooms & Shares",
    icon: Users,
    color: "from-emerald-400 to-green-500",
  },
  {
    title: "Houses for Rent",
    icon: Home,
    color: "from-indigo-400 to-violet-500",
  },
  {
    title: "Duplexes",
    icon: Landmark,
    color: "from-purple-400 to-fuchsia-500",
  },
  {
    title: "Lands & Plots",
    icon: Map,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "New Developments",
    icon: Building,
    color: "from-cyan-400 to-teal-500",
  },
  {
    title: "Commercial",
    icon: Store,
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "For Sale",
    icon: MapPinned,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    color: "from-slate-400 to-slate-500",
  },
];

export default function BadgesPage() {
  return (
    <section className="relative py-4 lg:py-6 bg-[#0B0B16] ">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Main Container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B0B16]  shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10">

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center last:border-r-0 py-7 px-3 transition-all duration-500 hover:bg-slate-50"
                >
                  {/* Floating Card */}
                  <div
                    className={`animate-float`}
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${item.color} shadow-lg shadow-slate-200/60`}
                    >
                      <Icon
                        className="h-6 w-6 text-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  <span
                    className="text-center text-[13px] font-medium text-slate-700 transition-all duration-300 group-hover:text-violet-600 animate-textFloat"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {item.title}
                  </span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <div className="absolute left-1/2 top-5 h-20 w-20 -translate-x-1/2 rounded-full bg-violet-500/10 blur-2xl" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
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
            animation: float 5s ease-in-out infinite;
          }

          .animate-textFloat {
            animation: textFloat 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
}