import React, { useState } from "react";
import "./Gallery.styles.css";

import { GALLERY_IMAGES } from "./Gallery.images";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Gallery = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="gallery-container">
        <section className="slider">
          <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
          <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
          {GALLERY_IMAGES.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt="joes farm" className="image" />
                )}
              </div>
            );
          })}
        </section>
        <section className="smaller-images-container">
          {GALLERY_IMAGES.map((slide, index) => {
            return (
              <>
                <img
                  src={slide.image}
                  alt="joes farm"
                  className={
                    index === current
                      ? "smaller-images active"
                      : "smaller-images"
                  }
                />
                <div className="overlay"></div>
              </>
            );
          })}
        </section>
        {/* <h3 className="">pictured above, images from papa joes farm</h3> */}
      </div>
    </>
  );
};

export default Gallery;
