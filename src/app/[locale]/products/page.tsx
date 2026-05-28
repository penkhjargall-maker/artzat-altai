"use client";

import { useState } from "react";
import { Search, Grid, List } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { getProducts } from "@/lib/mock";

const categories = ["Бүгд", "Свежий мах", "Банш", "Хагас боловсруулсан", "Давсалсан мах"];

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  const [activeCategory, setActiveCategory] = useState("Бүгд");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const products = getProducts();

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "Бүгд" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (p.description || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFD]">
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
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-brand-green text-white"
                      : "bg-white text-neutral-charcoal border border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search & Sort & View Toggle */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-stone" />
                <input
                  type="text"
                  placeholder="Хайх..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-2 w-[200px] rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <select className="px-4 py-2 rounded-lg border border-neutral-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20">
                <option>Эрэмбэлэх</option>
                <option>Үнэ: Бага - Их</option>
                <option>Үнэ: Их - Бага</option>
                <option>Шинээр нэмэгдсэн</option>
              </select>

              <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 ${viewMode === "grid" ? "bg-brand-green text-white" : "bg-white text-neutral-charcoal hover:bg-neutral-50"}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 ${viewMode === "list" ? "bg-brand-green text-white" : "bg-white text-neutral-charcoal hover:bg-neutral-50"}`}
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
                <div className={`group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow ${
                  viewMode === "list" ? "flex" : ""
                }`}>
                  {/* Image Area */}
                  <div className={`bg-[#F0EDE7] relative overflow-hidden ${
                    viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "aspect-[4/3]"
                  }`}>
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs font-body font-semibold text-white ${
                        product.badge === "Бестселлер" ? "bg-altai-orange" : "bg-brand-green"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-lg font-display font-bold text-neutral-deep">{product.name}</h3>
                    <p className="text-sm text-neutral-charcoal mt-1">{product.description}</p>
                    
                    <div className="mt-3">
                      <p className="text-xl font-display font-bold text-brand-green">
                        ₮{product.price.toLocaleString()} /{product.unit}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? "bg-brand-green" : "bg-summit-red"}`} />
                      <span className={`text-xs ${product.inStock ? "text-brand-green" : "text-summit-red"}`}>
                        {product.inStock ? "Нөөцтэй" : "Дууссан"}
                      </span>
                    </div>

                    <button
                      disabled={!product.inStock}
                      className={`w-full mt-4 h-11 rounded-lg font-body font-semibold text-sm transition-colors ${
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
            <button className="w-9 h-9 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-stone hover:bg-neutral-50 bg-white">
              {'<'}
            </button>
            <button className="w-9 h-9 rounded-md bg-brand-green text-white flex items-center justify-center font-body font-semibold text-sm">
              1
            </button>
            <button className="w-9 h-9 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-charcoal hover:bg-neutral-50 bg-white font-body text-sm">
              2
            </button>
            <button className="w-9 h-9 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-charcoal hover:bg-neutral-50 bg-white font-body text-sm">
              {'>'}
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-green py-6">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌿", text: "100% байгалийн" },
              { icon: "❄️", text: "Хөргөгчтэй хүргэлт" },
              { icon: "✓", text: "Чанарын баталгаа" },
              { icon: "🚚", text: "Хурдан" },
            ].map((item) => (
              <div key={item.text} className="flex items-center justify-center gap-3 text-white">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-body font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              САЯХАН ҮЗСЭН БҮТЭЭГДЭХҮҮН
            </p>
            <h2 className="text-2xl font-display font-bold text-neutral-deep mb-8">
              Саяхан үзсэн бүтээгдэхүүн
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.slice(0, 3).map((product, i) => (
              <FadeIn key={product._id} direction="up" delay={i * 0.1}>
                <div className="group cursor-pointer">
                  <div className="bg-[#F0EDE7] rounded-xl aspect-square mb-3" />
                  <p className="text-sm font-body font-medium text-neutral-deep text-center">
                    {product.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
