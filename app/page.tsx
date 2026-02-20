"use client";

import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { ProductShowcase } from "@/components/ui/product-showcase";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-sand-50">
      <Header />

      <main>

        {/* Full Screen Hero (Sticky Background) */}
        {/* Sticky keeps it in view while content scrolls over it */}
        <div className="sticky top-0 left-0 w-full h-screen z-0">
          <Hero />
        </div>

        {/* Scrollable Content */}
        <div className="relative z-10 bg-sand-100 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">

          {/* Mission Section */}
          <section className="min-h-screen flex flex-col items-center justify-center p-12 md:p-24">
            <div className="max-w-4xl text-center space-y-8">
              <span className="font-sans text-sm tracking-[0.2em] font-bold text-sand-500 uppercase">
                Our Mission
              </span>

              <h2 className="font-serif text-5xl md:text-7xl leading-tight text-sand-900">
                We craft garments that endure the sun, salt, and time.
              </h2>

              <p className="font-sans text-lg md:text-xl text-sand-700 leading-relaxed max-w-2xl mx-auto">
                Born from the coast, inspired by the fading light of summer.
                SUNFADED is a tribute to the elements that shape us.
              </p>
            </div>
          </section>

          {/* Product Window */}
          <div className="relative">
            <ProductShowcase />
          </div>

          {/* Footer */}
          <footer className="relative py-12 bg-sand-900 text-sand-200 text-center font-sans text-sm tracking-widest">
            &copy; 2024 SUNFADED. ALL RIGHTS RESERVED.
          </footer>
        </div>

      </main>
    </div>
  );
}
