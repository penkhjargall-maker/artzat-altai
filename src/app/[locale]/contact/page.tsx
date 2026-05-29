"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero - 300px, white */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-12 text-center">
          <FadeIn direction="up">
            <span className="text-xs font-body font-semibold text-brand-green uppercase tracking-widest">
              ХОЛБОО БАРИХ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4">
              Бидэнтэй холбогдох
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-[#F8FAFD]">
        <div className="max-w-site mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn direction="left">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-10 space-y-6">
                <h2 className="text-2xl font-display font-bold text-neutral-deep mb-6">Мессеж илгээх</h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 h-12 rounded-md border border-[#E5E7EB] bg-[#F8F6F2] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="Нэр"
                  />

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 h-12 rounded-md border border-[#E5E7EB] bg-[#F8F6F2] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="И-мэйл"
                  />

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 h-12 rounded-md border border-[#E5E7EB] bg-[#F8F6F2] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    placeholder="Утас"
                  />

                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-[#E5E7EB] bg-[#F8F6F2] focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                    placeholder="Мессеж"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 bg-brand-green text-white font-body font-semibold rounded-md hover:bg-brand-green/90 transition-colors"
                >
                  Илгээх
                </button>
              </form>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-deep mb-6">ХОЛБОО БАРИХ</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-body font-medium text-neutral-deep">Хаяг</p>
                      <p className="text-sm text-neutral-charcoal">Улаанбаатар, Монгол</p>
                    </div>

                    <div>
                      <p className="text-sm font-body font-medium text-neutral-deep">Утас</p>
                      <p className="text-sm text-neutral-charcoal">+976 11 333 555</p>
                    </div>

                    <div>
                      <p className="text-sm font-body font-medium text-neutral-deep">И-мэйл</p>
                      <p className="text-sm text-neutral-charcoal">info@artzataltai.mn</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-neutral-deep mb-4">Ажлын цаг</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-charcoal">Даваа - Баасан: 09:00 - 18:00</p>
                    <p className="text-sm text-neutral-charcoal">Бямба - Ням: Хаалттай</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
