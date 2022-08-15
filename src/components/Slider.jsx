import { useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

export const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    display: "flex",
    alignItems: "center",
    justifyItems: "spaceBetween"
  }

  const leftArrowStyles = {
    cursor: "pointer",
    color: "#999",
    border: "2px solid #999",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  }

  const rightArrowStyles = {
    cursor: "pointer",
    color: "#999",
    border: "2px solid #999",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
  }

  const topIconsContainerStyles = {
    width: "50px",
    height: "500px",
    overflowY: "auto",
    overflowX: "hidden",
    transform: "rotate(-90deg)",
    transformOrigin: "right top",
    transform:"rotate(-90deg) translateY(-100px)"
  }

  const topIconStyles = {
    transform: "rotate(90deg)",
    transformOrigin: "right top",
    margin: "10px",
    cursor: "pointer",
    fontSize: "20px"
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex-1)
  }


  return (
    <>
      <div style={topIconsContainerStyles} >
        {
          slides.map((slide) => (
            <div style={topIconStyles} onClick={() => goToSlide(slide.id)} key={slide.id}>
              {slide.id}
            </div>
          ))
        }
      </div>
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}><i className="arrow left"></i></div>
        <div style={slideStyles}></div>
        <div style={rightArrowStyles} onClick={goToNext}><i className="arrow right"></i></div>
      </div>
    </>
  )
}