import React from "react";
import MyFooter from "../components/inc/Footer";
import "../components/css/style.css";
import Details from "../components/database/detail.json";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Computer0 = () => {
    const filteredDetails = Details.filter((detail) => detail.id === 1);

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
                    <div className="images-right" key={detail.id}>
                        <div className="parts-text">
                            <h5>{detail.title}</h5>
                            <div className="parts-up">
                                <span>Brand:</span>{" "}
                                <p style={{ color: "red" }}>Dell</p>
                            </div>
                            <div className="item-text">Processor</div>
                            <div className="parts-up">
                                <span>CPU Technology :</span>
                                <p>Intel Core i7 13th Gen</p>
                            </div>
                            <div className="parts-up">
                                <span>CPU Type - Speed :</span>{" "}
                                <p>
                                    i7 1360P (12 Cores, 16 Threads, 18 MB Cache,
                                    up to 5.00 GHz, Max Turbo 64W)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Cache Memory :</span>{" "}
                                <p>18 MB Intel Smart Cache</p>
                                {/* 1 */}
                            </div>
                            <div className="item-text">Memory</div>
                            <div className="parts-up">
                                <span>RAM:</span>
                                <p>16GB</p>
                            </div>
                            <div className="parts-up">
                                <span>RAM Type:</span> <p>LPDDR5</p>
                            </div>
                            <div className="parts-up">
                                <span>Bus Speed :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>4800 MHz
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Memory Slot :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>Integrated
                                    RAM (no slots)
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Upgrade Support:</span>{" "}
                                <p>Not supported</p>
                            </div>
                            {/* 2 */}
                            <div className="item-text">Storage</div>
                            <div className="parts-up">
                                <span>Storage Capacity :</span>
                                <p>
                                    <i class="fa-solid fa-check"></i>1TB
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Storage Type:</span>{" "}
                                <p>Solid State Drive (SSD)</p>
                            </div>
                            <div className="parts-up">
                                <span>SSD Slots:</span> <p>1 SSD slot</p>
                            </div>
                            <div className="parts-up">
                                <span>Storage Types:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>SSD M.2
                                    2230
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>SSD M.2
                                    2280
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Interface Type:</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>PCIe NVMe
                                    3x4
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>PCIe NVMe
                                    4x4
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>SSD Upgrade Support:</span>{" "}
                                <p>Supports up to 2 TB</p>
                            </div>
                            {/* 3 */}
                            <div className="item-text">Display</div>
                            <div className="parts-up">
                                <span>Screen Size:</span>
                                <p>14 inches</p>
                            </div>
                            <div className="parts-up">
                                <span>Resolution :</span>{" "}
                                <p>QHD+ (2560 x 1600 Pixels)</p>
                            </div>
                            <div className="parts-up">
                                <span>Display Technology :</span>{" "}
                                <p>Anti-Glare 250nits WVA Display</p>
                            </div>
                            <div className="parts-up">
                                <span>Touch Screen :</span> <p>No</p>
                            </div>
                            {/* 4 */}
                            <div className="item-text">Graphics Card</div>
                            <div className="parts-up">
                                <span>Graphics Memory :</span>
                                <p>Shared</p>
                                {/* 5 */}
                            </div>
                            <div className="item-text">Audio</div>
                            <div className="parts-up">
                                <span>Audio :</span>
                                <p>Stereo - 2 speakers</p>
                            </div>
                            <div className="parts-up">
                                <span>Speaker:</span> <p>2 speakers x 2W</p>
                            </div>
                            <div className="parts-up">
                                <span>Audio Technology:</span>{" "}
                                <p>Waves MaxxAudio Pro</p>
                            </div>
                            <div className="parts-up">
                                <span>Microphones:</span>{" "}
                                <p>2-channel Microphone</p>
                            </div>
                            {/* 6 */}
                            <div className="item-text">Connectivity</div>
                            <div className="parts-up">
                                <span>Network Connection :</span>
                                <p>Wi-Fi 6E</p>
                            </div>
                            <div className="parts-up">
                                <span>Bluetooth :</span> <p>Bluetooth 5.3</p>
                            </div>
                            <div className="parts-up">
                                <span>HDMI :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>HDMI 1.4
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Card Reader :</span> <p>SD Card Reader</p>
                            </div>
                            <div className="parts-up">
                                <span>USB :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>1x USB-C
                                    Thunderbolt 4<br></br>
                                    <i class="fa-solid fa-check"></i>2x USB-A
                                    3.2 Gen 1
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>LAN :</span> <p>Not available</p>
                            </div>
                            <div className="parts-up">
                                <span>Audio Output:</span>{" "}
                                <p>3.5mm Jack (Input & Output)</p>
                            </div>
                            <div className="parts-up">
                                <span>Camera:</span> <p>FHD camera (1080P)</p>
                            </div>
                            <div className="parts-up">
                                <span>Security Features :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>TPM 2.0
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>Webcam
                                    Shutter
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>BitLocker
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>Fingerprint
                                    Sensor
                                    <br></br>
                                    (Depending on the version)
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>Facial
                                    Recognition
                                    <br></br>
                                    (Depending on the version)
                                </p>
                            </div>
                            {/* 7 */}
                            <div className="item-text">Battery</div>
                            <div className="parts-up">
                                <span>Battery Technology:</span>
                                <p>Lithium-polymer</p>
                            </div>
                            <div className="parts-up">
                                <span>Battery Information :</span>{" "}
                                <p>
                                    <i class="fa-solid fa-check"></i>3 cell - 41
                                    WHr
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>4 cell - 54
                                    WHr
                                    <br></br>
                                    <i class="fa-solid fa-check"></i>4 cell - 64
                                    WHr
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Adapter Information:</span>{" "}
                                <p>65W AC adapter</p>
                            </div>
                            <div className="parts-up">
                                <span>Touch Screen :</span> <p>No</p>
                            </div>
                            {/* 8 */}
                            <div className="item-text">Keyboard & Touchpad</div>
                            <div className="parts-up">
                                <span>Touchpad :</span>
                                <p>300 DPI - 115x80 (mm)</p>
                            </div>
                            <div className="parts-up">
                                <span>Numeric Keypad :</span> <p>Yes</p>
                            </div>
                            <div className="parts-up">
                                <span>Backlit Keyboard:</span>
                                <p>Depending on the version</p>
                            </div>

                            {/* 9 */}
                            <div className="item-text">
                                Additional Information
                            </div>
                            <div className="parts-up">
                                <span>Operating System :</span>

                                <p>Windows 11 Genuine</p>
                            </div>
                            <div className="parts-up">
                                <span>Color :</span> <p>Platinum Silver</p>
                            </div>

                            {/* 10 */}
                            <div className="item-text">Size - Weight</div>
                            <div className="parts-up">
                                <span>Size :</span>
                                <p>16.96 - 18.99 x 358.50 x 235.56 (mm)</p>
                            </div>
                            <div className="parts-up">
                                <span>Weight :</span> <p>1.62 kg</p>
                            </div>
                            {/* 11 */}
                            <div className="item-text">Warranty - Origin</div>
                            <div className="parts-up">
                                <span>Warranty :</span>
                                <p>
                                    12 Months - 1 for 1 exchange within the
                                    first 30 days
                                </p>
                            </div>
                            <div className="parts-up">
                                <span>Product Standard :</span>{" "}
                                <p>Brand New 100% - Full Box</p>
                            </div>
                            <div className="parts-up">
                                <span>Origin :</span> <p>Imported from USA</p>
                            </div>
                            {/* 12 */}
                        </div>
                        <div className="parts-images">
                            <img src={detail.image} alt=""></img>

                            <h5>
                                Laptop Dell Inspiron 5430 Core i7-1360P RAM 16GB
                                SSD 1TB 14-inch QHD+ Windows 11 - Silver
                            </h5>
                            <div className="price">
                                <p className="line">18.900.000 ₫</p>
                                <p className="famous">17.900.000 ₫</p>
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
