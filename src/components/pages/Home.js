import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";
import MySlider from "../inc/Silder";
import Products from "../pages/Products";
import Introduce from "../inc/Introduce";
import Storenews from "../pages/Storenews";
import Ourpartners from "../pages/Ourpartners";
import Mystore from "../inc/Mystore";
import Myfooter from "../inc/Footer";
// import Style ;

import Computer from "../images/computer.png";
import Mouse from "../images/mouse.png";
import Mobiles from "../images/mobiles.png";
import Keyboard from "../images/keyboard.png";

import "../css/home.css";

// import { keyboard } from "@testing-library/user-event/dist/keyboard";

function Home() {
    // const MyComponent = () => {
    //     const style = {
    //         backGroundColor: "red"
    //     };
    //     return style;
    // }
    const [modalShow, setModalShow] = useState(false);

    const handleWatchVideo = () => {
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
    };

    return (
        <div>
            <MySlider />
            <div className="technology-store">
                <div className="store">
                    <h1> STORE TECHNOLOGY</h1>
                    <p>
                        Welcome to our store! We are proud to be a diverse
                        shopping destination with advanced technology items,
                        giving customers unique and comfortable shopping
                        experiences. With a diverse collection of products and
                        services, we are committed to bringing satisfaction and
                        convenience to all customers.
                        <h6></h6>
                        Our store is not just a place to shop; it's also a
                        destination to explore the latest trends and
                        high-quality products. With a professional and
                        enthusiastic team, we are always ready to assist and
                        advise to ensure our customers have the best shopping
                        experience.
                        <h6></h6>
                        Our customers are not just shoppers; they are
                        companions, and we are committed to creating a positive
                        and welcoming shopping environment. Come and explore our
                        store for a diverse, quality, and professionally
                        serviced shopping experience. We sincerely appreciate
                        the support of our customers!
                    </p>
                    <div className="icon-my-home">
                        <button
                            type="button"
                            id="button"
                            className="btn btn-button"
                        >
                            <a href="/about">
                                <div className="icon-info">
                                    <i class="fa-solid fa-circle-info"> More</i>
                                </div>
                            </a>
                        </button>
                        <div className="icon-video">
                            <button
                                type="button"
                                className="btn btn-button"
                                onClick={handleWatchVideo}
                            >
                                <i class="fa-solid fa-video"> watch video</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row-home">
                    <h1>OUR PRODUCTS</h1>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <a href="/computer">
                                <div className="d-block w-100">
                                    <div className="home-box">
                                        <div className="card-home">
                                            <img src={Computer} alt=""></img>
                                        </div>
                                        <div className="btn-text-home">
                                            <p style={{ paddingTop: 15 }}>
                                                Computer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Carousel.Caption></Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/keyboard">
                                <div className="d-block w-100">
                                    <div className="home-box">
                                        <div className="card-home">
                                            <img src={Keyboard} alt=""></img>
                                        </div>
                                        <div className="btn-text-home">
                                            <p style={{ paddingTop: 15 }}>
                                                Keyboard
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Carousel.Caption></Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/mobiles">
                                <div className="d-block w-100">
                                    <div className="home-box">
                                        <div className="card-home">
                                            <img src={Mobiles} alt=""></img>
                                        </div>
                                        <div className="btn-text-home">
                                            <p style={{ paddingTop: 15 }}>
                                                Mobiles
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Carousel.Caption></Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="/mouse">
                                <div className="d-block w-100">
                                    <div className="home-box">
                                        <div className="card-home">
                                            <img src={Mouse} alt=""></img>
                                        </div>
                                        <div className="btn-text-home">
                                            <p style={{ paddingTop: 15 }}>
                                                Mouse
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <Products />
            <Introduce />
            <Mystore />
            <Storenews />
            <Ourpartners />

            <Myfooter />
            <Modal show={modalShow} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add your video content or embed code here */}
                    <iframe
                        width="468"
                        height="400"
                        src="https://www.youtube.com/embed/aJgAwjP20RY?si=d9cpcJCxwBXxGWQd"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Home;
