"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export default function TenderPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    orgName: "",
    regNumber: "",
    email: "",
    phone: "",
    products: "",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#F8FAFD] py-24">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              ТОМООХОН ХУДАЛДАН АВАЛТЫН ШИЙДЭЛ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4 max-w-3xl mx-auto">
              Supply partner for government & public sector buyers
            </h1>
            <p className="mt-4 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Bulk meat, dumplings & processed foods • Tender-ready documentation
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href={`/${locale}/products`}
                className="px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Бүтээгдэхүүн харах
              </Link>
              <a
                href="#tender-form"
                className="px-8 py-4 bg-white text-brand-green font-body font-semibold rounded-lg border border-brand-green hover:bg-brand-green/5 transition-colors"
              >
                Тендер илгээх
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="bg-white py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-4">
              ИТГЭЛТЭЙ ХАМТРАГЧ
            </p>
            <div className="flex flex-wrap gap-4">
              {["Монгол Улсын Засгийн газар", "Улаанбаатар хот", "Монгол цэргийн анги", "Сургууль, эмнэлэг", "Төрийн байгууллага"].map((partner) => (
                <span key={partner} className="px-5 py-2.5 bg-[#F8FAFD] rounded-full text-sm font-body text-neutral-charcoal">
                  {partner}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              БҮТЭЭГДЭХҮҮНИЙ ТӨРЛҮҮД
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-12">
              What we supply
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Свежий мах", desc: "Үхрийн, хонины, тахианы мах. Хүйтэн хэлхээтэй, чанарын баталгаатай.", items: "Үхрийн мах, Хонины мах, Тахианы мах" },
              { title: "Хагас боловсруулсан", desc: "Хүндийн ажил хөнгөвчилсэн, шууд хэрэглэхэд бэлэн.", items: "Давсалсан мах, Хатаасан мах, Соёолсон мах" },
              { title: "Банш & Dumplings", desc: "Гарын аргаар элсэх, уламжлалт амт.", items: "Банш, Мантуу, Хуушуур" },
            ].map((cat, i) => (
              <FadeIn key={cat.title} direction="up" delay={i * 0.1}>
                <div className="bg-[#F8FAFD] rounded-xl p-6">
                  <h3 className="text-xl font-display font-bold text-neutral-deep mb-2">{cat.title}</h3>
                  <p className="text-sm text-neutral-charcoal mb-4">{cat.desc}</p>
                  <p className="text-xs text-neutral-stone">{cat.items}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest">
                  ТОМ ХЭМЖЭЭНИЙ ЗАХИАЛГА
                </p>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep">
                  Request a bulk order quote
                </h2>
                <p className="text-neutral-charcoal">
                  Fill in the form — we'll reply within 48 hours with pricing & availability.
                </p>

                <form className="space-y-4 mt-8">
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Байгууллагын нэр</label>
                    <input
                      type="text"
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Регистрийн дугаар</label>
                      <input
                        type="text"
                        value={formData.regNumber}
                        onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                        className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Утас</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хэрэгтэй бүтээгдэхүүнүүд</label>
                    <textarea
                      rows={4}
                      value={formData.products}
                      onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[52px] bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                  >
                    Илгээх →
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white rounded-xl p-8 space-y-6">
                <h3 className="text-xl font-display font-bold text-neutral-deep">Bulk order info</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Min. order quantities:</p>
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-1">
                      <span>Свежий мах</span>
                      <span>50кг+</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-1">
                      <span>Банш</span>
                      <span>200ш+</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-1">
                      <span>Давсалсан мах</span>
                      <span>30кг+</span>
                    </div>
                  </div>

                  <hr className="border-neutral-200" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Delivery options:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Refrigerated truck delivery</p>
                    <p className="text-sm text-neutral-charcoal">Warehouse pickup available</p>
                  </div>

                  <hr className="border-neutral-200" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Payment terms:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Net 30 / Net 60 for gov. buyers</p>
                    <p className="text-sm text-neutral-charcoal">Prepayment discount available</p>
                  </div>

                  <hr className="border-neutral-200" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Need help? Call us:</p>
                    <div className="mt-2 p-3 bg-[#F8FAFD] rounded-lg text-center">
                      <p className="text-sm font-body font-semibold text-brand-green">+976 11 333 555</p>
                    </div>
                    <p className="text-xs text-neutral-stone mt-2">Mon-Fri 08:00-18:00</p>
                    <p className="text-xs text-neutral-stone">Dedicated B2B account manager</p>
                    <p className="text-xs text-neutral-stone">b2b@artzat-altai.mn</p>
                  </div>

                  <p className="text-sm font-body font-semibold text-brand-green text-center">48hr quote guarantee</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Tender Form */}
      <section id="tender-form" className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              ТЕНДЕРИЙН МАТЕРИАЛ
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-2">
              Submit a tender request
            </h2>
            <p className="text-neutral-charcoal mb-12 max-w-2xl">
              For government procurement, public institution supply contracts, and formal RFQ / RFP processes.
            </p>
          </FadeIn>

          <FadeIn direction="up">
            <form className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Байгууллагын нэр</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Регистрийн дугаар</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Утас</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хаяг</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Шаардлагатай бүтээгдэхүүнүүд</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тендерийн баримт бичиг (PDF)</label>
                <div className="border-2 border-dashed border-neutral-200 rounded-lg h-[120px] flex items-center justify-center bg-[#F8FAFD]">
                  <p className="text-sm text-neutral-charcoal">PDF файлыг энд буулгана уу эсвэл файл сонгох</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="iso" className="w-5 h-5 rounded border-neutral-300" />
                <label htmlFor="iso" className="text-sm text-neutral-charcoal">We meet ISO food safety & cold chain handling requirements</label>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="confirm" className="w-5 h-5 rounded border-neutral-300" />
                <label htmlFor="confirm" className="text-sm text-neutral-charcoal">I confirm this submission is on behalf of a registered institution</label>
              </div>

              <button
                type="submit"
                className="w-full h-[52px] bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Submit tender →
              </button>

              <p className="text-sm text-neutral-stone text-center">Our procurement team will respond within 2 business days.</p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F8FAFD] py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-4">
              БАТАЛГААЖУУЛАЛТ & ШААРДЛАГА
            </p>
            <div className="flex flex-wrap gap-4">
              {["ISO 22000", "HACCP Certified", "Halal Certified", "Gov. Registered Supplier"].map((cert) => (
                <span key={cert} className="px-6 py-3 bg-white rounded-full text-sm font-body text-neutral-charcoal border border-neutral-200">
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Public Procurement Features */}
      <section className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              ТӨРИЙН ХУДАЛДАН АВАЛТАД ТОХИРОМЖТОЙ
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-12">
              Built for public procurement
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Tender-ready docs", desc: "All required certificates & compliance documents included" },
              { title: "Volume pricing", desc: "Competitive rates for bulk orders over 100kg" },
              { title: "Cold chain delivery", desc: "Refrigerated transport from warehouse to destination" },
              { title: "Net 30 / Net 60", desc: "Flexible payment terms for government buyers" },
            ].map((feature, i) => (
              <FadeIn key={feature.title} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 text-center">
                  <h3 className="text-lg font-display font-bold text-neutral-deep mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
