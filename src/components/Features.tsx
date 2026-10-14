const features = [
  { icon: "🌱", title: "۱۰۰٪ ارگانیک", desc: "بدون سم و کود شیمیایی" },
  { icon: "🚚", title: "ارسال سریع", desc: "تحویل در همان روز" },
  { icon: "✅", title: "ضمانت کیفیت", desc: "تضمین تازگی محصولات" },
  { icon: "💚", title: "برداشت روزانه", desc: "هر روز از باغ به سفره" },
];

export function Features() {
  return (
    <section className="border-b border-cream-200 bg-cream-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl border border-cream-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-100 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-800">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
