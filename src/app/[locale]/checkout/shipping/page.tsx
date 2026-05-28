"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  { number: 1, label: "Холбоо барих", active: false },
  { number: 2, label: "Хүргэлт", active: true },
  { number: 3, label: "Арга", active: false },
  { number: 4, label: "Төлбөр", active: false },
  { number: 5, label: "Шалгах", active: false },
  { number: 6, label: "Баталгаа", active: false },
];

export default function CheckoutShippingPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    district: "",
    postalCode: "",
  });

  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <Link href={`/${locale}/checkout/contact`} className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-6 inline-block">
            ← Холбоо барих мэдээлэл рүү буцах
          </Link>

          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                  step.active 
                    ? "bg-brand-green text-white" 
                    : step.number < 2 
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
              <h1 className="text-2xl font-display font-bold text-neutral-deep mb-6">Хүргэлтийн хаяг</h1>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хаяг</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="Дүүрэг, хороо, байр, тоот"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Хот</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Улаанбаатар"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Дүүрэг</label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Баянзүрх"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Шуудангийн код</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="13301"
                  />
                </div>

                <Link
                  href={`/${locale}/checkout/method`}
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
