import { useState, useEffect } from "react";
import About from "./About";
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
    image: "/banner1.png",
  },
  {
    id: 2,
    title: "Future of Electric Mobility",
    subtitle: "SUSTAINABLE DRIVING",
    image: "/banner12.png",
  },
  {
    id: 3,
    title: "Innovative EV Solutions",
    subtitle: "POWERING THE NEXT GENERATION",
    image: "/banner3.png",
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
      

            <div className="absolute bottom-4 md:bottom-2 left-6 md:left-10">
              <div className="bg-black/50 px-4 py-3 md:px-6 md:py-4 rounded-md inline-block">
                {/* TITLE */}
                <h2 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                  {slide.title}
                </h2>

                {/* SUBTITLE */}
                <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {slide.subtitle}
                </p>
              </div>
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
      <About />
      <CoreValues />
      <WhyGoElectric />
      <ContactPage />
    </div>
  );
}
