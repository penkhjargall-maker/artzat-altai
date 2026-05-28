import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "mongolian-meat-export-growing",
    title: "Монголын махны экспорт өсч байна",
    content: `<p>Монгол улс 2024 онд махны экспортоо өмнөх оноос 25% өсгөсөн бөгөөд энэ нь дэлхийн зах зээлд монгол махны нэр хүнд өсч буйг харуулж байна.</p>
      <p>Энэхүү өсөлт нь Монголын мах боловсруулах үйлдвэрүүдийн чанар, стандартыг дээшлүүлсэнтэй холбоотой. Олон улсын зах зээлд өрсөлдөх чадварыг нэмэгдүүлэхэд бид өөрсдийн хувь нэмрээ оруулж байна.</p>`,
  },
  {
    slug: "new-factory-opening",
    title: "Арцат Алтайн Уулс шинэ үйлдвэрээ нээлээ",
    content: `<p>Арцат Алтайн Уулс ХХК өнөөдөр Улаанбаатар хотод шинэ үйлдвэрээ нээлээ. Энэхүү үйлдвэр нь олон улсын стандартад нийцсэн, хамгийн орчин үеийн технологиор тоноглогдсон.</p>
      <p>Шинэ үйлдвэр нь жилд 500 тонн мах боловсруулах хүчин чадалтай бөгөөд 150 гаруй ажлын байр шинээр бий болгосон.</p>`,
  },
  {
    slug: "iso-certification-renewed",
    title: "ISO 22000 гэрчилгээ шинэчлэгдлээ",
    content: `<p>Бидний хүнсний аюулгүй байдлын удирдлагын тогтолцоо ISO 22000:2018 стандартад нийцсэн гэдгээ баталгаажууллаа.</p>
      <p>Энэхүү гэрчилгээ нь бидний бүтээгдэхүүний чанар, аюулгүй байдлыг олон улсын түвшинд хүлээн зөвшөөрсөн гэсэн үг юм.</p>`,
  },
];

export async function generateStaticParams() {
  const params = [];
  for (const locale of ["mn", "en"]) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export default function BlogPostPage({ params }: { params: { locale: string; slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href={`/${params.locale}/blog`}
          className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-8 inline-block"
        >
          ← Мэдээ рүү буцах
        </Link>

        <article className="max-w-3xl">
          <h1 className="text-4xl font-display font-bold text-neutral-deep mb-8">{post.title}</h1>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
