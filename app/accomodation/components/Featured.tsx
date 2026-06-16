"use client";

import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

const properties = [
  {
    title: "Penthouse Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦150,000 / Night",
    rating: "4.9",
    reviews: "210",
    badge: "Shortlet",
    badgeColor: "bg-violet-600",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "3 Bedroom Flat",
    location: "Gwarinpa, Abuja",
    price: "₦450,000 / Year",
    rating: "4.6",
    reviews: "120",
    badge: "For Rent",
    badgeColor: "bg-emerald-500",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cozy Studio Apartment",
    location: "Yaba, Lagos",
    price: "₦80,000 / Night",
    rating: "4.7",
    reviews: "98",
    badge: "Shortlet",
    badgeColor: "bg-violet-600",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "5 Bedroom Detached",
    location: "Chevron, Lekki",
    price: "₦85,000,000",
    rating: "4.8",
    reviews: "76",
    badge: "For Sale",
    badgeColor: "bg-sky-500",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "2 Bedroom Apartment",
    location: "Wuye, Abuja",
    price: "₦350,000 / Year",
    rating: "4.5",
    reviews: "64",
    badge: "For Rent",
    badgeColor: "bg-sky-500",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "4 Bedroom Terrace",
    location: "Ajah, Lagos",
    price: "₦55,000,000",
    rating: "4.6",
    reviews: "88",
    badge: "For Sale",
    badgeColor: "bg-emerald-500",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedPage() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B16]  py-16">
      <div className="container mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="animate-textFloat text-2xl font-bold text-amber-600 lg:text-3xl">
            Featured Properties
          </h2>

          <button className="group flex items-center gap-2 text-sm font-semibold text-violet-600">
            View all properties

            <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {properties.map((property, index) => (
            <div
              key={index}
              className="group animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="overflow-hidden rounded-[24px] bg-[#0B0B16]  shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                {/* Image */}
                <div className="relative h-[155px] overflow-hidden">

                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${property.badgeColor}`}
                  >
                    {property.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">

                  <h3 className="animate-textFloat text-lg font-bold text-slate-300">
                    {property.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-300">
                    {property.location}
                  </p>

                  <p className="mt-4 text-2xl font-bold text-slate-300">
                    {property.price}
                  </p>

                  <div className="mt-4 flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm font-medium text-slate-700">
                      {property.rating}
                    </span>

                    <span className="text-sm text-slate-400">
                      ({property.reviews})
                    </span>
                  </div>

                  <button className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-violet-600 transition-all duration-300 hover:border-violet-600 hover:bg-violet-600 hover:text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background Glow */}
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-[120px]" />
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
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
