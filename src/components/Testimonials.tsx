const testimonials = [
  {
    name: "مریم احمدی",
    location: "تهران",
    text: "کیفیت میوه‌ها فوق‌العاده است. سیب‌ها واقعاً طبیعی و تازه بودند. حتماً دوباره سفارش می‌دهم.",
  },
  {
    name: "علی رضایی",
    location: "اصفهان",
    text: "بسته‌بندی عالی و تحویل سریع. انگور یاقوتی که سفارش دادم واقعاً خوش‌طعم بود.",
  },
  {
    name: "سارا کریمی",
    location: "شیراز",
    text: "بهترین تجربه خرید آنلاین میوه. محصولات کاملاً ارگانیک و قیمت‌ها منصفانه هستند.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-sage-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-forest-700 sm:text-4xl">نظرات مشتریان</h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-terracotta-400" />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl border border-sage-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex gap-1 text-terracotta-400">
                {"★★★★★"}
              </div>
              <p className="mt-4 leading-relaxed text-gray-600">«{t.text}»</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-100 text-lg font-bold text-forest-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
