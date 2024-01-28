import React from "react";
import "../css/ourpartners.css";

const Ourpartners = () => {
    return (
        <div>
            <div className="our-icon-text">
                <h2>OUR PARTNERS</h2>

                <div className="map">
                    <div className="icon-our">
                        <a href="https://www.google.com/">
                            <h2>Google</h2>
                        </a>
                        <a href="https://open.spotify.com/?">
                            <h2>
                                <i className="fa-brands fa-spotify"></i> Spotify
                            </h2>
                        </a>
                        <a href="https://www.linkedin.com/feed/">
                            <h2>
                                Linked <i className="fa-brands fa-linkedin"></i>
                            </h2>
                        </a>
                        <a href="https://www.apple.com/vn/">
                            <h2>
                                Apple <i className="fa-brands fa-apple"></i>
                            </h2>
                        </a>
                        <a href="https://www.samsung.com/vn/">
                            <h2>Samsung </h2>
                        </a>
                        <a href="https://www.dell.com/en-us">
                            <h2>
                                <i className="fa-solid fa-laptop"></i> Dell
                            </h2>
                        </a>
                    </div>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.1127483277796!2d105.770377!3d21.0281742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1704475879765!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <p>
                        Đ/c: 8A Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội
                        100000, Việt Nam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ourpartners;
