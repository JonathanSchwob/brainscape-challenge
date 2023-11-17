import { FaRegTrashAlt } from "react-icons/fa";

const GeneratorTextList = ({ selectedPhotos, removePhoto }) => {
  return (
    <div className="flex-1 mr-4">
      <ol className="list-decimal text-xs sm:text-sm pl-4">
        {selectedPhotos.map((photo, index) => (
          <div className="flex items-center">
            <li key={index} className="pr-1">
              {photo.title}
            </li>
            <div className="cursor-pointer" onClick={() => removePhoto(index)}>
              <FaRegTrashAlt />
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default GeneratorTextList;
