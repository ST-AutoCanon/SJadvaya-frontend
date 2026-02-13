import { useState, useEffect } from "react";
import AboutUs from "./AboutUs";
import CoreValues from "./CoreValues";
import WhyGoElectric from "./whyGoElectric";
import ContactPage from "./ContactPage";
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Retrofits and New EV Vehicles",
    subtitle: "MAKE IN INDIA",
    image: "/banner11.png",
  },
  {
    id: 2,
    title: "Future of Electric Mobility",
    subtitle: "SUSTAINABLE DRIVING",
    image: "/banner13.png",
  },
  {
    id: 3,
    title: "Innovative EV Solutions",
    subtitle: "POWERING THE NEXT GENERATION",
    image: "/banner12.png",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  // Optional: Auto Slide (every 5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
        {/* SLIDES */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none"></div>

            {/* TEXT CONTENT */}
            <div className="absolute bottom-16 md:bottom-32 left-5 md:left-20 max-w-[90%] md:max-w-[60%]">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
                {slide.title}
              </h2>

              <p className="mt-3 md:mt-5 text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

      

        {/* DOTS */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION */}
      <AboutUs />
          <CoreValues />
          <WhyGoElectric />
          <ContactPage />
          
    </div>
  );
}
