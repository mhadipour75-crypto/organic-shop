export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-forest-700 sm:text-4xl md:text-5xl">
          درباره باغ من
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-terracotta-400" />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          «باغ من» با هدف رساندن میوه‌های ارگانیک و سالم از کشاورزان مستقیم به دست شما شروع شد. ما به کیفیت، تازگی و کشاورزی پایدار متعهد هستیم و معتقدیم هر سبد میوه باید داستانی از طبیعت داشته باشد.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-3xl">🌿</div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">۱۰۰٪ ارگانیک</h3>
            <p className="mt-1 text-sm text-gray-500">بدون سم و کود شیمیایی</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta-100 text-3xl">🚚</div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">تحویل سریع</h3>
            <p className="mt-1 text-sm text-gray-500">ارسال در همان روز</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-3xl">🤝</div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">پشتیبانی کشاورز</h3>
            <p className="mt-1 text-sm text-gray-500">حمایت مستقیم از کشاورزان</p>
          </div>
        </div>
      </div>
    </section>
  );
}
