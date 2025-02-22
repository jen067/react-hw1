import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 50) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    };

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a className="nav-logo" href="#">
            <i className="ri-ancient-gate-line"></i>
            <span>Temple</span>
          </a>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#">Home</a>
              </li>
              <li className="nav-item">
                <a href="#">Location</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="nav-close">
              <i className="ri-close-large-line"></i>
            </button>
          </div>
          <button className="nav-show">
            <i className="ri-apps-2-line"></i>
          </button>
        </nav>
      </header>
      <main className="main">
        <section className="home ">
          <img
            src="/img/img-bg.svg"
            className="home-bg"
            alt="home background"
          />
          <div className="home-container container">
            <div className="home-data">
              <h1 className="home-title">Welcome To Temple</h1>
              <p className="home-paragraph">
                The temple is an attractive tourist place where you could visit
                and connect to the pure land of the environment, you will
                experience peace and harmony.
              </p>
              <a href="#" class="home-button">
                Explore Place
              </a>
            </div>
            <div className="home-images">
              <img src="/img/img-1.svg" alt="" className="home-img-1" />
              <img src="/img/img-2.svg" alt="" className="home-img-2" />
              <img src="/img/img-3.svg" alt="" className="home-img-3" />
              <img src="/img/img-4.svg" alt="" className="home-img-4" />
              <img src="/img/img-5.svg" alt="" className="home-img-5" />
              <img src="/img/img-6.svg" alt="" className="home-img-6" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
