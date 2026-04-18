import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can also send formData to your backend API
    alert("Thank you! Your message has been sent successfully.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

    const handleEmailClick = () => {
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const email = "info@sjaem.com";

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
    <section className="w-full bg-gray-100 py-8 md:py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - FORM */}
          <div>
            <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Ready to Go Electric?
            </h2>

            <p className="text-gray-600 mt-4 mb-8 max-w-lg">
              Explore our indigenous EV innovations with expert guidance every
              step of the way. Connect with us for a personalized consultation.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="firstName"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="lastName"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/banner2.png"
                alt="Electric Bus"
                className="w-full h-full object-contain md:object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:9986868788"
                      className="text-gray-800 font-medium"
                    >
                      9986868788
                    </a>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div
                    onClick={handleEmailClick}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                      <Mail size={18} />
                    </div>
                    <div>
                      {" "}
                      <p className="text-sm text-gray-500">Location</p>
                      <span className="font-medium group-hover:text-green-600 transition">
                        info@sjaem.com
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=36+1st+floor+11th+cross+1st+block+Rajajinagar+Bangalore+560010"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 font-medium hover:text-green-600 transition"
                    >
                      #36, 1st Floor, 11th Cross, 1st Block <br />
                      Rajajinagar, Bangalore - 560010
                    </a>
                  </div>
                </div>

                <div className="border-t pt-6 text-sm text-gray-600">
                  <p className="font-medium mb-2">Business Hours</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
