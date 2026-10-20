"use client";

import {
  ShieldCheck,
  Users,
  BadgeDollarSign,
  PhoneCall,
  Building2,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    title: "Verified Properties",
    description:
      "All listings are verified for your safety.",
    icon: ShieldCheck,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "Trusted Hosts & Agents",
    description:
      "Connect with trusted hosts and professional agents.",
    icon: Users,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    title: "Best Prices",
    description:
      "Compare prices and get the best deals.",
    icon: BadgeDollarSign,
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Secure Communication",
    description:
      "Chat or call directly with hosts and agents.",
    icon: PhoneCall,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Flexible Options",
    description:
      "Rent, shortlet, room or buy — you choose.",
    icon: Building2,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    title: "AI Recommendations",
    description:
      "Smart suggestions tailored to your needs.",
    icon: CheckCircle2, 
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

export default function WhyChosePage() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16]  py-14">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="animate-textFloat text-2xl lg:text-3xl font-bold text-amber-600">
            Why Choose DwellSync Accommodation?
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group animate-float"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative h-full rounded-[22px] border border-slate-100 bg-white p-5 shadow-[0_8px_25px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute left-1/2 top-6 h-20 w-20 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
                  </div>

                  <div className="relative z-10 flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.bg}`}
                    >
                      <Icon
                        className={`h-6 w-6 ${feature.color}`}
                        strokeWidth={2.2}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="animate-textFloat text-sm font-bold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Background Decorative Glow */}
        <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" />

        <div className="absolute right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
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