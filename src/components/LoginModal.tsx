import React, { useState, useEffect } from "react";
import loginBg from "/banner13.png";
import { Eye, EyeOff } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToHRMSLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSwitchToHRMSLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgCode, setOrgCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", { email, password, orgCode });
    onClose(); // just close modal (UI only)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 ">
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2 h-52 sm:h-64 md:h-auto shrink-0">
          <img
            src={loginBg}
            alt="Login Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col justify-center h-full p-8 text-white">
            <h3 className="text-3xl font-bold mb-3">Welcome Back</h3>
            <p className="text-white/90 text-sm">
              Sign in to continue your journey with Crestline Tech.
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-[#1C1C28]/60">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Org Code */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80 font-medium">
                Organization Code
              </label>

              <select
                value={orgCode}
                onChange={(e) => setOrgCode(e.target.value)}
                className="w-full rounded-xl bg-white/20 text-white px-4 py-2.5 border border-white/20 focus:ring-2 focus:ring-[#3A8DFF]"
              >
                <option value="" className="text-black">
                  Select Organization
                </option>
                <option value="ORG001" className="text-black">
                  ORG001
                </option>
                <option value="ORG002" className="text-black">
                  ORG002
                </option>
              </select>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full rounded-xl bg-white/20 text-white px-4 py-2.5 border border-white/20 focus:ring-2 focus:ring-[#3A8DFF]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/80 font-medium">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl bg-white/20 text-white px-4 py-2.5 pr-12 border border-white/20 focus:ring-2 focus:ring-[#3A8DFF]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0092B8] via-[#3A8DFF] to-[#9810FA]"
            >
              Login
            </button>
          </form>

          {/* HRMS Switch */}
          <button
            onClick={onSwitchToHRMSLogin}
            className="text-[#7AA0FF] hover:underline text-center mt-6 font-medium"
          >
            Login with HRMS
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-[999] text-white text-4xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
