import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section - White background */}
      <section className="bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              МОНГОЛ ХҮНСНИЙ БОЛОВСРУУЛАЛТ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-extrabold text-neutral-deep mt-6 leading-tight">
              Premium Food Processing For Modern Markets
            </h1>
            <p className="mt-6 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Монголын уугуул түүхий эдээс эхэлсэн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-green text-white font-body font-semibold rounded hover:bg-brand-green/90 transition-colors"
              >
                Бүтээгдэхүүн харах
              </Link>
              <Link
                href={`/${locale}/tender`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-brand-green font-body font-semibold rounded border-2 border-brand-green hover:bg-brand-green/5 transition-colors"
              >
                Тендер & B2B
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar - #F0EDE7 background */}
      <section className="bg-[#F0EDE7]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "ЖИЛИЙН ТУРШЛАГА" },
              { value: "150+", label: "БҮТЭЭГДЭХҮҮН" },
              { value: "30+", label: "УЛС ОРОН" },
              { value: "500T", label: "ХҮЧИН ЧАДАЛ" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up" delay={0.1} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-extrabold text-brand-green mb-2">
                  {stat.value}
                </div>
                <div className="text-[13px] font-body font-medium text-neutral-charcoal mb-2">{stat.label}</div>
                <div className="w-10 h-0.5 bg-altai-orange mx-auto"></div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-12">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              БҮТЭЭГДЭХҮҮН
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mt-3">
              Дэлхийн стандартад нийцсэн
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Үхрийн мах", desc: "Шинэхэн, чанартай", price: "₮45,000 /кг" },
              { name: "Хонины мах", desc: "Монголын уулын хонь", price: "₮52,000 /кг" },
              { name: "Банш", desc: "Гарын аргаар элсэх", price: "₮35,000 /кг" },
            ].map((product, i) => (
              <FadeIn key={product.name} direction="up" delay={i * 0.1}>
                <div className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] bg-neutral-parchment relative overflow-hidden">
                    <div className="absolute inset-0 bg-neutral-200" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-neutral-deep">{product.name}</h3>
                    <p className="text-sm text-neutral-charcoal mt-1">{product.desc}</p>
                    <p className="text-xl font-display font-bold text-brand-green mt-4">{product.price}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 text-brand-green font-body font-semibold hover:gap-3 transition-all"
            >
              Бүх бүтээгдэхүүн харах
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="aspect-[4/3] bg-neutral-parchment rounded-lg overflow-hidden">
                <div className="w-full h-full bg-neutral-200" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-6">
                <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
                  ҮЙЛДВЭРЛЭЛ
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep">
                  Аж үйлдвэрийн нарийн тооцоо
                </h2>
                <p className="text-neutral-charcoal leading-relaxed">
                  Бид үйлдвэрлэлийн бүх шатанд олон улсын стандартыг баримтладаг.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-12">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              ТУСТАЙ БАЙДАЛ
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mt-3">
              Байгальд ээлтэй, ирээдүйд хариуцлагатай
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Тогтвортой эх үүсвэр", desc: "Байгалийн балансыг хадгална" },
              { title: "Хүнсний аюулгүй байдал", desc: "ISO 22000, HACCP баталгаа" },
              { title: "Хариуцлагатай хүргэлт", desc: "Хөргөгчтэй тээвэрлэлт" },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-lg font-display font-bold text-neutral-deep mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F8FAFD] py-24">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-4">
              Итгэлийг сонгох уу?
            </h2>
            <p className="text-lg text-neutral-charcoal">
              Бидэнтэй хамтран ажиллаж, дэлхийн зах зээлд хамтдаа гаръя
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
