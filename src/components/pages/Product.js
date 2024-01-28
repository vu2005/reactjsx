import React from "react";
import Records from "../database/records.json";
import "../css/products.css";
import Productsimages from "../images/products.png";
import MyFooter from "../inc/Footer";
const Products = () => {
    return (
        <div className="Productsimages">
            <img src={Productsimages} alt="" />
            <div className="products-h2">
                <h2>PRODUCTS</h2>
                <div className="products">
                    {Records.map((record) => (
                        <div key={record.id} className="card-product-0">
                            <div className="product-card">
                                <div className="card__img">
                                    <a href={record.viewProducts}>
                                        <img src={record.image} alt="" />
                                    </a>
                                </div>
                                <h5 className="card__title">{record.title}</h5>

                                <p className="card__price">
                                    <a href={record.viewProducts}>
                                        {record.price}
                                    </a>
                                </p>

                                <div className="card__action">
                                    <button>Buy now</button>

                                    <button>
                                        <a href={record.link}>Compare</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MyFooter />
        </div>
    );
};

export default Products;
