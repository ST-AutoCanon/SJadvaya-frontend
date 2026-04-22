import { useState } from "react";
import CoreValues from "./CoreValues";
import VisionMission from "./VisionMission";

export default function AboutUs() {
  const [selected, setSelected] = useState(null);

  const team = [
    {
      name: "Mr. T.S. Jaishankar",
      role: "Managing Director",
      img: "/team1.png",
      details: `Mr. T.S. Jaishankar is a Technocrat with over 40 years of experience in the Automobile Industry.

Key Achievements:
• Established M&M Diesel Engine plant (₹200Cr) at Igatpuri
• Built Toyota Kirloskar Motors supply chain system
• Led ₹2500Cr Toyota Plant 2 (Etios & SUVs) without cost overrun
• Successfully handled labour strike in 2015

After Retirement:
• Established Yanmar Diesel Engine project (₹500Cr, Chennai)
• Supply chain optimization at Tata Steel
• Supplier park setup at Kalinganagar`,
    },

    {
      name: "Mr. N.N. Vishwanath",
      role: "CEO & Director",
      img: "/team2.png",
      details: `Mr. N.N. Vishwanath is an Industrialist with over 45 years of experience in setting up various industries.

• Played a key role in establishing ITPL, BASF, MRPL, VOLVO, TATA, TVS, TOYOTA and major textile industries
• Established supply chain network for Toyota Production System
• Key contributor in Toyota small car project

Key Roles:
• Deputy Director – Industries & Commerce, Govt. of Karnataka
• General Manager – Toyota Kirloskar Auto Parts Pvt. Ltd.
• Vice President – Toyota Kirloskar Motors
• Vice President – Bharat Forge Ltd.`,
    },

    {
      name: "Mr. Raghunath H.K",
      role: "Director",
      img: "/team3.png",
      details: `Mr. Raghunath H.K. is a seasoned entrepreneur with over 30 years of experience across diverse industries.

• Extensive experience across multiple business sectors
• Strong Pan-India entrepreneurial network
• Active contributor to business expansion and strategy

His leadership supports the growth and diversification of SJAEM.`,
    },

    {
      name: "Mr. Nagendra Chandrashekar",
      role: "Director",
      img: "/team4.png",
      details: `Mr. Nagendra Chandrashekar is a Technocrat with over 20 years of experience in Toyota Group of Industries.

Expertise:
• Production Planning & Execution (PED)
• Heijunka (Process Control)
• Quality & QA IMI systems
• Vendor Management
• Kanban Inventory & Logistics Planning
• ISO Audits, 5S & Kaizen

At SJAEM, he leads R&D, Production, and Business Development.`,
    },

    {
      name: "Mr. G. Balasubramanyam",
      role: "General Manager",
      img: "/team5.png",
      details: `Mr. G. Balasubramanyam has over 35 years of experience in Machine Tools, Textile Machinery, and Automobile Manufacturing.

Specialization:
• Toyota Production System (TPS)
• Production Control & Vendor Development

Key Contributions:
• Textile Machinery Plant setup
• PDC & Machining Plant for transmission parts
• Diesel & Hybrid Engine Plants for Toyota Industries India

His expertise drives high-performance manufacturing systems.`,
    },
  ];

  return (
    <div className="w-full">
      {/* ================= ABOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-start gap-8 md:gap-12 mt-16 md:mt-24">
        <div className="flex-1 w-full">
          <img
            src="/aboutus.png"
            alt="About SJ Advaya Motors"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4 text-left md:text-left">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-fit mx-auto md:mx-0">
            About SJ Advaya Motors
          </span>

          <h2 className="text-2xl md:text-4xl font-bold">
            Driving Excellence with Experience & Innovation
          </h2>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            SJAEM Electromotive Private Limited (SJAEM), headquartered in
            Bangalore, was incorporated in November 2023 with a vision to drive
            the future of sustainable mobility. The company operates in the
            electric vehicle (EV) manufacturing space, focusing on products such
            as 3-wheeler loaders and electric buses.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            SJAEM is led by experienced promoters and directors from leading
            automobile organizations, bringing deep expertise in large-scale
            project management and the establishment of manufacturing facilities
            with investments exceeding ₹30,000 crore. Their strong industry
            background enables the company to build robust, efficient, and
            scalable operations.
          </p>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
            At SJAEM, we are committed to delivering world-class quality,
            reliability, and customer experience, while contributing to the
            transition towards cleaner and smarter transportation solutions.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-green-500">
                40+
              </h3>
              <p className="text-gray-600 text-sm">
                Years Leadership Experience
              </p>
            </div>

            <div className="bg-gray-200 rounded-lg px-6 py-4 text-center flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-green-500">
                100+
              </h3>
              <p className="text-gray-600 text-sm">Projects & Contributions</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-10">
        {/* <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
          Our Purpose
        </h2> */}

        <div className="border-t border-gray-200 pt-1">
          <VisionMission />
        </div>
      </div>

      <div className="mt-6">
        <CoreValues />
      </div>

      {/* ================= TEAM ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 md:mb-16">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative">
                <img
                  src={member.img}
                  alt={member.name}
                  // className="w-full h-48 md:h-56 object-cover"
                  className="w-full h-48 md:h-56 object-contain bg-gray-100 pt-3"
                />

                <div className="absolute bottom-0 w-full bg-green-500 text-white text-center py-2 text-xs md:text-sm font-semibold rounded-t-2xl">
                  {member.role}
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-base md:text-lg">
                  {member.name}
                </h3>

                <button
                  onClick={() => setSelected(member)}
                  className="text-green-600 text-sm mt-3 hover:underline"
                >
                  Know More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-5 text-xl font-bold"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 p-4 md:p-6 bg-gray-100 flex justify-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  // className="w-36 h-36 md:w-52 md:h-52 rounded-xl object-cover"
                  className="w-36 h-36 md:w-52 md:h-52 rounded-xl object-contain bg-gray-200 pt-3"
                />
              </div>

              <div className="md:w-2/3 p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  {selected.name}
                </h3>

                <p className="text-green-600 font-semibold mb-3">
                  {selected.role}
                </p>

                <p className="text-gray-700 whitespace-pre-line text-sm md:text-base leading-relaxed">
                  {selected.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
