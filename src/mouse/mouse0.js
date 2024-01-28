import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 13);
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
                                <span>Color:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>Red White
                                </p>
                            </div>
                            <div className="item-text">
                                {Detail.description}
                            </div>
                            <div className="parts-up">
                                <span>Connection:</span>
                                <p>Bluetooth / Wireless</p>
                            </div>
                            <div className="parts-up">
                                <span>DPI:</span>
                                <p>1300</p>
                            </div>
                            <div className="parts-up">
                                <span>Description:</span>
                                <p>
                                    The Rapoo M650 Silent wireless mouse
                                    connects wirelessly via USB Receiver 2.4GHz
                                    or Bluetooth 3.0, 5.0. You can use the
                                    wireless mouse with devices like iPad,
                                    Notebook, Macbook, PC, iMac through
                                    compatible connections anywhere for your
                                    work or entertainment needs. With a
                                    connection range of up to 10 meters, it's
                                    easy to use the mouse in any connected
                                    space. Simultaneously connect to 3 devices,
                                    easily switch between them, making your
                                    workspace neater and more convenient. The
                                    Rapoo M650 uses common AA batteries that are
                                    easy to replace. Integrated with Rapoo’s
                                    energy-saving technology and power on/off,
                                    it extends battery life up to 9 months,
                                    ensuring worry-free use for a long time. The
                                    Rapoo M650 wireless Silent mouse is
                                    compatible with popular operating systems
                                    such as Windows, MacOS (MacBook, iMac). Move
                                    quickly, sensitively with precise standard
                                    operations thanks to the maximum resolution
                                    of up to 1300 DPI. With the high 1,300 dpi
                                    resolution of the M650 Silent, it is
                                    suitable for your work, basic design, or
                                    entertainment needs. The Rapoo M650 Silent
                                    wireless mouse is noiseless and comfortable
                                    in all operations. Therefore, with a small
                                    investment in this smart wireless mouse, you
                                    will truly be satisfied with the experiences
                                    with the Rapoo M650 Silent.
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
