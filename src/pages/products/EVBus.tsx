export default function EVKit() {
  return (
    <div className="mt-24 px-3 md:px-12 max-w-7xl mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">EV Kit</h1>

          <p className="text-gray-600">
            Our EV Kit is designed to transform conventional vehicles into
            eco-friendly electric vehicles. It delivers efficient performance,
            reduces fuel costs, and helps minimize environmental impact.
          </p>

          {/* Features */}
          <ul className="space-y-3">
            <li className="bg-green-100 p-3 rounded-lg">Zero Emissions</li>
            <li className="bg-green-100 p-3 rounded-lg">
              Cost-Effective Conversion
            </li>
            <li className="bg-green-100 p-3 rounded-lg">Reliable & Safe</li>
          </ul>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/banner23.png"
            alt="EV Kit"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
