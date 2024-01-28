import React, { useEffect } from "react";
import "../css/introduce.css";
// import Mystore from "./Mystore";

const Introduce = () => {
    useEffect(() => {
        let elToShow = document.querySelectorAll(".show-on-scroll");

        let isElInViewPort = (el) => {
            let rect = el.getBoundingClientRect();
            let viewHeight =
                window.innerHeight || document.documentElement.clientHeight;

            return (
                (rect.top <= 0 && rect.bottom >= 0) ||
                (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
                (rect.top >= 0 && rect.bottom <= viewHeight)
            );
        };

        function handleScroll() {
            elToShow.forEach((item) => {
                if (isElInViewPort(item)) {
                    item.classList.add("start");
                } else {
                    item.classList.remove("start");
                }
            });
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            <div className="introduce">
                <section id="home" className="full-height">
                    <div>
                        <h1 className="left-to-right show-on-scroll">
                            Our philosophy
                        </h1>
                        <p className="left-to-right show-on-scroll">
                            "Technology is a powerful tool that can shape the
                            future, and our philosophy is to use it to bring
                            about positive changes in society, protect the
                            environment, and ensure that everyone has the
                            opportunity to participate in and benefit from
                            technological advancements."
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Introduce;
