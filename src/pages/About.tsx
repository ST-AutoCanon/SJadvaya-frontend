export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-12 md:py-4 mt-10">
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left Image */}
        {/* <div className="flex-1 flex"> */}
        <div className="flex-1 flex  md:mt-[140px] mb-[10px] md:mb-[120px]">
          <img
            src="/about4.png"
            alt="Electric Vehicles"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-3">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-fit">
            EV Industry over view
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            Pioneering the Electric Revolution
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The Indian electric bus industry is entering a high-growth phase
            driven by strong government commitment, rising environmental
            concerns, and a nationwide shift toward sustainable public and
            freight transportation. Electrification of commercial mobility has
            become a national priority as urban centres confront deteriorating
            air quality and logistics operators seek cost-efficient,
            energy-secure solutions. India has set an ambitious target of
            achieving a 30% share of electric vehicles in total vehicle sales by
            2030, reflecting the scale of transition underway. This shift is
            supported by a rapid rise in EV penetration; domestic EV sales
            jumped from 50,000 units in 2016 to 2.08 million units in 2024,
            mirroring the global trend where EV sales surged from 918,000 to
            18.78 million units during the same period. The sustained momentum
            signals a maturing market where adoption is increasingly driven by
            improved product choices, expanding charging networks, and rising
            consumer confidence, rather than subsidies alone. PM-E DRIVE is
            reshaping the public transport landscape by large-scale expansion of
            electric buses. The scheme has supported buses with INR 4,391 crore,
            enabling state transport undertakings, metro transit authorities,
            and private fleet companies to accelerate adoption across major
            cities.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
            <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
              <h3 className="text-2xl font-bold text-green-500">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
              <h3 className="text-2xl font-bold text-green-500">100+</h3>
              <p className="text-gray-600">Expert Team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}