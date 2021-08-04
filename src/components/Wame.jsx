import React from "react";
import LogoWa from "../img/wame.png";

function Wame() {
  return (
    <div>
      <a href="https://wa.me/12048020433">
        <img
          id="logoWa"
          src={LogoWa}
          width="50"
          height="50"
          className="d-inline-block align-bottom"
          alt="WhatsApp logo"
        />
      </a>
    </div>
  );
}

export default Wame;
