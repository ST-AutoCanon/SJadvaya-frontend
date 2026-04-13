export default function ECartLoader() {
  return (
    <div className="mt-24 px-3 md:px-12 max-w-7xl mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">E-Cart Loader</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          The E-Cart Loader is built for efficient last-mile cargo transport. It
          enables smooth and eco-friendly goods movement for logistics,
          warehouses, and delivery operations while reducing operational costs.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <img
          src="/banner21.png"
          alt="E-Cart Loader"
          className="rounded-xl shadow-lg max-w-3xl w-full h-auto object-contain"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/800x400?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {["Eco-Friendly", "Low Maintenance", "High Efficiency"].map(
          (item, i) => (
            <div
              key={i}
              className="bg-gray-100 p-6 rounded-xl text-center font-medium hover:bg-green-100 transition"
            >
              {item}
            </div>
          ),
        )}
      </div>
    </div>
  );
}