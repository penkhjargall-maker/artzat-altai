import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";

export default function CheckoutConfirmationPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen bg-neutral-offwhite">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-display font-bold text-neutral-deep mb-4">
              Захиалга амжилттай!
            </h1>
            <p className="text-neutral-charcoal text-lg">
              Таны захиалгыг хүлээн авлаа. Баярлалаа!
            </p>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-8">
                <p className="text-sm text-neutral-charcoal">Захиалгын дугаар</p>
                <p className="text-2xl font-display font-bold text-neutral-deep mt-1">AA-12345678</p>
              </div>

              <div className="space-y-6">
                <div className="border-b border-neutral-200 pb-6">
                  <h3 className="font-display font-semibold text-neutral-deep mb-4">Захиалгын дэлгэрэнгүй</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Үхрийн мах (2кг)</span>
                      <span className="text-neutral-deep">₮90,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Хонины мах (1кг)</span>
                      <span className="text-neutral-deep">₮52,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Банш (3кг)</span>
                      <span className="text-neutral-deep">₮105,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Давсалсан мах (1кг)</span>
                      <span className="text-neutral-deep">₮42,000</span>
                    </div>
                  </div>
                </div>

                <div className="border-b border-neutral-200 pb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Дэд нийлбэр</span>
                      <span className="text-neutral-deep">₮289,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Хүргэлт</span>
                      <span className="text-neutral-deep">₮15,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-charcoal">Хөнгөлөлт</span>
                      <span className="text-summit-red">-₮28,900</span>
                    </div>
                    <div className="flex justify-between font-display font-bold text-neutral-deep pt-2">
                      <span>Нийт төлсөн</span>
                      <span>₮275,100</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-semibold text-neutral-deep mb-2">Хүргэлтийн мэдээлэл</h4>
                    <p className="text-neutral-charcoal">Баянзүрх дүүрэг, 1-р хороо</p>
                    <p className="text-neutral-charcoal">Улаанбаатар, Монгол 13301</p>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-neutral-deep mb-2">Төлбөрийн мэдээлэл</h4>
                    <p className="text-neutral-charcoal">**** **** **** 4242</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-8 text-center">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-body font-semibold rounded-lg hover:bg-brand-green/90 transition-colors"
              >
                Нүүр хуудас руу буцах
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
