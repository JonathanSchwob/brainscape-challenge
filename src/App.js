import axios from "axios";
import { useEffect, useState } from "react";
import PhotoList from "./components/PhotoList";
import Header from "./components/Header";
// import StagingArea from "./components/StagingArea";

const App = () => {
  const [photos, setPhotos] = useState([]);

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

  return (
    <div className="container mx-auto p-4">
      <Header />
      <PhotoList photos={photos} />
      {/* <StagingArea /> */}
    </div>
  );
};

export default App;
