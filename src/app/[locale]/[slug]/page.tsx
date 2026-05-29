import { notFound } from "next/navigation";

const staticPages = [
  { slug: "home", locale: "mn" },
  { slug: "about", locale: "mn" },
  { slug: "contact", locale: "mn" },
  { slug: "home", locale: "en" },
  { slug: "about", locale: "en" },
  { slug: "contact", locale: "en" },
];

const pageContent: Record<string, Record<string, { name: string; content: string }>> = {
  mn: {
    home: { name: "Нүүр", content: "<h1>Арцат Алтайн Уулс</h1><p>Монголын уугуул түүхий эдээс эхэлсэн.</p>" },
    about: { name: "Бидний тухай", content: "<h1>Бидний тухай</h1><p>25 гаруй жилийн туршлагатай.</p>" },
    contact: { name: "Холбоо барих", content: "<h1>Холбоо барих</h1><p>Бидэнтэй холбогдох.</p>" },
  },
  en: {
    home: { name: "Home", content: "<h1>Artzat Altai Uuls</h1><p>Starting from Mongolian raw materials.</p>" },
    about: { name: "About Us", content: "<h1>About Us</h1><p>Over 25 years of experience.</p>" },
    contact: { name: "Contact", content: "<h1>Contact Us</h1><p>Get in touch with us.</p>" },
  },
};

export async function generateStaticParams() {
  return staticPages;
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const content = pageContent[params.locale]?.[params.slug];
  return {
    title: content?.name || params.slug,
    description: content?.content?.slice(0, 160) || "",
  };
}

export default async function DynamicPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const content = pageContent[params.locale]?.[params.slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-display font-bold text-neutral-deep mb-8">
          {content.name}
        </h1>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </div>
  );
}
