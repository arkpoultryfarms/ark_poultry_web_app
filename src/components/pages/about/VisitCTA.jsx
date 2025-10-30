import Link from "next/link";
import { ArrowRightIcon } from 'lucide-react';

export default function VisitCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#d57315] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Visit Our Farm?
            </h2>
            <p className="text-xl mb-8">
              We offer guided tours of our facilities to schools, families, and
              interested individuals. Come see how we raise our chickens and
              produce our quality products.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-white text-[#d57315] hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors">
              Schedule a Tour
              <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
        </div>
    </section>
  );
}