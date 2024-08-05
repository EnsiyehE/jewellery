import Nav from "./Nav";
import CallToAction from "./CallToAction";
import { IonIcon } from "@ionic/react";
import Footer from "./footer";

import React, { useState, useEffect } from "react";

import {
  callOutline,
  calendarClearOutline,
  storefrontOutline,
  earSharp,
} from "ionicons/icons";

import artadokht from "./artadokht.json";

import bag from "./images/women's bag.jpg";

import mixingmetals from "./images/mixing metals.webp";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.webp";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.webp";
import picture1 from "./images/Rings.jpg";
import picture2 from "./images/minimal-summer-sale-50-percent-off-banner-template-design-vector.jpg";
function App() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <FeatureIn />
      <TopCategorySlide data={artadokht} />
      <BrandDiversity data={artadokht} />
      <FeaturedCombine />
      <CallToAction />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, text: "The biggest Sale", buttonClass: "btn", image: picture1 },
    { id: 2, text: "Explore now", buttonClass: "btn1", image: picture2 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000); // Change slide every 10 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div className="carousel-container-Hero">
      <div className="carousel-Hero">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {index === 0 && (
              <div className="text-box">
                <button className={slide.buttonClass}>SHOP NOW</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
}

function FeatureIn() {
  return (
    <div className="Feature_in">
      <div className="icon-text">
        <a className="icon">
          <IonIcon icon={callOutline} className={callOutline}></IonIcon>
        </a>
        <p>Contact Us</p>
      </div>

      <div className="icon-text">
        <a className="icon">
          <IonIcon
            icon={calendarClearOutline}
            className={calendarClearOutline}
          ></IonIcon>
        </a>
        <p>30 days back</p>
      </div>

      <div className="icon-text">
        <a className="icon">
          <IonIcon
            icon={storefrontOutline}
            className={storefrontOutline}
          ></IonIcon>
        </a>
        <p>Stores</p>
      </div>
    </div>
  );
}

function TopCategorySlide({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const { Rings, Bracelet, Necklace, Earrings } = data;
  const categories = [
    { name: "Rings", src: Rings[0]?.src },
    { name: "Bracelet", src: Bracelet[0]?.src },
    { name: "Necklace", src: Necklace[0]?.src },
    { name: "Earrings", src: Earrings[0]?.src },
  ].filter((category) => category.src); // Ensure only valid categories are included

  const getVisibleSlides = (index) => {
    const totalSlides = categories.length;
    const prevIndex = (index - 1 + totalSlides) % totalSlides;
    const nextIndex = (index + 1) % totalSlides;
    return [prevIndex, index, nextIndex];
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 10000); // Change slide every 10 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const visibleSlides = getVisibleSlides(slideIndex);

  return (
    <div className="slide_bar">
      <h2 className="secondary_title">Top Categories</h2>
      <div className="Carousal">
        {categories.map((category, index) => {
          const isVisible = visibleSlides.includes(index);
          return (
            <div
              key={index}
              className={`slide-wrapper ${isVisible ? "" : "slide-hidden"}`}
            >
              <img src={category.src} alt={category.name} className="slide" />
              <h6>{category.name}</h6>
            </div>
          );
        })}
        <div className="carousel-controls">
          <Buttons
            onPrev={handlePrev}
            onNext={handleNext}
            rightButtonClass="btn--right-adjusted" // Adjust button position if needed
          />
        </div>
      </div>
    </div>
  );
}

function Buttons({ onPrev, onNext, rightButtonClass }) {
  return (
    <>
      <button className="btn_carousal btn--left" onClick={onPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        className={`btn_carousal btn--right ${
          rightButtonClass ? rightButtonClass : ""
        }`}
        onClick={onNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
}

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function BrandDiversity({ data }) {
  // Flatten the data into an array of items
  const allItems = Object.keys(data).flatMap((category) =>
    data[category].map((item) => ({ ...item, category }))
  );

  const [items, setItems] = useState(shuffleArray(allItems));

  useEffect(() => {
    setItems(shuffleArray(allItems));
  }, [data]);

  const handleNext = () => {
    setItems((prevItems) => shuffleArray(prevItems));
  };

  // Handle shuffling when the "Previous" button is clicked
  const handlePrev = () => {
    setItems((prevItems) => shuffleArray(prevItems));
  };

  return (
    <div className="slide_bar brand">
      <h2 className="secondary_title_1">Our Brand Diversity</h2>
      <div className="logos">
        {items.map((item, index) => (
          <div key={`${item.category}-${index}`} className="slide-wrapper">
            <img src={item.src} alt={item.category} className="slide" />
          </div>
        ))}
      </div>
      <Buttons onPrev={handlePrev} onNext={handleNext} rightButtonClass="" />
    </div>
  );
}

function FeaturedCombine() {
  return (
    <div className="outer_Box">
      <div className="inner_box">
        <div className="content">
          <img className="material_mix" src={mixingmetals} alt="Gold&Silver" />
          <div className="wrapper_right_content">
            <div className="inner_content">
              <h2>Mixing Metals</h2>
              <button className="btn_material">Shop the Look</button>
            </div>
            <p className="content_text">
              Egal ob Gold, Silber oder im Mix: Kombiniere deine Lieblingsfarben
              zu einem einzigartigen Look!
            </p>
            <div className="wrapper_inner_content">
              <ul className="list_content">
                <li>
                  <a>
                    <img
                      src={image1}
                      alt="Gold jewlery"
                      className="material_images"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      img
                      src={image2}
                      alt="Gold jewlery"
                      className="material_images"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      img
                      src={image3}
                      alt="Gold jewlery"
                      className="material_images"
                    />
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src={image4}
                      alt="Gold jewlery"
                      className="material_images"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div class="dots">
              <button class="dot dot--fill"> &nbsp;</button>
              <button class="dot"> &nbsp;</button>
              <button class="dot"> &nbsp;</button>
              <button class="dot"> &nbsp;</button>
            </div>
            <button className="btn_content btn--left1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="btn-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="btn_content btn--right1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="btn-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
