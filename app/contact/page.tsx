import ContactForm from "@/components/ContactForm";

function ContactPage() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* LEFT: Map + Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Contact Atlantic Painting</h2>

            <p className="text-gray-600">
              Serving Nova Scotia with professional residential and commercial
              painting.
            </p>

            {/* Google Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow">
              <iframe
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Nova%20Scotia%20Canada&output=embed"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-lg">
              <p>
                📞{" "}
                <a
                  href="tel:+19025551234"
                  className="text-blue-600 hover:underline"
                >
                  (902) 555-1234
                </a>
              </p>

              <p>
                ✉️{" "}
                <a
                  href="mailto:atlanticpainting@email.com"
                  className="text-blue-600 hover:underline"
                >
                  atlanticpainting@email.com
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Trusted Painters in Antigonish & Across Nova Scotia
          </h2>
          <p className="text-gray-600">
            Based in Halifax, Nova Scotia Atlantic Painting proudly serves
            homeowners and businesses throughout Nova Scotia. Whether you need
            interior painting, exterior finishes, or commercial painting
            services, our team delivers precision, cleanliness, and lasting
            results.
          </p>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
