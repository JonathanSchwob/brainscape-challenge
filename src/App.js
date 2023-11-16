import axios from "axios";
import { useEffect, useState } from "react";
import PhotoList from "./components/PhotoList";
import Header from "./components/Header";
import { useDrop } from "react-dnd";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get(
          // todo: add pagination and decrease limit
          "https://api.slingacademy.com/v1/sample-data/photos?limit=100"
        );
        // Update the state with the fetched data
        // todo: remove all logs
        console.log(response);
        setPhotos(response.data.photos);
      } catch (error) {
        // Handle error if the request fails
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [, drop] = useDrop({
    accept: "PHOTO",
    drop: (item) => {
      // Handle the drop event and add the selected photo to the state
      setSelectedPhotos([...selectedPhotos, item]);
    },
  });

  return (
    <div className="mx-auto p-4">
      <Header />
      <div className="flex">
        <PhotoList className="flex-1 mr-4" photos={photos} />
        {/* Album Generator */}
        <div
          ref={drop}
          className="flex-2 ml-4 container border border-dashed border-gray-500 p-4 bg-teal-400"
        >
          <h2 className="text-xl font-bold mb-4">Album Generator</h2>
          <div className="grid grid-cols-4 gap-4">
            {selectedPhotos.map((photo) => (
              <div key={photo.id} className="aspect-w-1 aspect-h-1 relative">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
