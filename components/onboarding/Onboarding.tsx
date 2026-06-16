"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  BriefcaseBusiness,
  Bus,
  Package,
  Users,
  UserRound,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Accommodation",
    icon: Home,
    className: "top-20 left-10",
  },
  {
    title: "Businesses",
    icon: BriefcaseBusiness,
    className: "top-20 right-10",
  },
  {
    title: "Transportation",
    icon: Bus,
    className: "top-80 left-4",
  },
  {
    title: "Services",
    icon: UserRound,
    className: "top-80 right-4",
  },
  {
    title: "Logistics",
    icon: Package,
    className: "top-[34rem] left-10",
  },
  {
    title: "Community",
    icon: Users,
    className: "top-[34rem] right-10",
  },
];

const countries = [
  {
    name: "Nigeria",
    flag: "https://flagcdn.com/w40/ng.png",
  },
  {
    name: "Ghana",
    flag: "https://flagcdn.com/w40/gh.png",
  },
  {
    name: "Uganda",
    flag: "https://flagcdn.com/w40/ug.png",
  },
  {
    name: "South Africa",
    flag: "https://flagcdn.com/w40/za.png",
  },
  {
    name: "Kenya",
    flag: "https://flagcdn.com/w40/ke.png",
  },
  {
    name: "Rwanda",
    flag: "https://flagcdn.com/w40/rw.png",
  },
  {
    name: "Egypt",
    flag: "https://flagcdn.com/w40/eg.png",
  },
  {
    name: "Tanzania",
    flag: "https://flagcdn.com/w40/tz.png",
  },
];

export default function OnboardingScreen() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B16] ">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563EB40,transparent_70%)]" />

      {/* World map */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Service Cards */}
      {services.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
            }}
            className={`absolute ${item.className} hidden md:flex`}
          >
            <div className="flex items-center gap-3 rounded-3xl border border-blue-400/30 bg-blue-500/20 px-6 py-4 backdrop-blur-xl">
              <Icon className="h-5 w-5 text-white" />
              <span className="font-medium text-white">
                {item.title}
              </span>
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="mb-4"
        >
          <Image
            src="/images/Logo_Dwell.png"
            alt="DwellSync"
            width={180}
            height={180}
            priority
          />
        </motion.div>

        {/* Brand */}
        <h1 className="mb-2 text-6xl font-extrabold text-white">
          dwell
          <span className="text-blue-400">
            Sync
          </span>
        </h1>

        <h2 className="max-w-4xl text-3xl font-bold text-white">
          Africa's Connected Commerce
        </h2>

        <h2 className="mb-6 text-3xl font-bold text-amber-400">
          Infrastructure
        </h2>

        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mb-8 flex flex-wrap justify-center gap-3 text-xl text-white"
        >
          <span>Live</span>
          <span>•</span>
          <span>Relocate</span>
          <span>•</span>
          <span>Connect</span>
          <span>•</span>
          <span>Trade</span>
          <span>•</span>
          <span>Deliver</span>
          <span>•</span>
          <span className="text-amber-400">
            Thrive
          </span>
        </motion.div>

        <p className="max-w-3xl text-lg leading-9 text-blue-100">
          DwellSync is Africa's AI-powered social commerce
          and infrastructure platform connecting
          accommodation, transportation, logistics,
          businesses and services into one intelligent
          ecosystem.
        </p>

        {/* Ecosystem Hub */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative my-14 h-64 w-64 rounded-full border border-blue-400/30"
        >
          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl font-bold text-white shadow-[0_0_50px_#2563EB]">
            D
          </div>
        </motion.div>

        {/* Countries */}
            <div className="mb-12 flex max-w-4xl flex-wrap justify-center gap-4">
            {countries.map((country) => (
                <motion.div
                key={country.name}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
                className="flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-500/20 px-5 py-3 text-white backdrop-blur-xl"
                >
                <Image
                    src={country.flag}
                    alt={country.name}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                />

                <span>{country.name}</span>
                </motion.div>
            ))}
            </div>

        {/* Continue Button */}
        <Link href="/home">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-12 py-5 text-xl font-semibold text-white shadow-[0_0_50px_rgba(59,130,246,.5)]"
          >
            Continue to DwellSync

            <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </motion.button>
        </Link>

        {/* Footer Text */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-semibold text-amber-400">
            Built For Africa. Powered By AI.
            Driven By Community.
          </p>
        </div>
      </div>
    </section>
  );
}