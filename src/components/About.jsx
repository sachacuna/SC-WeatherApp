import React from 'react';
import './About.css';
import { SiJavascript, SiBootstrap, SiReact } from "react-icons/si";


export default function About() {
  return (
    <div className="about_container">
        <span>
            This web was made by Sacha Cuña. 
            Using the followings technologies:
        </span>
             
            <SiJavascript/>
            <SiBootstrap/>
            <SiReact/>
        <p>
            Plese, feel free to reach me in <a href="https://www.linkedin.com/in/sacha-cuna/"  rel='noopener noreferrer'  target = '_blank' >Linkedin</a> and <a href="https://github.com/sachacuna"  rel='noopener noreferrer'  target = '_blank' >Github</a>. 
        </p>
        <p>
            If you want check my resume you can find it <a href="" rel='noopener noreferrer' target = '_blank'>here</a> . 
        </p>
    </div>
  );
}; 


