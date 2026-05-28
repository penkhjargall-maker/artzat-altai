"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { NavItem } from "@/types/cms";

interface HeaderProps {
  locale: string;
  menu?: NavItem[];
}

export default function Header({ locale, menu = [] }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = menu.length > 0 ? menu : [
    { _id: "1", label: "БҮТЭЭГДЭХҮҮН", url: "/products", order: 1 },
    { _id: "2", label: "ТЕНДЕР", url: "/tender", order: 2 },
    { _id: "3", label: "МЭДЭЭ", url: "/blog", order: 3 },
    { _id: "4", label: "БИДНИЙ ТУХАЙ", url: "/about", order: 4 },
    { _id: "5", label: "ХОЛБОО", url: "/contact", order: 5 },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-2xl">▲▲▲</span>
            <span className="text-lg font-display font-bold text-brand-green">
              АРЦАТ АЛТАЙН УУЛС
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item._id}
                href={`/${locale}${item.url}`}
                className="text-sm font-body font-medium text-neutral-charcoal hover:text-brand-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-stone" />
                <input
                  type="text"
                  placeholder="Хайх..."
                  className="pl-9 pr-4 py-2 w-[200px] rounded-full bg-neutral-offwhite border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
            </div>

            {/* Cart */}
            <Link
              href={`/${locale}/cart`}
              className="relative p-2 rounded-lg hover:bg-neutral-offwhite transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-neutral-charcoal" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-green text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* CTA Button */}
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex px-6 py-2.5 bg-brand-green text-white text-sm font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              ЛАВЛАХ
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-neutral-offwhite transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-neutral-charcoal" />
              ) : (
                <Menu className="w-6 h-6 text-neutral-charcoal" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-200">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item._id}
                  href={`/${locale}${item.url}`}
                  className="px-4 py-3 text-sm font-body font-medium text-neutral-charcoal hover:bg-neutral-offwhite rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={`/${locale}/contact`}
                className="mx-4 mt-2 px-6 py-3 bg-brand-green text-white text-center text-sm font-body font-semibold rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                ЛАВЛАХ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
