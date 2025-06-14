import React, { useEffect, useRef, useState } from "react";
import "./carousel.css";
import Whale1 from "../assets/Whale1.jpg";
import Shark from "../assets/shark33.jpg";
import Dolphin from "../assets/dolphin22.jpg";
import Octopus from "../assets/octopus.jpg";


const images = [
  { src: Whale1, title: "WHALE" },
  { src: Shark, title: "SHARK" },
  { src: Dolphin, title: "DOLPHIN" },
  { src: Octopus, title: "OCTOPUS" },
];

const description = `Their presence in the ocean is vital — they help maintain 
the balance of marine ecosystems, and their long migrations reflect the natural 
rhythm of the sea. Spotting a whale is a magical moment, reminding us how small 
we are in this beautiful, big world.`;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 7000;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, delay);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="carousel">
      <div className="list">
        {images.map((img, i) => (
          <div
            className={`item ${i === index ? "active" : ""}`}
            key={i}
            style={{ zIndex: i === index ? 1 : 0 }}
          >
            <img src={img.src} alt={img.title} />
            <div className="content">
              <div className="author">ANISH</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">BIG FISH</div>
              <div className="des">{description}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>LIKE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {images.map((img, i) => (
          <div className="item" key={i}>
            <img src={img.src} alt={img.title} />
            <div className="content">
              <div className="title">{img.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={prevSlide}>Back</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className="time"></div>
    </div>
  );
}
