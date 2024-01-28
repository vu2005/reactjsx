import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 10);
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
                    <div className="images-right" key={Detail.id}>
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
                                <span>CPU Speed: </span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i> 3.36 GHz,
                                    2.8GHz, 2GHz
                                </p>
                            </div>
                            <div className="item-text">
                                {Detail.description}
                            </div>
                            <div className="parts-up">
                                <span>CPU Type: </span>
                                <p>8 cores</p>
                            </div>
                            <div className="parts-up">
                                <span>Size (Main Display):</span>
                                <p>
                                    192.1mm (7.6" full rectangle) / 188.6mm
                                    (7.4" rounded corners)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Resolution:</span>
                                <p>2176 x 1812(QXGA+)</p>
                            </div>
                            <div className="parts-up">
                                <span>Camera: </span>
                                <p>
                                    Rear Camera - Resolution (Multiple): 50.0 MP
                                    + 12.0 MP + 10.0 MP. Rear Camera - Aperture
                                    (Multiple): F1.8, F2.2, F2.4
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Sensors:</span>
                                <p>
                                    Accelerometer, Barometer, Fingerprint
                                    Sensor, Gyro Sensor, Geomagnetic Sensor,
                                    Hall Sensor, Light Sensor, Proximity Sensor
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
