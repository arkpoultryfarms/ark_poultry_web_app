import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-[#d57315] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Agricultural Practices?
          </h2>
          <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your specific needs and how our
            services can help you achieve your goals.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[#d57315] font-bold hover:bg-gray-100 transition-colors">
            Get a Free Consultation
          </Link>
        </div>
    </section>
  );
}