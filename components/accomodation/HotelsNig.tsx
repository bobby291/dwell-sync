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

type Hotel = {
  id: string;
  name: string;
  city: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  roomType: string;
  price: number;
  roomsAvailable: number;
  verified: boolean;
};

const hotels: Hotel[] = [
  {
    id: "abuja-grand-hotel",
    name: "The Grand City Hotel",
    city: "Abuja",
    location: "Central Business District",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85",
    rating: 4.8,
    reviews: 214,
    roomType: "Deluxe Room",
    price: 95000,
    roomsAvailable: 4,
    verified: true,
  },
  {
    id: "lagos-waterfront-hotel",
    name: "Waterfront Suites",
    city: "Lagos",
    location: "Victoria Island",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
    rating: 4.7,
    reviews: 186,
    roomType: "Executive Suite",
    price: 145000,
    roomsAvailable: 2,
    verified: true,
  },
  {
    id: "abuja-garden-hotel",
    name: "Garden View Hotel",
    city: "Abuja",
    location: "Jabi",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85",
    rating: 4.6,
    reviews: 132,
    roomType: "Standard Room",
    price: 65000,
    roomsAvailable: 6,
    verified: true,
  },
  {
    id: "lagos-boutique-hotel",
    name: "The Boutique Stay",
    city: "Lagos",
    location: "Lekki Phase 1",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=85",
    rating: 4.9,
    reviews: 98,
    roomType: "Premium Room",
    price: 120000,
    roomsAvailable: 3,
    verified: false,
  },
];

const formatNaira = (price: number) =>
  `₦${new Intl.NumberFormat("en-NG").format(price)}`;

export default function TopHotelsNigeria() {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* SECTION HEADING */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Stay in comfort
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Top hotels in Nigeria
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Discover hotels in Abuja and Lagos, compare room
              options, and find your next stay.
            </p>
          </div>

          <Link
            href="/accommodation/hotels"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* CITY FILTER LINKS */}
        <div className="mb-6 flex flex-wrap gap-2">
          <Link
            href="/accommodation/hotels?city=all"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            All hotels
          </Link>

          <Link
            href="/accommodation/hotels?city=abuja"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300"
          >
            Abuja
          </Link>

          <Link
            href="/accommodation/hotels?city=lagos"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300"
          >
            Lagos
          </Link>
        </div>

        {/* HOTEL CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.map((hotel) => (
            <article
              key={hotel.id}
              className="group min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* HOTEL IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={700}
                  height={480}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {hotel.verified && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow">
                    <ShieldCheck size={14} />
                    Verified
                  </span>
                )}

                <span className="absolute bottom-3 left-3 rounded-lg bg-slate-950/75 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                  {hotel.city}
                </span>
              </div>

              {/* HOTEL DETAILS */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-slate-900">
                    {hotel.name}
                  </h3>

                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-700">
                    <Star
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                    {hotel.rating.toFixed(1)}
                  </span>
                </div>

                <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                  <MapPin size={15} className="shrink-0" />
                  {hotel.location}, {hotel.city}
                </p>

                <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
                  <BedDouble size={16} />
                  {hotel.roomType}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {hotel.reviews} guest reviews
                </p>

                {/* AVAILABILITY */}
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2.5">
                  <CalendarDays
                    size={16}
                    className="shrink-0 text-emerald-700"
                  />
                  <span className="text-sm font-semibold text-emerald-800">
                    {hotel.roomsAvailable} rooms available
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-4">
                  <span className="text-xl font-extrabold text-slate-900">
                    {formatNaira(hotel.price)}
                  </span>
                  <span className="ml-1 text-sm text-slate-500">
                    / night
                  </span>
                </div>

                {/* RESERVATION ACTION */}
                <Link
                  href={`/accommodation/hotels/${hotel.id}`}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Check availability
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-400">
          Hotel prices, ratings, reviews and room counts are
          demonstration data. Confirm live rates and availability
          before enabling reservations.
        </p>
      </div>
    </section>
  );
}