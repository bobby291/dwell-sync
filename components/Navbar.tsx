"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Building2,
  BriefcaseBusiness,
  Bus,
  Badge,
  Truck,
  Users,
  ChevronLeft,
  User,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Businesses",
      href: "/businesses",
      icon: Building2,
    },
    {
      name: "Services",
      href: "/services",
      icon: BriefcaseBusiness,
    },
    {
      name: "Transport",
      href: "/transport",
      icon: Bus,
    },
    {
      name: "Logistics",
      href: "/logistics",
      icon: Truck,
    },
    {
      name: "Accomodation",
      href: "/accomodation",
      icon: Badge,
    },
    /**  {
      name: "Community",
      href: "/community",
      icon: Users,
    },*/
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#0B0B16]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/images/Logo_Dwell.png"
                alt="Dwell Sync Logo"
                width={170}
                height={170}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-[#7B61FF]
                    ${
                      item.name === "Home"
                        ? "text-[#8B7CFF]"
                        : "text-gray-300"
                    }`}
                >
                  {item.name}

                  {item.name === "Home" && (
                    <span className="absolute -bottom-3 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#7B61FF] to-[#9F8CFF]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="group flex h-11 w-11 items-center justify-center rounded-full border border-purple-700/30 bg-[#131325] transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10">
                <ChevronLeft
                  size={18}
                  className="text-[#8B7CFF] transition-transform duration-300 group-hover:-translate-x-1"
                />
              </button>

              <a
                href="https://whatsapp.com/C3bWzOTRklZCJmoeAxDhdg"
                target="_bank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#6C4AF2] via-[#7B61FF] to-[#5A2DFF] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-700/40">
                Join Waitlist
              </a>

              <button className="group flex h-11 w-11 items-center justify-center rounded-full border border-purple-700/30 bg-[#131325] transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10">
                <User
                  size={18}
                  className="text-[#8B7CFF] transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-purple-700/30 bg-[#131325]"
            >
              <Menu size={22} className="text-[#8B7CFF]" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-all duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-[100] h-screen w-[85%] max-w-sm bg-gradient-to-b from-[#0B0B16] via-[#111122] to-[#0F1020] border-r border-purple-800/20 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-900/20 px-5 py-5">
          <Image
            src="/images/Logo_Dwell.png"
            alt="Dwell Sync Logo"
            width={140}
            height={140}
            className="object-contain"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17172B]"
          >
            <X size={22} className="text-white" />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="px-5 py-6">
          <div className="space-y-2">
            {navLinks.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-gray-300 transition-all duration-300 hover:bg-purple-600/15 hover:text-white"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17172B] transition-all duration-300 group-hover:bg-purple-600/20">
                    <Icon
                      size={20}
                      className="text-[#8B7CFF]"
                    />
                  </div>

                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-purple-900/20" />

          {/* Action Buttons */}
          <div className="space-y-4">
            <a
              href="https://whatsapp.com/C3bWzOTRklZCJmoeAxDhdg"
              target="_bank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6C4AF2] via-[#7B61FF] to-[#5A2DFF] px-5 py-4 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-[1.02]">
              Join Waitlist
            </a>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-700/30 bg-[#17172B] px-5 py-4 text-gray-300 transition-all duration-300 hover:border-purple-500">
              <User size={18} />
              Profile
            </button>
          </div>
        </nav>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-purple-700/20 to-transparent pointer-events-none" />
      </aside>
    </>
  );
}