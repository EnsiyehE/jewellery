import Nav from "./Nav";
import CallToAction from "./CallToAction";
import { IonIcon } from "@ionic/react";
import Footer from "./footer";

import React, { useState } from "react";

import {
  callOutline,
  calendarClearOutline,
  storefrontOutline,
  earSharp,
} from "ionicons/icons";

import artadokht from "./data/artadokht.json";

import rings from "./images/002.jpg";
import Braclet from "./images/BTOP.jpg";
import Earrings from "./images/ETOP.jpg";
// import Necklace from "./images/NeckTop.jpg";
import bag from "./images/women's bag.jpg";
import jewlery1 from "./images/jewelry1.png";
import jewlery2 from "./images/jewelry2.png";
import jewlery3 from "./images/jewlery3.webp";
import jewlery4 from "./images/jewlery4.jpg";
import mixingmetals from "./images/mixing metals.webp";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.webp";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.webp";

function App() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <FeatureIn />
      <TopCategorySlide data={artadokht} />
      <BrandDiversity />
      <FeaturedCombine />
      <CallToAction />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="container">
      <div className="item1">
        <div className="text-box">
          <h3>The biggest Sale </h3>
          <button className="btn">More info</button>
        </div>
      </div>
      <div className="item2">
        <div className="text-box-2">
          <h3>Explore now</h3>
          <button className="btn1">More info</button>
        </div>
      </div>
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
  const { Rings, Bracelet, Necklace, Earings } = data;
  console.log(data);

  return (
    <div className="slide_bar">
      <h2 className="secondary_title">Top Categories</h2>
      <div className="Carousal">
        <div>
          <img src={rings} alt="Rings" className="Men_watches" />
          <a href="/" className="Carousal_inner">
            <p>Rings</p>
            <h6>Disvover now </h6>
          </a>
        </div>

        <div>
          <img src={Braclet} alt="Womenbracelets" className="Women_bracelet" />
          <a href="/" className="Carousal_inner">
            <p>Bracelet</p>
            <h6>Discover now</h6>
          </a>
        </div>

        <div>
          <img src={Earrings} alt="Womenbracelets" className="Women_watches" />
          <a href="/" className="Carousal_inner">
            <p>Women's Earrings</p>
            <h6>Discover now</h6>
          </a>
        </div>

        {/* <div>
          <img
            src={Necklace}
            alt="Women's Necklace"
            className="Women_watches"
          />
          <a href="/" className="Carousal_inner">
            <p>Women's Necklace</p>
            <h6>Discover now</h6>
          </a>
        </div>

        <div>
          <img src={bag} alt="Womenbracelets" className="Women_watches" />
          <a href="/" className="Carousal_inner">
            <p>Women's Purses</p>
            <h6>Discover now</h6>
          </a>
        </div> */}
      </div>
      <Buttons />
    </div>
  );
}

function Buttons() {
  return (
    <>
      <button className="btn_carousal btn--left">
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

      <button className="btn_carousal btn--right">
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

function BrandDiversity() {
  return (
    <div className="slide_bar">
      <h2 className="secondary_title_1">Our Brand Diversity</h2>
      <div className="logos">
        <img src={jewlery1} alt="first brand" />
        <img src={jewlery2} alt="second brand" />
        <img src={jewlery3} alt="third brand" />
        <img src={jewlery4} alt="fourth brand" />
      </div>
      <Buttons />
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
