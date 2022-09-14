import companyLogo from "../images/logo.gif";

import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar navbar-light" data-spy="affix" data-offset-top="197">
        <div className="container-fluid">
          <img src={companyLogo} alt="logo" height={100} />

          <Link className="navbar-brand" to="/">
            <h3>E-Waste Management</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <button type="button" class="btn btn-success" >
                    <h6>Home</h6>
                  </button>
                </Link>
              </li>

              {/*               
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                <button type="button" class="btn btn-success"><h6>About Us</h6></button>
                </a>
              </li> */}

              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button type="button" class="btn btn-success">
                    <h6>About Us</h6>
                  </button>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/process">
                      process
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="team">
                      Team
                    </Link>
                  </li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button type="button" class="btn btn-success">
                    <h6>Donar Section</h6>
                  </button>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/donarlogin">
                      Login
                    </Link>
                  </li>
               
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </li>



              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/admin">
                  <button type="button" class="btn btn-success">
                    <h6>Admin</h6>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  <button type="button" class="btn btn-success">
                    <h6>Contact Us</h6>
                  </button>
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
