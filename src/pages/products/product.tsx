import { useState } from "react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("EV-Bus");

  const tabs = ["EV-Bus", "E-Cart Loader", "EV-Retrofit"];

  return (
    <div className="w-full">
      {/* Banner */}
      {/* <div className="relative h-[400px] md:h-[650px] lg:h-[695px] flex items-center px-6 md:px-20 overflow-hidden"> */}
      <div className="relative h-[45vh] md:h-[65vh] lg:h-[80vh] flex items-center px-4 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="w-full h-full object-cover object-[center_92%]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bannervideo5.mp4" type="video/mp4" />
          </video>
        </div>

        {/* <div className="absolute inset-0 bg-black/60"></div> */}

        <div className="absolute bottom-4 left-4 z-10">
          <h1 className="text-white text-xl sm:text-3xl font-semibold">
            Products
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6">
        <div className="bg-gray-200 rounded-full p-1 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm md:text-base transition ${activeTab === tab ? "bg-green-600 text-white" : "text-gray-700"
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

/* ================= EV Bus ================= */


// function EVBus() {
//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto space-y-10">
//         {/* Row 1 */}
//         <div className="grid md:grid-cols-2 gap-10 items-center bg-white border rounded-xl p-6">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src="/banner1.png"
//               className="rounded-xl shadow-sm w-full max-w-md border"
//               onError={(e) => {
//                 e.target.src = "https://via.placeholder.com/800x400?text=Image";
//               }}
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
//             <p className="text-gray-600 mb-6">
//               Our EV Bus is designed for sustainable public and private
//               transport. It offers high efficiency, low operational costs, and
//               zero emissions.
//             </p>

//             <div className="space-y-3">
//               {[
//                 "Zero Emissions",
//                 "Cost-Effective Conversion",
//                 "Reliable & Safe",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="grid md:grid-cols-2 gap-10 items-center bg-white border rounded-xl p-6">
//           {/* Image */}
//           <div className="flex justify-center">
//             <img
//               src="/banner4.png"
//               className="rounded-xl shadow-sm w-full max-w-md border"
//               onError={(e) => {
//                 e.target.src = "https://via.placeholder.com/800x400?text=Image";
//               }}
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">EV-Bus</h2>
//             <p className="text-gray-600 mb-6">
//               Our EV Bus is designed for sustainable public and private
//               transport. It offers high efficiency, low operational costs, and
//               zero emissions.
//             </p>

//             <div className="space-y-3">
//               {[
//                 "Smart Fleet Ready",
//                 "High Passenger Capacity",
//                 "Energy Efficient",
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
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
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white border rounded-xl p-6">
          <div className="flex justify-center flex-shrink-0">
            <img
              src="/banner1.png"
              className="rounded-xl shadow-sm w-full max-w-md border"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image";
              }}
            />
          </div>

          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Upcoming project
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                {[
                  "12mt & 13.5mt",
                  "Range 300 ~ 400km",
                  "High % of Localization",
                  // "Mfg. Plant in Karnataka",
                  "Plant & Machinery decided",
                  "Expected Line off – 2nd Qtr ’27",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  "Identified Mass production facility",
                  "Bus Styling finalized",
                  "Structure design 90% completed",
                  "BOM sources Identified",
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

        {/* Row 2 TABLE (UPDATED TD STYLING) */}
        {/* <div className="overflow-y-auto max-h-[420px] md:max-h-[500px] rounded-lg shadow-sm bg-white">
          <table className="w-full text-sm table-fixed">
            <thead className="bg-green-600 text-white sticky top-0">
              <tr>
                <th className="w-[8%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  No
                </th>

                <th className="w-[42%] pl-4 md:pl-30 py-2 text-left text-xs md:text-sm">
                  Specification
                </th>

                <th className="w-[15%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  Unit
                </th>

                <th className="w-[17%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  12m
                </th>

                <th className="w-[18%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  13.5m
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Dimensions", "mt", "11.8 x 2.5", "13.2 x 2.5"],
                ["2", "F/R Overhang", "mt", "2m / 3.2m", "2m / 3.8m"],
                ["3", "Wheel base", "mt", "6.2 m", "7 m"],
                ["4", "Max Speed", "Kmph", "90", "70"],
                ["5", "Climbing ability", "%", "15", "15"],
                ["6", "Driving Mileage", "Km", "400", "400"],
                ["7", "Structure", "", "Semi monocoque(Hybrid)", "Semi monocoque(Hybrid)"],
                ["8", "Motor Nominal (Peak)", "Kw", "145 (245)", "195 (350)"],
                ["9", "Front Axle (disc)", "T", "6.5", "7.5"],
                ["10", "Rear Axle (drum)", "T", "13", "13"],
                ["11", "Trailing axle (disc)", "T", "-", "7.5"],
                ["12", "Braking (Service)", "", "Pneumatic", "Pneumatic"],
                ["13", "Braking (Parking)", "", "Spring", "Spring"],
                ["14", "Suspension (F/R)", "", "2/4", "2/4+2"],
                ["15", "Power Steering", "", "RHD", "RHD"],
                ["16", "ABS", "", "WABCO", "WABCO"],
                ["17", "Central lubrication", "", "No", "Yes"],
                ["18", "Cooling", "", "ATS electric fan", "ATS electric fan"],
                ["19", "Tyres", "", "295/80R22.5", "295/80R22.5"],
                ["20", "Lighting", "", "F & R Lamps", "F & R Lamps"],
                ["21", "Fire extinguisher", "", "Automatic", "Automatic"],
                ["22", "Body", "", "Steel tube", "Steel tube"],
                ["23", "A/C", "", "18~39Kw", "18~40Kw"],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[#e3f6e9]" : "bg-[#c5ecd1]"}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`
    ${j === 1 ? "pl-6 md:pl-30" : "px-2 md:px-3"}
    py-2
    text-left
    align-top
    text-[10px] md:text-sm
    break-words
  `}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}

/* ================= E-CART ================= */
function ECartLoader() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white border rounded-xl p-6">

          {/* IMAGE */}
          <div className="flex justify-center flex-shrink-0">
            <img
              src="/auto1.png"
              className="rounded-xl shadow-lg w-full max-w-md border"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image";
              }}
            />
          </div>

          {/* CONTENT */}
          <div className="w-full mb-18">
            <h2 className="text-3xl font-bold mb-4">
              E-Cart Loader
            </h2>

            <p className="text-gray-600 mb-6">
              The E-Cart Loader is built for efficient last-mile cargo transport.
              It enables smooth and eco-friendly goods movement for logistics,
              warehouses, and delivery operations.
              <br />
              Locally Designed, Developed with 100% Local parts fitted.
            </p>

            {/* SMALL TABLE */}
            <div className="w-full flex md:justify-start justify-center">
              <div className="w-full md:w-[320px] overflow-hidden rounded-lg shadow-md">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="px-4 py-2 text-left">Feature</th>
                      <th className="px-4 py-2 text-center">Specification</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="bg-[#e3f6e9]">
                      <td className="px-4 py-2 font-medium">Range</td>
                      <td className="px-4 py-2">80km</td>
                    </tr>
                    <tr className="bg-[#c5ecd1]">
                      <td className="px-4 py-2 font-medium">Charging</td>
                      <td className="px-4 py-2">4 hrs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* ================= FULL SPEC TABLE ================= */}
        {/* <div className="overflow-y-auto max-h-[420px] md:max-h-[500px] rounded-lg shadow-sm bg-white">
          <table className="w-full text-sm">
            <thead className="bg-green-600 text-white sticky top-0">
              <tr>
                <th className="w-[10%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  No
                </th>

                <th className="w-[45%] pl-4 md:pl-30 py-2 text-left text-xs md:text-sm">
                  Specification
                </th>

                <th className="w-[20%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  Unit
                </th>

                <th className="w-[25%] px-2 md:px-3 py-2 text-left text-xs md:text-sm">
                  Value
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["1", "Vehicle Type", "Category", "L3"],
                ["2", "Dimensions", "L x B x H", "2.4m x 1m x 1.6m"],
                ["3", "Kerb Weight", "Kgs", "300"],
                ["4", "Payload", "Kgs", "360"],
                ["5", "Gross Weight", "Kgs", "660"],
                ["6", "Carriage Type", "Type", "Manual Tilting"],
                ["7", "Range - Max Distance", "Km", "80 kms"],
                ["8", "Charging Time", "Hrs", "4.5 Hrs"],
                ["9", "Max Speed", "Km/hr", "25 kmph"],
                ["10", "Motor Power (BLDC)", "Kw", "1.5 KW, 60V"],
                ["11", "Controller (BLDC)", "", "60V, 80A"],
                ["12", "Battery (LFP)", "Kwh", "5.4 Kwh (51.2V 105Ah)"],
                ["13", "Rear Carriage", "", "Fabricated Structure"],
                ["14", "Differential with Drum Brakes", "Inch", "42 Inch"],
                ["15", "Rear View Mirror", "", "Fixed Inward"],
                ["16", "Hand Brake", "Manual", "Yes"],
                ["17", "Head Light", "LED", "Single Dome"],
                ["18", "Display", "LED", "Color Digital Display"],
                ["19", "Tyres", "Inch", "3.75 x 12"],
                ["20", "Charger", "V/A", "External Charger 60V, 20A"],
                ["21", "USB Charger", "No", "Yes"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-[#e3f6e9]" : "bg-[#c5ecd1]"}
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`
                ${j === 1 ? "pl-4 md:pl-30" : "px-2 md:px-3"}
                py-2
                text-left
                align-top
                text-[10px] md:text-sm
                break-words
                whitespace-normal
              `}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

      </div>
    </div>
  );
}

/* ================= RETROFIT ================= */
function EVRetrofit() {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-black rounded-xl p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">

            {/* Image */}
            <div className="flex justify-start">
              <img
                src="/retro1.png"
                className="rounded-xl shadow-lg w-full max-w-md border"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x400?text=Image";
                }}
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-4">EV Retrofit</h2>

              <p className="text-gray-600 mb-6">
                Convert your existing fuel vehicles into electric with our
                advanced retrofit solutions. Save cost, reduce emissions, and
                embrace sustainable mobility.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Table 1 */}
                <div className="overflow-hidden rounded-lg shadow-md border">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="px-4 py-2">Feature</th>
                        <th className="px-4 py-2">Specification</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="bg-[#e3f6e9]">
                        <td className="px-4 py-2 font-medium">Range</td>
                        <td className="px-4 py-2">110km</td>
                      </tr>

                      <tr className="bg-[#c5ecd1]">
                        <td className="px-4 py-2 font-medium">Charging</td>
                        <td className="px-4 py-2">4 - 5 hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Table 2 */}
                <div className="overflow-hidden rounded-lg shadow-md border">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-green-600 text-white">
                        <th className="px-4 py-2">Feature</th>
                        <th className="px-4 py-2">Specification</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="bg-[#e3f6e9]">
                        <td className="px-4 py-2 font-medium">Range</td>
                        <td className="px-4 py-2">70km</td>
                      </tr>

                      <tr className="bg-[#c5ecd1]">
                        <td className="px-4 py-2 font-medium">Charging</td>
                        <td className="px-4 py-2">0hr (Swapping)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}