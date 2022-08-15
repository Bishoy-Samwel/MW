import { getAll } from "./api";
import { useEffect, useState } from 'react';
import { ImageSlider } from './components/ImageSlider';
import { Slider } from './components/Slider';
function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAll().then((data) => { setPhotos(data.slice(0, 6)); })
  }, [])



  if (photos.length > 0) {
    return <div className="app">
      <Slider slides={photos} />
    </div>
  }
}

export default App
