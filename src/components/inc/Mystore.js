import React from "react";
import "../css/mystore.css";

const Mystore = () => {
    const imageSources = [
        "images/mystore-1.png",
        "images/mystore-2.jpg",
        "images/mystore-3.jpg",
        "images/mystore-4.jpg",
        "images/mystore-5.jpg",
    ];

    return (
        <div className="mystore">
            <div className="text-center">
                <h2>STORE IMAGES</h2>
            </div>
            <div className="mystore-wrapper">
                {imageSources.map((source, index) => (
                    <div className="mystore-image" key={source}>
                        <img src={source} alt={`Store ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mystore;
