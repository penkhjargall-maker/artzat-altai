"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  { number: 1, label: "Холбоо барих", active: false },
  { number: 2, label: "Хүргэлт", active: false },
  { number: 3, label: "Арга", active: false },
  { number: 4, label: "Төлбөр", active: true },
  { number: 5, label: "Шалгах", active: false },
  { number: 6, label: "Баталгаа", active: false },
];

export default function CheckoutPaymentPage({ params: { locale } }: { params: { locale: string } }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [promoCode, setPromoCode] = useState("");

  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <Link href={`/${locale}/checkout/method`} className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-6 inline-block">
            ← Хүргэлтийн арга руу буцах
          </Link>

          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                  step.active 
                    ? "bg-brand-green text-white" 
                    : step.number < 4 
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
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h1 className="text-2xl font-display font-bold text-neutral-deep mb-6">Төлбөрийн мэдээлэл</h1>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Картын дугаар</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="XXXX XXXX XXXX XXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Дуусах хугацаа</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">CVC</label>
                    <input
                      type="text"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="123"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4 py-4">
                  <button type="button" className="flex-1 py-3 bg-neutral-900 text-white rounded-lg font-body font-semibold">
                    Apple Pay
                  </button>
                  <button type="button" className="flex-1 py-3 bg-[#0070BA] text-white rounded-lg font-body font-semibold">
                    PayPal
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Урамшууллын код"
                    className="flex-1 px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                  <button type="button" className="px-6 py-3 bg-neutral-offwhite text-neutral-deep font-body font-semibold rounded-lg border border-neutral-200">
                    Илгээх
                  </button>
                </div>

                <Link
                  href={`/${locale}/checkout/review`}
                  className="block w-full py-4 bg-brand-green text-white text-center font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                >
                  Үргэлжлүүлэх
                </Link>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="right">
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
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
