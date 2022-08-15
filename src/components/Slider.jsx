import { useEffect, useState } from "react";
import { FiArrowLeftCircle } from "react-icons/fi";

export const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  // useEffect(() => {
  //   document.documentElement.style.setProperty('imageUrl',slides[currentIndex].url)
  // })

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
    setCurrentIndex(slideIndex - 1)
  }


  return (
    <>
      <div className="topIconsContainer" >
        {
          slides.map((slide) => (
            <div className="topIcons" 
            style={{backgroundImage: `url(${slide.thumbnailUrl})`}}
            onClick={() => goToSlide(slide.id)} key={slide.id}>
            </div>
          ))
        }
      </div>
      <div className="slider">
        <div className="arrow" onClick={goToPrevious}>&lt;</div>
        <div className="slides" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        <div className="arrow" onClick={goToNext}>&gt;</div>
      </div>
    </>
  )
}