export default function VisionMission() {
  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Vision */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-green-600 mb-3">Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            At SJAEM, our vision is to build innovative electric vehicles to
            power a better, more sustainable world towards Net Zero.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold text-green-600 mb-3">Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Be a leader in electromotive products, enabling zero-emission
            solutions that create outstanding value for all our stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
