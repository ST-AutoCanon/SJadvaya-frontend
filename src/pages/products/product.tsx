import { useState } from "react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("EV-Bus");

  const tabs = ["E-Cart Loader", "EV-Bus", "EV-Retrofit"];

  return (
    <div className="w-full mt-24">
      {/* Banner */}
      <div className="relative h-[300px] md:h-[500px] flex items-center px-6 md:px-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bannervideo2.mp4" type="video/mp4" />
        </video>

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
    // <div className="bg-gray-100 py-10 px-4">
    //   <div className="max-w-6xl mx-auto space-y-10">
    //     {/* Row 1 */}
    //     {/* Row 1 */}
    //     <div className="flex flex-col lg:flex-row gap-10 items-center bg-white border rounded-xl p-6">
    //       {/* Image (fixed size - unchanged) */}
    //       <div className="flex justify-center flex-shrink-0">
    //         <img
    //           src="/banner1.png"
    //           className="rounded-xl shadow-sm w-full max-w-md border"
    //           onError={(e) => {
    //             e.target.src = "https://via.placeholder.com/800x400?text=Image";
    //           }}
    //         />
    //       </div>

    //       {/* Right side (two contents side by side) */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    //         {/* Content 1 */}
    //         <div>
    //           <h2 className="text-3xl font-bold mb-4">Project Outline</h2>
    //           <div className="space-y-3">
    //             {[
    //               "12mt & 13.5mt",
    //               "Range 300 ~ 400km",
    //               "High % of Localization",
    //               "Mfg. Plant in Karnataka",
    //               "Expected Line off – 2nd Qtr ’27",
    //             ].map((item, i) => (
    //               <div
    //                 key={i}
    //                 className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
    //               >
    //                 {item}
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         {/* Content 2 (new right-side box) */}
    //         <div>
    //           <h2 className="text-3xl font-bold mb-4">Upcoming project</h2>
    //           <div className="space-y-3">
    //             {[
    //               "Land with Building Identified",
    //               "Bus Styling finalized",
    //               "Structure design 90% completed",
    //               "BOM sources Identified",
    //               "Plant & Machinery decided",
    //             ].map((item, i) => (
    //               <div
    //                 key={i}
    //                 className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
    //               >
    //                 {item}
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Row 2 */}
    //     <div className="grid md:grid-cols-2 gap-10 items-center bg-white border rounded-xl p-6">
    //       {/* Image */}
    //       <div className="flex justify-center">
    //         <img
    //           src="/banner4.png"
    //           className="rounded-xl shadow-sm w-full max-w-md border"
    //           onError={(e) => {
    //             e.target.src = "https://via.placeholder.com/800x400?text=Image";
    //           }}
    //         />
    //       </div>

    //       {/* Content - Current Status */}
    //       <div>
    //         <h2 className="text-3xl font-bold mb-4">Current Status</h2>

    //         <div className="space-y-3">
    //           {[
    //             "Land with Building Identified",
    //             "Bus Styling finalized",
    //             "Structure design 90% completed",
    //             "BOM sources Identified",
    //             "Plant & Machinery decided",
    //           ].map((item, i) => (
    //             <div
    //               key={i}
    //               className="bg-green-100 text-green-800 px-4 py-2 rounded-lg border"
    //             >
    //               {item}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-10 items-center bg-white border rounded-xl p-6">
          {/* Image */}
          <div className="flex justify-center flex-shrink-0">
            <img
              src="/banner1.png"
              className="rounded-xl shadow-sm w-full max-w-md border"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image";
              }}
            />
          </div>

          {/* Right side */}
          <div className="w-full">
            {/* ✅ Single Heading */}
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              Upcoming project
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Content 1 */}
              <div className="space-y-3">
                {[
                  "12mt & 13.5mt",
                  "Range 300 ~ 400km",
                  "High % of Localization",
                  "Mfg. Plant in Karnataka",
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

              {/* Content 2 */}
              <div className="space-y-3">
                {[
                  "Land with Building Identified",
                  "Bus Styling finalized",
                  "Structure design 90% completed",
                  "BOM sources Identified",
                  "Plant & Machinery decided",
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

        {/* Row 2 */}
        <div className="overflow-auto max-h-[400px] border rounded-lg shadow-sm">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-800 text-white sticky top-0">
              <tr>
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2 text-left">Specification</th>
                <th className="px-3 py-2">Unit</th>
                <th className="px-3 py-2">12m</th>
                <th className="px-3 py-2">13.5m</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Dimensions", "mt", "11.8 x 2.5", "13.2 x 2.5"],
                ["2", "F/R Overhang", "mt", "2m / 3.2m", "2m / 3.8m"],
                ["3", "Wheel base", "mt", "6.2 m", "7 m"],
                ["4", "Max Speed", "Kmph", "90", "70"],
                ["5", "Climbing ability", "%", "15", "15"],
                ["6", "Driving Mileage", "Km", "400", "300"],
                ["7", "Structure", "", "Semi monocoque", "Monocoque"],
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
                <tr key={i} className="even:bg-gray-100">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-center">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
          src="/auto1.png"
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
          warehouses, and delivery operations. <br></br>Locally Designed,
          Developed with 100% Local parts fitted. (With fixed battery)
        </p>

        {/* <div className="space-y-3">
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
        </div> */}
        <div className="overflow-hidden rounded-lg shadow-md w-full max-w-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Specification</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-blue-100">
                <td className="px-4 py-2 font-medium">Range</td>
                <td className="px-4 py-2">80km</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="px-4 py-2 font-medium">Charging</td>
                <td className="px-4 py-2">4hrs</td>
              </tr>
            </tbody>
          </table>
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
          src="/retro1.png"
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

        {/* <div className="space-y-3">
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
        </div> */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Table 1 */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="px-4 py-2 font-medium">Range</td>
                  <td className="px-4 py-2">110km</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 font-medium">Charging</td>
                  <td className="px-4 py-2">4 - 5 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table 2 */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-100">
                  <td className="px-4 py-2 font-medium">Range</td>
                  <td className="px-4 py-2">70km</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="px-4 py-2 font-medium">Charging</td>
                  <td className="px-4 py-2">0hr (Swapping)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}