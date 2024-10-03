import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <p>
          This project was coded by{" "}
          <a href="https://github.com/finnocino" target="_blank">
            Rita Bern
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/finnocino/weather-project"
            target="_blank"
          >
            github
          </a>
          and{" "}
          <a href="https://main--my-weather-page.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}