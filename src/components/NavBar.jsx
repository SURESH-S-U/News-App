import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">News App</Link>

        {/* 1. ADDED THIS BUTTON FOR RESPONSIVENESS */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* This ID matches the data-bs-target above */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/NewsApp">Get News</Link>

            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;