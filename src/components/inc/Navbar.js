import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../css/navbar.css";

function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link to="./" className="navbar-brand">
                    <img src={logo} alt="" width="100" height="60" />
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
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link active">
                                Products{" "}
                                <i className="fa-solid fa-caret-down"></i>
                            </Link>
                            <div className="nav-card">
                                <ul>
                                    <li>
                                        <a href="/" className="nav">
                                            <Link
                                                to="/mouse"
                                                className="nav-link active"
                                            >
                                                Mouse{" "}
                                                <i className="fa-solid fa-computer-mouse"></i>
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="nav">
                                            <Link
                                                to="/keyboard"
                                                className="nav-link active"
                                            >
                                                Keyboard{" "}
                                                <i className="fa-regular fa-keyboard"></i>
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="nav">
                                            <Link
                                                to="/computer"
                                                className="nav-link active"
                                            >
                                                Computer{" "}
                                                <i className="fa-solid fa-computer"></i>
                                            </Link>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" className="nav">
                                            <Link
                                                to="/mobiles"
                                                className="nav-link active"
                                            >
                                                Mobiles{" "}
                                                <i class="fa-solid fa-mobile-screen-button"></i>
                                            </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/map" className="nav-link active">
                                Map
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="search">
                    <div className="form-input">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            id="filter"
                            placeholder="Tìm sản phẩm..."
                        />
                    </div>
                </div>
                <div className="icon-bar">
                    <span>|</span>
                    <a href="/">
                        <i className="fa-regular fa-user"></i>
                    </a>
                    <span>|</span>
                    <a href="https://react.dev/">
                        <i className="fa-brands fa-react"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
