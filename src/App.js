import axios from "axios";
import { useEffect, useState } from "react";
import PhotoList from "./components/PhotoList";
import Header from "./components/Header";
import { useDrop } from "react-dnd";
import AlbumGenerator from "./components/AlbumGenerator";

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

  const removeSelectedPhoto = (index) => {
    const updatedSelectedPhotos = [...selectedPhotos];
    updatedSelectedPhotos.splice(index, 1);
    setSelectedPhotos(updatedSelectedPhotos);
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="flex">
        <PhotoList photos={photos} />
        <AlbumGenerator
          removePhoto={removeSelectedPhoto}
          selectedPhotos={selectedPhotos}
          drop={drop}
        />
      </div>
    </div>
  );
};

export default App;
