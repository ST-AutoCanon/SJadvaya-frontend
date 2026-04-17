import { useState } from "react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("EV-Bus");

  const tabs = ["E-Cart Loader", "EV-Bus", "EV-Retrofit"];

  return (
    <div className="w-full mt-24">
      {/* Banner */}
      <div className="relative h-[220px] md:h-[300px] flex items-center px-6 md:px-20 overflow-hidden">
        <img
          src="/mainbanner.png"
          alt="Products Banner"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/1200x300?text=Banner";
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* <h1 className="relative text-white text-3xl md:text-5xl font-bold">
          Products
        </h1> */}
        <div className="absolute bottom-4 left-4 z-10">
          <h1 className="text-white text-xl sm:text-3xl font-semibold">Products</h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6">
        <div className="bg-gray-200 rounded-full p-1 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition ${
                activeTab === tab ? "bg-green-600 text-white" : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {/* <div className="mt-12 px-4 md:px-12 max-w-7xl mx-auto"> */}
      <div className="mt-12 px-4 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24">
        {activeTab === "EV-Bus" && <EVBus />}
        {activeTab === "E-Cart Loader" && <ECartLoader />}
        {activeTab === "EV-Retrofit" && <EVRetrofit />}
      </div>
    </div>
  );
}

/* ================= EV KIT ================= */


// function EVBus() {
//   return (
//     <div className="grid md:grid-cols-2 gap-10 items-center">
//       {/* Image */}
//       <div className="flex justify-center">
//         <img
//           src="/banner1.png"
//           className="rounded-xl shadow-lg w-full max-w-md"
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/800x400?text=Image";
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
//         <p className="text-gray-600 mb-6">
//           Our EV Bus is designed for sustainable public and private transport.
//           It offers high efficiency, low operational costs, and zero emissions,
//           making it ideal for modern urban mobility solutions.
//         </p>

//         <div className="space-y-3">
//           {[
//             "Zero Emissions",
//             "Cost-Effective Conversion",
//             "Reliable & Safe",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-green-100 text-green-800 px-4 py-2 rounded-lg w-fit"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <img
//           src="/banner4.png"
//           className="rounded-xl shadow-lg w-full max-w-md"
//           onError={(e) => {
//             e.target.src = "https://via.placeholder.com/800x400?text=Image";
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div>
//         <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
//         <p className="text-gray-600 mb-6">
//           Our EV Bus is designed for sustainable public and private transport.
//           It offers high efficiency, low operational costs, and zero emissions,
//           making it ideal for modern urban mobility solutions.
//         </p>

//         <div className="space-y-3">
//           {[
//             "Smart Fleet Ready",
//             "High Passenger Capacity",
//             "Energy Efficient",
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-green-100 text-green-800 px-4 py-2 rounded-lg w-fit"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


function EVBus() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white border rounded-xl p-6">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/banner1.png"
              className="rounded-xl shadow-sm w-full max-w-md border"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image";
              }}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
            <p className="text-gray-600 mb-6">
              Our EV Bus is designed for sustainable public and private
              transport. It offers high efficiency, low operational costs, and
              zero emissions.
            </p>

            <div className="space-y-3">
              {[
                "Zero Emissions",
                "Cost-Effective Conversion",
                "Reliable & Safe",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white border rounded-xl p-6">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/banner4.png"
              className="rounded-xl shadow-sm w-full max-w-md border"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image";
              }}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
            <p className="text-gray-600 mb-6">
              Our EV Bus is designed for sustainable public and private
              transport. It offers high efficiency, low operational costs, and
              zero emissions.
            </p>

            <div className="space-y-3">
              {[
                "Smart Fleet Ready",
                "High Passenger Capacity",
                "Energy Efficient",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ================= E-CART ================= */
function ECartLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src="/banner21.png"
          className="rounded-xl shadow-lg w-full max-w-md"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x400?text=Image";
          }}
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">E-Cart Loader</h2>
        <p className="text-gray-600 mb-6">
          The E-Cart Loader is built for efficient last-mile cargo transport. It
          enables smooth and eco-friendly goods movement for logistics,
          warehouses, and delivery operations.
        </p>

        <div className="space-y-3">
          {["Eco-Friendly", "Low Maintenance", "High Efficiency"].map(
            (item, i) => (
              <div
                key={i}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-lg w-fit"
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= RETROFIT ================= */
function EVRetrofit() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src="/banner22.png"
          className="rounded-xl shadow-lg w-full max-w-md"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x400?text=Image";
          }}
        />
      </div>

      {/* Content */}
      <div>
        <h2 className="text-3xl font-bold mb-4">EV Retrofit</h2>
        <p className="text-gray-600 mb-6">
          Convert your existing fuel vehicles into electric with our advanced
          retrofit solutions. Save cost, reduce emissions, and embrace
          sustainable mobility.
        </p>

        <div className="space-y-3">
          {[
            "Lower Maintenance",
            "Fleet Modernization",
            "Reliable Performance",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-green-100 text-green-800 px-4 py-2 rounded-lg w-fit"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}