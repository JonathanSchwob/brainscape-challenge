import React from "react";
import { useDrag } from "react-dnd";

const DraggablePhoto = ({ photo }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "PHOTO",
    item: { id: photo.id, title: photo.title, url: photo.url },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`aspect-w-1 aspect-h-1 relative cursor-move ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <img
        src={photo.url}
        alt={photo.title}
        className="object-cover w-full h-full rounded-md"
      />
    </div>
  );
};

export default DraggablePhoto;
