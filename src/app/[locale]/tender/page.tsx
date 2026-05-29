"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function TenderPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    orgName: "",
    contactPerson: "",
    email: "",
    phone: "",
    tenderNumber: "",
    deadline: "",
    products: "",
  });

  return (
    <div className="min-h-screen">
      {/* Hero - 500px, #F8FAFD */}
      <section className="bg-[#F8FAFD]">
        <div className="max-w-site mx-auto px-12 py-24 text-center">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-[2px]">
              ТОМООХОН ХУДАЛДАН АВАЛТЫН ШИЙДЭЛ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4 max-w-3xl mx-auto">
              Supply partner for government & public sector buyers
            </h1>
            <p className="mt-4 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Bulk meat, dumplings & processed foods • Tender-ready documentation
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="#tender-form"
                className="px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Submit tender →
              </a>
              <a
                href="#bulk-order"
                className="px-8 py-4 bg-white text-brand-green font-body font-semibold rounded-lg border border-brand-green hover:bg-brand-green/5 transition-colors"
              >
                Bulk order →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="bg-white py-12">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px] mb-4">
              ИТГЭЛТЭЙ ХАМТРАГЧ
            </p>
            <div className="flex flex-wrap gap-4">
              {["Ministry ✓", "City Gov ✓", "Army Supply ✓", "Hospitals ✓", "Schools ✓"].map((partner) => (
                <span key={partner} className="px-5 py-2.5 bg-[#F8FAFD] rounded-full text-sm font-body font-medium text-neutral-charcoal">
                  {partner}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories - 3 cards */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px] mb-2">
              БҮТЭЭГДЭХҮҮНИЙ ТӨРЛҮҮД
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-12">
              What we supply
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Fresh & frozen meat", 
                desc: "Beef, pork, lamb cuts", 
                order: "Min. order: 50kg →",
                image: true
              },
              { 
                title: "Dumplings & ready meals", 
                desc: "Pre-made, IQF frozen", 
                order: "Min. order: 200 pcs →",
                image: true
              },
              { 
                title: "Processed products", 
                desc: "Sausages, patties, cold cuts", 
                order: "Min. order: 30kg →",
                image: true
              },
            ].map((cat, i) => (
              <FadeIn key={cat.title} direction="up" delay={i * 0.1}>
                <div className="bg-[#F8FAFD] rounded-xl overflow-hidden">
                  <div className="aspect-[16/10] bg-[#F0EDE7]" />
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-display font-bold text-neutral-deep">{cat.title}</h3>
                    <p className="text-sm text-neutral-charcoal">{cat.desc}</p>
                    <p className="text-sm font-body font-semibold text-brand-green">{cat.order}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form + Info sidebar */}
      <section id="bulk-order" className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px]">
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
                      className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Холбогдох хүн</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Утас</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл хаяг</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Бүтээгдэхүүний төрөл</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тоо хэмжээ</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                    <div className="w-[200px]">
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хэмжих нэгж</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хүргэлтийн огноо</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Нэмэлт тайлбар</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-[52px] bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                  >
                    Request quote →
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
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-2">
                      <span>Fresh / frozen meat</span>
                      <span className="font-semibold text-neutral-deep">50 kg</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-1">
                      <span>Dumplings / ready meals</span>
                      <span className="font-semibold text-neutral-deep">200 pcs</span>
                    </div>
                    <div className="flex justify-between text-sm text-neutral-charcoal mt-1">
                      <span>Processed products</span>
                      <span className="font-semibold text-neutral-deep">30 kg</span>
                    </div>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Delivery options:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Refrigerated truck delivery</p>
                    <p className="text-sm text-neutral-charcoal">Warehouse pickup available</p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Payment terms:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Net 30 / Net 60 for gov. buyers</p>
                    <p className="text-sm text-neutral-charcoal">Prepayment discount available</p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Need help? Call us:</p>
                    <div className="mt-2 p-3 bg-[#F8FAFD] rounded-lg text-center">
                      <p className="text-sm font-display font-bold text-brand-green">+976 11 333 555</p>
                    </div>
                    <p className="text-xs text-neutral-stone mt-2">Mon-Fri 08:00-18:00</p>
                    <p className="text-xs text-neutral-stone">Dedicated B2B account manager</p>
                    <p className="text-xs text-neutral-stone">assigned after first order</p>
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
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px] mb-2">
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
                  className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Худалдан авах ажилтан</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Албан ёсны и-мэйл</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тендерийн дугаар</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тендер хаагдах огноо</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Шаардлагатай бүтээгдэхүүнүүд</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тендерийн баримт бичиг (PDF)</label>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg h-[120px] flex items-center justify-center bg-[#F8FAFD]">
                  <p className="text-sm text-neutral-charcoal">PDF файл чирэх эсвэл оруулах</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="iso" className="w-5 h-5 rounded border-neutral-300" />
                  <label htmlFor="iso" className="text-sm text-neutral-charcoal">We meet ISO food safety & cold chain handling requirements</label>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="confirm" className="w-5 h-5 rounded border-neutral-300" />
                  <label htmlFor="confirm" className="text-sm text-neutral-charcoal">I confirm this submission is on behalf of a registered institution</label>
                </div>
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
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px] mb-4">
              БАТАЛГААЖУУЛАЛТ & ШААРДЛАГА
            </p>
            <div className="flex flex-wrap gap-4">
              {["ISO 22000", "HACCP", "Halal cert.", "Gov. reg. #"].map((cert) => (
                <span key={cert} className="px-6 py-3 bg-white rounded-full text-sm font-body font-semibold text-neutral-charcoal border border-[#E5E7EB]">
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Public Procurement Stats */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-[11px] font-body font-semibold text-neutral-stone uppercase tracking-[2px] mb-2">
              ТӨРИЙН ХУДАЛДАН АВАЛТАД ТОХИРОМЖТОЙ
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-12">
              Built for public procurement
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "10+", label: "жил төрийн\nсалбарт" },
              { value: "ISO", label: "certified facility\n& cold chain" },
              { value: "48hr", label: "quote turnaround\non any RFQ" },
              { value: "500t", label: "monthly capacity\nmeat products" },
            ].map((stat, i) => (
              <FadeIn key={stat.value} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 text-center border border-[#E5E7EB]">
                  <div className="text-4xl font-display font-extrabold text-brand-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-charcoal whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
