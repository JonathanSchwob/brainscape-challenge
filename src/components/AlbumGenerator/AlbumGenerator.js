import React from "react";
import GeneratorTextList from "./GeneratorTextList";
import GeneratorPhotoList from "./GeneratorPhotoList";

const AlbumGenerator = ({ selectedPhotos, removePhoto, drop }) => {
  return (
    <div
      ref={drop}
      className="ml-4 container border border-gray-500 p-4 bg-teal-400"
    >
      <h2 className="text-xl font-bold mb-4">Album Generator</h2>
      <div className="flex flex-col sm:flex-row items-start">
        <GeneratorPhotoList
          selectedPhotos={selectedPhotos}
          removePhoto={removePhoto}
        />
        <GeneratorTextList selectedPhotos={selectedPhotos} />
      </div>
    </div>
  );
};

export default AlbumGenerator;
