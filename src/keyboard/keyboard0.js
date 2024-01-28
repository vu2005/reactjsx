import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 5);
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
                                <span>Switch:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>AKKO CS
                                    Switch (Jelly Blue / Jelly Pink / Jelly
                                    White/Jelly Silver)
                                </p>
                            </div>
                            <div className="item-text">
                                {" "}
                                {Detail.description}{" "}
                            </div>
                            <div className="parts-up">
                                <span>Model:</span>
                                <p>3098B (98 keys)</p>
                            </div>
                            <div className="parts-up">
                                <span>Connectivity:</span>
                                <p>
                                    USB Type C, detachable / Bluetooth 5.0 (up
                                    to 3 devices)/ Wireless 2.4Ghz (1 of 3). NSX
                                    recommends only plugging the USB receiver
                                    2.4ghz into the USB 2.0 port for the best
                                    wireless signal.
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Battery:</span>
                                <p>3000 mah</p>
                            </div>
                            <div className="parts-up">
                                <span>Led:</span>
                                <p>
                                    RGB Backlit (SMT bottom type without
                                    interfering with the switch) with multiple
                                    modes
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Support:</span>
                                <p>
                                    Hot-swappable switches (hotswap, 5 pins, TTC
                                    hotswap socket) NKRO / Multimedia / Macro /
                                    Windows key lock
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Soundproof Foam:</span>
                                <p>3.5mm thick EVA (between plate and PCB)</p>
                            </div>
                            <div className="parts-up">
                                <span>Silicone Foam:</span>
                                <p>At the bottom of the keyboard</p>
                            </div>
                            <div className="parts-up">
                                <span>Pre-lubed Stabilizers:</span>
                                <p>Pre-tuned</p>
                            </div>
                            <div className="parts-up">
                                <span>Dimensions:</span>
                                <p>382 x 134 x 40 mm</p>
                            </div>
                            <div className="parts-up">
                                <span>Weight:</span>
                                <p>1.1kg</p>
                            </div>
                            <div className="parts-up">
                                <span>Keycap:</span>
                                <p>PBT Double-Shot, ASA profile</p>
                            </div>
                            <div className="parts-up">
                                <span>Switch:</span>
                                <p>
                                    AKKO CS Switch (Jelly Blue / Jelly Pink /
                                    Jelly White)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Accessories:</span>
                                <p>
                                    1 user manual + 1 keypuller + 1 dust cover +
                                    1 USB cable + USB Receiver 2.4Ghz + included
                                    keycap
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Compatibility:</span>
                                <p>
                                    Windows / MacOS / Linux (with MAC Function
                                    support) AKKO keyboard when connected to
                                    MacOS: (Ctrl Control | Windows Command | Alt
                                    Option, Mojave OS and above will adjust the
                                    order of these keys)
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
