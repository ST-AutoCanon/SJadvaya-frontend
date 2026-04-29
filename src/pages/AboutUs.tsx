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
      details: `Mr. T. S. Jaishankar – Managing Director | Automotive Manufacturing & Supply Chain Leader

Seasoned automotive industry leader with over 40 years of experience in building large-scale manufacturing facilities
and designing robust supply chain ecosystems for global OEMs.

He has led and delivered multiple high-value industrial projects across India, including:

• Mahindra & Mahindra (1985)
Established the diesel engine manufacturing plant at Igatpuri (₹200 Cr investment), laying the foundation for scalable
production operations.

• Toyota Kirloskar Motors
▪ Built and led a comprehensive procurement and supply chain function supporting Toyota Group companies and suppliers
▪ Project Leader for Plant 2, delivering ₹2,500 Cr manufacturing facility (Etios & SUV models) on time and without cost overruns
▪ Spearheaded development of an integrated on-site supplier park, strengthening operational efficiency and vendor collaboration
▪ Successfully led the organization through a critical labour strike in 2015, ensuring business continuity and stability
▪ Retired as Deputy Managing Director (DMD) in 2017

Post-retirement, he continues to contribute as a strategic advisor:

• Established Yanmar Diesel Engine Plant (Chennai) – ₹500 Cr greenfield project (2020)
• Led supply chain rationalization initiatives at Tata Steel (Jamshedpur & Kalinganagar)
• Supported development of supplier park at Kalinganagar


CORE STRENGTHS
Greenfield Plant Setup | Automotive Manufacturing | Supply Chain Architecture
Vendor Ecosystem Development | Industrial Project Execution | Crisis Leadership`
    },

    {
      name: "Mr. N.N. Vishwanath",
      role: "CEO & Director",
      img: "/team2.png",
      details: `Mr. N. N. Vishwanath – Government & Industrial Projects Strategist

Senior government and industry leader with over 15 years of experience in enabling large-scale industrial investments and infrastructure development in Karnataka. He has played a pivotal role in facilitating projects cumulatively valued at over ₹30,000+ crore, working closely with global corporations and state agencies.

As Deputy Director, Industries & Commerce, Government of Karnataka, he was instrumental in attracting and establishing marquee investments including ITPL, Toyota, Volvo, BASF, MRPL, Tata, TVS, and leading textile manufacturing units. His deep understanding of regulatory frameworks and stakeholder alignment has been critical in fast-tracking complex, high-value projects.

Following his government tenure, he transitioned into leadership roles in multinational organizations:

• Toyota Kirloskar Auto Parts – General Manager
Led import-export and administrative operations, establishing robust domestic and international supply chain systems. Delivered significant logistics efficiencies and improved delivery timelines.

• Toyota Kirloskar Motors – Vice President (Executive Affairs & CSR)
Played a key leadership role in the establishment of the Etios manufacturing plant, including development of the supporting supply chain ecosystem.

• Bharat Forge Ltd., Bangalore – Vice President, Corporate Affairs
Managed corporate relations, regulatory alignment, and strategic stakeholder engagement.

As an Independent Consultant, he has successfully supported the establishment of major industrial projects including TMAK and Yanmar, with a combined investment exceeding ₹800+ crore.


CORE STRENGTHS
Government approvals & regulatory strategy | Large-scale project execution | Industrial infrastructure development | Corporate–government liaison | Supply chain and operations setup`
    },

    {
      name: "Mr. Raghunath H.K",
      role: "Director",
      img: "/team3.png",
      details: `Mr. Raghunath – Director | Business Strategy & Network Development

Seasoned entrepreneur with over 30 years of experience building and managing businesses across multiple sectors in India.

He brings deep market understanding and an extensive network across industries, enabling strategic partnerships, business expansion, and stakeholder engagement. Over his entrepreneurial journey, he has been actively involved in developing ventures across diverse domains, giving him strong insight into market dynamics, business scaling, and operational challenges.


CORE STRENGTHS
At the organization, he plays a key role in business development, strategic alliances, and market expansion, leveraging his pan-India network to drive growth opportunities.`
    },

    {
      name: "Mr. Nagendra Chandrashekar",
      role: "Director",
      img: "/team4.png",
      details: `Mr. Nagendra Chandrashekar – Director | Manufacturing Systems & Operational Excellence

Manufacturing systems and operations excellence leader with over 20 years of experience in the Toyota Group, specializing in building high-efficiency, lean production environments.

He brings deep expertise in implementing Toyota Production System (TPS) methodologies to drive operational efficiency, cost optimization, and consistent quality in large-scale manufacturing.

At SJAEM, he leads R&D, Production, and Business Development, ensuring scalable operations, process discipline, and high-quality output aligned with global standards.


CORE STRENGTHS
• Lean Manufacturing & TPS Implementation
Expert in Heijunka, Kanban, Kaizen, and 5S to eliminate waste and improve flow

• Production Planning & Process Optimization
Designing efficient, balanced production systems for maximum throughput

• Supply Chain & Inventory Control
Strong in vendor coordination, inbound quality (QA/IMI), and logistics planning

• Quality Systems & Compliance
ISO audits, process standardization, and continuous quality improvement

• Operational Scalability
Ability to build systems that support consistent growth without inefficiencies`
    },

    {
      name: "Mr. G. Balasubramanyam",
      role: "General Manager",
      img: "/team5.png",
      details: `Mr. G. Balasubramanyam – General Manager | Project Execution & Manufacturing Operations

Senior project execution and manufacturing operations leader with over 35 years of experience across machine tools, textile machinery, and automotive manufacturing.

He has successfully led and contributed to multiple large-scale industrial projects with a cumulative value exceeding ₹5,000+ crore, delivering them with strong cost and time discipline.

His expertise lies in implementing Toyota Production System (TPS) methodologies to build efficient production control, supply chain systems, and vendor ecosystems.


KEY ACHIEVEMENTS
  • Played a key leadership role in establishing:
  • Textile machinery manufacturing plant - Kirloskar Toyota Textile Machinery Pvt. Ltd.
  • Pressure die casting plant
  • Machining plant for transmission components

• Core team member in setting up:
  • Global Diesel Engine Plant - Toyota Industries Engine India Pvt. Ltd.
  • Hybrid Engine Plant

• Established production control and logistics systems using TPS, ensuring smooth and efficient operations

• Delivered multiple projects on time and within budget, maintaining strict control over cost and timelines

• Led training of engineers overseas, ensuring capability building aligned with global manufacturing standards


CORE STRENGTHS
Project Execution & Delivery | Production Planning & Control | Toyota Production System (TPS) | Vendor Development | Supply Chain Systems | Manufacturing Operations`
    },
  ];

  return (
    <div className="w-full">
      {/* ================= ABOUT ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-start gap-8 md:gap-12 mt-16 md:mt-24">
        {/* <div className="flex-1 w-full">
          <img
            src="/aboutus.png"
            alt="About SJ Advaya Motors"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div> */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          <div className="flex-1 flex md:mt-[150px]">
            <img
              src="/about(8).png"
              alt="Electric Vehicles"
              className="rounded-xl shadow-lg w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4 text-left md:text-left">

            <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold w-fit">
              About SJ Advaya Motors
            </span>

            <h2 className="text-2xl md:text-4xl font-bold">
              Driving Excellence with Experience & Innovation
            </h2>

            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              SJAEM Electromotive Private Limited (SJAEM), headquartered in
              Bangalore, was incorporated in November 2023 with a vision to
              drive the future of sustainable mobility. The company engaed in
              the electric mobility space, focusing on products such as
              3-wheeler loaders and electric buses.
            </p>

            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
              SJAEM is led by experienced promoters and directors from leading
              automobile organizations, bringing deep expertise in large-scale
              project management and the establishment of manufacturing
              facilities with investments exceeding ₹30,000 crore. Their strong
              industry background enables the company to build robust,
              efficient, and scalable operations.
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
                  {selected.details.split(/(CORE STRENGTHS|KEY ACHIEVEMENTS)/).map((part, index) => {
                    if (part === "CORE STRENGTHS" || part === "KEY ACHIEVEMENTS") {
                      return (
                        <span key={index} className="font-bold block">
                          {part}
                        </span>
                      );
                    }
                    return <span key={index}>{part}</span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
