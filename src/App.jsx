import './App.css'
import { getAll } from "./api";
import { useEffect, useState } from 'react';
import { ImageSlider } from './components/ImageSlider';
function App() {
  const [photos, setPhotos] = useState([]);

  useEffect( () => {
    getAll().then((data) => {console.log(data);})
  },[])

  const slides =  [
    {url: "http://127.0.0.1:5173/assets/1.jpg"},
    {url: "http://127.0.0.1:5173/assets/2.jpg"},
    {url: "http://127.0.0.1:5173/assets/3.jpg"},
    {url: "http://127.0.0.1:5173/assets/4.jpg"},
    {url: "http://127.0.0.1:5173/assets/5.jpg"}
  ]

  return (
    <div className="App" style ={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  )
}

export default App
