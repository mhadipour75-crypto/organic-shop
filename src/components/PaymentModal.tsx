import { useState } from "react";

interface PaymentModalProps {
  onSuccess: () => void;
  onClose: () => void;
}

type Stage = "form" | "processing" | "success";

export function PaymentModal({ onSuccess, onClose }: PaymentModalProps) {
  const [stage, setStage] = useState<Stage>("form");
  const [cardNumber, setCardNumber] = useState("");

  const handlePay = () => {
    setStage("processing");
    setTimeout(() => {
      setStage("success");
      setTimeout(() => {
        onSuccess();
      }, 1800);
    }, 2500);
  };

  const formatCard = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/60 backdrop-blur-md">
      <div className="relative w-full max-w-md animate-scale-in rounded-3xl bg-white p-8 shadow-2xl">
        {stage === "form" && (
          <>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-50 text-3xl">
                💳
              </div>
              <h2 className="mt-4 text-xl font-extrabold text-forest-700">پرداخت آنلاین</h2>
              <p className="mt-1 text-sm text-gray-500">درگاه پرداخت زرین‌پال</p>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">شماره کارت</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCard(e.target.value))}
                  className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
                  placeholder="xxxx xxxx xxxx xxxx"
                  dir="ltr"
                  style={{ textAlign: "center" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-600">تاریخ انقضا</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
                    placeholder="MM/YY"
                    dir="ltr"
                    style={{ textAlign: "center" }}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-600">CVV2</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-cream-300 bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
                    placeholder="xxx"
                    dir="ltr"
                    style={{ textAlign: "center" }}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handlePay}
              className="mt-6 w-full rounded-2xl bg-gradient-to-l from-terracotta-400 to-terracotta-500 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              پرداخت
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full rounded-xl py-2.5 text-sm text-gray-400 transition hover:text-gray-600"
            >
              انصراف
            </button>
          </>
        )}

        {stage === "processing" && (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="h-16 w-16 animate-spin-slow rounded-full border-4 border-cream-200 border-t-forest-600" />
            <p className="mt-6 text-lg font-bold text-forest-700">در حال پردازش...</p>
            <p className="mt-2 text-sm text-gray-500">لطفاً صبر کنید، تراکنش در حال انجام است</p>
          </div>
        )}

        {stage === "success" && (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="flex h-20 w-20 animate-check-pop items-center justify-center rounded-full bg-green-100">
              <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-6 text-xl font-extrabold text-forest-700">پرداخت موفق!</p>
            <p className="mt-2 text-sm text-gray-500">در حال انتقال به صفحه تایید سفارش...</p>
          </div>
        )}
      </div>
    </div>
  );
}
