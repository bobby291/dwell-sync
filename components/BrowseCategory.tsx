import {
  House,
  BedDouble,
  Building2,
  Users,
  Hotel,
} from 'lucide-react'

const categories = [
  {
    title: 'Self Contain',
    properties: '3,245 properties',
    icon: House,
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-100',
    href: '/self-contain',
  },

  {
    title: 'Room in Apartment',
    properties: '2,134 properties',
    icon: BedDouble,
    iconColor: 'text-green-600',
    bgColor: 'bg-green-100',
    href:  '/room-in-apartment',
  },

  {
    title: '2 Bedroom Flat',
    properties: '1,876 properties',
    icon: Building2,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    href: '2/bedroom-flats',
  },

  {
    title: 'Mini Flat',
    properties: '2,987 properties',
    icon: House,
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
    href: 'mini-flats',
  },

  {
    title: 'Shared Apartment',
    properties: '1,245 properties',
    icon: Users,
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-100',
    href: '/shared-apartments',
  },

  {
    title: 'Hostel / Dormitory',
    properties: '987 properties',
    icon: Hotel,
    iconColor: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
    href: "/hostels-dormitories",
  },
]

export default function BrowseCategory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-[40px] font-black tracking-tight text-slate-900">
            Browse by Category
          </h2>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          
          {categories.map((category) => {
            const Icon = category.icon

            return (
              <div
                key={category.title}
                className="group rounded-[28px] border border-slate-200 bg-white px-6 py-10 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                
                {/* ICON */}
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${category.bgColor}`}
                >
                  <Icon
                    className={`h-10 w-10 ${category.iconColor}`}
                  />
                </div>

                {/* TITLE */}
                <h3 className="mt-7 text-[24px] font-black tracking-tight text-slate-900">
                  {category.title}
                </h3>

                {/* PROPERTY COUNT */}
                <p className="mt-2 text-base text-slate-500">
                  {category.properties}
                </p>

                {/* LINK */}
                {category.href && (
                    <a href={category.href}
                    className='mt-4 text-blue-600 underline hover:text-blue-800'
                    >
                        View Listing
                    </a>
                )}
              </div>
            )
          })}
        </div>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button className="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50">
            View all categories
          </button>
        </div>
      </div>
    </section>
  )
}