import React from "react";

const GeneratorTextList = ({ selectedPhotos }) => {
  return (
    <div className="flex-1 mr-4">
      <ol className="list-decimal pl-4">
        {selectedPhotos.map((photo, index) => (
          <li key={index}>{photo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default GeneratorTextList;
