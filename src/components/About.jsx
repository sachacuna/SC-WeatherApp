import React from "react";
import "./About.css";
import {SiReact} from "react-icons/si"
import {SiBootstrap} from "react-icons/si"
import {SiCss3} from "react-icons/si"
import {SiHtml5} from "react-icons/si"



export default function About() {
  return (
    <div className="about_container">
      <div className="card" >
        <div className="card-body" >
          <p className="card-tittle">This web was made by Sacha Cuña</p>
          <p> Using the followings technologies:
          <div>
              <SiReact/>
              <SiBootstrap/>
              <SiCss3/>
              <SiHtml5/>
          </div>
          </p>
          <p>
            Plese, feel free to reach me in{" "}
            <a
              href="https://www.linkedin.com/in/sacha-cuna/"
              rel="noopener noreferrer"
              target="_blank"
              >
              Linkedin
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/sachacuna"
              rel="noopener noreferrer"
              target="_blank"
              >
              Github
            </a>
          </p>
                <p>
            The GitHub repository is available{" "}
            <a href="https://github.com/sachacuna/SC-WeatherApp" rel="noopener noreferrer" target="_blank">
              here
            </a>
                </p>
          <p>
            If you want check my resume you can find it{" "}
            <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              here
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
