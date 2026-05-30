import {
  Search,
  Sparkles,
  BadgeCheck,
  Home,
  ArrowRight,
} from 'lucide-react'

const steps = [
  {
    id: '1',
    title: 'Search',
    description: 'Tell us what you need and where',
    icon: Search,
  },

  {
    id: '2',
    title: 'Discover',
    description: 'Get AI-matched recommendations',
    icon: Sparkles,
  },

  {
    id: '3',
    title: 'Connect',
    description: 'Chat with landlords or agents securely',
    icon: BadgeCheck,
  },

  {
    id: '4',
    title: 'Move In',
    description: 'Book and move in with confidence',
    icon: Home,
  },
]

export default function HowDwellWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-[42px] font-black tracking-tight text-slate-900">
            How Dwell Sync Works
          </h2>

          <p className="mt-3 text-lg text-slate-500">
            Find your perfect home in 4 simple steps
          </p>
        </div>

        {/* STEPS */}
        <div className="relative mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center text-center xl:items-start xl:text-left"
              >
                
                {/* CONNECTOR LINE */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[72%] top-14 hidden w-[75%] items-center xl:flex">
                    <div className="h-[2px] w-full border-t border-dashed border-slate-300" />

                    <ArrowRight className="ml-2 h-5 w-5 text-slate-300" />
                  </div>
                )}

                {/* ICON CARD */}
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-[30px] border border-slate-100 bg-white shadow-md">
                  <Icon className="h-12 w-12 text-blue-600" />
                </div>

                {/* TEXT */}
                <div className="mt-7">
                  <h3 className="text-[28px] font-black tracking-tight text-slate-900">
                    {step.id}. {step.title}
                  </h3>

                  <p className="mt-3 max-w-[220px] text-lg leading-8 text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div> 
    </section>
  )
}

