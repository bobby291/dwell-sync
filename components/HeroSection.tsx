import Image from 'next/image'
import {
  Sparkles,
  Search,
  Home,
  MessageCircle,
  Wifi,
  Star,
  ShieldCheck,
  Lightbulb,
} from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#F8FAFC] py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center">

        {/* LEFT CONTENT */}
        <div>
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />

            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-[11px] font-bold text-transparent">
              AI-POWERED HOUSING PLATFORM
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-5xl">
            Find Trusted Student Accommodation
            <span className="block text-blue-600">
              Without Agent Stress
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            Dwell Sync uses AI to help you discover verified apartments,
            compare prices, and move in with confidence.
            Built for students and local communities.
          </p>

          {/* SEARCH */}
          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              
              <div className="flex flex-1 items-center gap-3 px-3 py-2">
                <Sparkles className="h-4 w-4 text-blue-600" />

                <input
                  type="text"
                  placeholder="Find a self contain under 400k near UNIABUJA"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </div>

              <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>

          {/* POPULAR SEARCHES */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">
              Popular searches:
            </span>

            <button className="rounded-full bg-white px-3 py-1.5 text-xs font-medium shadow-sm">
              Hostel near school
            </button>

            <button className="rounded-full bg-white px-3 py-1.5 text-xs font-medium shadow-sm">
              2 bedroom apartment
            </button>

            <button className="rounded-full bg-white px-3 py-1.5 text-xs font-medium shadow-sm">
              Roommate
            </button>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              <Home className="h-4 w-4" />
              Find Accommodation
            </button>

            <button className="flex items-center gap-2 rounded-2xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
              <MessageCircle className="h-4 w-4" />
              Talk to AI
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden h-[500px] lg:block">

          {/* MAP CARD */}
          <div className="absolute right-0 top-0 w-[420px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
            
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1400&auto=format&fit=crop"
              alt="Map"
              width={1000}
              height={700}
              className="h-[320px] w-full object-cover opacity-90"
            />

            {/* SEARCH THIS AREA */}
            <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-blue-600" />

                <span className="text-xs font-semibold">
                  Search this area
                </span>
              </div>
            </div>

            {/* LOCATION DOT */}
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500/20">
              <div className="h-4 w-4 rounded-full bg-blue-600" />
            </div>

            {/* PRICE TAGS */}
            <div className="absolute left-8 top-20 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-lg">
              ₦350k
            </div>

            <div className="absolute right-12 top-20 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-lg">
              ₦450k
            </div>

            <div className="absolute bottom-16 left-10 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-lg">
              ₦320k
            </div>

            <div className="absolute bottom-14 right-14 rounded-full bg-white px-3 py-1.5 text-xs font-bold shadow-lg">
              ₦280k
            </div>
          </div>

          {/* APARTMENT CARD */}
          <div className="absolute left-0 top-16 z-20 w-[250px] rounded-[24px] border border-slate-200 bg-white p-3 shadow-2xl">
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                alt="Apartment"
                width={500}
                height={350}
                className="h-[160px] w-full rounded-2xl object-cover"
              />

              <button className="absolute right-3 top-3 rounded-full bg-white p-1.5 shadow-lg">
                ❤️
              </button>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-black text-slate-900">
                  Modern Self Contain
                </h3>

                <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </div>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Choba, Port Harcourt
              </p>

              <div className="mt-3 flex items-end gap-1">
                <span className="text-2xl font-black text-blue-600">
                  ₦380,000
                </span>

                <span className="pb-1 text-xs text-slate-500">
                  / year
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-500">
                <div className="flex items-center gap-1">
                  <Home className="h-3.5 w-3.5" />
                  Self Contain
                </div>

                <div className="flex items-center gap-1">
                  <Wifi className="h-3.5 w-3.5" />
                  WiFi
                </div>

                <div className="flex items-center gap-1">
                  <Lightbulb className="h-3.5 w-3.5" />
                  24/7
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />

                <span className="text-xs font-semibold text-slate-700">
                  4.8 (120)
                </span>
              </div>

              <button className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                View Details
              </button>
            </div>
          </div>

          {/* AI CHAT CARD */}
          <div className="absolute bottom-0 right-0 z-30 w-[250px] overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl">
            
            {/* TOP */}
            <div className="bg-blue-600 px-4 py-4 text-white">
              <div className="flex items-center gap-3">
                
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
                  alt="AI"
                  width={34}
                  height={34}
                  className="rounded-full"
                />

                <div>
                  <h4 className="text-sm font-bold">
                    Dwell AI
                  </h4>

                  <p className="text-[11px] text-blue-100">
                    Online
                  </p>
                </div>
              </div>
            </div>

            {/* CHAT BODY */}
            <div className="space-y-4 p-4">
              
              <div className="rounded-2xl bg-slate-100 p-3 text-xs leading-6 text-slate-700">
                Hi! I'm Dwell AI 👋
                I can help you find the perfect home.
              </div>

              <div className="ml-auto w-fit rounded-2xl bg-blue-600 px-4 py-3 text-xs leading-5 text-white">
                Self contain under 400k near UNIABUJA
              </div>

              <div className="flex gap-1">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}