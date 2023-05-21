import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />
      <div className="gmk"></div>
      <div className="divider">
        <div className="links">
          <Link to="/contact" className="link1">
            Go to Contact
          </Link>
          <Link to="/about" className="link2">
            Go to About
          </Link>
        </div>
        <div className="meo">
          <h1 className="sacentri hh"> React Router</h1>
          <p className="axsn">
            You can go to contact or about and see how the links are faked
          </p>
        </div>
      </div>
    </>
  );
}
