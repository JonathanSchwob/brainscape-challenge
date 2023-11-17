import React from "react";
import GeneratorTextList from "./GeneratorTextList";
import GeneratorPhotoList from "./GeneratorPhotoList";

const AlbumGenerator = ({ selectedPhotos, removePhoto, drop, download }) => {
  const disableButton =
    selectedPhotos.length === 0 ? "opacity-50 cursor-not-allowed" : "";

  return (
    <div
      ref={drop}
      className="ml-4 container border border-gray-500 p-4 bg-teal-400"
    >
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-bold mb-4">Album Generator</h2>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold ml-4 py-1 px-2 rounded lg:py-2 lg:px-4 ${disableButton}`}
          onClick={download}
        >
          Download
        </button>
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
