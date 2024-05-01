import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        `
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Digital Nepal
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link
                to={"/login"}
                className="btn btn-outline-success m-1"
                type="submit"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn btn-outline-danger m-1"
                type="submit"
              >
                Register
              </Link>
            </form>
          </div>
        </div>
        `
      </nav>
    </>
  );
};

export default Navbar;
