import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-cream-50 py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-forest-700 sm:text-4xl">
          عضو خبرنامه ما شوید
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-gray-500">
          از آخرین محصولات و تخفیف‌های ویژه باخبر شوید
        </p>

        {subscribed ? (
          <div className="mt-8 rounded-2xl border border-forest-200 bg-forest-50 px-6 py-4 text-forest-700">
            ✅ با موفقیت عضو شدید! متشکریم.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ایمیل شما"
              className="flex-1 rounded-2xl border border-cream-300 bg-white px-6 py-3.5 text-gray-800 outline-none transition focus:border-forest-400 focus:ring-2 focus:ring-forest-200"
            />
            <button
              type="submit"
              className="rounded-2xl bg-terracotta-400 px-8 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-terracotta-500 active:scale-95"
            >
              عضویت
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
