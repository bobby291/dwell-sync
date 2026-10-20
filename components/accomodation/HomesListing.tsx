import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  BedDouble,
  ShieldCheck,
  ArrowRight,
  CalendarDays,
} from "lucide-react";

type LagosProperty = {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  period: "night" | "month" | "year";
  type: string;
  rating: number;
  reviews: number;
  availability: string;
  verified: boolean;
};

const homes: LagosProperty[] = [
  {
    id: "accra-modern-studio",
    name: "Modern Studio Apartment",
    location: "Lekki, Lagos",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85",
    price: 850,
    period: "night",
    type: "Furnished studio",
    rating: 4.8,
    reviews: 76,
    availability: "Availability to be confirmed",
    verified: true,
  },
  {
    id: "accra-family-apartment",
    name: "Contemporary Family Apartment",
    location: "Ikeja, Lagos",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=85",
    price: 6500,
    period: "month",
    type: "2-bedroom apartment",
    rating: 4.7,
    reviews: 54,
    availability: "Availability to be confirmed",
    verified: true,
  },
  {
    id: "accra-luxury-stay",
    name: "Luxury City Stay",
    location: "Mainland, Lagos",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    price: 1200,
    period: "night",
    type: "Premium furnished stay",
    rating: 4.9,
    reviews: 91,
    availability: "Availability to be confirmed",
    verified: true,
  },
  {
    id: "accra-long-term-home",
    name: "Spacious Residential Home",
    location: "Ikoyi, Lagos",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    price: 48000,
    period: "year",
    type: "Residential home",
    rating: 4.6,
    reviews: 38,
    availability: "Availability to be confirmed",
    verified: false,
  },
];

const formatCedi = (price: number) =>
  `₦${new Intl.NumberFormat("en-NG").format(price)}`;

export default function LagosHomes() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* SECTION HEADING */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-300">
              Discover Lagos
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-300 sm:text-3xl">
              Homes in Lagos City
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Explore furnished apartments, residential homes,
              and short stays across Lagos.
            </p>
          </div>

          <Link
            href="/accommodation?city=accra"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* PROPERTY TYPE LINKS */}
        <div className="mb-6 flex flex-wrap gap-2">
          {[
            { label: "All homes", value: "all" },
            { label: "Studios", value: "studio" },
            { label: "Apartments", value: "apartment" },
            { label: "Short stays", value: "shortlet" },
          ].map((filter, index) => (
            <Link
              key={filter.value}
              href={`/accommodation?city=accra&type=${filter.value}`}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-300"
              }`}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        {/* ACCRA PROPERTY GRID */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homes.map((home) => (
            <article
              key={home.id}
              className="group min-w-0 overflow-hidden rounded-2xl  bg-[#0B0B16] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={home.image}
                  alt={home.name}
                  width={700}
                  height={480}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {home.verified && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow">
                    <ShieldCheck size={14} />
                    Verified
                  </span>
                )}

                <button
                  type="button"
                  className="absolute bottom-3 left-3 rounded-lg bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                >
                  Lagos, Nigeria
                </button>
              </div>

              {/* DETAILS */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-300">
                    {home.name}
                  </h3>

                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-700">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                    {home.rating.toFixed(1)}
                  </span>
                </div>

                <p className="mt-2 flex items-center gap-1 text-sm text-amber-500">
                  <MapPin size={15} className="shrink-0" />
                  {home.location}
                </p>

                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <BedDouble size={16} />
                  {home.type}
                </p>

                <p className="mt-1 text-xs text-slate-100">
                  {home.reviews} guest reviews
                </p>

                {/* SPACE AVAILABILITY */}
                <div className="mt-4 flex items-start gap-2 rounded-xl bg-[#0B0B16] px-3 py-2.5">
                  <CalendarDays
                    size={16}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <span className="text-sm font-medium text-slate-300">
                    {home.availability}
                  </span>
                </div>

                {/* LOCAL CURRENCY */}
                <div className="mt-4">
                  <span className="text-xl font-extrabold text-slate-200">
                    {formatCedi(home.price)}
                  </span>
                  <span className="ml-1 text-sm text-slate-500">
                    / {home.period}
                  </span>
                </div>

                {/* DETAILS / BOOKING */}
                <Link
                  href={`/accommodation/${home.id}`}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  View Stay
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-400">
          Prices, ratings, reviews and listings are illustrative
          sample data, not live offers. Confirm rental terms and
          availability with the provider.
        </p>
      </div>
    </section>
  );
}