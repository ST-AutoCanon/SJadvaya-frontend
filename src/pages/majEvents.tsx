// import React, { useState } from "react";

// const cards = [
//   {
//     id: 1,
//     title: "ISO 9001",
//     image: "/images/cert1.png",
//   },
//   {
//     id: 2,
//     title: "Security Compliance",
//     image: "/images/cert2.png",
//   },
//   {
//     id: 3,
//     title: "Best Business 2024",
//     image: "/images/cert3.png",
//   },
//   {
//     id: 4,
//     title: "Best Nonprofit Award",
//     image: "/images/cert4.png",
//   },
// ];

// export default function Achievements() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div className="bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Major Events</h2>
//         <p className="text-gray-500 mt-2">
//           Discover our latest certifications and achievements
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               onClick={() => setSelectedImage(card.image)}
//               className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
//             >
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full h-60 object-contain rounded-lg"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
//           View All Achievements
//         </button>
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="max-w-3xl w-full">
//             <img
//               src={selectedImage}
//               alt="Full View"
//               className="w-full h-auto rounded-xl shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";

const cards = [
  {
    id: 1,
    title: "ISO 9001",
    image: "/images/cert1.png",
    content:
      "ISO 9001 is an international standard that specifies requirements for a quality management system (QMS)...",
  },
  {
    id: 2,
    title: "Security Compliance",
    image: "/images/cert2.png",
    content:
      "Security compliance refers to the adherence to established security standards...",
  },
  {
    id: 3,
    title: "Best Business 2024",
    image: "/images/cert3.png",
    content:
      "The Best Business 2024 award recognizes outstanding achievements...",
  },
  {
    id: 4,
    title: "Best Nonprofit Award",
    image: "/images/cert4.png",
    content:
      "The Best Nonprofit Award honors organizations that have made significant contributions...",
  },
];

export default function Achievements() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Major Events</h2>
        <p className="text-gray-500 mt-2">
          Discover our latest certifications and achievements
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-40 object-contain rounded-lg"
              />
              <h3 className="mt-3 font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>

        {/* 👇 CONTENT OUTSIDE CARD */}
        {selectedCard && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md text-left max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">{selectedCard.title}</h3>
            <p className="text-gray-700">{selectedCard.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}