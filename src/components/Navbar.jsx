/* The navbar component will be visible across all pages */

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={``}>
          Index
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
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page1`}>
              Page 1
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page2`}>
              Page 2
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page3`}>
              Page 3
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page4`}>
              Page 4
            </NavLink>
          </div>
          <div className="navbar-nav">
            <NavLink className="nav-link" to={`/page5`}>
              Page 5
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
