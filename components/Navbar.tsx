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
  ShoppingBag,
  Badge,
  ChevronDown,
  User,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const productLinks = [
    {
      name: "Businesses",
      href: "/business",
      icon: Building2,
    },
    {
      name: "Services",
      href: "/works",
      icon: BriefcaseBusiness,
    },
    {
      name: "Stay",
      href: "/accomodaation",
      icon: Badge,
    },
    {
      name: "Shop",
      href: "/shop",
      icon: ShoppingBag,
    },
  ];

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-[#0B0B16]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            
            {/* Logo */}
            <Link
              href="/home"
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
            <nav className="hidden items-center gap-8 lg:flex">

              {/* Home */}
              <Link
                href="/home"
                className="relative text-sm font-medium text-[#8B7CFF] transition-all duration-300 hover:text-[#7B61FF]"
              >
                Home

                <span className="absolute -bottom-3 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#7B61FF] to-[#9F8CFF]" />
              </Link>

              {/* Products */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-[#7B61FF]"
                >
                  Products

                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 ${
                      productsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Desktop Products Dropdown */}
                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 ${
                    productsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-purple-800/30 bg-[#111122] p-2 shadow-2xl shadow-black/40">
                    {productLinks.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-300 transition-all duration-200 hover:bg-purple-600/15 hover:text-white"
                        >
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#17172B] transition-all duration-200 group-hover:bg-purple-600/20">
                            <Icon
                              size={17}
                              className="text-[#8B7CFF]"
                            />
                          </div>

                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Stories */}
              <Link
                href="/stories"
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-[#7B61FF]"
              >
                Stories
              </Link>

              {/* Browse */}
              <Link
                href="/browse"
                className="text-sm font-medium text-gray-300 transition-all duration-300 hover:text-[#7B61FF]"
              >
                Browse
              </Link>
            </nav>

            {/* Desktop Right Side */}
            <div className="hidden items-center gap-4 lg:flex">

              {/* Sign In */}
              <Link
                href="/signin"
                className="text-sm font-semibold text-gray-300 transition-all duration-300 hover:text-white"
              >
                Sign In
              </Link>

              {/* Join Waitlist */}
              <a
                href="https://whatsapp.com/C3bWzOTRklZCJmoeAxDhdg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-[#6C4AF2] via-[#7B61FF] to-[#5A2DFF] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105"
              >
                Join Waitlist
              </a>

              {/* Profile */}
              <Link
                href="/profile"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-purple-700/30 bg-[#131325] transition-all duration-300 hover:border-purple-500 hover:bg-purple-500/10"
              >
                <User
                  size={18}
                  className="text-[#8B7CFF] transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-700/30 bg-[#131325] lg:hidden"
              aria-label="Open menu"
            >
              <Menu
                size={20}
                className="text-[#8B7CFF]"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed left-0 top-0 z-[100] h-screen w-[82%] max-w-[320px] border-r border-purple-800/20 bg-gradient-to-b from-[#0B0B16] via-[#111122] to-[#0F1020] transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-[68px] items-center justify-between border-b border-purple-900/20 px-4">
          <Link
            href="/home"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/Logo_Dwell.png"
              alt="Dwell Sync Logo"
              width={105}
              height={105}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17172B] transition-colors hover:bg-purple-600/20"
            aria-label="Close menu"
          >
            <X
              size={18}
              className="text-white"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="px-3 py-3">
          <div className="space-y-1">

            {/* Home */}
            <Link
              href="/home"
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center gap-3 rounded-lg bg-purple-600/10 px-3 text-white transition-all duration-200 hover:bg-purple-600/15"
            >
              <Home
                size={18}
                className="text-[#8B7CFF]"
              />

              <span className="text-sm font-medium">
                Home
              </span>
            </Link>

            {/* Products */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileProductsOpen(
                    !mobileProductsOpen
                  )
                }
                className="flex h-11 w-full items-center justify-between rounded-lg px-3 text-gray-300 transition-all duration-200 hover:bg-purple-600/15 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={18}
                    className="text-[#8B7CFF]"
                  />

                  <span className="text-sm font-medium">
                    Products
                  </span>
                </div>

                <ChevronDown
                  size={17}
                  className={`text-gray-400 transition-transform duration-300 ${
                    mobileProductsOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              {/* NORMAL FULL-WIDTH DROPDOWN */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  mobileProductsOpen
                    ? "max-h-[320px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-1 rounded-xl border border-purple-800/20 bg-[#151526] p-1.5">

                  {productLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex h-12 w-full items-center gap-3 rounded-lg px-3 text-gray-300 transition-all duration-200 hover:bg-purple-600/15 hover:text-white"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1C1C32]">
                          <Icon
                            size={16}
                            className="text-[#8B7CFF]"
                          />
                        </div>

                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                      </Link>
                    );
                  })}

                </div>
              </div>
            </div>

            {/* Stories */}
            <Link
              href="/stories"
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center gap-3 rounded-lg px-3 text-gray-300 transition-all duration-200 hover:bg-purple-600/15 hover:text-white"
            >
              <Badge
                size={18}
                className="text-[#8B7CFF]"
              />

              <span className="text-sm font-medium">
                Stories
              </span>
            </Link>

            {/* Browse */}
            <Link
              href="/browse"
              onClick={() => setIsOpen(false)}
              className="flex h-11 items-center gap-3 rounded-lg px-3 text-gray-300 transition-all duration-200 hover:bg-purple-600/15 hover:text-white"
            >
              <Building2
                size={18}
                className="text-[#8B7CFF]"
              />

              <span className="text-sm font-medium">
                Browse
              </span>
            </Link>
          </div>

          {/* Small Divider */}
          <div className="my-3 border-t border-purple-900/20" />

          {/* Mobile Actions */}
          <div className="space-y-2">

            {/* Sign In */}
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-purple-700/30 bg-[#17172B] text-sm font-medium text-gray-300 transition-all duration-200 hover:border-purple-500 hover:text-white"
            >
              <User size={16} />
              Sign In
            </Link>

            {/* Join Waitlist */}
            <a
              href="https://whatsapp.com/C3bWzOTRklZCJmoeAxDhdg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#6C4AF2] via-[#7B61FF] to-[#5A2DFF] text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-200 hover:scale-[1.01]"
            >
              Join Waitlist
            </a>
          </div>
        </nav>

        {/* Bottom Glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-purple-700/20 to-transparent" />
      </aside>
    </>
  );
}