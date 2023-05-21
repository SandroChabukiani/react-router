import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <Header />
      <div className="gmk"></div>
      <div className="divider">
        <div className="links">
          <Link to="/" className="link1">
            Go to home
          </Link>
          <Link to="/contact" className="link2">
            Go to Contact
          </Link>
        </div>
        <div className="meo">
          <h1 className="sacentri hh">About</h1>
          <p className="axsn">
            This is the simplest React project. Made for React Router exercise.
          </p>
        </div>
      </div>
    </>
  );
}
