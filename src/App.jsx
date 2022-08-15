import './App.css'
import { getAll } from "./api";
import { useEffect, useState } from 'react';
import { ImageSlider } from './components/ImageSlider';
import { Slider } from './components/Slider';
function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAll().then((data) => { setPhotos(data.slice(0, 40)); })
  }, [])

  const slides = [
    { url: "http://127.0.0.1:5173/assets/1.jpg", title: "Bird" },
    { url: "http://127.0.0.1:5173/assets/2.jpg", title: "Wall" },
    { url: "http://127.0.0.1:5173/assets/3.jpg", title: "Dog" },
    { url: "http://127.0.0.1:5173/assets/4.jpg", title: "Table" },
    { url: "http://127.0.0.1:5173/assets/5.jpg", title: "Mountain" }
  ]
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto"
  };

  if (photos.length > 0) {
    return <div className="App" style={containerStyles}>
      <Slider slides={photos} />
    </div>
  }
  // return (
  //   <div className="App" style={containerStyles}>
  //     {/* <ImageSlider slides={slides} /> */}

  //   </div>
  // )
}

export default App
