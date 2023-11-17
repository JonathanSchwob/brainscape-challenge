import React from "react";

const AlbumGenerator = ({ selectedPhotos, drop }) => {
  return (
    <div
      ref={drop}
      className="flex-2 ml-4 container border border-gray-500 p-4 bg-teal-400"
    >
      <h2 className="text-xl font-bold mb-4">Album Generator</h2>
      <div className="grid grid-cols-4 gap-4">
        {selectedPhotos.map((photo) => (
          <div key={photo.id} className="aspect-auto relative">
            <img
              src={photo.url}
              alt={photo.title}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
      <div className="flex-1 mt-4 mr-4">
        <ol className="list-decimal pl-4">
          {selectedPhotos.map((photo) => (
            <li key={photo.id}>{photo.title}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AlbumGenerator;
