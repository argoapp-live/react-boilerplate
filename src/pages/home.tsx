import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Building next level shit, Use this boilerplate and GTFOL!!!!</p>
        <a
          className="App-link"
          href="https://spheron.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Don't forget Spheron though!!
        </a>
        <div className="button-con">
          <Link to="/about" className="button-53">
            Go to About page
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
