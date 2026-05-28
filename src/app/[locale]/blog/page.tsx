import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const posts = [
  {
    _id: "1",
    title: "Монголын махны экспорт өсч байна",
    slug: "mongolian-meat-export-growing",
    excerpt: "Монгол улс махны экспортоо нэмэгдүүлж, олон улсын зах зээлд хүчээ сориорой.",
    date: "2024.03.15",
  },
  {
    _id: "2",
    title: "Арцат Алтайн Уулс шинэ үйлдвэрээ нээлээ",
    slug: "new-factory-opening",
    excerpt: "Бид шинэ, орчин үеийн мах боловсруулах үйлдвэрээ нээлээ.",
    date: "2024.02.28",
  },
  {
    _id: "3",
    title: "ISO 22000 гэрчилгээ шинэчлэгдлээ",
    slug: "iso-certification-renewed",
    excerpt: "Бидний хүнсний аюулгүй байдлын удирдлагын тогтолцоо шинэчлэгдлээ.",
    date: "2024.01.10",
  },
];

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              МЭДЭЭ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4">
              Манай мэдээ
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <FadeIn key={post._id} direction="up" delay={i * 0.1}>
                <Link href={`/${locale}/blog/${post.slug}`} className="block group">
                  <div className="bg-neutral-offwhite rounded-xl overflow-hidden">
                    <div className="aspect-video bg-neutral-200">
                      <div className="w-full h-full bg-neutral-300 group-hover:bg-neutral-400 transition-colors" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-neutral-charcoal mb-2">{post.date}</p>
                      <h2 className="text-xl font-display font-bold text-neutral-deep group-hover:text-brand-green transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-neutral-charcoal mt-2">{post.excerpt}</p>
                      <span className="inline-block mt-4 text-brand-green font-body font-semibold">
                        Цааш унших →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
