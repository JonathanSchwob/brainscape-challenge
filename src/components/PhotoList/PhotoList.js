import DraggablePhoto from "./DraggablePhoto";

const PhotoList = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pr-1 md:pr-2 lg:pr-4">
      {photos.map((photo, index) => (
        <DraggablePhoto key={index} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
