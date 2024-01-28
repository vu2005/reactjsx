import React from "react";
import MyFooter from "../components/inc/Footer";
import Compares from "../components/database/compares.json";
import "../components/css/compare.css";

const Compare = () => {
    const filteredCompares = Compares.filter((Compare) => Compare.id === 5);
    return (
        <div>
            <div className="compare-all">
                {filteredCompares.map((compare) => (
                    <div key={Compare.id} className="compares-all">
                        <div className="compare-h4">
                            <h4>{compare.h4}</h4>
                        </div>
                        <div className="compare-0">
                            <div className="compare-1">
                                <div className="compare-img1">
                                    <img src={compare.img} alt=""></img>
                                </div>
                                <div className="compare-price">
                                    <p>{compare.price}</p>
                                    <span>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half"></i>
                                    </span>
                                    <a href={compare.link}>
                                        <p>{compare.details}</p>
                                    </a>
                                </div>
                            </div>
                            <div className="icon-vs">
                                <p>Vs</p>
                            </div>
                            <div className="compare-2">
                                <div className="compare-img">
                                    <div className="compare-3">
                                        <div className="compare-4">
                                            <img
                                                src={compare.computer1}
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="compare-price">
                                            <h6>{compare.one}</h6>
                                            <a href={compare.q}>
                                                <p>
                                                  {compare.details}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="compare-img">
                                    <div className="compare-3">
                                        <div className="compare-4">
                                            <img
                                                src={compare.computer2}
                                                alt="/computer2"
                                            ></img>
                                        </div>
                                        <div className="compare-price">
                                            <h6>{compare.two}</h6>
                                            <a href={compare.w}>
                                                <p>
                                                  {compare.details}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="compare-img">
                                    <div className="compare-3">
                                        <div className="compare-4">
                                            <img
                                                src={compare.computer3}
                                                alt=""
                                            ></img>
                                        </div>
                                        <div className="compare-price">
                                            <h6>{compare.three}</h6>
                                            <a href={compare.e}>
                                                <p>
                                                  {compare.details}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="compare-img">
                                    <div className="compare-3">
                                        <div className="compare-5">
                                            <a href="/">
                                                <img
                                                    src={compare.icon}
                                                    alt=""
                                                ></img>
                                                <p>100% Gift</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <MyFooter />
        </div>
    );
};

export default Compare;
