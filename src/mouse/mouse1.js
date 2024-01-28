import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 14); 
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
                                    <i class="fa-solid fa-check"></i>Light Pink
                                </p>
                            </div>
                            <div className="item-text">
                                {Detail.description}
                            </div>
                            <div className="parts-up">
                                <span>Connection:</span>
                                <p>
                                    Microsoft Windows 10 / 8.1 / 8 with
                                    Bluetooth 4.0.
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Battery Life:</span>
                                <p>Up to 6 months</p>
                            </div>
                            <div className="parts-up">
                                <span>Wireless Range:</span>
                                <p>feet in an office environment</p>
                            </div>
                            <div className="parts-up">
                                <span>Size:</span>
                                <p>5.17 x 2.17 x 0.56 inches.</p>
                            </div>
                            <div className="parts-up">
                                <span>Weight:</span>
                                <p>2.91 ounces (including the battery).</p>
                            </div>
                            <div className="parts-up">
                                <span>Wireless Frequency:</span>
                                <p>2.4 GHz</p>
                            </div>
                            <div className="parts-up">
                                <span>Description:</span>
                                <p>
                                    Thin, light, and easy to carry. Microsoft's
                                    Arc Mouse is designed to fit your hand — and
                                    can be flattened for easy storage in your
                                    bag. Connects via Bluetooth. Available in
                                    multiple color options to complement your
                                    style.
                                </p>
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
