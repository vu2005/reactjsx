import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 3); 
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
                {filteredDetails.map((detail) => (
                    <div className="images-right">
                        <div className="parts-text">
                            <h5>{detail.title}</h5>
                            <div className="parts-up">
                                <span>Brand:</span>{" "}
                                <p style={{ color: "red" }}>{detail.p}</p>
                            </div>
                            <div className="item-text"> {detail.text} </div>
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
                                {detail.description}
                            </div>
                            <div className="parts-up">
                                <span>CPU Processor:</span>
                                <p>
                                    Apple M3 Pro chip with 12-core CPU, 16-core
                                    Neural Engine
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>RAM Memory:</span>
                                <p>18GB RAM</p>
                            </div>
                            <div className="parts-up">
                                <span>Display:</span>
                                <p>
                                    Liquid Retina XDR 16-inch display,
                                    Resolution 3456x2234
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Graphics Card: </span>
                                <p>18-core GPU</p>
                            </div>
                            <div className="parts-up">
                                <span>Dimensions:</span>
                                <p>
                                    Height: 1.68 cm; Width: 35.57 cm; Length:
                                    24.81 cm. Weight: 2.14 kg{" "}
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Storage:</span>
                                <p> 512GB SSD</p>
                            </div>
                            <div className="parts-up">
                                <span>Camera:</span>
                                <p> FaceTime HD 1080p Camera</p>
                            </div>
                        </div>
                        <div className="parts-images">
                            <img src={detail.image} alt=""></img>
                            <h5>{detail.h5}</h5>
                            <div className="price">
                                <p className="line">{detail.up}</p>
                                <p className="famous">{detail.down}</p>
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
            <MyFooter />
        </div>
    );
};

export default Computer0;
