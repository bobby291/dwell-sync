import Image from "next/image";
import {
  Heart,
  MapPin,
  Star,
  ShieldCheck,
  BedDouble,
} from "lucide-react";

export type Property = {
  id: string;
  name: string;
  location: string;
  image: string;
  period: "night" | "month" | "year";
  type: string;
  availability: string;
  rating: number;
  verified: boolean;
};

export default function RecreationPropCard({
  property,
}: {
  property: Property;
}) {


  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl  bg-[#0B0B16] transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Image
          src={property.image}
          alt={property.name}
          width={600}
          height={400}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />

        {property.verified && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow">
            <ShieldCheck size={14} />
            Verified
          </span>
        )}

        <button
          type="button"
          aria-label={`Save ${property.name}`}
          className="absolute right-3 top-3 rounded-full bg-white p-2 text-slate-700 shadow transition hover:text-rose-500"
        >
          <Heart size={18} />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-slate-200">
            {property.name}
          </h3>

          <span className="flex shrink-0 items-center gap-1 text-sm">
            <Star
              size={14}
              className="fill-amber-400 text-amber-400"
            />
            {property.rating.toFixed(1)}
          </span>
        </div>

        <p className="mt-2 flex items-center gap-1 text-sm text-amber-400">
          <MapPin size={15} />
          {property.location}
        </p>

        <p className="mt-3 flex items-center gap-1 text-sm text-slate-400">
          <BedDouble size={16} />
          {property.type}
        </p>

        <p className="mt-3 text-sm font-semibold text-emerald-300">
          {property.availability}
        </p>


        <a
          href={`/recreation/${property.id}`}
          className="mt-4 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Book. Reservation
        </a>
      </div>
    </article>
  );
}
