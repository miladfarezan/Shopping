import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams } from "react-router";
import { SliderDataVideoCamera } from "./slider-data/slider-data-video-camera";
import { SliderDataLaptopMack } from "./slider-data/slider-data-laptop-mack.js";
import { SliderDataGalaxyG5 } from "./slider-data/slider-data-galaxy-g5";
import { SliderDataImageCameraEos4000 } from "./slider-data/slider-data-camera-eos4000";
import { SliderDataCharger } from "./slider-data/slider-data-charger";
import { SliderDataGalaxyG7 } from "./slider-data/slider-data-galaxy-g7";
import { SliderDataImageCameraEos850 } from "./slider-data/slider-data-image-camera-eos850";
import { SliderDataIphoneS6 } from "./slider-data/slider-data-iphone-s6";
import { SliderDataGalaxyS8 } from "./slider-data/slider-data-galaxy-s8";
import { SliderDataPocoF5 } from "./slider-data/slider-data-poco-f5";
import { SliderDataNokia3310 } from "./slider-data/slider-data-nokia-3310";
import { SliderDataGalaxyS9 } from "./slider-data/slider-data-galaxy-s9";
import { SliderDataPower10400m } from "./slider-data/slider-data-power-10400m";
import { SliderDataIphoneS4 } from "./slider-data/slider-data-iphone-s4";
import { SliderDataTabletIphone } from "./slider-data/slider-data-tablet-iphone";

import "./imageSlider.css";

const ImageSlider = ({ slides }) => {
  const params = useParams().id;

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
  if (Number(params) === 1) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className=" left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataVideoCamera.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 2) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataLaptopMack.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 3) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataGalaxyG5.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 4) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataImageCameraEos4000.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 5) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataCharger.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 6) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataGalaxyG7.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 7) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataImageCameraEos850.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 8) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataIphoneS6.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 9) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataGalaxyS8.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 10) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataPocoF5.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 11) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataNokia3310.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  } else if (Number(params) === 12) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataGalaxyS9.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
  if (Number(params) === 13) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataPower10400m.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
  if (Number(params) === 14) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataIphoneS4.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
  if (Number(params) === 15) {
    return (
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        {SliderDataTabletIphone.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
      </section>
    );
  }
};

export default ImageSlider;
