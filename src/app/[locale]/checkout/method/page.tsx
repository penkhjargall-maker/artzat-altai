"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  { number: 1, label: "Холбоо барих", active: false },
  { number: 2, label: "Хүргэлт", active: false },
  { number: 3, label: "Арга", active: true },
  { number: 4, label: "Төлбөр", active: false },
  { number: 5, label: "Шалгах", active: false },
  { number: 6, label: "Баталгаа", active: false },
];

const shippingMethods = [
  { id: "standard", name: "Стандарт хүргэлт", price: 15000, time: "3-5 ажлын өдөр", icon: "🚚" },
  { id: "express", name: "Экспресс хүргэлт", price: 35000, time: "1-2 ажлын өдөр", icon: "⚡" },
  { id: "pickup", name: "Очиж авах", price: 0, time: "Өнөөдөр", icon: "🏪" },
];

export default function CheckoutMethodPage({ params: { locale } }: { params: { locale: string } }) {
  const [selected, setSelected] = useState("standard");

  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <Link href={`/${locale}/checkout/shipping`} className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-6 inline-block">
            ← Хүргэлтийн хаяг руу буцах
          </Link>

          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                  step.active 
                    ? "bg-brand-green text-white" 
                    : step.number < 3 
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
              <h1 className="text-2xl font-display font-bold text-neutral-deep mb-6">Хүргэлтийн арга</h1>

              <div className="space-y-4">
                {shippingMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelected(method.id)}
                    className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                      selected === method.id 
                        ? "border-brand-green bg-brand-green/5" 
                        : "border-neutral-200 hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{method.icon}</span>
                        <div>
                          <h3 className="font-display font-semibold text-neutral-deep">{method.name}</h3>
                          <p className="text-sm text-neutral-charcoal">{method.time}</p>
                        </div>
                      </div>
                      <span className="font-display font-bold text-neutral-deep">
                        {method.price === 0 ? "Үнэгүй" : `₮${method.price.toLocaleString()}`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <Link
                href={`/${locale}/checkout/payment`}
                className="block w-full py-4 bg-brand-green text-white text-center font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors mt-6"
              >
                Үргэлжлүүлэх
              </Link>
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
                <div className="border-t border-neutral-200 pt-3 flex justify-between font-display font-bold text-neutral-deep">
                  <span>Нийт</span>
                  <span>₮304,000</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
