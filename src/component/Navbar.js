import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

var paths = window.location.pathname;
var regex = paths.slice(0, 3);

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Quick News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Top headlines</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/in">India</a></li>
                    <li><a className="dropdown-item" href="/us">United States</a></li>
                    <li><a className="dropdown-item" href="/">Japan</a></li>
                    <li><a className="dropdown-item" href="/">Sri Lanka</a></li>
                    <li><a className="dropdown-item" href="/">Israel</a></li>
                    <li><a className="dropdown-item" href="/">Australia</a></li>
                    <li><a className="dropdown-item" href="/">Pakistan</a></li>
                    <li><a className="dropdown-item" href="/">Canada</a></li>
                    <li><a className="dropdown-item" href="/">China</a></li>
                    <li><a className="dropdown-item" href="/">South Korea</a></li>
                    <li><a className="dropdown-item" href="/">Bangladesh</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Catogry
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to={regex + "/general"}>General</Link></li>
                    <li><Link className="dropdown-item" to={regex + "/business"}>Business</Link></li>
                    <li><Link className="dropdown-item" to={regex + "/entertainment"}>Entertainment</Link></li>
                    <li><Link className="dropdown-item" to={regex + "/helth"}>Helth</Link></li>
                    <li><Link className="dropdown-item" to={regex + "/science"}>Science</Link></li>
                    <li><Link className="dropdown-item" to={regex + "/sports"}>Sports</Link></li>
                    <li><Link className="dropdown-item" to={regex+ "/technology"}>Technology</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
