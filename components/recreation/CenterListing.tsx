
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Star,
  ShieldCheck,
  ArrowRight,
  CalendarDays,
  Clock,
  Trees,
  Coffee,
  Music,
  Waves,
  Drama,
  Wine,
} from "lucide-react";

type RecreationType =
  | "bar"
  | "lounge"
  | "cafe"
  | "garden"
  | "park"
  | "theater"
  | "beach"
  | "entertainment";

type Center = {
  id: string;
  name: string;
  location: string;
  city: string;
  image: string;
  type: RecreationType;
  rating: number;
  reviews: number;
  openingHours: string;
  availability: "open" | "limited" | "full" | "closed";
  availableSlots: number;
  verified: boolean;
};

const centers: Center[] = [
  {
    id: "waterside-beach",
    name: "Waterside Beach",
    location: "Lekki",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",
    type: "beach",
    rating: 4.8,
    reviews: 126,
    openingHours: "Hours to be confirmed",
    availability: "open",
    availableSlots: 18,
    verified: true,
  },
  {
    id: "garden-escape",
    name: "Garden Escape",
    location: "Victoria Island",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85",
    type: "garden",
    rating: 4.7,
    reviews: 84,
    openingHours: "Hours to be confirmed",
    availability: "limited",
    availableSlots: 5,
    verified: true,
  },
  {
    id: "urban-coffee-house",
    name: "Urban Coffee House",
    location: "Ikeja",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
    type: "cafe",
    rating: 4.6,
    reviews: 93,
    openingHours: "Hours to be confirmed",
    availability: "open",
    availableSlots: 12,
    verified: true,
  },
  {
    id: "the-evening-lounge",
    name: "The Evening Lounge",
    location: "Lekki Phase 1",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=85",
    type: "lounge",
    rating: 4.9,
    reviews: 147,
    openingHours: "Hours to be confirmed",
    availability: "limited",
    availableSlots: 3,
    verified: true,
  },
  {
    id: "city-live-theater",
    name: "City Live Theatre",
    location: "Surulere",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
    type: "theater",
    rating: 4.5,
    reviews: 62,
    openingHours: "Showtimes to be confirmed",
    availability: "full",
    availableSlots: 0,
    verified: false,
  },
  {
    id: "greenfield-park",
    name: "Greenfield Park",
    location: "Ikeja",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=85",
    type: "park",
    rating: 4.7,
    reviews: 71,
    openingHours: "Hours to be confirmed",
    availability: "closed",
    availableSlots: 0,
    verified: true,
  },
  {
    id: "after-hours-bar",
    name: "After Hours Bar",
    location: "Victoria Island",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=85",
    type: "bar",
    rating: 4.6,
    reviews: 108,
    openingHours: "Hours to be confirmed",
    availability: "open",
    availableSlots: 9,
    verified: false,
  },
  {
    id: "playhouse-entertainment",
    name: "Playhouse Entertainment",
    location: "Lekki",
    city: "Lagos",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
    type: "entertainment",
    rating: 4.8,
    reviews: 119,
    openingHours: "Event times to be confirmed",
    availability: "open",
    availableSlots: 24,
    verified: true,
  },
];

const typeDetails: Record<
  RecreationType,
  { label: string; Icon: typeof Coffee }
> = {
  bar: { label: "Bar", Icon: Wine },
  lounge: { label: "Lounge", Icon: Music },
  cafe: { label: "Café", Icon: Coffee },
  garden: { label: "Garden", Icon: Trees },
  park: { label: "Park", Icon: Trees },
  theater: { label: "Theatre", Icon: Drama },
  beach: { label: "Beach", Icon: Waves },
  entertainment: { label: "Entertainment", Icon: Music },
};

const availabilityDetails = {
  open: {
    label: "Booking available",
    className: "bg-emerald-500/10 text-emerald-400",
  },
  limited: {
    label: "Limited availability",
    className: "bg-amber-500/10 text-amber-400",
  },
  full: {
    label: "Fully booked",
    className: "bg-red-500/10 text-red-400",
  },
  closed: {
    label: "Currently closed",
    className: "bg-slate-500/20 text-slate-300",
  },
};

export default function CenterList() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Discover experiences
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-200 sm:text-3xl">
              Recreation & Entertainment
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
              Find cafés, lounges, beaches, gardens, parks,
              theatres, and places to enjoy your free time.
            </p>
          </div>

          <Link
            href="/recreation"
            className="flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {[
            { label: "All centres", value: "all" },
            { label: "Bars & Lounges", value: "lounge" },
            { label: "Cafés", value: "cafe" },
            { label: "Parks & Gardens", value: "park" },
            { label: "Beaches", value: "beach" },
            { label: "Entertainment", value: "entertainment" },
          ].map((filter, index) => (
            <Link
              key={filter.value}
              href={
                filter.value === "all"
                  ? "/recreation"
                  : `/recreation?type=${filter.value}`
              }
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-700 bg-[#0B0B16] text-slate-300 hover:border-blue-400"
              }`}
            >
              {filter.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map((center) => {
            const type = typeDetails[center.type];
            const availability =
              availabilityDetails[center.availability];
            const TypeIcon = type.Icon;

            return (
              <article
                key={center.id}
                className="group min-w-0 overflow-hidden rounded-2xl bg-[#0B0B16] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={center.image}
                    alt={`${type.label} at ${center.name}`}
                    width={700}
                    height={480}
                    unoptimized
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {center.verified && (
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow">
                      <ShieldCheck size={14} />
                      Verified
                    </span>
                  )}

                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    <TypeIcon size={14} />
                    {type.label}
                  </span>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-slate-200">
                      {center.name}
                    </h3>

                    <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-200">
                      <Star
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                      {center.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="mt-2 flex items-center gap-1 text-sm text-slate-400">
                    <MapPin size={15} className="shrink-0 text-amber-400" />
                    {center.location}, {center.city}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {center.reviews} reviews
                  </p>

                  <div className="mt-4 flex items-start gap-2 rounded-xl bg-white/5 px-3 py-3">
                    <CalendarDays
                      size={16}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />

                    <div className="min-w-0">
                      <p
                        className={`text-sm font-semibold ${availability.className}`}
                      >
                        {availability.label}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        {center.availableSlots > 0
                          ? `${center.availableSlots} booking slots reported available`
                          : center.availability === "full"
                            ? "No booking slots reported available"
                            : center.availability === "closed"
                              ? "Check opening times before visiting"
                              : "Check with the venue for availability"}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <Clock size={14} />
                    {center.openingHours}
                  </p>

                  <Link
                    href={`/recreation/${center.id}`}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    View Centre
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Sample listings are for UI development only. Opening
          hours, ratings, and booking availability are not live
          data and must be confirmed with each venue.
        </p>
      </div>
    </section>
  );
}
