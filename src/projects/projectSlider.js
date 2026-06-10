import { useState } from "react";
import projects from "./projectsData";       
import "../styles/projectMenu.css";
import arrow from "../assets/right-arrow.png";
import dot from "../assets/bouton-denregistrement.png"
 
function wrap(index, length) {
  return (index + length) % length;
}

const slidesArray = Object.values(projects);
 

export default function ProjectSlider() {
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection]       = useState("next"); 
 
  const slide = slidesArray[currentIndex];
 
  function handlePrev() {
    setDirection("prev");
    setCurrentIndex((prev) => wrap(prev - 1, slidesArray.length));
  }
 
  function handleNext() {
    setDirection("next");
    setCurrentIndex((prev) => wrap(prev + 1, slidesArray.length));
  }
 
  function handleDot(i) {
    setDirection(i > currentIndex ? "next" : "prev");
    setCurrentIndex(i);
  }
  return (
    <section className="section">

        <article className={`slider-card slider-card--${direction}`} key={currentIndex}>

 
  <div className="slider-image-wrapper">
    <img src={slide.image} alt={slide.title} className="slider-image" />
    <div className="slider-dots" role="tablist">
        {slidesArray.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={`slider-dot ${i === currentIndex ? "slider-dot--active" : ""}`}
            onClick={() => handleDot(i)}
          />
        ))}
      </div>
  </div>
  <div className="slider-content">
    <h2 className="slider-title">
      {slide.title}
      <div className="slider-live">
        {slide.live && (<>
          <p>Live</p><img src={dot} href={dot} alt="" />
          </>)}
      </div>
    </h2>
    
    <div className="slider-stack"></div>
    <div className="slider-description">{slide.description}</div>
    <div className="slider-buttons">
      <a href={slide.github} target="_blank" rel="noreferrer" className="slider-btn slider-btn--ghost">
        GitHub
      </a>
      {slide.demo && (
        <a href={slide.demo} target="_blank" rel="noreferrer" className="slider-btn slider-btn--primary">
          Online Website
        </a>
      )}
    </div>
  </div>

  <div className="slider-arrows">
    <button className="slider-arrow" onClick={handlePrev} aria-label="Previous project">
      <img src={arrow} alt="prev" style={{ width: 16, height: 16, filter: "invert(1)", transform: "rotate(180deg)" }} />
    </button>
    <button className="slider-arrow" onClick={handleNext} aria-label="Next project">
      <img src={arrow} alt="next" style={{ width: 16, height: 16, filter: "invert(1)" }} />
    </button>
  </div>

</article>
 
 
      

    </section>
  );
}