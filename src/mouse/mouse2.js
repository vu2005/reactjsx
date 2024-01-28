import React from "react";
import Myfooter from "../components/inc/Footer";
import "../components/css/style.css";

import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 15); // Empty dependency array means this effect will only run once after the initial render
 const [loader, setLoader] = useState(false);
 const downloadPDF = () => {
     const capture = document.querySelector(".container-all");

     setLoader(true);
     html2canvas(capture).then((canvas) => {
         const imgData = canvas.toDataURL("img/png");
         const doc = new jsPDF("p", "mm", "a4");
         const componentWidth = doc.internal.pageSize.getWidth();
         const componentHeight = doc.internal.pageSize.getHeight();
         doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
         setLoader(false);
         doc.save("receipt.pdf");
     });
 };
    return (
        <div>
            <div className="container-all">
                {filteredDetails.map((Detail) => (
                    <div className="images-right">
                        <div className="parts-text">
                            <h5>{Detail.title}</h5>
                            <div className="parts-up">
                                <span>Brand:</span>{" "}
                                <p style={{ color: "red" }}>{Detail.p}</p>
                            </div>
                            <div className="item-text"> {Detail.text} </div>
                            <div className="parts-up">
                                <span>Condition:</span>
                                <p>New</p>
                            </div>
                            <div className="parts-up">
                                <span>Warranty:</span> <p>12 months</p>
                            </div>
                            <div className="parts-up">
                                <span>Color:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>Black
                                </p>
                            </div>
                            <div className="item-text">
                                {Detail.description}
                            </div>
                            <div className="parts-up">
                                <span>Connection:</span>
                                <p>Wireless</p>
                            </div>
                            <div className="parts-up">
                                <span>Material:</span>
                                <p>ABS + Rubber</p>
                            </div>
                            <div className="parts-up">
                                <span>Buttons:</span>
                                <p>
                                    8 buttons (Left, Right, Middle, Forward,
                                    Backward, DPI switch, Shoot button, Report
                                    speed switch)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Sensor: </span>
                                <p>
                                    Dual sensors, Optical sensors PAW3327 and
                                    LOD
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Dimensions:</span>
                                <p>122*67*42mm </p>
                            </div>
                            <div className="parts-up">
                                <span>Weight:</span>
                                <p>147 +/- 10g. </p>
                            </div>
                        </div>
                        <div className="parts-images">
                            <img src={Detail.image} alt=""></img>
                            <h5>{Detail.h5}</h5>
                            <div className="price">
                                <p className="line">{Detail.up}</p>
                                <p className="famous">{Detail.down}</p>
                            </div>
                            <div className="evaluate">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half"></i>
                            </div>
                            <div className="btn-hi">
                                <button className="btn-yellow">
                                    BUY NOW
                                    <br></br>
                                    <p>DELIVERY OR PICK UP AT THE STORE</p>
                                </button>
                                <button
                                    className="receipt-modal-download-button btn-red"
                                    onClick={downloadPDF}
                                    disabled={!(loader === false)}
                                >
                                    {loader ? (
                                        <p>Downloading...</p>
                                    ) : (
                                        <p>DOWNLOAD INFORMATION</p>
                                    )}
                                </button>
                            </div>
                            <div className="contactus">
                                <span>
                                    Contact to Buy <a href="/">1800 2087</a>{" "}
                                    (8:30-18:30)
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Myfooter />
        </div>
    );
};

export default Computer0;
