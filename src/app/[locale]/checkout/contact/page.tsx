"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  { number: 1, label: "Холбоо барих", active: true },
  { number: 2, label: "Хүргэлт", active: false },
  { number: 3, label: "Арга", active: false },
  { number: 4, label: "Төлбөр", active: false },
  { number: 5, label: "Шалгах", active: false },
  { number: 6, label: "Баталгаа", active: false },
];

export default function CheckoutContactPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <Link href={`/${locale}/cart`} className="text-sm text-neutral-charcoal hover:text-neutral-deep transition-colors mb-6 inline-block">
            ← Сагс руу буцах
          </Link>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-semibold ${
                  step.active 
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
              <h1 className="text-2xl font-display font-bold text-neutral-deep mb-2">Холбоо барих мэдээлэл</h1>
              <p className="text-neutral-charcoal mb-8">Та бүртгэлтэй хэрэглэгч үү?</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">И-мэйл</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Утас</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="+976 XX XX XXXX"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Овог</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Овог"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">Нэр</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Нэр"
                    />
                  </div>
                </div>

                <Link
                  href={`/${locale}/checkout/shipping`}
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
