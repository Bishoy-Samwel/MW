import { useState } from "react";

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0);
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadious: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const sliderStyles = {
    height: "100%",
    position: "relative"
  }
  return (
   <div style={sliderStyles}>
    <div style={slideStyles}>
    </div>
   </div>
  )
}