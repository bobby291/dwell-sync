
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  Heart,
  ShoppingCart,
  ChevronDown,
  X,
} from "lucide-react";
import { shopCategories } from "@/data/shopData";

interface ShopUtilityBarProps {
  cartCount?: number;
  favoriteCount?: number;
  onSearch?: (query: string) => void;
}

export default function ShopUtilityBar({
  cartCount = 0,
  favoriteCount = 0,
  onSearch,
}: ShopUtilityBarProps) {
  const [query, setQuery] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) return;

    if (onSearch) {
      onSearch(searchQuery);
    } else {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
    }
  }

  return (
    <div className="relative z-30 w-full bg-[#0D1B2A] text-white shadow-md">
      <div className="mx-auto flex min-h-[54px] max-w-[1600px] items-center gap-3 px-4 py-2 sm:gap-5 sm:px-6 lg:px-8">
        {/* Categories dropdown */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setCategoriesOpen((open) => !open)}
            aria-expanded={categoriesOpen}
            className="flex items-center gap-2 rounded-lg py-2 text-sm font-medium transition hover:text-blue-300"
          >
            {categoriesOpen ? (
              <X size={19} />
            ) : (
              <Menu size={20} />
            )}

            <span className="hidden sm:inline">All Categories</span>

            <ChevronDown
              size={14}
              className={`hidden transition-transform sm:block ${
                categoriesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {categoriesOpen && (
            <div className="absolute left-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 text-slate-800 shadow-xl">
              <Link
                href="/shop"
                onClick={() => setCategoriesOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-slate-50"
              >
                All Shop Products
              </Link>

              {shopCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/shop/category/${category.slug}`}
                  onClick={() => setCategoriesOpen(false)}
                  className="block px-4 py-3 text-sm transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Desktop search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto hidden w-full max-w-2xl items-center overflow-hidden rounded-full bg-white sm:flex"
          role="search"
        >
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for products, brands and more..."
            aria-label="Search shop products"
            className="h-10 min-w-0 flex-1 bg-transparent px-5 text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            aria-label="Search"
            className="flex h-10 w-12 shrink-0 items-center justify-center bg-blue-600 transition hover:bg-blue-700"
          >
            <Search size={19} />
          </button>
        </form>

        {/* Mobile search toggle */}
        <button
          type="button"
          aria-label="Open search"
          onClick={() => setMobileSearchOpen((open) => !open)}
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10 sm:hidden"
        >
          <Search size={20} />
        </button>

        {/* Favorites */}
        <Link
          href="/favorites"
          aria-label={`Favorites, ${favoriteCount} items`}
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10"
        >
          <Heart size={21} />

          {favoriteCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-pink-500 px-1 text-[10px] font-bold">
              {favoriteCount > 99 ? "99+" : favoriteCount}
            </span>
          )}
        </Link>

        {/* Cart */}
        <Link
          href="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
          className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/10"
        >
          <ShoppingCart size={22} />

          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-bold">
              {cartCount > 99 ? "99+" : cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile search panel */}
      {mobileSearchOpen && (
        <form
          onSubmit={handleSearch}
          className="flex gap-2 border-t border-white/10 p-3 sm:hidden"
          role="search"
        >
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products and brands..."
            aria-label="Search shop products"
            className="h-10 min-w-0 flex-1 rounded-lg bg-white px-3 text-sm text-slate-900 outline-none"
          />

          <button
            type="submit"
            aria-label="Submit search"
            className="flex h-10 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700"
          >
            <Search size={19} />
          </button>
        </form>
      )}
    </div>
  );
}
