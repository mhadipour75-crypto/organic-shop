const HERO_IMAGE = "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=1600";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="میوه ارگانیک تازه"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-tl from-forest-900/80 via-forest-900/50 to-forest-700/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="inline-block animate-fade-in rounded-full bg-sage-300/20 px-5 py-2 text-sm font-medium text-sage-200 backdrop-blur-sm">
          تازه، ارگانیک، طبیعی
        </span>

        <h1 className="mt-6 animate-fade-in-up text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          طعم واقعی طبیعت
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up text-lg leading-relaxed text-cream-100/90 sm:text-xl">
          میوه‌های ارگانیک، برداشت شده از بهترین باغ‌های ایران و تحویل داده شده مستقیم به سفره شما — بدون واسطه، بدون مواد شیمیایی
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/#products"
            className="rounded-2xl bg-terracotta-400 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-terracotta-400/30 transition-all duration-300 hover:scale-105 hover:bg-terracotta-500 hover:shadow-xl active:scale-95"
          >
            مشاهده محصولات
          </a>
          <a
            href="/#about"
            className="rounded-2xl border-2 border-white/40 bg-white/10 px-10 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 active:scale-95"
          >
            درباره ما
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2.5 w-2.5 animate-bounce-slow rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
