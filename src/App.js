import axios from "axios";
import JSZip from "jszip";
import { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import PhotoList from "./components/PhotoList/PhotoList";
import Header from "./components/Header";
import AlbumGenerator from "./components/AlbumGenerator/AlbumGenerator";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [totalAPIPhotos, setTotalAPIPhotos] = useState(null);
  const [offset, setOffset] = useState(0);

  const fetchData = async () => {
    try {
      // Make a GET request to the API endpoint
      const response = await axios.get(
        `https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=25`
      );
      // Get total number of API photos to know when to set end of photos message.
      if (offset === 0) {
        setTotalAPIPhotos(response.data.total_photos);
      }
      // Append the state with the fetched photos
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.photos]);
      setOffset((prevOffset) => prevOffset + 25);
    } catch (error) {
      // Handle error if the request fails
      console.error(error);
    }
  };

  useEffect(() => {
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

  const downloadPhotosAsZip = async () => {
    if (selectedPhotos.length === 0) return;
    const zip = new JSZip();

    // Create a folder in the zip file
    const folder = zip.folder("photos");

    // Fetch and add each selected photo to the zip file
    const fetchAndAddToZip = async (photo, index) => {
      try {
        const response = await axios.get(photo.url, {
          responseType: "arraybuffer",
        });
        const filename = `photo_${index + 1}.jpg`;
        folder.file(filename, response.data);
      } catch (error) {
        console.error(`Error fetching photo ${index + 1}:`, error);
      }
    };

    // Use Promise.all to fetch all photos concurrently
    await Promise.all(selectedPhotos.map(fetchAndAddToZip));

    // Generate the zip file
    const content = await zip.generateAsync({ type: "blob" });

    // Create a download link and trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(content);
    downloadLink.download = "photos.zip";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="mx-auto p-4">
      <Header />
      <div className="flex">
        <InfiniteScroll
          dataLength={photos.length}
          next={fetchData}
          hasMore={offset === 0 || offset < totalAPIPhotos}
          loader={<p className="animate-pulse">Loading...</p>}
          endMessage={<p>No more photos.</p>}
        >
          <PhotoList photos={photos} />
        </InfiniteScroll>
        <AlbumGenerator
          removePhoto={removeSelectedPhoto}
          selectedPhotos={selectedPhotos}
          drop={drop}
          download={downloadPhotosAsZip}
        />
      </div>
    </div>
  );
};

export default App;
