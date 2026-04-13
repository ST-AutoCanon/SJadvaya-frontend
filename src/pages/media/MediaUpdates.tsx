// import React, { useState } from "react";

// const MediaUpdates: React.FC = () => {
//   const [activeImage, setActiveImage] = useState<string | null>(null);

//   const images = ["/media/news1.jpeg", "/media/news2.jpeg"];

//   return (
//     <>
//       <div className="px-4 py-6 sm:px-6 sm:py-8 space-y-6">
//         <h2 className="text-lg sm:text-xl font-semibold text-neutral-800 text-center sm:text-left">
//           Watch Our Latest Media Cuts & Links
//         </h2>

//         {/* 🔹 MAIN CONTENT */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* LEFT: VIDEO */}
//           <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
//             <video
//               src="/gallery/galleryVideo2.mp4"
//               controls
//               className="w-full h-56 sm:h-72 lg:h-[380px] object-cover"
//             />

//             {/* VIDEO INFO */}
//             <div className="p-4 sm:p-5">
//               <div className="flex justify-between text-xs sm:text-sm text-neutral-500 mb-2">
//                 <span>News • Video</span>
//                 <span>January 06, 2026</span>
//               </div>

//               <h3 className="text-base sm:text-lg font-bold text-neutral-800">
//                 New Initiative Launched
//               </h3>

//               <p className="text-sm sm:text-base text-neutral-600 mt-2">
//                 This video highlights the official announcement of our new
//                 initiative and the impact it brings to the community.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT: IMAGES */}
//           <div className="space-y-4">
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => setActiveImage(img)}
//                 className="cursor-pointer bg-white rounded-lg shadow-md p-2 hover:shadow-lg transition"
//               >
//                 <img
//                   src={img}
//                   alt="News"
//                   className="w-full h-40 sm:h-48 lg:h-36 xl:h-44 object-cover rounded-md"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* 🔹 IMAGE MODAL */}
//       {/* {activeImage && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
//           <button
//             onClick={() => setActiveImage(null)}
//             className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl"
//           >
//             ✕
//           </button>

//           <img
//             src={activeImage}
//             className="max-w-full max-h-[90vh] rounded-lg object-contain"
//             alt="Expanded"
//           />
//         </div>
//       )} */}

//       {activeImage && (
//         <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4">
//           {/* Wrapper */}
//           <div className="relative max-w-full max-h-[90vh]">
//             {/* Close Button */}
//             <button
//               onClick={() => setActiveImage(null)}
//               className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow-lg"
//             >
//               ✕
//             </button>

//             {/* Image */}
//             <img
//               src={activeImage}
//               className="max-w-full max-h-[90vh] rounded-lg object-contain"
//               alt="Expanded"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MediaUpdates;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const MediaUpdates: React.FC = () => {
  const videos = [
    {
      src: "/gallery/galleryVideo2.mp4",
      title: "Our First launch of 2026",
      thumbnail: "/media/team1.png",
    },
    {
      src: "/gallery/galleryVideo2.mp4",
      title: "Second Video",
      thumbnail: "/media/team1.png",
    },
    {
      src: "/gallery/galleryVideo2.mp4",
      title: "Third Video",
      thumbnail: "/media/team2.png",
    },
    {
      src: "/gallery/galleryVideo2.mp4",
      title: "Fourth Video",
      thumbnail: "/media/team1.png",
    },
    {
      src: "/gallery/galleryVideo2.mp4",
      title: "Fifth Video",
      thumbnail: "/media/team1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = videos[currentIndex];

  // 🔹 Arrow controls
  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      {/* 🔹 TITLE */}
      <h2 className="text-center text-lg sm:text-xl font-semibold text-neutral-800 mb-6">
        {currentVideo.title}
      </h2>

      {/* 🔹 MAIN VIDEO */}
      <div className="relative max-w-5xl mx-auto">
        <video
          key={currentVideo.src}
          src={currentVideo.src}
          poster={currentVideo.thumbnail} // ✅ shows image before play
          controls
          autoPlay
          className="w-full h-[220px] sm:h-[350px] md:h-[420px] object-cover rounded-lg shadow-md"
        />

        {/* ◀ LEFT */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>

        {/* ▶ RIGHT */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* 🔹 THUMBNAILS (IMAGE + PLAY ICON) */}
      <div className="mt-6 px-16 max-w-6xl mx-auto overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative min-w-[160px] sm:min-w-[200px] rounded-md shadow cursor-pointer transition ${
                currentIndex === index
                  ? "ring-2 ring-[#3D268C]"
                  : "hover:scale-105"
              }`}
            >
              {/* Thumbnail Image */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-24 sm:h-28 object-cover rounded-md"
              />

              {/* ▶ Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-md">
                <Play className="text-white opacity-90" size={28} />
              </div>

              {/* Title */}
              <p className="text-xs p-2 text-center text-neutral-600 truncate">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaUpdates;