import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              БИДНИЙ ТУХАЙ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4 max-w-3xl mx-auto">
              We make things people actually want to keep.
            </h1>
            <p className="mt-4 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Арцат Алтайн Уулс ХХК нь Монголын хүнсний боловсруулах үйлдвэрлэлийн салбарт 25 гаруй жилийн туршлагатай. Бид чанар, аюулгүй байдал, амтыг эрхэмлэдэг.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "25+", label: "жилийн туршлага" },
              { value: "150+", label: "хамтран ажиллагч" },
              { value: "30+", label: "бүтээгдэхүүн" },
            ].map((stat) => (
              <FadeIn key={stat.label} direction="up" className="text-center p-8 bg-[#F8FAFD] rounded-xl">
                <div className="text-4xl font-display font-extrabold text-brand-green mb-2">{stat.value}</div>
                <div className="text-sm font-body text-neutral-charcoal">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F8FAFD] py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-4">
                <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
                  БИДНИЙ ТҮҮХ
                </span>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-deep">
                  1998 онд байгуулагдсан
                </h2>
                <p className="text-neutral-charcoal leading-relaxed">
                  Арцат Алтайн Уулс ХХК нь Монголын хүнсний боловсруулах үйлдвэрлэлийн салбарт 25 гаруй жилийн туршлагатай. Бид чанар, аюулгүй байдал, амтыг эрхэмлэдэг. Монголын уугуул түүхий эдээс эхэлж, дэлхийн стандартад нийцсэн бүтээгдэхүүн үйлдвэрлэж байна.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="aspect-[4/3] bg-[#F0EDE7] rounded-lg">
                <div className="w-full h-full bg-neutral-200 rounded-lg" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              БИДНИЙ ҮНЭТ ЗҮЙЛС
            </span>
          </FadeIn>

          <div className="mt-8 space-y-0">
            {[
              { icon: "🌱", title: "Sustainably sourced", subtitle: "Тогтвортой эх үүсвэр" },
              { icon: "💎", title: "Designed to last", subtitle: "Удаан эдэлгээтэй" },
              { icon: "❤️", title: "Made with care", subtitle: "Хайртайгаар хийсэн" },
            ].map((value, i) => (
              <FadeIn key={value.title} direction="up" delay={i * 0.1}>
                <div className={`flex items-center gap-4 py-6 ${i < 2 ? 'border-b border-neutral-200' : ''}`}>
                  <div className="w-12 h-12 bg-[#F8FAFD] rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <p className="text-lg font-display font-semibold text-neutral-deep">
                    {value.title} - {value.subtitle}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              БИДНИЙ БАГ
            </span>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "ББ", name: "Бат-Эрдэнэ Б.", role: "Үүсгэн байгуулагч" },
              { initials: "ОД", name: "Оюундарь Д.", role: "Бүтээгдэхүүн хариуцсан" },
              { initials: "ГБ", name: "Ганбат Б.", role: "Хэрэглэгчийн үйлчилгээ" },
            ].map((member, i) => (
              <FadeIn key={member.name} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="w-20 h-20 bg-[#F0EDE7] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-display font-bold text-brand-green">{member.initials}</span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-neutral-deep">{member.name}</h3>
                  <p className="text-sm text-neutral-charcoal mt-1">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              МЭДЭЭ МЭДЭЭЛЭЛ
            </span>
          </FadeIn>

          <div className="mt-8 space-y-0">
            {[
              { source: "Wired", title: "Mongolian meat exports reach new heights in 2024", date: "Dec 2024" },
              { source: "Fast Company", title: "How Artzat Altai is modernizing food processing", date: "Nov 2024" },
              { source: "Dezeen", title: "Sustainable food production in the Mongolian steppe", date: "Oct 2024" },
            ].map((press, i) => (
              <FadeIn key={press.source} direction="up" delay={i * 0.1}>
                <div className={`flex items-center gap-4 py-5 ${i < 2 ? 'border-b border-neutral-200' : ''}`}>
                  <div className="w-[60px] h-[60px] bg-[#F0EDE7] rounded-lg flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-body font-semibold text-neutral-deep">{press.source}</p>
                    <p className="text-sm text-neutral-charcoal">{press.title}</p>
                  </div>
                  <span className="text-xs text-neutral-stone">{press.date}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-neutral-deep mb-6">
              Асуулт байна уу эсвэл зүгээр л мэндчилмээр байна уу?
            </h2>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
            >
              Холбогдох →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
