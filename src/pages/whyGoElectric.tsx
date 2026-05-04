import {
  Leaf,
  TrendingUp,
  Gauge,
  Shield,
  Battery,
  Recycle,
} from "lucide-react";

export default function EcoVoltAdvantage() {
  const features = [
    {
      icon: <Leaf size={22} />,
      title: "Environmental Impact",
      desc: "Reduce carbon emissions by up to 80% and contribute to a cleaner, sustainable future for our planet.",
      stat: "80%",
      statLabel: "Emission Reduction",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Cost Savings",
      desc: "Lower operating costs with reduced fuel and maintenance expenses. Electric vehicles offer significant long-term savings.",
      stat: "60%",
      statLabel: "Operating Cost Reduction",
    },
    {
      icon: <Gauge size={22} />,
      title: "Superior Performance",
      desc: "Experience instant torque, smooth acceleration, and quieter operation with electric powertrains.",
      stat: "100%",
      statLabel: "Instant Torque",
    },
    {
      icon: <Shield size={22} />,
      title: "Energy Independence",
      desc: "Reduce dependence on fossil fuels and volatile fuel prices with reliable electric power.",
      stat: "0",
      statLabel: "Fossil Fuel Dependency",
    },
    {
      icon: <Battery size={22} />,
      title: "Advanced Technology",
      desc: "Benefit from cutting-edge battery management systems, regenerative braking, and smart connectivity.",
      stat: "10yr+",
      statLabel: "Battery Life",
    },
    {
      icon: <Recycle size={22} />,
      title: "Circular Economy",
      desc: "Extend vehicle life through retrofitting and promote sustainable manufacturing practices.",
      stat: "100%",
      statLabel: "Recyclable Components",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#0f172a] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <span className="bg-emerald-900/40 text-emerald-400 text-sm px-4 py-1 rounded-full border border-emerald-700/30">
            Why Go Electric
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-white mb-4">
          The SJAEM Advantage
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Transforming transportation with measurable benefits for your
          business, your budget, and our planet.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-emerald-500/40 transition duration-300"
            >
              {/* Icon */}
              <div className="bg-emerald-900/40 text-emerald-400 p-3 rounded-lg w-fit mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-lg font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-5"></div>

              {/* Stat */}
              <div>
                <p className="text-emerald-400 text-2xl font-bold">
                  {item.stat}
                </p>
                <p className="text-gray-500 text-xs mt-1">{item.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
