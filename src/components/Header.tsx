import { useState } from "react";
import { useCart } from "../CartContext";

export function Header() {
  const { totalItems, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-extrabold text-forest-700 transition hover:text-forest-800">
          🍏 باغ من
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-gray-600 md:flex">
          <a href="/#products" className="transition hover:text-forest-700">محصولات</a>
          <a href="/#about" className="transition hover:text-forest-700">درباره ما</a>
          <a href="/#testimonials" className="transition hover:text-forest-700">نظرات</a>
          <a href="/#contact" className="transition hover:text-forest-700">تماس با ما</a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-forest-700 text-xl text-white shadow-sm transition hover:bg-forest-800 hover:shadow-md active:scale-95"
            aria-label="سبد خرید"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-terracotta-400 px-1.5 text-xs font-bold text-white">
                {totalItems > 9 ? "۹+" : toPersianDigit(totalItems)}
              </span>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-cream-300 text-gray-600 md:hidden"
            aria-label="منو"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-3 border-t border-cream-200 px-6 py-4 text-sm font-medium text-gray-600 md:hidden">
          <a href="/#products" onClick={() => setMenuOpen(false)} className="transition hover:text-forest-700">محصولات</a>
          <a href="/#about" onClick={() => setMenuOpen(false)} className="transition hover:text-forest-700">درباره ما</a>
          <a href="/#testimonials" onClick={() => setMenuOpen(false)} className="transition hover:text-forest-700">نظرات</a>
          <a href="/#contact" onClick={() => setMenuOpen(false)} className="transition hover:text-forest-700">تماس با ما</a>
        </nav>
      )}
    </header>
  );
}

function toPersianDigit(n: number): string {
  const digits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(n).replace(/[0-9]/g, (d) => digits[parseInt(d)]);
}
