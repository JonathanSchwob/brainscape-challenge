import React from "react";

const GeneratorPhotoList = ({ selectedPhotos, removePhoto }) => {
  return (
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2 mr-5 pb-5">
      {selectedPhotos.map((photo, index) => (
        <div key={index} className="aspect-square relative hover:scale-110">
          <img
            onClick={() => removePhoto(index)}
            src={photo.url}
            alt={photo.title}
            className="object-cover w-full h-full cursor-pointer"
            loading="lazy"
            crossOrigin="anonymous"
          />
        </div>
      ))}
    </div>
  );
};

export default GeneratorPhotoList;
