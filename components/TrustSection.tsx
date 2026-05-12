import {
  ShieldCheck,
  Users,
  Lock,
  Bot,
} from 'lucide-react'

const stats = [
  {
    title: 'Verified Properties',
    value: '5,000+',
    subtext: 'Manually and AI verified',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-green-400',
  },
  {
    title: 'Students Helped',
    value: '18,000+',
    subtext: 'Across 20+ cities',
    icon: Users,
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Secure Payments',
    value: '100%',
    subtext: 'Escrow & buyer protection',
    icon: Lock,
    color: 'from-blue-600 to-blue-500',
  },
  {
    title: 'Smart Fraud Detection',
    value: 'AI',
    subtext: 'Advanced AI protects you from scams',
    icon: Bot,
    color: 'from-purple-500 to-fuchsia-500',
  },
]

export default function Trust() {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-4">
        
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.title}
              className="flex items-center gap-5 rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              
              {/* ICON */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}
              >
                <Icon className="h-8 w-8 text-white" />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-1 text-base font-bold text-slate-800">
                  {stat.title}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {stat.subtext}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}