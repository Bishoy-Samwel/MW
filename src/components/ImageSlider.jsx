import { useState } from "react";

export const ImageSlider = ({ slides }) => {
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
    fontSize: "45px",
    cursor: "pointer",
    color: "black",
  }

  const rightArrowStyles = {
    fontSize: "45px",
    cursor: "pointer",
    color: "black"
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
    setCurrentIndex(slideIndex)
  }

  const topIconsContainer = {
    display: "flex",
    justifyContent: "center"
  }

  const topIconStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px"
  }
  return (
    <>
      <div style={topIconsContainer} >
        {
          slides.map((slide, slideIndex) => (
            <div style={topIconStyles} onClick={() => goToSlide(slideIndex)} key={slideIndex}>
              {slide.title}
            </div>
          ))
        }
      </div>
      <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>O</div>
        <div style={slideStyles}></div>
        <div style={rightArrowStyles} onClick={goToNext}>O</div>
      </div>
    </>
  )
}