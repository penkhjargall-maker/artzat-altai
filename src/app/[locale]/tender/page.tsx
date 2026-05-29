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
      {/* Hero - 500px, #F8FAFD */}
      <section className="bg-[#F8FAFD] py-24">
        <div className="max-w-site mx-auto px-12 text-center">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              ТОМООХОН ХУДАЛДАН АВАЛТЫН ШИЙДЭЛ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4 max-w-3xl mx-auto">
              Төрийн болон олон нийтийн хэвшлийн худалдан авагчдын нийлүүлэгч
            </h1>
            <p className="mt-4 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Тоо хэмжээ ихтэй мах, банш, боловсруулсан хүнс • Тендерийн бэлэн баримт бичиг
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
        <div className="max-w-site mx-auto px-12">
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

      {/* Product Categories - 3 cards */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              БҮТЭЭГДЭХҮҮНИЙ ТӨРЛҮҮД
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-12">
              Бидний нийлүүлдэг бүтээгдэхүүн
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Свежий мах", desc: "Үхрийн, хонины, тахианы мах. Хүйтэн хэлхээтэй, чанарын баталгаатай.", items: "Үхрийн мах, Хонины мах, Тахианы мах" },
              { title: "Хагас боловсруулсан", desc: "Хүндийн ажил хөнгөвчилсөн, шууд хэрэглэхэд бэлэн.", items: "Давсалсан мах, Хатаасан мах, Соёолсон мах" },
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

      {/* Bulk Order Form + Info sidebar */}
      <section className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest">
                  ТОМ ХЭМЖЭЭНИЙ ЗАХИАЛГА
                </p>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep">
                  Тоо хэмжээ ихтэй захиалгын үнийн санал авах
                </h2>
                <p className="text-neutral-charcoal">
                  Маягтыг бөглөөд — бид 48 цагийн дотор үнэ болон нөөцийн мэдээлэл хариу өгнө.
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
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Регистрийн дугаар</label>
                      <input
                        type="text"
                        value={formData.regNumber}
                        onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
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
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хэрэгтэй бүтээгдэхүүнүүд</label>
                    <textarea
                      rows={4}
                      value={formData.products}
                      onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
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
                <h3 className="text-xl font-display font-bold text-neutral-deep">Том хэмжээний захиалгын мэдээлэл</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Хамгийн бага захиалгын хэмжээ:</p>
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

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Хүргэлтийн сонголтууд:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Хөргөгчтэй ачааны машинтай хүргэлт</p>
                    <p className="text-sm text-neutral-charcoal">Агуулахаас өөрөө очиж авах боломжтой</p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Төлбөрийн нөхцөл:</p>
                    <p className="text-sm text-neutral-charcoal mt-1">Net 30 / Net 60 төрийн худалдан авагчдад</p>
                    <p className="text-sm text-neutral-charcoal">Урьдчилан төлбөрт хөнгөлөлттэй</p>
                  </div>

                  <hr className="border-[#E5E7EB]" />

                  <div>
                    <p className="text-sm font-body font-semibold text-neutral-deep">Тусламж хэрэгтэй юу? Бидэнтэй холбогд:</p>
                    <div className="mt-2 p-3 bg-[#F8FAFD] rounded-lg text-center">
                      <p className="text-sm font-body font-semibold text-brand-green">+976 11 333 555</p>
                    </div>
                    <p className="text-xs text-neutral-stone mt-2">Даваа-Баасан 08:00-18:00</p>
                    <p className="text-xs text-neutral-stone">B2B хариуцсан менежер</p>
                    <p className="text-xs text-neutral-stone">b2b@artzat-altai.mn</p>
                  </div>

                  <p className="text-sm font-body font-semibold text-brand-green text-center">48 цагийн үнийн саналын баталгаа</p>
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
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-2">
              ТЕНДЕРИЙН МАТЕРИАЛ
            </p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-2">
              Тендерийн хүсэлт илгээх
            </h2>
            <p className="text-neutral-charcoal mb-12 max-w-2xl">
              Төрийн худалдан авалт, олон нийтийн байгууллагын нийлүүлэлтийн гэрээ, албан ёсны RFQ / RFP процессуудад зориулав.
            </p>
          </FadeIn>

          <FadeIn direction="up">
            <form className="max-w-2xl space-y-6">
              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Байгууллагын нэр</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Регистрийн дугаар</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Утас</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хаяг</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 h-12 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Шаардлагатай бүтээгдэхүүнүүд</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Тендерийн баримт бичиг (PDF)</label>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg h-[120px] flex items-center justify-center bg-[#F8FAFD]">
                  <p className="text-sm text-neutral-charcoal">PDF файлыг энд буулгана уу эсвэл файл сонгох</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="iso" className="w-5 h-5 rounded border-neutral-300" />
                <label htmlFor="iso" className="text-sm text-neutral-charcoal">Бид ISO хүнсний аюулгүй байдал, хүйтэн хэлхээний стандартыг хангана</label>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="confirm" className="w-5 h-5 rounded border-neutral-300" />
                <label htmlFor="confirm" className="text-sm text-neutral-charcoal">Энэхүү материалыг бүртгэлтэй байгууллагын өмнөөс оруулж байгаа гэдгээ баталж байна</label>
              </div>

              <button
                type="submit"
                className="w-full h-[52px] bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Тендер илгээх →
              </button>

              <p className="text-sm text-neutral-stone text-center">Манай худалдан авалтын баг 2 ажлын өдрийн дотор хариу өгнө.</p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#F8FAFD] py-12">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <p className="text-xs font-body font-semibold text-neutral-stone uppercase tracking-widest mb-4">
              БАТАЛГААЖУУЛАЛТ & ШААРДЛАГА
            </p>
            <div className="flex flex-wrap gap-4">
              {["ISO 22000", "HACCP Certified", "Halal Certified", "Gov. Registered Supplier"].map((cert) => (
                <span key={cert} className="px-6 py-3 bg-white rounded-full text-sm font-body text-neutral-charcoal border border-[#E5E7EB]">
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "ЖИЛИЙН ТУРШЛАГА" },
              { value: "150+", label: "БҮТЭЭГДЭХҮҮН" },
              { value: "30+", label: "УЛС ОРОН" },
              { value: "500T", label: "ХҮЧИН ЧАДАЛ" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up" className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-extrabold text-brand-green mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] font-body font-medium text-neutral-charcoal">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
