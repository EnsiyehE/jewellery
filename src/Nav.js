import { IonIcon } from "@ionic/react";
import {
  gitCompareOutline,
  heartOutline,
  bagHandleOutline,
} from "ionicons/icons";
import brand from "./images/brand.jpg";
import ModalWindow from "./Modal";
import React, { useEffect, useState } from "react";
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
        <a>
          <IonIcon icon={bagHandleOutline} className="meta-icon" />
        </a>
      </div>
    </div>
  );
}

function SubMenu({ title, items }) {
  return (
    <div className="submenu">
      <span className="submenu-title">{title}</span>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const menuItems = [
  { title: "Jewelery", items: ["Earrings", "Necklaces", "Bracelets"] },
  { title: "Watches", items: ["Analog Watches", "Digital Watches"] },
  { title: "Brands", items: ["Brand 1", "Brand 2", "Brand 3"] },
  { title: "Perimum", items: ["Item 1", "Item 2", "Item 3"] },
  { title: "Gifts", items: ["Item A", "Item B", "Item C"] },
  { title: "Engagement & Wedding", items: ["Item X", "Item Y", "Item Z"] },
  { title: "Service and Help", items: ["Help 1", "Help 2", "Help 3"] },
  { title: "Sale", items: ["Sale Item 1", "Sale Item 2", "Sale Item 3"] },
  { title: "2nd Chance", items: ["Chance 1", "Chance 2", "Chance 3"] },
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
      const results = menuItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchedWord.toLowerCase()) ||
          item.items.some((subItem) =>
            subItem.toLowerCase().includes(searchedWord.toLowerCase())
          )
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchedWord]);

  const currentTitle = menuItems[currentTitleIndex].title;

  return (
    <div className="wrapper">
      <nav>
        <ul className="nav-list-level1">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="nav--list">
              <a>{menuItem.title}</a>
              <SubMenu items={menuItem.items} />
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
        {searchResults.length > 0 ? (
          <div className="submenu">
            <ul className="nav-list-level2">
              {searchResults.map((item, index) => (
                <li key={index} className="subitem">
                  <ul className="nav-list-level3">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a>{subItem}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="submenu">
            <p className="submenu-message">No results found</p>
          </div>
        )}
      </div>
    </div>
  );
}
