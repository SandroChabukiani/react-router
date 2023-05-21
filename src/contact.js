import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="gmk"></div>
      <div className="divider">
        <div className="links">
          <Link to="/" className="link1">
            Go to Home
          </Link>
          <Link to="/about" className="link2">
            Go to About
          </Link>
        </div>
        <div className="meo">
          <h1 className="sacentri hh"> Contact</h1>
          <div className="sacentr">
            <div className="first">
              <h1>email: chabukianisandro0@gmail.com</h1>
              <h1>+995 599 242 243 </h1>
              <h1>Tbilisi, georgia</h1>
            </div>
            <div className="second">
              <h1>LinkdIn: Sandro Chabukiani</h1>
              <h1>Facebook: Sandro Chabukiani</h1>
              <h1>Instagram: Chabukiani Sandro</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
