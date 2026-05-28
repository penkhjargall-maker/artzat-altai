import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Арцат Алтайн Уулс - Монголын хүнсний боловсруулалт",
  description: "Монголын уугуул түүхий эдээс эхэлсэн. Чанар, аюулгүй байдал, амтыг эрхэмлэдэг. Premium Mongolian food processing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
