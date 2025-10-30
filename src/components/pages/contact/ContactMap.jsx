export default function ContactMap() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Our Location
          </h2>
          <div className="h-96 bg-gray-200 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1038.0945529417163!2d3.8436749568273187!3d7.8634463021649665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103751486b444273%3A0x2347f4d3a9741e23!2sIgbo%20Lakonu%20211101%2C%20Oyo!5e1!3m2!1sen!2sng!4v1761133854389!5m2!1sen!2sng" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="Office Location Map"></iframe>
          </div>
        </div>
    </section>
  );
}