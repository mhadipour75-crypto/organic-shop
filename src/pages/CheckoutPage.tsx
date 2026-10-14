import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { supabase } from "../supabaseClient";
import { formatPrice, toEnglishDigits, toPersianNumber } from "../utils";
import { Header } from "../components/Header";
import { PaymentModal } from "../components/PaymentModal";
import type { OrderResult } from "../types";

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  postalCode?: string;
}

export function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPayment, setShowPayment] = useState(false);
  const [orderResult, setOrderResult] = useState<OrderResult | null>(null);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 3) e.name = "نام و نام خانوادگی را کامل وارد کنید";
    const phoneClean = toEnglishDigits(form.phone).replace(/\s/g, "");
    if (!/^09\d{9}$/.test(phoneClean)) e.phone = "شماره موبایل معتبر نیست (مثال: ۰۹۱۲۳۴۵۶۷۸۹)";
    if (!form.address.trim() || form.address.trim().length < 10) e.address = "آدرس کامل را وارد کنید";
    const postalClean = toEnglishDigits(form.postalCode).replace(/\s/g, "");
    if (!/^\d{10}$/.test(postalClean)) e.postalCode = "کد پستی باید ۱۰ رقم باشد";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => {
    if (!validate()) return;
    setShowPayment(true);
  };

  const handlePaymentSuccess = async () => {
    const { data, error } = await supabase
      .from("orders")
      .insert({
        customer_name: form.name,
        customer_phone: toEnglishDigits(form.phone).replace(/\s/g, ""),
        customer_address: form.address,
        customer_postal_code: toEnglishDigits(form.postalCode).replace(/\s/g, ""),
        items: items,
        total_price: totalPrice,
        order_status: "paid",
      })
      .select()
      .single();

    if (error || !data) {
      setShowPayment(false);
      setErrors({ ...errors, address: "خطا در ثبت سفارش. لطفاً دوباره تلاش کنید." });
      return;
    }

    setOrderResult(data as OrderResult);
    clearCart();
    setShowPayment(false);
    navigate("/confirmation", { state: { order: data } });
  };

  if (items.length === 0 && !orderResult) {
    return (
      <div className="min-h-screen bg-cream-100">
        <Header />
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <span className="text-6xl">🛒</span>
          <h2 className="mt-4 text-2xl font-bold text-forest-700">سبد خرید شما خالی است</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-6 rounded-2xl bg-forest-700 px-8 py-3.5 font-semibold text-white transition hover:bg-forest-800"
          >
            بازگشت به فروشگاه
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-extrabold text-forest-700">تکمیل سفارش</h1>
        <p className="mt-2 text-gray-500">اطلاعات خود را وارد کنید تا سفارش شما ثبت شود</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-800">اطلاعات تحویل</h2>

            <div className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">نام و نام خانوادگی</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:ring-2 ${
                    errors.name ? "border-red-300 focus:ring-red-200" : "border-cream-300 focus:border-forest-400 focus:ring-forest-200"
                  }`}
                  placeholder="مثال: علی رضایی"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">شماره موبایل</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:ring-2 ${
                    errors.phone ? "border-red-300 focus:ring-red-200" : "border-cream-300 focus:border-forest-400 focus:ring-forest-200"
                  }`}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">آدرس کامل</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:ring-2 ${
                    errors.address ? "border-red-300 focus:ring-red-200" : "border-cream-300 focus:border-forest-400 focus:ring-forest-200"
                  }`}
                  placeholder="استان، شهر، خیابان، پلاک"
                />
                {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-600">کد پستی</label>
                <input
                  type="text"
                  value={form.postalCode}
                  onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                  className={`w-full rounded-xl border bg-cream-50 px-4 py-3.5 text-gray-800 outline-none transition focus:ring-2 ${
                    errors.postalCode ? "border-red-300 focus:ring-red-200" : "border-cream-300 focus:border-forest-400 focus:ring-forest-200"
                  }`}
                  placeholder="۱۰ رقم"
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
                {errors.postalCode && <p className="mt-1 text-xs text-red-500">{errors.postalCode}</p>}
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cream-200 bg-cream-50 p-4">
              <p className="text-sm font-medium text-gray-600">روش پرداخت</p>
              <div className="mt-2 flex items-center gap-3 rounded-xl border-2 border-forest-400 bg-white p-3">
                <span className="text-xl">💳</span>
                <span className="text-sm font-semibold text-gray-800">پرداخت آنلاین</span>
                <span className="mr-auto text-xs text-forest-600">انتخاب شده</span>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-cream-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold text-gray-800">خلاصه سفارش</h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                      {item.image_url && (
                        <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        {toPersianNumber(item.quantity)} × {formatPrice(item.price)} تومان
                      </p>
                    </div>
                    <p className="text-sm font-bold text-forest-700">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="my-5 border-t border-dashed border-cream-300" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>جمع کل</span>
                  <span>{formatPrice(totalPrice)} تومان</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>هزینه ارسال</span>
                  <span className="text-forest-600">رایگان</span>
                </div>
              </div>

              <div className="my-4 border-t border-dashed border-cream-300" />

              <div className="flex justify-between">
                <span className="text-lg font-extrabold text-gray-800">مبلغ نهایی</span>
                <span className="text-xl font-extrabold text-forest-700">
                  {formatPrice(totalPrice)} <span className="text-sm font-normal text-gray-400">تومان</span>
                </span>
              </div>

              <button
                onClick={handlePay}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-terracotta-400 to-terracotta-500 py-4 text-center font-bold text-white shadow-lg shadow-terracotta-400/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95"
              >
                🔒 پرداخت امن
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPayment && <PaymentModal onSuccess={handlePaymentSuccess} onClose={() => setShowPayment(false)} />}
    </div>
  );
}
