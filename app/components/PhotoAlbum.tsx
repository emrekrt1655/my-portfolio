import React, { useState } from "react";
import { X } from "lucide-react";
import { HobbyPhoto, hobbyPhotos } from "../constants/hobbyPhotos";

const PhotoAlbum = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<HobbyPhoto | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 gap-4">
        {hobbyPhotos.map((photo) => (
          <div
            key={photo.id}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group aspect-square"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-white font-bold text-lg drop-shadow-lg">
                {photo.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={32} />
          </button>

          <div className="flex flex-col items-center max-w-5xl w-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <h3 className="text-white text-2xl font-bold mt-4">
              {selectedPhoto.name}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoAlbum;
