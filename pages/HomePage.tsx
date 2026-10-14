import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Products } from "../components/Products";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="bg-cream-100">
      <Header />
      <Hero />
      <Features />
      <Products />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
