import React from "react";
import "../css/storenews.css";
import Computer01 from "../images/computer01.png";
import Keyboard01 from "../images/keyboard01.png";
import Mouse01 from "../images/mouse01.png";
import Mobiles01 from "../images/mobiles01.png";
// import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Storenews = () => {
    return (
        <div className="container-store-news">
            <div className="title-new">
                <h2>NEWS & VIDEOS</h2>
                <div className="store-news">
                    <div className="store-news-1">
                        <div className="store-news-01">
                            <a href="/computer">
                                <img src={Computer01} alt=""></img>{" "}
                                <h5>MacBook 16 inch Apple M3 Pro New</h5>{" "}
                            </a>

                            <p>
                                Discover a world of seamless performance and
                                sleek design with the MacBook, Apple's iconic
                                line of laptops. Renowned for their cutting-edge
                                technology and premium build, MacBooks have
                                redefined the standards for portable computing.
                                ...
                            </p>
                        </div>
                    </div>
                    <div className="store-news-02">
                        <div className="store-news-2">
                            <a href="/mobiles">
                                <img src={Mobiles01} alt=""></img>
                            </a>
                            <div className="store-right">
                                <h6>Iphone 16 ProMax New</h6>

                                <p>
                                    iPhone, Apple's line of smartphones, is not
                                    just a product but an icon of innovation and
                                    style in the world of mobile technology.
                                    Since its debut in 2007...
                                </p>
                            </div>
                        </div>
                        <div className="store-news-2">
                            {" "}
                            <a href="/mouse">
                                <img src={Mouse01} alt=""></img>
                            </a>
                            <div className="store-right">
                                <h6>Surface Arc Mouse New</h6>

                                <p>
                                    Slim, lightweight, ready to accompany the
                                    Microsoft Surface lineup. The Surface Arc
                                    Mouse is designed to provide comfort in
                                    mouse...
                                </p>
                            </div>
                        </div>
                        <div className="store-news-2">
                            <a href="/keyboard">
                                <img src={Keyboard01} alt=""></img>
                            </a>

                            <div className="store-right">
                                <h6>HyperOne Gen 2 New</h6>

                                <p>
                                    HyperOne Gen 2 supports dual connectivity
                                    modes: Bluetooth 5.1 and a 2.4 GHz receiver,
                                    with powerful signal transmission at a long
                                    distance...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="store-news-3">
                        <iframe
                            width="487"
                            height="400"
                            src="https://www.youtube.com/embed/FhKCgy91Lsk?si=d6gXGkVFG7lkbeRb"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Storenews;
