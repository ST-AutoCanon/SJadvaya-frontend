// import React, { useState } from "react";
// import { Power } from "lucide-react";

// type Step = {
//   title: string;
//   description?: string;
//   details?: string;
//   date?: string;
//   status?: "completed" | "current" | "upcoming";
// };

// const steps: Step[] = [
//   {
//     title: "Kickoff",
//     description: "Project",
//     details: "We gather requirements, define scope, and align goals.",
//     date: "Jan 2026",
//     status: "completed",
//   },
//   {
//     title: "Design",
//     description: "UI/UX phase",
//     details: "Wireframes, prototypes, and design system creation.",
//     date: "Feb 2026",
//     status: "completed",
//   },
//   {
//     title: "Development",
//     description: "Build features",
//     details: "Frontend + backend development with testing.",
//     date: "Mar 2026",
//     status: "current",
//   },
//   {
//     title: "Launch",
//     description: "Go live",
//     details: "Deployment, monitoring, and final delivery.",
//     date: "Apr 2026",
//     status: "upcoming",
//   },
// ];

// export default function PowerStepper() {
//   const [selectedStep, setSelectedStep] = useState<Step | null>(null);

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6 mt-10">
//       <h2 className="text-center text-2xl font-bold mb-10 text-gray-800">
//         Key Milestones
//       </h2>

//       {/* Timeline */}
//       <div className="flex items-center justify-between relative">
//         <div className="absolute top-8 left-0 w-full h-1 bg-gray-300 rounded" />

//         {steps.map((step, index) => {
//           const isCompleted = step.status === "completed";
//           const isCurrent = step.status === "current";

//           return (
//             <div
//               key={index}
//               onClick={() => setSelectedStep(step)}
//               className="relative z-10 flex flex-col items-center flex-1 cursor-pointer group"
//             >
//               {/* Power Button */}
//               <div
//                 className={`
//                   w-16 h-16 rounded-xl flex items-center justify-center
//                   shadow-inner border transition-all duration-300
//                   ${
//                     isCompleted
//                       ? "bg-green-100 border-green-400"
//                       : isCurrent
//                         ? "bg-blue-100 border-blue-400"
//                         : "bg-gray-100 border-gray-300"
//                   }
//                   group-hover:scale-110 group-hover:shadow-lg
//                 `}
//               >
//                 <Power
//                   className={`w-8 h-8 transition ${
//                     isCompleted
//                       ? "text-green-500"
//                       : isCurrent
//                         ? "text-blue-500"
//                         : "text-gray-400"
//                   }`}
//                 />
//               </div>

//               {/* Text */}
//               <div className="mt-3 text-center">
//                 <p className="text-sm font-semibold text-gray-800">
//                   {step.title}
//                 </p>
//                 <p className="text-xs text-gray-500">{step.description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Modal */}
//       {selectedStep && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-10">
//           <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg relative">
//             <button
//               onClick={() => setSelectedStep(null)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
//             >
//               ✕
//             </button>

//             <h3 className="text-lg font-bold mb-2">{selectedStep.title}</h3>

//             <p className="text-sm text-gray-600 mb-3">{selectedStep.details}</p>

//             <p className="text-xs text-gray-400">Date: {selectedStep.date}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from "react";

// const cards = [
//   {
//     id: 1,
//     title: "ISO 9001",
//     image: "maj1.png",
//     content: "SJAEM Certified its first product 'Jido' by NATRAX Indore on 25th March 2026",
//   },
//   {
//     id: 2,
//     title: "Security Compliance",
//     image: "maj2.png",
//     content: "SJAEM Certified its first product 'Jido' by NATRAX Indore on 25th March 2026",
//   },
//   {
//     id: 3,
//     title: "Best Business 2024",
//     image: "maj3.png",
//     content:"dd"
//   },
// ];

// export default function Achievements() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div className="bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800">Major Events</h2>
//         <p className="text-gray-500 mt-2">
//           SJAEM Certified its first product "Jido" by NATRAX Indore on 25th
//           March 2026
//         </p>

//         {/* Cards */}
//         {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10"> */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 mt-10">
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

//    ]
//       </div>

//       {/* Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className="relative bg-white rounded-xl p-4 max-w-xl w-full flex items-center justify-center">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
//             >
//               ×
//             </button>

//             {/* Image */}
//             <img
//               src={selectedImage}
//               alt="Full View"
//               className="max-h-[70vh] w-auto object-contain rounded-lg"
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
    image: "maj1.png",
    content: "NATRAX Certificate for JIDO",
  },
  {
    id: 2,
    title: "Security Compliance",
    image: "maj22.png",
    content: "JIDO our First EV product ",
  },
  {
    id: 3,
    title: "Best Business 2024",
    image: "maj3.png",
    content: "MD Mr.T.S.Jaishankar receiving the certificate",
  },
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState(null); // fixed

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Major Events</h2>
        <p className="text-gray-500 mt-2">
          SJAEM Certified its first product "Jido" by NATRAX Indore on 25th
          March 2026
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 mt-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedImage(card.image)}
              className="cursor-pointer bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-contain rounded-lg"
              />

              {/* ✅ CONTENT BELOW CARD */}
              {/* <p className="mt-3 text-sm text-gray-700">{card.content}</p> */}
              <p className="mt-3 text-sm text-gray-800 px-3 py-2 rounded-lg font-medium">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl p-4 max-w-xl w-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[70vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}