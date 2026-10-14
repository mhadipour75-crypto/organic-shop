import { useCart } from "../CartContext";
import { formatPrice } from "../utils";
import { useNavigate } from "react-router-dom";

export function CartDrawer() {
  const { items, isOpen, closeCart, increment, decrement, removeItem, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-forest-900/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream-50 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-cream-200 px-6 py-4">
          <h2 className="text-lg font-extrabold text-forest-700">
            سبد خرید {totalItems > 0 && `(${formatPrice(totalItems)})`}
          </h2>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-cream-200"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-gray-400">
            <span className="text-6xl">🛒</span>
            <p className="mt-4 text-lg">سبد خرید شما خالی است</p>
            <button
              onClick={closeCart}
              className="mt-6 rounded-xl bg-forest-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-800"
            >
              ادامه خرید
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group mb-4 flex gap-4 rounded-2xl border border-cream-200 bg-white p-4"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                    {item.image_url && (
                      <img src={item.image_url} alt={item.name} className="h-full w-full object-cover" />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-bold text-gray-800">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 transition hover:text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-forest-700">
                      {formatPrice(item.price)} <span className="text-xs font-normal text-gray-400">تومان</span>
                    </p>

                    <div className="mt-auto flex items-center gap-3">
                      <button
                        onClick={() => decrement(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-cream-300 text-gray-600 transition hover:bg-cream-200 active:scale-90"
                      >
                        −
                      </button>
                      <span className="min-w-6 text-center text-sm font-bold text-gray-800">
                        {formatPrice(item.quantity)}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-cream-300 text-gray-600 transition hover:bg-cream-200 active:scale-90"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-200 px-6 py-5">
              <div className="flex items-center justify-between py-2 text-sm text-gray-500">
                <span>جمع کل</span>
                <span>{formatPrice(totalPrice)} تومان</span>
              </div>
              <div className="flex items-center justify-between py-2 text-sm text-gray-500">
                <span>هزینه ارسال</span>
                <span className="text-forest-600">رایگان</span>
              </div>
              <div className="my-3 border-t border-dashed border-cream-300" />
              <div className="flex items-center justify-between py-1">
                <span className="text-lg font-extrabold text-gray-800">مبلغ نهایی</span>
                <span className="text-xl font-extrabold text-forest-700">
                  {formatPrice(totalPrice)} <span className="text-sm font-normal text-gray-400">تومان</span>
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-5 w-full rounded-2xl bg-gradient-to-l from-forest-700 to-forest-600 py-4 text-center font-bold text-white shadow-lg shadow-forest-700/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-95"
              >
                ادامه به پرداخت →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
