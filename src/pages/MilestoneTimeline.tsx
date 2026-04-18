// import React from "react";

// type Step = {
//   title: string;
//   description?: string;
//   status?: "completed" | "current" | "upcoming";
// };

// const steps: Step[] = [
//   { title: "Kickoff", description: "Start project", status: "completed" },
//   { title: "Design", description: "UI/UX phase", status: "completed" },
//   { title: "Development", description: "Build features", status: "current" },
//   { title: "Launch", description: "Go live", status: "upcoming" },
// ];

// export default function HorizontalStepper() {
//   return (
//     <div className="w-full max-w-5xl mx-auto p-6">
//       <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
//         Key Milestones
//       </h2>
//       {/* Container */}
//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
//         <div className="flex items-center justify-between relative">
//           {/* Background line */}
//           <div className="absolute top-6 left-0 w-full h-1 bg-gray-300 rounded" />

//           {steps.map((step, index) => {
//             const isCompleted = step.status === "completed";
//             const isCurrent = step.status === "current";

//             return (
//               <div
//                 key={index}
//                 className="relative z-10 flex flex-col items-center flex-1 text-center"
//               >
//                 {/* Circle */}
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold shadow
//                   ${
//                     isCompleted
//                       ? "bg-green-500"
//                       : isCurrent
//                         ? "bg-blue-500"
//                         : "bg-gray-400"
//                   }`}
//                 >
//                   {index + 1}
//                 </div>

//                 {/* Content */}
//                 <div className="mt-3">
//                   <p className="text-sm font-medium">{step.title}</p>
//                   <p className="text-xs text-gray-500">{step.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

///////////////////////////

// import React, { useState } from "react";

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
//     description: "Project planning",
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

// export default function HorizontalStepper() {
//   const [selectedStep, setSelectedStep] = useState<Step | null>(null);

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6">
//       <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
//         Key Milestones
//       </h2>

//       {/* Timeline */}
//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
//         <div className="flex items-center justify-between relative">
//           <div className="absolute top-6 left-0 w-full h-1 bg-gray-300 rounded" />

//           {steps.map((step, index) => {
//             const isCompleted = step.status === "completed";
//             const isCurrent = step.status === "current";

//             return (
//               <div
//                 key={index}
//                 className="relative z-10 flex flex-col items-center flex-1 text-center px-2"
//               >
//                 {/* Circle */}
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold shadow
//                   ${
//                     isCompleted
//                       ? "bg-green-500"
//                       : isCurrent
//                         ? "bg-blue-500"
//                         : "bg-gray-400"
//                   }`}
//                 >
//                   {index + 1}
//                 </div>

//                 {/* Content */}
//                 <div className="mt-3">
//                   <p className="text-sm font-semibold">{step.title}</p>
//                   <p className="text-xs text-gray-500">{step.description}</p>

//                   <button
//                     onClick={() => setSelectedStep(step)}
//                     className="mt-2 text-xs text-blue-600 hover:underline"
//                   >
//                     Know more →
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="mt-8 bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold">
//             Ready to start your project?
//           </h3>
//           <p className="text-sm text-gray-500">
//             Start building with structured milestones.
//           </p>
//         </div>

//         <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700">
//           Start Project
//         </button>
//       </div>

//       {/* Modal */}
//       {selectedStep && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg relative">
//             {/* Close */}
//             <button
//               onClick={() => setSelectedStep(null)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
//             >
//               ✕
//             </button>

//             {/* Content */}
//             <h3 className="text-lg font-bold mb-2">{selectedStep.title}</h3>

//             <p className="text-sm text-gray-600 mb-3">{selectedStep.details}</p>

//             <p className="text-xs text-gray-400">Date: {selectedStep.date}</p>

//             <button
//               onClick={() => setSelectedStep(null)}
//               className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//////////////////////////

// import React, { useState } from "react";

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
//     description: "Project planning",
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

// export default function HorizontalStepper() {
//   const [selectedStep, setSelectedStep] = useState<Step | null>(null);

//   return (
//     <div className="w-full max-w-5xl mx-auto p-6">
//       <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
//         Key Milestones
//       </h2>

