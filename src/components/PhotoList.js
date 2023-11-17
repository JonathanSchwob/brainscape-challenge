import DraggablePhoto from "./DraggablePhoto";

const PhotoList = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo, index) => (
        <DraggablePhoto key={index} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
