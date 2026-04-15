// import { Mail, Phone, MapPin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-[#0f172a] via-[#0b1a2b] to-[#0f172a] text-gray-300">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center ">
//               <img src="/logo2.png" alt="MyBrand Logo" className="h-16 w-38" />
//             </div>

//             <p className="text-sm text-gray-400 mb-6 leading-relaxed">
//               Leading the transition to sustainable transportation through
//               innovative EV retrofitting and indigenous electric vehicle
//               development.
//             </p>

//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-3">
//                 <Mail size={16} className="text-green-400" />
//                 <span>info@sjadvaya.com</span>
//               </div>

//               <div className="flex items-center gap-3">
//                 <Phone size={16} className="text-green-400" />
//                 <span>+1 (555) 123-4567</span>
//               </div>

//               <div className="flex items-start gap-3">
//                 <MapPin size={16} className="text-green-400 mt-1" />
//                 <span>123 Innovation Drive, Green City 10001</span>
//               </div>
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-white font-semibold mb-5">Services</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 EV Retrofit
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Indigenous EVs
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Fleet Conversion
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Maintenance & Support
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Consultation
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-white font-semibold mb-5">Company</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 About Us
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Our Team
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Careers
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 News & Blog
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Contact
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-white font-semibold mb-5">Resources</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 FAQ
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Case Studies
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Documentation
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Technical Specs
//               </li>
//               <li className="hover:text-green-400 cursor-pointer transition">
//                 Sustainability Report
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-white/10">
//         <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
//           {/* <p>© 2026 SJ Advaya. All rights reserved.</p> */}
//           <p>
//             © 2026 SJ Advaya. All rights reserved.{" "}
//             <span className="ml-2">
//               Developed by{" "}
//               <a
//                 href="https://sukalpatechsolutions.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-400 font-medium hover:underline"
//               >
//                 Sukalpa Tech Solutions
//               </a>
//             </span>
//           </p>

//           <div className="flex gap-6">
//             <span className="hover:text-green-400 cursor-pointer transition">
//               Privacy Policy
//             </span>
//             <span className="hover:text-green-400 cursor-pointer transition">
//               Terms of Service
//             </span>
//             <span className="hover:text-green-400 cursor-pointer transition">
//               Cookie Policy
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { Mail, Phone, MapPin, MessageCircleDashed } from "lucide-react";
import {
  SiWhatsapp,
} from "react-icons/si";
export default function Footer() {

  const handleEmailClick = () => {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const email = "info@sjadvaya.com";

  if (isMobile) {
    window.location.href = `mailto:${email}`;
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
  };
  
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#0b1a2b] to-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info - Always Visible */}
          <div>
            <div className="flex items-center">
              <img src="/logo.png" alt="MyBrand Logo" className="h-16 w-28" />
            </div>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Leading the transition to sustainable transportation through
              innovative EV retrofitting and indigenous electric vehicle
              development.
            </p>

            <div className="space-y-3 text-sm">
              {/* <div className="flex items-center gap-3">
                <Mail size={16} className="text-green-400" />
              
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@sjadvaya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-green-600 transition"
                >
                  info@sjadvaya.com
                </a>
              </div> */}

              
              <div className="space-y-3 text-sm">
  <div
    onClick={handleEmailClick}
    className="flex items-center gap-3 cursor-pointer group"
  >
    <Mail size={16} className="text-green-400" />
    <span className="font-medium group-hover:text-green-600 transition">
      info@sjadvaya.com
    </span>
  </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-green-400" />
                <a
                  href="tel:9986868788"
                  className=" font-medium hover:text-green-400 cursor-pointer transition"
                >
                  9986868788
                </a>
              </div>
              {/* <div className="flex items-center gap-3">
                <SiWhatsapp size={16} className="text-green-400" />
                <a
                  href="https://wa.me/919986868788"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-green-600 transition"
                >
                  9986868788
                </a>
              </div> */}

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-green-400 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=36+1st+floor+11th+cross+1st+block+Rajajinagar+Bangalore+560010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-medium hover:text-green-400 cursor-pointer transition"
                >
                  #36, 1st Floor, 11th Cross, 1st Block <br />
                  Rajajinagar, Bangalore - 560010
                </a>
              </div>
            </div>
          </div>

          {/* Services - Hidden on Mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">
                EV Retrofit
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Indigenous EVs
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Fleet Conversion
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Maintenance & Support
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Consultation
              </li>
            </ul>
          </div>

          {/* Company - Hidden on Mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Our Team
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                News & Blog
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Resources - Hidden on Mobile */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold mb-5">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-400 cursor-pointer transition">
                FAQ
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Case Studies
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Documentation
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Technical Specs
              </li>
              <li className="hover:text-green-400 cursor-pointer transition">
                Sustainability Report
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>
            © 2026 SJ Advaya. All rights reserved.
            <span className="ml-2">
              Developed by{" "}
              <a
                href="https://sukalpatechsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-medium hover:underline"
              >
                Sukalpa Tech Solutions
              </a>
            </span>
          </p>

          <div className="flex gap-6">
            <span className="hover:text-green-400 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-green-400 cursor-pointer transition">
              Terms of Service
            </span>
            <span className="hover:text-green-400 cursor-pointer transition">
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

