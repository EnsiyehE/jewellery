import { IonIcon } from "@ionic/react";
import {
  gitCompareOutline,
  heartOutline,
  bagHandleOutline,
} from "ionicons/icons";
import brand from "./images/artadokht.jpg";
import earringsImg from "./images/Earings.JPG";
import necklaceImg from "./images/Necklace.JPG";
import braceletsImg from "./images/Brace.JPG";
import ringsImg from "./images/Rings.jpg";
import bagsImg from "./images/Bags.jpg";
import ModalWindow from "./Modal";
import React, { useEffect, useState } from "react";
import Pay from "./Pay";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpenModal = (type) => {
    setModalTitle(type === "login" ? "Login" : "Registration");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
  };

  return (
    <header className="header-main">
      <NavBanner
        onLoginClick={() => handleOpenModal("login")}
        onRegisterClick={() => handleOpenModal("register")}
      />
      {isModalOpen && (
        <ModalWindow onClose={handleCloseModal} title={modalTitle}>
          {" "}
          {modalTitle === "Registration" ? (
            <>
              <div className="gender-selection">
                <label
                  className={`radio-label ${
                    selectedOption === "men" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="men"
                    checked={selectedOption === "men"}
                    onChange={handleOptionChange}
                  />
                  Men
                </label>
                <label
                  className={`radio-label ${
                    selectedOption === "women" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    value="women"
                    checked={selectedOption === "women"}
                    onChange={handleOptionChange}
                  />
                  Women
                </label>
              </div>

              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear from Us?
                </label>
                <select id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Sign Up now</button>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="btn btn--form">Login</button>
            </>
          )}
        </ModalWindow>
      )}
      <NavMeta />
      <NavWrapper />
    </header>
  );
}

function NavBanner({ onLoginClick, onRegisterClick }) {
  return (
    <div className="Banner">
      <p>
        Kontakt
        <a href="tel:415-201-6370" className="phone-link">
          415-201-6370
        </a>
      </p>
      <nav>
        <ul className="main-nav-list">
          <li onClick={onRegisterClick}>Register</li>
          <li onClick={onLoginClick}>Log in</li>
          <li>Stores</li>
        </ul>
      </nav>
    </div>
  );
}
function NavMeta() {
  const [showPayComponent, setShowPayComponent] = useState(false);

  const handleClick = () => {
    setShowPayComponent(!showPayComponent);
  };

  return (
    <div className="Meta">
      <div className="logo-container">
        <a href="/">
          <img src={brand} alt="BrandName" className="logo" />
        </a>
      </div>
      <div className="Meta-nav-list">
        <a>
          <IonIcon icon={gitCompareOutline} className="meta-icon" />
        </a>
        <a>
          <IonIcon icon={heartOutline} className="meta-icon" />
        </a>
        <a onClick={handleClick}>
          <IonIcon icon={bagHandleOutline} className="meta-icon" />
        </a>
      </div>
      {showPayComponent && <Pay />}
    </div>
  );
}
const menuItems = [
  {
    title: "Jewelery",
    items: [
      { name: "Earrings", image: earringsImg },
      { name: "Necklaces", image: necklaceImg },
      { name: "Bracelets", image: braceletsImg },
      { name: "Rings", image: ringsImg },
    ],
  },
  {
    title: "Watches",
    items: [{ name: "Analog Watches" }, { name: "Digital Watches" }],
  },
  {
    title: "Bags",
    items: [
      { name: "Women", image: bagsImg },
      { name: "Men" }, // No image for "Men"
    ],
  },
  {
    title: "Gifts",
    items: [{ name: "Men" }, { name: "Women" }],
  },
  {
    title: "Service and Help",
    items: [{ name: "Contact us" }, { name: "About Us" }],
  },
  {
    title: "Sale",
    items: [
      { name: "Sale Summer" },
      { name: "Sale Winter" },
      { name: "Sale Spring" },
    ],
  },
];

function NavWrapper() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [searchedWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchedWord.trim() !== "") {
      const results = menuItems
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            item.name.toLowerCase().includes(searchedWord.toLowerCase())
          ),
        }))
        .filter((category) => category.items.length > 0);

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchedWord]);

  const currentTitle = menuItems[currentTitleIndex].title;

  const handleSubMenuClick = (event, item) => {
    event.preventDefault(); // Prevents the default action (e.g., page refresh)
    alert(`You clicked on ${item}`);
  };

  return (
    <div className="wrapper">
      <nav>
        <ul className="nav-list-level1">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="nav--list">
              <a href="/">{menuItem.title}</a>
              <SubMenu
                items={menuItem.items}
                onItemClick={handleSubMenuClick}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder={`Search for ${currentTitle}`}
          value={searchedWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <div
          className={`submenu-search-results ${
            searchedWord.trim() === "" ? "empty" : ""
          }`}
        >
          {searchedWord.trim() && searchResults.length > 0 ? (
            <ul>
              {searchResults.map((category, index) => (
                <li key={index} className="subitem">
                  <ul className="nav-list-level3">
                    {category.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        {subItem.image && (
                          <img
                            src={subItem.image}
                            alt={subItem.name}
                            className="submenu-item-image"
                          />
                        )}
                        <a
                          href="/"
                          onClick={(e) => handleSubMenuClick(e, subItem.name)}
                        >
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            searchedWord.trim() && (
              <p className="submenu-message">No results found</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
function SubMenu({ items, onItemClick }) {
  return (
    <div className="submenu">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="submenu-item">
            <a href="/" onClick={(e) => onItemClick(e, item.name)}>
              {item.name}
            </a>
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="submenu-item-image"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
