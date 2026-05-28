import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export default function TenderPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              TENDER & B2B
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4 max-w-3xl">
              Supply partner for government procurement
            </h1>
            <p className="mt-6 text-lg text-neutral-charcoal max-w-2xl">
              Монгол Улсын Засгийн газар, аймаг, дүүргийн хөдөлмөрийн яам, цэргийн анги, сургууль, эмнэлэг болон бусад төрийн байгууллагын хүнсний хангамжийн хамгийн найдвартай хөрөнгө оруулагч.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-4 mt-8">
              {["Монгол Улсын Засгийн газар", "Улаанбаатар хот", "Монгол цэргийн анги", "Сургууль, эмнэлэг"].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-neutral-offwhite rounded-full text-sm font-body text-neutral-charcoal">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-neutral-offwhite">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "жилийн гэрээ" },
              { value: "ISO", label: "22000 гэрчилгээ" },
              { value: "48цаг", label: "хүргэлтийн хугацаа" },
              { value: "500т+", label: "жилийн нийлүүлэлт" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up" className="text-center">
                <div className="text-3xl font-display font-extrabold text-brand-green mb-2">{stat.value}</div>
                <div className="text-sm font-body text-neutral-charcoal">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              БҮТЭЭГДЭХҮҮН
            </span>
            <h2 className="text-3xl font-display font-bold text-neutral-deep mt-3">Тендерийн бүтээгдэхүүн</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Үхрийн мах", min: "100кг ээс", price: "₮45,000/кг" },
              { name: "Хонины мах", min: "100кг ээс", price: "₮52,000/кг" },
              { name: "Банш", min: "50кг ээс", price: "₮35,000/кг" },
              { name: "Давсалсан мах", min: "50кг ээс", price: "₮42,000/кг" },
            ].map((product, i) => (
              <FadeIn key={product.name} direction="up" delay={i * 0.1}>
                <div className="bg-neutral-offwhite rounded-xl overflow-hidden">
                  <div className="aspect-video bg-neutral-200">
                    <div className="w-full h-full bg-neutral-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold text-neutral-deep">{product.name}</h3>
                    <p className="text-sm text-neutral-charcoal mt-1">Хамгийн багадаа: {product.min}</p>
                    <p className="text-lg font-display font-bold text-brand-green mt-2">{product.price}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="left">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
                  ОЛОН УДААГИЙН ЗАХИАЛГА
                </span>
                <h2 className="text-2xl font-display font-bold text-neutral-deep mt-3 mb-6">
                  Тендерийн захиалга
                </h2>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Байгууллагын нэр"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <input
                    type="text"
                    placeholder="Регистрийн дугаар"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <input
                    type="email"
                    placeholder="И-мэйл хаяг"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <input
                    type="tel"
                    placeholder="Утас"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <textarea
                    rows={4}
                    placeholder="Захиалгын дэлгэрэнгүй"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                  >
                    Захиалга илгээх
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
                  ТЕНДЕРИЙН БАРИМТ БИЧИГ
                </span>
                <h2 className="text-2xl font-display font-bold text-neutral-deep mt-3 mb-6">
                  Баримт бичиг илгээх
                </h2>

                <div className="space-y-4">
                  <div className="border-2 border-dashed border-neutral-200 rounded-xl p-8 text-center">
                    <p className="text-neutral-charcoal">PDF файлыг энд буулгана уу</p>
                    <p className="text-sm text-neutral-ash mt-2">Эсвэл файл сонгох</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-body font-medium text-neutral-deep">Шаардлагатай баримт бичиг:</p>
                    <ul className="text-sm text-neutral-charcoal space-y-1 list-disc list-inside">
                      <li>Тендерийн урилга</li>
                      <li>Тодорхойлолт (ТОР)</li>
                      <li>Байгууллагын гэрчилгээ</li>
                      <li>Татвар төлсөн баримт</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              ГЭРЧИЛГЭЭ
            </span>
            <h2 className="text-3xl font-display font-bold text-neutral-deep mt-3">Бидний гэрчилгээнүүд</h2>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 22000", desc: "Хүнсний аюулгүй байдал" },
              { name: "HACCP", desc: "Аюулын шинжилгээ" },
              { name: "Halal", desc: "Халал баталгаа" },
              { name: "Gov Reg", desc: "Төрийн бүртгэл" },
            ].map((cert, i) => (
              <FadeIn key={cert.name} direction="up" delay={i * 0.1}>
                <div className="bg-neutral-offwhite p-6 rounded-xl text-center">
                  <div className="w-16 h-16 bg-neutral-parchment rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-neutral-deep">{cert.name}</h3>
                  <p className="text-sm text-neutral-charcoal mt-1">{cert.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
