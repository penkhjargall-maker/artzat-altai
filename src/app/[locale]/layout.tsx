import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHeaderMenu, getFooterMenu } from "@/lib/mock";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export function generateStaticParams() {
  return [{ locale: "mn" }, { locale: "en" }];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  const headerMenu = getHeaderMenu();
  const footerMenu = getFooterMenu();

  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={locale} menu={headerMenu} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} menu={footerMenu} />
    </div>
  );
}
