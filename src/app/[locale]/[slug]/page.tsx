import { notFound } from "next/navigation";
import { graphqlRequest } from "@/lib/graphql-client";
import {
  GET_PAGES,
  GET_PAGE_BY_SLUG,
} from "@/lib/graphql/queries/cms";

export async function generateStaticParams() {
  const data = await graphqlRequest<{
    cpPages: Array<{ slug: string }>;
  }>(GET_PAGES, { language: "mn" });

  const pages = data?.cpPages || [];

  const params = [];
  for (const locale of ["mn", "en"]) {
    for (const page of pages) {
      params.push({ locale, slug: page.slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const data = await graphqlRequest<{
    cpPage: { name: string; content: string } | null;
  }>(GET_PAGE_BY_SLUG, { slug: params.slug, language: params.locale });

  const page = data?.cpPage;

  return {
    title: page?.name || params.slug,
    description: page?.content?.slice(0, 160) || "",
  };
}

export default async function DynamicPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const data = await graphqlRequest<{
    cpPage: {
      _id: string;
      name: string;
      slug: string;
      content: string;
      status: string;
    } | null;
  }>(GET_PAGE_BY_SLUG, { slug: params.slug, language: params.locale });

  const page = data?.cpPage;

  if (!page || page.status !== "published") {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-display font-bold text-neutral-deep mb-8">
          {page.name}
        </h1>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content || "" }}
        />
      </div>
    </div>
  );
}
