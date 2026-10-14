export function Footer() {
  return (
    <footer id="contact" className="border-t border-cream-200 bg-forest-800 text-cream-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-extrabold text-white">🍏 باغ من</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/80">
              تازه‌ترین میوه‌های ارگانیک ایران، مستقیم از باغ به سفره شما
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white">دسترسی سریع</h4>
            <ul className="mt-3 space-y-2 text-sm text-cream-200/80">
              <li><a href="/#products" className="transition hover:text-white">محصولات</a></li>
              <li><a href="/#about" className="transition hover:text-white">درباره ما</a></li>
              <li><a href="/#testimonials" className="transition hover:text-white">نظرات</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">تماس با ما</h4>
            <ul className="mt-3 space-y-2 text-sm text-cream-200/80">
              <li>📍 تهران، خیابان ولیعصر</li>
              <li dir="ltr">📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li dir="ltr">✉️ info@baghman.ir</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">ما را دنبال کنید</h4>
            <div className="mt-3 flex gap-3">
              {["📷", "📘", "💬"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-700 text-lg transition hover:bg-forest-600"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-forest-700 pt-6 text-center text-sm text-cream-200/60">
          © ۱۴۰۵ 🍏 باغ من — ساخته شده با ❤️ در ایران
        </div>
      </div>
    </footer>
  );
}
