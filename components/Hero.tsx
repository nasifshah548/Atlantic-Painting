import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-brand.primary via-brand.secondary to-brand.accent text-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Transform Your Space with Color & Precision
        </h1>

        <p className="text-lg md:text-xl mb-10">
          Professional interior & exterior painting across Nova Scotia. Clean
          finishes. Bold results. Zero stress.
        </p>

        <Link
          href="/contact"
          className="inline-block bg-white text-brand.primary font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
