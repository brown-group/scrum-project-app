/* The navbar component will be visible across all pages */

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fcfcfc", boxShadow: "rgba(228, 75, 76, 0.1) 0px 3px 10px" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={``}>
          <img src="./images/logo.png" alt="logo" style={{height: "2rem"}}/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{justifyContent: "flex-end"}} id="navbar">
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page1`}>
              Color Palette
            </NavLink>
          </div>
          <div className="navbar-nav">
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page3`}>
              Portfolio
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page4`}>
              Location
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page5`}>
              Weather
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
