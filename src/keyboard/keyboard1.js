import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
// import Dell from "../components/images/computer.png";
import Details from "../components/database/detail.json";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 6); // An empty dependency array means this effect will only run once after the initial render
    const [loader, setLoader] = useState(false);
    const downloadPDF = () => {
        const capture = document.querySelector(".container-all");

        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL("img/png");
            const doc = new jsPDF("p", "mm", "a4");
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight); // Sử dụng addImage thay vì addImageData
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
                                <span>Number of Keys:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>61 keys
                                </p>
                            </div>
                            <div className="item-text">
                                {" "}
                                {Detail.description}{" "}
                            </div>
                            <div className="parts-up">
                                <span>Switch Type:</span>
                                <p>Mechanical – OUTEMU (Blue)</p>
                            </div>
                            <div className="parts-up">
                                <span>Key Press Force:</span>
                                <p>60 g +/- 15 g</p>
                            </div>
                            <div className="parts-up">
                                <span>Color:</span>
                                <p>Black</p>
                            </div>
                            <div className="parts-up">
                                <span>Interface:</span>
                                <p>Type C – USB 2.0 (detachable)</p>
                            </div>
                            <div className="parts-up">
                                <span>Cable Length (m):</span>
                                <p>1.8</p>
                            </div>
                            <div className="parts-up">
                                <span>Layout:</span>
                                <p>US/HR/SRB/HU/NORDIC</p>
                            </div>
                            <div className="parts-up">
                                <span>Weight (g):</span>
                                <p>556 +/- 20g</p>
                            </div>
                            <div className="parts-up">
                                <span>Key Layout:</span>
                                <p>Compact</p>
                            </div>
                            <div className="parts-up">
                                <span>Lifespan:</span>
                                <p>Over 50 million key presses</p>
                            </div>
                            <div className="parts-up">
                                <span>Key Travel Distance: </span>
                                <p>4mm +/- 0.5mm</p>
                            </div>
                            <div className="parts-up">
                                <span>Backlight:</span>
                                <p>LED – rainbow effect</p>
                            </div>
                            <div className="parts-up">
                                <span>Material:</span>
                                <p>Plastic</p>
                            </div>
                            <div className="parts-up">
                                <span>Extra Legs:</span>
                                <p>Yes</p>
                            </div>
                            <div className="parts-up">
                                <span>Braided Cable:</span>
                                <p>Yes</p>
                            </div>
                            <div className="parts-up">
                                <span>Dimensions (mm): </span>
                                <p>291x101x39</p>
                            </div>
                            <div className="parts-up">
                                <span>Other Features:</span>
                                <p>Response time – 8 milliseconds</p>
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
                                    <p>HOME DELIVERY OR PICK UP AT STORE</p>
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
            <MyFooter />
        </div>
    );
};

export default Computer0;
