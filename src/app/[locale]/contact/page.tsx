"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <span className="text-sm font-body font-semibold text-brand-green tracking-wider uppercase">
              ХОЛБОО БАРИХ
            </span>
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-neutral-deep mt-4">
              Бидэнтэй холбогдох
            </h1>
            <p className="mt-6 text-lg text-neutral-charcoal max-w-2xl mx-auto">
              Асуулт, санал хүсэлтээ илгээнэ үү. Бид 24 цагийн дотор хариу өгөх болно.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-neutral-offwhite">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn direction="left">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">
                      Нэр
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Таны нэр"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">
                      Байгууллага
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                      placeholder="Байгууллагын нэр"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">
                        И-мэйл
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-body font-medium text-neutral-deep mb-2">
                        Утас
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                        placeholder="+976 XX XX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-body font-medium text-neutral-deep mb-2">
                      Мессеж
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
                      placeholder="Таны мессеж..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                  >
                    Илгээх
                  </button>
                </div>
              </form>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-display font-bold text-neutral-deep mb-6">Холбоо барих мэдээлэл</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📍</span>
                      <div>
                        <p className="font-body font-medium text-neutral-deep">Хаяг</p>
                        <p className="text-neutral-charcoal">Улаанбаатар, Монгол</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">📞</span>
                      <div>
                        <p className="font-body font-medium text-neutral-deep">Утас</p>
                        <p className="text-neutral-charcoal">+976 11 333 555</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <span className="text-2xl">✉</span>
                      <div>
                        <p className="font-body font-medium text-neutral-deep">И-мэйл</p>
                        <p className="text-neutral-charcoal">info@artzataltai.mn</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-display font-bold text-neutral-deep mb-4">Ажлын цаг</h3>
                  <div className="space-y-2 text-neutral-charcoal">
                    <p>Даваа - Баасан: 09:00 - 18:00</p>
                    <p>Бямба - Ням: Хаалттай</p>
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