//       {/* Timeline */}
//       <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
//         <div className="flex items-center justify-between relative">
//           <div className="absolute top-6 left-0 w-full h-1 bg-gray-300 rounded" />

//           {steps.map((step, index) => {
//             const isCompleted = step.status === "completed";
//             const isCurrent = step.status === "current";

//             return (
//               <div
//                 key={index}
//                 onClick={() => setSelectedStep(step)}
//                 className="relative z-10 flex flex-col items-center flex-1 text-center px-2 cursor-pointer group"
//               >
//                 {/* Circle */}
//                 <div
//                   className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold shadow transition
//                   ${
//                     isCompleted
//                       ? "bg-green-500"
//                       : isCurrent
//                         ? "bg-blue-500"
//                         : "bg-gray-400"
//                   }
//                   group-hover:scale-110`}
//                 >
//                   {index + 1}
//                 </div>

//                 {/* Content */}
//                 <div className="mt-3">
//                   <p className="text-sm font-semibold">{step.title}</p>
//                   <p className="text-xs text-gray-500">{step.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>



//       {/* Modal */}
//       {selectedStep && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//           <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg relative">
//             {/* Close */}
//             <button
//               onClick={() => setSelectedStep(null)}
//               className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
//             >
//               ✕
//             </button>

//             {/* Content */}
//             <h3 className="text-lg font-bold mb-2">{selectedStep.title}</h3>

//             <p className="text-sm text-gray-600 mb-3">{selectedStep.details}</p>

//             <p className="text-xs text-gray-400">Date: {selectedStep.date}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




//////////
import React, { useState } from "react";
import { Power } from "lucide-react";

type Step = {
  title: string;
  description?: string;
  details?: string;
  date?: string;
  status?: "completed" | "current" | "upcoming";
};

const steps: Step[] = [
  {
    title: "Kickoff",
    description: "Project",
    details: "We gather requirements, define scope, and align goals.",
    date: "Jan 2026",
    status: "completed",
  },
  {
    title: "Design",
    description: "UI/UX phase",
    details: "Wireframes, prototypes, and design system creation.",
    date: "Feb 2026",
    status: "completed",
  },
  {
    title: "Development",
    description: "Build features",
    details: "Frontend + backend development with testing.",
    date: "Mar 2026",
    status: "current",
  },
  {
    title: "Launch",
    description: "Go live",
    details: "Deployment, monitoring, and final delivery.",
    date: "Apr 2026",
    status: "upcoming",
  },
];

export default function PowerStepper() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 mt-10">
      <h2 className="text-center text-2xl font-bold mb-10 text-gray-800">
        Key Milestones
      </h2>

      {/* Timeline */}
      <div className="flex items-center justify-between relative">
        <div className="absolute top-8 left-0 w-full h-1 bg-gray-300 rounded" />

        {steps.map((step, index) => {
          const isCompleted = step.status === "completed";
          const isCurrent = step.status === "current";

          return (
            <div
              key={index}
              onClick={() => setSelectedStep(step)}
              className="relative z-10 flex flex-col items-center flex-1 cursor-pointer group"
            >
              {/* Power Button */}
              <div
                className={`
                  w-16 h-16 rounded-xl flex items-center justify-center
                  shadow-inner border transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-green-100 border-green-400"
                      : isCurrent
                        ? "bg-blue-100 border-blue-400"
                        : "bg-gray-100 border-gray-300"
                  }
                  group-hover:scale-110 group-hover:shadow-lg
                `}
              >
                <Power
                  className={`w-8 h-8 transition ${
                    isCompleted
                      ? "text-green-500"
                      : isCurrent
                        ? "text-blue-500"
                        : "text-gray-400"
                  }`}
                />
              </div>

              {/* Text */}
              <div className="mt-3 text-center">
                <p className="text-sm font-semibold text-gray-800">
                  {step.title}
                </p>
                <p className="text-xs text-gray-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedStep && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-10">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg relative">
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-2">{selectedStep.title}</h3>

            <p className="text-sm text-gray-600 mb-3">{selectedStep.details}</p>

            <p className="text-xs text-gray-400">Date: {selectedStep.date}</p>
          </div>
        </div>
      )}
    </div>
  );
}
