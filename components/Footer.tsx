"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-[52px] h-[52px]">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                  alt="Dwell Sync Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="text-[38px] font-bold leading-none tracking-tight">
                <span className="text-[#155EEF]">Dwell</span>
                <span className="text-[#12B76A]">Sync</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[18px] leading-[34px] text-gray-600 mt-5 max-w-[320px]">
              AI-powered platform connecting students with trusted accommodation
              across Nigeria.
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
                  icon: FaInstagram,
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
            <h3 className="text-[18px] font-semibold text-black mb-6">
              Platform
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "Find Accommodation",
                "Businesses",
                "Explore Areas",
                "AI Assistant",
                "How It Works",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    text-[17px]
                    text-gray-600
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
            <h3 className="text-[18px] font-semibold text-black mb-6">
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
                    text-gray-600
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
            <h3 className="text-[18px] font-semibold text-black mb-6">
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
                    text-gray-600
                    hover:text-black
                    transition-colors
                  "
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-[18px] font-semibold text-black mb-6">
              For Partners
            </h3>

            <div className="flex flex-col gap-4">
              {[
                "List Property",
                "Partner with Us",
                "Agent Dashboard",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="
                    text-[17px]
                    text-gray-600
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
            © 2026 Dwell Sync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}