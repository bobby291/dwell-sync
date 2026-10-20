import Link from "next/link";
import AbujaPropertyCard, {
  type Property,
} from "./AbujaPropertyCard";

const properties: Property[] = [
  {
    id: "abuja-studio-01",
    name: "Modern Studio Apartment",
    location: "Gwarinpa, Abuja",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
    price: 450000,
    period: "year",
    type: "Studio apartment",
    availability: "Availability to be confirmed",
    rating: 4.8,
    verified: true,
  },
  {
    id: "abuja-flat-02",
    name: "Contemporary 2-Bedroom Flat",
    location: "Wuye, Abuja",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
    price: 600000,
    period: "year",
    type: "2-bedroom apartment",
    availability: "Availability to be confirmed",
    rating: 4.7,
    verified: true,
  },
  {
    id: "abuja-shortlet-03",
    name: "Furnished City Stay",
    location: "Jabi, Abuja",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    price: 45000,
    period: "night",
    type: "Furnished shortlet",
    availability: "Availability to be confirmed",
    rating: 4.9,
    verified: true,
  },
  {
    id: "abuja-home-04",
    name: "Spacious Family Home",
    location: "Lokogoma, Abuja",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    price: 1200000,
    period: "year",
    type: "Family apartment",
    availability: "Availability to be confirmed",
    rating: 4.6,
    verified: false,
  },
];

export default function PopularAbuja() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              EXPLORE ABUJA
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-100 sm:text-3xl">
              Popular homes in Abuja
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              Find a place to stay, rent, or call home.
            </p>
          </div>

          <Link
            href="/accommodation?city=abuja"
            className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            View all →
          </Link>
        </div>

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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <AbujaPropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}