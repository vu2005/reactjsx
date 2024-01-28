import React from "react";
import logo from "../images/logo.jpg";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="logo-footer">
                    <img src={logo} alt=""></img>
                    <div className="logo-text">
                        <br />
                        <label>Contact:</label>
                        <br />
                        <th>Email: info@E-project.com.vn</th>
                        <br />
                        <th>Phone: 000-999-6666   </th>

                        <th> or  000-666-9999</th>
                    </div>
                </div>
                <div className="footer-container-center"></div>
                <div className="footer-text">
                    <label>Liên kết:</label>
                    <br />
                    <th>Fanpage: E-Project</th>
                    <br />

                    <th>Group: E-Project Vietnamese</th>
                    <br />

                    <th>Forum: E-Project Vietnamese</th>
                    <br />

                    <th>About us</th>
                    <div className="wrapper">
                        <div className="icon facebook">
                            <i className="fa-brands fa-facebook"></i>
                            <span className="tooltip">Facebook</span>
                        </div>
                        <div className="icon github">
                            <i className="fa-brands fa-github"></i>
                            <span className="tooltip">Github</span>
                        </div>
                        <div className="icon twitter">
                            <i className="fa-brands fa-twitter"></i>
                            <span className="tooltip">Twitter</span>
                        </div>
                        <div className="icon youtube">
                            <i className="fa-brands fa-youtube"></i>
                            <span className="tooltip">Youtube</span>
                        </div>
                    </div>
                </div>
                <div className="footer-gg-map">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.1127483277796!2d105.770377!3d21.0281742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1704475879765!5m2!1svi!2s"
                        width="550"
                        height="210"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="footer-input">
                        <label htmlFor="email">Your Email:</label>
                        <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email:"
                        ></input>

                        <button>
                            <a href="/">
                                <i className="fa-regular fa-paper-plane"></i>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
