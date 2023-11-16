const PhotoList = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <div key={photo.id} className="aspect-w-1 aspect-h-1 relative">
          <img
            src={photo.url}
            alt={photo.title}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
