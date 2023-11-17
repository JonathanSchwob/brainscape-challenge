import React from "react";
import GeneratorTextList from "./GeneratorTextList";
import GeneratorPhotoList from "./GeneratorPhotoList";

const AlbumGenerator = ({ selectedPhotos, removePhoto, drop, download }) => {
  return (
    <div
      ref={drop}
      className="ml-4 container border border-gray-500 p-4 bg-teal-400"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold mb-4">Album Generator</h2>
        {selectedPhotos.length > 0 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={download}
          >
            Click to download album
          </button>
        )}
      </div>
      <div className="flex flex-col lg:flex-row items-start">
        <GeneratorPhotoList
          selectedPhotos={selectedPhotos}
          removePhoto={removePhoto}
        />
        <GeneratorTextList
          selectedPhotos={selectedPhotos}
          removePhoto={removePhoto}
        />
      </div>
    </div>
  );
};

export default AlbumGenerator;
