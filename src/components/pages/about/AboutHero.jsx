import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.733), rgba(0, 0, 0, 0.733)), url(/images/img8.jpg)'
    }}>
        <div className="absolute p-4 md:p-12 inset-0 flex items-center">
          <div className="text-left text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
            <span className="flex items-center gap-2 font-semibold text-xl md:text-2xl max-w-2xl mx-auto">
              <Link href="/" className="text-[#d57315] hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <p className="text-grreen-700">
                About Us
              </p>
            </span>
          </div>
        </div>
    </section>
  );
}