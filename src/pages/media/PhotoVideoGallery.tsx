// import React, { useState } from "react";

// type GalleryItem = {
//   type: "image" | "video";
//   src: string;
//   thumbnail?: string;
// };

// const galleryItems: GalleryItem[] = [
//   // {
//   //   type: "image",
//   //   src: "/media/news2.jpeg",
//   // },
//   // {
//   //   type: "image",
//   //   src: "/media/news1.jpeg",
//   // },
//   {
//     type: "video",
//     src: "/gallery/galleryVideo2.mp4",
//     thumbnail: "/gallery/gallerVideo2thumb.jpg",
//   },
//   {
//     type: "video",
//     src: "/gallery/galleryVideo1.mp4",
//     thumbnail: "/gallery/gallerVideo1thumb.jpg",
//   },
// ];

// const PhotoVideoGallery: React.FC = () => {
//   const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

//   return (
//     <>
//       <div className="px-4 py-6 sm:px-6 sm:py-8 space-y-6">
//         {/* HEADER */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h2 className="text-xl sm:text-2xl font-semibold text-neutral-800">
//             Photo & Video Gallery
//           </h2>
//           <p className="text-sm sm:text-base text-neutral-500 mt-1">
//             Explore moments captured from our recent events
//           </p>
//         </div>

//         {/* 🔹 RESPONSIVE GALLERY GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveItem(item)}
//               className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md bg-neutral-100"
//             >
//               {/* IMAGE */}
//               {item.type === "image" && (
//                 <img
//                   src={item.src}
//                   alt="Gallery"
//                   className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               )}

//               {/* VIDEO THUMB */}
//               {item.type === "video" && (
//                 <>
//                   <img
//                     src={item.thumbnail}
//                     alt="Video"
//                     className="w-full h-48 sm:h-56 lg:h-64 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-4xl">
//                     ▶
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 MODAL VIEW */}
//       {/* {activeItem && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">

//           <button
//             onClick={() => setActiveItem(null)}
//             className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl"
//           >
//             ✕
//           </button>

//           {activeItem.type === "image" && (
//             <img
//               src={activeItem.src}
//               className="max-w-full max-h-[90vh] object-contain rounded-lg"
//               alt="Expanded"
//             />
//           )}

//           {activeItem.type === "video" && (
//             <video
//               src={activeItem.src}
//               controls
//               autoPlay
//               className="w-full max-w-3xl max-h-[80vh] rounded-lg bg-black"
//             />
//           )}
//         </div>
//       )} */}

//       {activeItem && (
//         <div className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center px-4">
//           {/* Wrapper */}
//           <div className="relative w-full max-w-4xl flex justify-center mt-20">
//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setActiveItem(null)}
//               className="absolute -top-4 -right-4 bg-white text-black rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-gray-200 transition"
//             >
//               ✕
//             </button>

//             {/* IMAGE */}
//             {activeItem.type === "image" && (
//               <img
//                 src={activeItem.src}
//                 className="max-w-full max-h-[90vh] object-contain rounded-lg"
//                 alt="Expanded"
//               />
//             )}

//             {/* VIDEO */}
//             {activeItem.type === "video" && (
//               <video
//                 src={activeItem.src}
//                 controls
//                 autoPlay
//                 className="w-full max-w-3xl max-h-[80vh] rounded-lg bg-black"
//               />
//             )}
//           </div>
//         </div>
//       )}

//     </>
//   );
// };

// export default PhotoVideoGallery;

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
};

type EventType = {
  title: string;
  cover: string;
  media: MediaItem[];
};

const events: EventType[] = [
  {
    title: "Diwali Celebrations",
    cover: "/media/diwali1.png",
    media: [
      { type: "image", src: "/media/diwali1.png" },
      { type: "image", src: "/media/diwali2.png" },
      { type: "image", src: "/media/diwali3.png" },
      // {
      //   type: "video",
      //   src: "/gallery/galleryVideo2.mp4",
      //   thumbnail: "/gallery/gallerVideo2thumb.jpg",
      // },
      { type: "image", src: "/media/diwali4.png" },
    ],
  },
  {
    title: "Independence Day Celebration",
    cover: "/media/ind1.png",
    media: [
      { type: "image", src: "/media/ind1.png" },
      { type: "image", src: "/media/ind2.png" },
    ],
  },
  {
    title: "Team Building Activities",
    cover: "/media/team1.png",
    media: [
      { type: "image", src: "/media/team1.png" },
      { type: "image", src: "/media/team2.png" },
      { type: "image", src: "/media/team3.png" },
    ],
  },
];

const PhotoVideoGallery: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev === selectedEvent.media.length - 1 ? 0 : prev + 1,
    );
  };

  const goPrev = () => {
    if (!selectedEvent) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedEvent.media.length - 1 : prev - 1,
    );
  };

  // 🔹 EVENT GRID VIEW
  if (!selectedEvent) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8">
        <h2 className="text-xl font-semibold text-center mb-6">
          Photo & Video Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedEvent(event);
                setCurrentIndex(0);
              }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={event.cover}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {event.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const currentItem = selectedEvent.media[currentIndex];

  // 🔹 EVENT DETAIL VIEW (LIKE YOUR IMAGE)
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 bg-gray-100">
      {/* BACK BUTTON */}
      <button
        onClick={() => setSelectedEvent(null)}
        className="flex items-center gap-2 mb-4 text-sm text-neutral-600 hover:text-black"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* TITLE */}
      <h2 className="text-center text-lg font-semibold mb-4">
        {selectedEvent.title}
      </h2>

      {/* MAIN SLIDER */}
      <div className="relative max-w-5xl mx-auto">
        {currentItem.type === "image" ? (
          <img
            src={currentItem.src}
            className="w-full h-[250px] sm:h-[400px] object-contain rounded-lg"
          />
        ) : (
          <video
            src={currentItem.src}
            controls
            className="w-full h-[250px] sm:h-[400px] object-contain rounded-lg"
          />
        )}

        {/* ARROWS */}
        <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4 justify-center overflow-x-auto">
        {selectedEvent.media.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer rounded-md overflow-hidden ${
              currentIndex === index ? "ring-2 ring-purple-600" : ""
            }`}
          >
            <img
              src={item.type === "video" ? item.thumbnail : item.src}
              className="w-24 h-16 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoVideoGallery;