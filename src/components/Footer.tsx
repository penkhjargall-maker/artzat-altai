"use client";

import Link from "next/link";
import { NavItem } from "@/types/cms";

interface FooterProps {
  locale: string;
  menu?: NavItem[];
}

export default function Footer({ locale, menu = [] }: FooterProps) {
  const footerLinks = menu.length > 0 ? menu : [
    { _id: "1", label: "Бүтээгдэхүүн", url: "/products", order: 1 },
    { _id: "2", label: "Тендер", url: "/tender", order: 2 },
    { _id: "3", label: "Мэдээ", url: "/blog", order: 3 },
    { _id: "4", label: "Бидний тухай", url: "/about", order: 4 },
  ];

  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">▲▲▲</span>
              <span className="text-lg font-display font-bold">
                АРЦАТ АЛТАЙН УУЛС
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Монголын уугуул түүхий эдээс эхэлсэн. Чанар, аюулгүй байдал, амтыг эрхэмлэдэг.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold mb-4">Цэс</h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item._id}>
                  <Link
                    href={`/${locale}${item.url}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Холбоо барих</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>📍 Улаанбаатар, Монгол</li>
              <li>📞 +976 11 333 555</li>
              <li>✉ info@artzataltai.mn</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold mb-4">Мэдээний захиалга</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="И-мэйл хаяг"
                className="flex-1 px-4 py-2.5 rounded-l-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-4 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-r-lg hover:bg-brand-orange/90 transition-colors">
                Илгээх
              </button>
            </div>
            <p className="mt-2 text-xs text-white/50">
              Шинэ бүтээгдэхүүн, хөнгөлөлтийн мэдээлэл авах
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © 2024 Арцат Алтайн Уулс ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Нууцлал
              </Link>
              <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                Үйлчилгээний нөхцөл
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
