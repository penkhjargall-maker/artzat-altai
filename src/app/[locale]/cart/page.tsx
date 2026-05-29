"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

const cartItems = [
  { id: 1, name: "Үхрийн мах", weight: "2кг", price: 90000, quantity: 1, image: "🥩" },
  { id: 2, name: "Хонины мах", weight: "1кг", price: 52000, quantity: 1, image: "🍖" },
  { id: 3, name: "Банш", weight: "3кг", price: 105000, quantity: 1, image: "🥟" },
  { id: 4, name: "Давсалсан мах", weight: "1кг", price: 42000, quantity: 1, image: "🥓" },
];

export default function CartPage({ params: { locale } }: { params: { locale: string } }) {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15000;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-site mx-auto px-12">
          <FadeIn direction="up">
            <h1 className="text-3xl font-display font-bold text-neutral-deep">
              Сагс ({items.length})
            </h1>
          </FadeIn>
        </div>
      </section>

      <div className="max-w-site mx-auto px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, i) => (
                <FadeIn key={item.id} direction="up" delay={i * 0.1}>
                  <div className="bg-white rounded-xl p-6 flex items-center gap-6">
                    <div className="w-20 h-20 bg-[#F0EDE7] rounded-lg flex items-center justify-center text-3xl">
                      {item.image}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-neutral-deep">{item.name}</h3>
                      <p className="text-sm text-neutral-charcoal">{item.weight}</p>
                      <p className="text-lg font-display font-bold text-brand-green mt-1">
                        ₮{item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center text-neutral-charcoal hover:bg-[#F8F6F2] transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-body font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full border border-[#E5E7EB] flex items-center justify-center text-neutral-charcoal hover:bg-[#F8F6F2] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-display font-bold text-neutral-deep">
                        ₮{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-brand-red hover:text-brand-red/80 transition-colors mt-1"
                      >
                        Хасах
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-display font-bold text-neutral-deep mb-6">Захиалгын мэдээлэл</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-charcoal">
                  <span>Дэд нийлбэр</span>
                  <span>₮{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-charcoal">
                  <span>Хүргэлт</span>
                  <span>₮{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-neutral-charcoal">
                  <span>НӨАТ</span>
                  <span>₮{tax.toLocaleString()}</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-3 flex justify-between font-display font-bold text-neutral-deep">
                  <span>Нийт</span>
                  <span>₮{total.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Урамшууллын код"
                  className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />

                <Link
                  href={`/${locale}/checkout/contact`}
                  className="block w-full py-4 bg-brand-green text-white text-center font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
                >
                  ТӨЛБӨР ТООЦОО ХИЙХ
                </Link>

                <button className="block w-full py-4 bg-neutral-deep text-white text-center font-body font-semibold rounded-lg hover:bg-neutral-deep/90 transition-colors">
                  QPay-р төлөх
                </button>
              </div>

              <div className="mt-6 p-4 bg-[#F8F6F2] rounded-lg">
                <p className="text-sm text-neutral-charcoal">
                  🚚 Хүргэлт: 2-3 ажлын өдөр
                </p>
                <p className="text-sm text-neutral-charcoal mt-1">
                  ❄️ Хөргөгчтэй тээвэрлэлт
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
