"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const exploreLinks = [
    { name: "Accommodation", href: "/accomodation" },
    { name: "Businesses", href: "/business" },
    { name: "Services", href: "/works" },
    { name: "E-book", href: "/ebook" },
    { name: "Electronics", href: "/electronics" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Artisans", href: "/artisans" },
    { name: "Shopping", href: "/shop" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Stories", href: "/stories" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Safety Tips", href: "/safety" },
    { name: "Report a Problem", href: "/report" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      label: "Facebook",
    },
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="w-full border-t border-purple-900/20 bg-[#0B0B16]">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-16">
        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          
          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/home"
              className="inline-flex items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/images/Logo_Dwell.png"
                alt="Dwell Sync Logo"
                width={170}
                height={170}
                className="h-auto w-[150px] object-contain"
                priority
              />
            </Link>

            {/* Description */}
            <p className="mt-5 max-w-md text-base leading-7 text-gray-400 md:text-[17px]">
              DwellSync is an all-in-one platform connecting accommodation,
              businesses, and trusted services to make everyday living
              simpler, smarter, and more connected.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-800/30 bg-[#131325] text-gray-400 transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-600/10 hover:text-[#8B7CFF]"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-gray-400 transition-colors duration-300 hover:text-[#8B7CFF]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3">
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-gray-400 transition-colors duration-300 hover:text-[#8B7CFF]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Support
            </h3>

            <div className="flex flex-col gap-3">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-gray-400 transition-colors duration-300 hover:text-[#8B7CFF]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 h-px w-full bg-purple-900/20" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © 2026 DwellSync. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Powered by{" "}
            <span className="font-medium text-gray-300">
              ZieTech Developments Group
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}