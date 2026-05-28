"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Grid, List, Search } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { getProducts } from "@/lib/mock";

const categories = ["Бүгд", "Свежий мах", "Банш", "Хагас боловсруулсан", "Давсалсан мах"];

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const [activeCategory, setActiveCategory] = useState("Бүгд");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const products = getProducts();

  const filteredProducts = activeCategory === "Бүгд" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-offwhite">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-deep">
              Манай бүтээгдэхүүнийг эндээс харна уу
            </h1>
            <p className="mt-4 text-lg text-neutral-charcoal">
              Шинэхэн • Чанартай • Монголын уулын мах
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-neutral-200 py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-brand-green text-white"
                      : "bg-neutral-offwhite text-neutral-charcoal hover:bg-neutral-parchment"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & View Toggle */}
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 rounded-lg border border-neutral-200 text-sm bg-white">
                <option>Эрэмбэлэх</option>
                <option>Үнэ: Бага - Их</option>
                <option>Үнэ: Их - Бага</option>
                <option>Шинээр нэмэгдсэн</option>
              </select>

              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-brand-green text-white" : "bg-white text-neutral-charcoal"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-brand-green text-white" : "bg-white text-neutral-charcoal"}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-stone mb-6">
            {filteredProducts.length} бүтээгдэхүүн олдлоо
          </p>

          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product, i) => (
              <FadeIn key={product._id} direction="up" delay={i * 0.05}>
                <div className={`group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 ${
                  viewMode === "list" ? "flex" : ""
                }`}>
                  <div className={`bg-neutral-parchment relative overflow-hidden ${
                    viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "aspect-[4/3]"
                  }`}>
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-body font-semibold text-white ${
                        product.badge === "Бестселлер" ? "bg-brand-orange" : "bg-brand-green"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-display font-bold text-neutral-deep">{product.name}</h3>
                    <p className="text-sm text-neutral-charcoal mt-1">{product.description}</p>
                    
                    {/* Weight Selector */}
                    <div className="flex gap-2 mt-4">
                      {["500г", "1кг", "5кг"].map((w) => (
                        <button
                          key={w}
                          className="px-3 py-1 rounded-md bg-neutral-offwhite text-xs font-body hover:bg-brand-green hover:text-white transition-colors"
                        >
                          {w}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <p className="text-xl font-display font-bold text-brand-green">
                          ₮{product.price.toLocaleString()} /{product.unit}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-brand-green" : "bg-brand-red"}`} />
                          <span className={`text-xs ${product.inStock ? "text-brand-green" : "text-brand-red"}`}>
                            {product.inStock ? "Нөөцтэй" : "Дууссан"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      disabled={!product.inStock}
                      className={`w-full mt-4 py-3 rounded-lg font-body font-semibold text-sm transition-colors ${
                        product.inStock
                          ? "bg-brand-green text-white hover:bg-brand-green/90"
                          : "bg-neutral-200 text-neutral-stone cursor-not-allowed"
                      }`}
                    >
                      {product.inStock ? "Сагсанд нэмэх" : "Нөөцгүй"}
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-stone hover:bg-neutral-offwhite">{'<'}</button>
            <button className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-charcoal hover:bg-neutral-offwhite">2</button>
            <button className="w-10 h-10 rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-charcoal hover:bg-neutral-offwhite">></button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-green py-8">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🌿", text: "100% байгалийн" },
              { icon: "❄️", text: "Хөргөгчтэй хүргэлт" },
              { icon: "✓", text: "Чанарын баталгаа" },
              { icon: "🚚", text: "Хурдан" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-3 text-white">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-body font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
