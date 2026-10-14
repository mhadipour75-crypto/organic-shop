import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { formatPrice, toPersianNumber } from "../utils";
import type { OrderResult } from "../types";

export function ConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const order = (location.state as { order: OrderResult } | null)?.order;

  if (!order) {
    return (
      <div className="min-h-screen bg-cream-100">
        <Header />
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
          <span className="text-6xl">🤔</span>
          <h2 className="mt-4 text-2xl font-bold text-forest-700">سفارشی یافت نشد</h2>
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

  const orderDate = new Date(order.created_at);
  const persianDate = toPersianNumber(
    `${orderDate.getFullYear()}/${String(orderDate.getMonth() + 1).padStart(2, "0")}/${String(orderDate.getDate()).padStart(2, "0")}`
  );

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="animate-fade-in-up rounded-3xl border border-cream-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-24 w-24 animate-check-pop items-center justify-center rounded-full bg-green-100">
              <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-forest-700">
              سفارش شما با موفقیت ثبت شد
            </h1>
            <p className="mt-2 text-gray-500">از خرید شما متشکریم! سفارش شما به زودی ارسال خواهد شد.</p>

            <div className="mt-6 rounded-2xl border-2 border-forest-200 bg-forest-50 px-8 py-4">
              <p className="text-sm text-gray-500">شماره سفارش</p>
              <p className="mt-1 text-2xl font-extrabold text-forest-700" dir="ltr">
                {toPersianNumber(order.id.slice(0, 8).toUpperCase())}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-lg font-bold text-gray-800">جزئیات سفارش</h2>
            <div className="overflow-hidden rounded-2xl border border-cream-200">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 ${i > 0 ? "border-t border-cream-200" : ""}`}
                >
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                    {item.image_url && (
                      <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{toPersianNumber(item.quantity)} عدد</p>
                  </div>
                  <p className="text-sm font-bold text-forest-700">
                    {formatPrice(item.price * item.quantity)} تومان
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl bg-forest-50 p-4">
              <span className="text-lg font-extrabold text-gray-800">مبلغ کل پرداخت شده</span>
              <span className="text-xl font-extrabold text-forest-700">
                {formatPrice(order.total_price)} <span className="text-sm font-normal text-gray-400">تومان</span>
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6">
              <h3 className="mb-3 text-sm font-bold text-gray-800">اطلاعات مشتری</h3>
              <dl className="space-y-2 text-sm text-gray-600">
                <div><dt className="inline text-gray-400">نام: </dt><dd className="inline">{order.customer_name}</dd></div>
                <div><dt className="inline text-gray-400">موبایل: </dt><dd className="inline" dir="ltr">{toPersianNumber(order.customer_phone)}</dd></div>
                <div><dt className="inline text-gray-400">آدرس: </dt><dd className="inline">{order.customer_address}</dd></div>
                <div><dt className="inline text-gray-400">کد پستی: </dt><dd className="inline" dir="ltr">{toPersianNumber(order.customer_postal_code)}</dd></div>
              </dl>
            </div>

            <div className="rounded-2xl border border-cream-200 bg-cream-50 p-6">
              <h3 className="mb-3 text-sm font-bold text-gray-800">وضعیت ارسال</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📅 تاریخ سفارش: {persianDate}</p>
                <p>🚚 تخمین زمان ارسال: ۲۴ تا ۴۸ ساعت آینده</p>
                <p>📦 وضعیت: در حال آماده‌سازی</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate("/")}
              className="rounded-2xl bg-forest-700 px-8 py-3.5 font-semibold text-white shadow-sm transition hover:bg-forest-800 active:scale-95"
            >
              بازگشت به فروشگاه
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded-2xl border border-cream-300 bg-white px-8 py-3.5 font-semibold text-gray-700 transition hover:border-forest-400 hover:text-forest-700 active:scale-95"
            >
              پیگیری سفارش
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
