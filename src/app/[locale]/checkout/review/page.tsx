"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  { number: 1, label: "Холбоо барих", active: false },
  { number: 2, label: "Хүргэлт", active: false },
  { number: 3, label: "Арга", active: false },
  { number: 4, label: "Төлбөр", active: false },
  { number: 5, label: "Шалгах", active: true },
  { number: 6, label: "Баталгаа", active: false },
];

export default function CheckoutReviewPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <Link href={`/${locale}/checkout/payment`} className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-6 inline-block">
            ← Төлбөр рүү буцах
          </Link>

          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                  step.active 
                    ? "bg-brand-green text-white" 
                    : step.number < 5 
                      ? "bg-brand-green text-white" 
                      : "bg-neutral-200 text-neutral-charcoal"
                }`}>
                  {step.number}
                </div>
                <span className={`ml-2 text-sm font-body hidden sm:block ${
                  step.active ? "text-neutral-deep font-semibold" : "text-neutral-charcoal"
                }`}>
                  {step.label}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-8 h-px bg-neutral-200 mx-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h1 className="text-2xl font-display font-bold text-neutral-deep mb-6">Захиалга шалгах</h1>

                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-semibold text-neutral-deep">Холбоо барих мэдээлэл</h3>
                        <p className="text-neutral-charcoal mt-1">Бат-Эрдэнэ Б.</p>
                        <p className="text-neutral-charcoal">baterdene@email.com</p>
                        <p className="text-neutral-charcoal">+976 99 99 9999</p>
                      </div>
                      <Link href={`/${locale}/checkout/contact`} className="text-sm text-brand-green hover:text-brand-green/80">
                        Засах
                      </Link>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-semibold text-neutral-deep">Хүргэлтийн хаяг</h3>
                        <p className="text-neutral-charcoal mt-1">Баянзүрх дүүрэг, 1-р хороо</p>
                        <p className="text-neutral-charcoal">Улаанбаатар, Монгол</p>
                        <p className="text-neutral-charcoal">13301</p>
                      </div>
                      <Link href={`/${locale}/checkout/shipping`} className="text-sm text-brand-green hover:text-brand-green/80">
                        Засах
                      </Link>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-semibold text-neutral-deep">Хүргэлтийн арга</h3>
                        <p className="text-neutral-charcoal mt-1">Стандарт хүргэлт</p>
                        <p className="text-neutral-charcoal">3-5 ажлын өдөр</p>
                      </div>
                      <Link href={`/${locale}/checkout/method`} className="text-sm text-brand-green hover:text-brand-green/80">
                        Засах
                      </Link>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display font-semibold text-neutral-deep">Төлбөрийн мэдээлэл</h3>
                        <p className="text-neutral-charcoal mt-1">**** **** **** 4242</p>
                      </div>
                      <Link href={`/${locale}/checkout/payment`} className="text-sm text-brand-green hover:text-brand-green/80">
                        Засах
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-display font-bold text-neutral-deep mb-4">Захиалгын хураангуй</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-neutral-charcoal">
                    <span>Дэд нийлбэр</span>
                    <span>₮289,000</span>
                  </div>
                  <div className="flex justify-between text-neutral-charcoal">
                    <span>Хүргэлт</span>
                    <span>₮15,000</span>
                  </div>
                  <div className="flex justify-between text-neutral-charcoal">
                    <span>Хөнгөлөлт (ALTAI10)</span>
                    <span className="text-summit-red">-₮28,900</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-3 flex justify-between font-display font-bold text-neutral-deep">
                    <span>Нийт</span>
                    <span>₮275,100</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/${locale}/checkout/confirmation`}
                className="block w-full py-4 bg-brand-green text-white text-center font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                ЗАХИАЛГА БАТАЛГААЖУУЛАХ
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
