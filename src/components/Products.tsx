import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useCart } from "../CartContext";
import { formatPrice } from "../utils";
import type { Product } from "../types";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("products")
        .select("id, name, description, price, image_url, stock")
        .order("created_at", { ascending: true });

      if (error) {
        setError("خطا در بارگذاری محصولات");
        setLoading(false);
        return;
      }
      setProducts(data ?? []);
      setLoading(false);
    })();
  }, []);

  return (
    <section id="products" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-forest-700 sm:text-4xl md:text-5xl">
            محصولات برگزیده
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-terracotta-400" />
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            از بهترین باغ‌های ایران، با کیفیتی که حس می‌کنید
          </p>
        </div>

        {loading && (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse rounded-3xl border border-cream-200 bg-white p-4">
                <div className="h-56 rounded-2xl bg-cream-200" />
                <div className="mt-4 h-5 rounded bg-cream-200" />
                <div className="mt-2 h-4 w-2/3 rounded bg-cream-200" />
                <div className="mt-4 h-10 rounded bg-cream-200" />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="mt-14 rounded-2xl border border-red-200 bg-red-50 py-8 text-center text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-cream-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  {product.image_url && (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-forest-700/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    ارگانیک
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{product.description}</p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-extrabold text-forest-700">
                      {formatPrice(product.price)}
                      <span className="mr-1 text-sm font-normal text-gray-400">تومان</span>
                    </span>
                    <button
                      disabled={product.stock === 0}
                      onClick={() => addToCart(product)}
                      className="rounded-xl bg-forest-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-terracotta-400 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-300"
                    >
                      {product.stock > 0 ? "افزودن به سبد" : "ناموجود"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
