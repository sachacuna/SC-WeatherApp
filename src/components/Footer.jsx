import React from "react";

function Footer() {
  return (
    <div class="text-center p-5" style={{"background-color": "rgba(0,0,0,0.2)", "position": "fixed",
    "left": "0",
    "botom": "0",
    "width": "100%",
    "text-align": "center"}}>
      2021 Copyright:{" "}
      <a class="text.dark" href="https://google.com/" style={{"text-decoration":"none", "color": "#212529"}}>
        Sacha Cuña
      </a>
    </div>
  );
}

export default Footer;
