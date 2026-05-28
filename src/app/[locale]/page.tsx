import Link from "next/link";
import { ArrowRight, Leaf, Truck, Shield, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-neutral-deep text-white overflow-hidden">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange text-sm font-body font-semibold rounded-full mb-6">
              МОНГОЛ ХҮНСНИЙ БОЛОВСРУУЛАЛТ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6">
              Premium Food Processing For Modern Markets
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Монголын уугуул түүхий эдээс эхэлсэн. Чанар, аюулгүй байдал, амтыг эрхэмлэдэг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/products`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Бүтээгдэхүүн харах
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/tender`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-body font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
              >
                Тендер & B2B
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-green py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "жилийн туршлага" },
              { value: "150+", label: "хамтран ажиллагч" },
              { value: "30+", label: "бүтээгдэхүүн" },
              { value: "500T", label: "сарын хүчин чадал" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up" delay={0.1} className="text-center">
                <div className="text-4xl lg:text-5xl font-display font-extrabold text-brand-orange mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-body text-white/80">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              БҮТЭЭГДЭХҮҮН
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mt-3">
              Дэлхийн стандартад нийцсэн
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Үхрийн мах", desc: "Шинэхэн, чанартай", price: "₮45,000 /кг", image: "/images/beef.jpg" },
              { name: "Хонины мах", desc: "Монголын уулын хонь", price: "₮52,000 /кг", image: "/images/lamb.jpg" },
              { name: "Банш", desc: "Гарын аргаар элсэх", price: "₮35,000 /кг", image: "/images/dumplings.jpg" },
            ].map((product, i) => (
              <FadeIn key={product.name} direction="up" delay={i * 0.1}>
                <div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
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
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="aspect-video bg-neutral-parchment rounded-xl overflow-hidden">
                <div className="w-full h-full bg-neutral-200" />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div>
                <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
                  ҮЙЛДВЭРЛЭЛ
                </span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mt-3 mb-4">
                  Ахисан түвшний үйлдвэрлэл
                </h2>
                <p className="text-neutral-charcoal leading-relaxed">
                  Бид дэлхийн стандартад нийцсэн, орчин үеийн технологи бүхий үйлдвэрлэлийн шугамаар 
                  Монголын уугуул түүхий эдийг боловсруулж, дэлхийн зах зээлд нийцсэн бүтээгдэхүүн үйлдвэрлэдэг.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              ТОГТВОРТОЙ ХӨГЖИЛ
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mt-3">
              Байгальд ээлтэй, хүртээмжтэй хөрөнгө оруулалт
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Тогтвортой эх үүсвэр", desc: "Байгалийн балансыг хадгална" },
              { icon: Shield, title: "Хүнсний аюулгүй байдал", desc: "ISO 22000, HACCP баталгаа" },
              { icon: Truck, title: "Хариуцлагатай хүргэлт", desc: "Хөргөгчтэй тээвэрлэлт" },
            ].map((item, i) => (
              <FadeIn key={item.title} direction="up" delay={i * 0.1}>
                <div className="text-center p-8 rounded-xl bg-neutral-offwhite hover:bg-neutral-parchment transition-colors">
                  <item.icon className="w-12 h-12 text-brand-green mx-auto mb-4" />
                  <h3 className="text-lg font-display font-bold text-neutral-deep mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-charcoal">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-parchment">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-deep mb-4">
              Итгэлийг сонгох уу?
            </h2>
            <p className="text-lg text-neutral-charcoal mb-8">
              Бидэнтэй хамтран ажиллаж, дэлхийн зах зээлд хамтдаа гаръя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Холбогдох
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/tender`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-green font-body font-semibold rounded-lg hover:bg-neutral-offwhite transition-colors border border-brand-green"
              >
                Тендерийн мэдээлэл
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
