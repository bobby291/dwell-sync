import {
  ShieldCheck,
  Building2,
  Lock,
  Bot,
  BriefcaseBusiness,
} from "lucide-react";

const stats = [
  {
    title: "Verified Properties",
    value: "5,000+",
    subtext: "Manually and AI verified",
    icon: ShieldCheck,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Businesses Connected",
    value: "3,500+",
    subtext: "Trusted local businesses",
    icon: Building2,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Service Providers",
    value: "2,000+",
    subtext: "Verified professionals",
    icon: BriefcaseBusiness,
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Secure Payments",
    value: "100%",
    subtext: "Escrow & buyer protection",
    icon: Lock,
    color: "from-blue-600 to-blue-500",
  },
  {
    title: "Smart Fraud Detection",
    value: "AI",
    subtext: "Advanced AI protects users",
    icon: Bot,
    color: "from-purple-500 to-fuchsia-500",
  },
];

export default function Trust() {
  return (
    <section className="bg-[#0B0B16] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group flex items-center gap-4 rounded-[28px] border border-purple-900/20 bg-[#131325] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/10"
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-gray-200">
                    {stat.title}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    {stat.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}