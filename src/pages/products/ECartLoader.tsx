// export default function ECartLoader() {
//   return (
//     <div className="mt-24 px-4 md:px-12 max-w-7xl mx-auto py-10">
//       <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center gap-6">
//         {/* Image */}
//         <div className="w-full overflow-hidden rounded-xl">
//           <img
//             src="/banner21.png"
//             alt="E-Cart Loader"
//             className="w-full h-[220px] md:h-[350px] object-contain hover:scale-105 transition-transform duration-500"
//             onError={(e) => {
//               e.target.src =
//                 "https://via.placeholder.com/800x400?text=Image+Not+Found";
//             }}
//           />
//         </div>

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           E-Cart Loader
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 max-w-2xl leading-relaxed">
//           The E-Cart Loader is built for efficient last-mile cargo transport. It
//           enables smooth and eco-friendly goods movement for logistics,
//           warehouses, and delivery operations while reducing operational costs.
//         </p>

//         {/* Features */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full">
//           {["Eco-Friendly", "Low Maintenance", "High Efficiency"].map(
//             (item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-100 p-4 rounded-lg font-medium hover:bg-green-100 transition"
//               >
//                 {item}
//               </div>
//             ),
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

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