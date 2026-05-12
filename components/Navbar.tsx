'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/DwellSync.png"
              alt="Dwell Sync Logo"
              width={150}
              height={150}
              className="object-contain"
            />

            <h1 className="hidden text-2xl font-black tracking-tight sm:block">
              <span className="text-blue-700">Dwell</span>
              <span className="text-emerald-500">Sync</span>
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/accommodation"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Find Accommodation
            </Link>

            <Link
              href="/businesses"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Businesses
            </Link>

            <Link
              href="/explore"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Explore Areas
            </Link>

            <Link
              href="/ai-assistant"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              AI Assistant
            </Link>

            <Link
              href="/how-it-works"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              How It Works
            </Link>
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Login
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
              Sign Up
            </button>

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-xl transition hover:scale-105">
              List Property
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl border border-slate-200 p-2 md:hidden"
          >
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed left-0 top-0 z-[70] h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/DwellSync.png"
              alt="Dwell Sync Logo"
              width={130}
              height={130}
              className="object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-xl border border-slate-200 p-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col p-6">
          
          <Link
            href="/accommodation"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
          >
            Find Accommodation
          </Link>

          <Link
            href="/businesses"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
          >
            Businesses
          </Link>

          <Link
            href="/explore"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
          >
            Explore Areas
          </Link>

          <Link
            href="/ai-assistant"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
          >
            AI Assistant
          </Link>

          <Link
            href="/how-it-works"
            onClick={() => setIsOpen(false)}
            className="rounded-xl px-4 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-blue-600"
          >
            How It Works
          </Link>
        </nav>

        {/* MOBILE BUTTONS */}
        <div className="mt-auto flex flex-col gap-4 p-6">
          
          <button className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700">
            Sign Up
          </button>

          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl">
            List Property
          </button>
        </div>
      </div>
    </>
  )
}