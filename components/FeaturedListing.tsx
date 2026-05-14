import Image from 'next/image'
import {
  BedDouble,
  Wifi,
  MapPin,
  Star,
  ShieldCheck,
  Lightbulb,
  Building2,
  Car,
  ArrowRight,
} from 'lucide-react'

const listings = [
  {
    title: 'Self Contain Apartment',
    location: 'Yaba, Lagos',
    price: '₦450,000',
    type: 'Self Contain',
    icon: Building2,
    feature2: 'WiFi',
    feature2Icon: Wifi,
    distance: '2.1km',
    rating: '4.7 (98)',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: '2 Bedroom Flat',
    location: 'Bwari, Abuja',
    price: '₦600,000',
    type: '2 Beds',
    icon: BedDouble,
    feature2: '24/7 Light',
    feature2Icon: Lightbulb,
    distance: '1.6km',
    rating: '4.8 (76)',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Standard Room (Hostel)',
    location: 'Choba, Port Harcourt',
    price: '₦150,000',
    type: 'Single Room',
    icon: BedDouble,
    feature2: 'WiFi',
    feature2Icon: Wifi,
    distance: '0.8km',
    rating: '4.6 (64)',
    image:
      'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Mini Flat',
    location: 'UNN Nsukka',
    price: '₦320,000',
    type: 'Mini Flat',
    icon: Building2,
    feature2: 'Parking',
    feature2Icon: Car,
    distance: '1.3km',
    rating: '4.5 (52)',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Shared Apartment',
    location: 'FUTA, Akure',
    price: '₦180,000',
    type: 'Shared',
    icon: Building2,
    feature2: '24/7 Light',
    feature2Icon: Lightbulb,
    distance: '1.3km',
    rating: '4.3 (41)',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function FeaturedListing() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP HEADER */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[34px] font-black tracking-tight text-slate-900">
            Featured Apartments
          </h2>

          <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
            View all listings
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* PROPERTY GRID */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          
          {listings.map((listing) => {
            const FeatureIcon = listing.icon
            const Feature2Icon = listing.feature2Icon

            return (
              <div
                key={listing.title}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                
                {/* IMAGE */}
                <div className="relative">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={600}
                    height={400}
                    className="h-[190px] w-full object-cover"
                  />

                  {/* VERIFIED BADGE */}
                  <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1 shadow-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />

                    <span className="text-[11px] font-bold text-emerald-600">
                      Verified
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  
                  {/* TITLE */}
                  <h3 className="text-[22px] font-black leading-tight tracking-tight text-slate-900">
                    {listing.title}
                  </h3>

                  {/* LOCATION */}
                  <p className="mt-1 text-sm text-slate-500">
                    {listing.location}
                  </p>

                  {/* PRICE */}
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-[30px] font-black tracking-tight text-slate-900">
                      {listing.price}
                    </span>

                    <span className="pb-1 text-sm text-slate-500">
                      / year
                    </span>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    
                    <div className="flex items-center gap-1.5">
                      <FeatureIcon className="h-4 w-4" />
                      {listing.type}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Feature2Icon className="h-4 w-4" />
                      {listing.feature2}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {listing.distance}
                    </div>
                  </div>

                  {/* RATING */}
                  <div className="mt-5 flex items-center justify-end gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm font-semibold text-slate-600">
                      {listing.rating}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* SLIDER DOTS */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  )
}