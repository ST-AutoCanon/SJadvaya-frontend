// import { Zap, Shield, Users, Award } from "lucide-react";

// export default function CoreValues() {
//   const values = [
//     {
//       icon: <Zap size={28} />,
//       title: "Innovation",
//       desc: "Pushing boundaries in electric vehicle technology and sustainable engineering",
//     },
//     {
//       icon: <Shield size={28} />,
//       title: "Quality",
//       desc: "Uncompromising standards in every conversion and vehicle we produce",
//     },
//     {
//       icon: <Users size={28} />,
//       title: "Partnership",
//       desc: "Building lasting relationships with clients, suppliers, and communities",
//     },
//     {
//       icon: <Award size={28} />,
//       title: "Excellence",
//       desc: "Committed to delivering superior performance and customer satisfaction",
//     },
//   ];

//   return (
//     <section className="w-full bg-gray-100 py-8 md:py-14">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-12">
//           Our Core Values
//         </h2>

//         {/* Values Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
//           {values.map((value, index) => (
//             <div key={index} className="flex flex-col items-center">
//               {/* Icon Box */}
//               <div className="bg-green-100 text-green-600 p-4 rounded-xl mb-4">
//                 {value.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 {value.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
//                 {value.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { Zap, Shield, Users, Award, Leaf, CheckCircle } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: <Zap size={28} />,
      title: "Innovation",
      desc: "Pushing boundaries in electric vehicle technology and sustainable engineering",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Integrity",
      desc: "Operating with honesty, transparency, and strong ethical principles",
    },
    {
      icon: <Leaf size={28} />,
      title: "Sustainability",
      desc: "Driving eco-friendly solutions for a cleaner and greener future",
    },
    {
      icon: <Shield size={28} />,
      title: "Quality",
      desc: "Uncompromising standards in every conversion and vehicle we produce",
    },
    {
      icon: <Users size={28} />,
      title: "Partnership",
      desc: "Building lasting relationships with clients, suppliers, and communities",
    },
    {
      icon: <Award size={28} />,
      title: "Excellence",
      desc: "Committed to delivering superior performance and customer satisfaction",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-8 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Our Core Values
        </h2>

        {/* New Statement */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Innovation, Integrity, Sustainability, and Partnership underpin our
          commitment to quality and stakeholder engagement.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-green-100 text-green-600 p-4 rounded-xl mb-4">
                {value.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}