import React from "react";
import Records from "../database/records.json";
import Myfooter from "../inc/Footer";
import KeyboardImages from "../images/keyboardimages.jpg";
import "../css/products.css";

const Products = () => {
    // Sử dụng filter để lọc ra chỉ sản phẩm có id bằng 1
    const filteredProducts = Records.filter((record) => record.id === 2);

    return (
        <div>
            <div className="Productsimages">
                <img src={KeyboardImages} alt="" />
                <h2>Keyboard</h2>
                <div className="products">
                    {filteredProducts.map((record) => (
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
                <Myfooter />
            </div>
        </div>
    );
};

export default Products;
