import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 4);
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

                            {/* Updated details for MSI Gaming GF63 Thin 11UC */}
                            <div className="item-text">Processor</div>
                            <div className="parts-up">
                                <span>CPU Technology :</span>
                                <p>Intel Core i7 11th Gen</p>
                            </div>
                            <div className="parts-up">
                                <span>CPU Type - Speed :</span>{" "}
                                <p>
                                    i7 11800H (8 Cores, 16 Threads, 24 MB Cache,
                                    up to 4.60 GHz)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Cache Memory :</span>{" "}
                                <p>24 MB Intel Smart Cache</p>
                            </div>

                            <div className="item-text">RAM Memory</div>
                            <div className="parts-up">
                                <span>RAM:</span>
                                <p>16GB</p>
                            </div>
                            <div className="parts-up">
                                <span>RAM Type:</span> <p>DDR4</p>
                            </div>
                            <div className="parts-up">
                                <span>BUS Speed :</span> <p>3200 MHz</p>
                            </div>
                            <div className="parts-up">
                                <span>Memory Slot :</span> <p>2 RAM slots</p>
                            </div>
                            <div className="parts-up">
                                <span>Upgrade Support:</span>{" "}
                                <p>Supports up to 64GB</p>
                            </div>

                            <div className="item-text">Storage</div>
                            <div className="parts-up">
                                <span>Storage Capacity :</span>
                                <p>512GB SSD</p>
                            </div>
                            <div className="parts-up">
                                <span>Storage Type:</span>{" "}
                                <p>Solid State Drive (SSD)</p>
                            </div>
                            <div className="parts-up">
                                <span>Number of SSD Slots:</span>{" "}
                                <p>1 SSD slot</p>
                            </div>
                            <div className="parts-up">
                                <span>Storage Type:</span> <p>SSD M.2</p>
                            </div>
                            <div className="parts-up">
                                <span>Interface Type:</span> <p>PCIe NVMe</p>
                            </div>
                            <div className="parts-up">
                                <span>SSD Upgrade Support:</span>{" "}
                                <p>Supports up to 2 TB</p>
                            </div>

                            {/* Continue updating other details accordingly */}
                        </div>
                        <div className="parts-images">
                            <img src={Detail.image} alt=""></img>
                            <h5>{Detail.h5}</h5>
                            <div className="price">
                                <p className="line">{Detail.up}</p>
                                <p className="famous">{Detail.down}</p>
                            </div>
                            <div className="evaluate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
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
