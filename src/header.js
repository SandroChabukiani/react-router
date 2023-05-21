import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="sacentri">
        <h1 className="satauri">Why I decided to do this</h1>
      </div>
      <div>
        <p className="headertxt">
          React is a single-page application, so sometimes we have to fake a
          link on the site when moving to the site. To do this requires
          knowledge of support libraries such as React Router. This project is
          proof of my knowledge. I also know multyStepInteraction and I have a
          project for that too. This means I can help the backend work
        </p>
        <span className="sacentri sp">this is not a portfolio!!!</span>
        <div className="sacentri">
          <p className="rtr">
            This is a simple project made using React Router
          </p>
        </div>
      </div>
    </div>
  );
}
