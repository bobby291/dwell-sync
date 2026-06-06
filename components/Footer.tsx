"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0B16] border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                 
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
           <Image
            src="/images/Logo_Dwell.png"
            alt="Dwell Sync Logo"
            width={170}
            height={170}
            className="object-contain"
            priority
         />

            {/* <h1 className="hidden text-xl font-black tracking-tight sm:block">
              <span className="text-blue-700">Dwell</span>
              <span className="text-emerald-500">Sync</span>
            </h1> */}
          </Link>
              </div>
            </div>

            {/* Description */}
            <p className="text-[18px] leading-[34px] text-gray-100 mt-5 max-w-[320px]">
              The all-in-one in astructure connecting accomodation,transportation, logistics,
              business and services for better living.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-7">
              {[
                {
                  icon: FaFacebookF,
                  href: "#",
                },
                {
                  icon: FaTwitter,
                  href: "#",
                },
                {
                  icon: FaLinkedinIn,
                  href: "#",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-gray-600
                      hover:bg-gray-100
                      transition-all
                    "
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">
              Explore
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "Accommodation",
                "Businesses",
                "Transportation",
                "Logistics",
                "Services",
                "All Categories",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    text-[17px]
                    text-gray-400
                    hover:text-black
                    transition-colors
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">
              Company
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "About Us",
                "Blog",
                "Careers",
                "Privacy Policy",
                "Terms of Service",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    text-[17px]
                    text-gray-400
                    hover:text-black
                    transition-colors
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[18px] font-semibold text-white mb-6">
              Support
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "Help Center",
                "Contact Us",
                "Safety Tips",
                "Report a Problem",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    text-[17px]
                    text-gray-500
                    hover:text-black
                    transition-colors
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-center text-[16px] text-gray-500">
            © 2026 Powered ZieTech Developments Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}