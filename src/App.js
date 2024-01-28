/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./components/css/navbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import Product from "./components/pages/Product";


import Mouse from "./components/pages/Mouse";

import Keyboard from "./components/pages/Keyboard";

import Computer from "./components/pages/Computer";

import Navbar from "./components/inc/Navbar";

import Mystore from "./components/inc/Mystore";

import Storenews from "./components/pages/Storenews";

import Ourpartners from "./components/pages/Ourpartners";

import Mobiles from "./components/pages/Mobiles";

import Computer0 from "./computer/computer0";
import Computer1 from "./computer/computer1";
import Computer2 from "./computer/computer2";
import Computer3 from "./computer/computer3";

import Keyboard0 from "./keyboard/keyboard0";
import Keyboard1 from "./keyboard/keyboard1";
import Keyboard2 from "./keyboard/keyboard2";
import Keyboard3 from "./keyboard/keyboard3";

import Mobiles0 from "./mobiles/mobiles0";
import Mobiles1 from "./mobiles/mobiles1";
import Mobiles2 from "./mobiles/mobiles2";
import Mobiles3 from "./mobiles/mobiles3";

import Mouse0 from "./mouse/mouse0";
import Mouse1 from "./mouse/mouse1";
import Mouse2 from "./mouse/mouse2";
import Mouse3 from "./mouse/mouse3";

import Compare1 from "./computer1-4/compare1";
import Compare2 from "./computer1-4/compare2";
import Compare3 from "./computer1-4/compare3";
import Compare4 from "./computer1-4/compare4";

import Compare5 from "./keyboard5-8/compare5";
import Compare6 from "./keyboard5-8/compare6";
import Compare7 from "./keyboard5-8/compare7";
import Compare8 from "./keyboard5-8/compare8";

import Compare9 from "./mouse9-12/compare9";
import Compare10 from "./mouse9-12/compare10";
import Compare11 from "./mouse9-12/compare11";
import Compare12 from "./mouse9-12/compare12";

import Compare13 from "./mobiles13-16/compare13";
import Compare14 from "./mobiles13-16/compare14";
import Compare15 from "./mobiles13-16/compare15";
import Compare16 from "./mobiles13-16/compare16";

// import Compare from "./compare/compare";




function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product" element={<Product />} />

                    <Route path="/computer" element={<Computer />} />
                    <Route path="/mouse" element={<Mouse />} />
                    <Route path="/keyboard" element={<Keyboard />} />
                    <Route path="/mobiles" element={<Mobiles />} />
                    <Route path="/mystore" element={<Mystore />} />
                    <Route path="/storenews" element={<Storenews />} />
                    <Route path="/ourpartners" element={<Ourpartners />} />

                    <Route path="/computer0" element={<Computer0 />} />
                    <Route path="/computer1" element={<Computer1 />} />
                    <Route path="/computer2" element={<Computer2 />} />
                    <Route path="/computer3" element={<Computer3 />} />

                    <Route path="/keyboard0" element={<Keyboard0 />} />
                    <Route path="/keyboard1" element={<Keyboard1 />} />
                    <Route path="/keyboard2" element={<Keyboard2 />} />
                    <Route path="/keyboard3" element={<Keyboard3 />} />

                    <Route path="/mobiles0" element={<Mobiles0 />} />
                    <Route path="/mobiles1" element={<Mobiles1 />} />
                    <Route path="/mobiles2" element={<Mobiles2 />} />
                    <Route path="/mobiles3" element={<Mobiles3 />} />

                    <Route path="/mouse0" element={<Mouse0 />} />
                    <Route path="/mouse1" element={<Mouse1 />} />
                    <Route path="/mouse2" element={<Mouse2 />} />
                    <Route path="/mouse3" element={<Mouse3 />} />

                    <Route path="/compare1" element={<Compare1 />} />
                    <Route path="/compare2" element={<Compare2 />} />
                    <Route path="/compare3" element={<Compare3 />} />
                    <Route path="/compare4" element={<Compare4 />} />
                    <Route path="/compare5" element={<Compare5 />} />
                    <Route path="/compare6" element={<Compare6 />} />
                    <Route path="/compare7" element={<Compare7 />} />
                    <Route path="/compare8" element={<Compare8 />} />
                    <Route path="/compare9" element={<Compare9 />} />
                    <Route path="/compare10" element={<Compare10 />} />
                    <Route path="/compare11" element={<Compare11 />} />
                    <Route path="/compare12" element={<Compare12 />} />
                    <Route path="/compare13" element={<Compare13 />} />
                    <Route path="/compare14" element={<Compare14 />} />
                    <Route path="/compare15" element={<Compare15 />} />
                    <Route path="/compare16" element={<Compare16 />} />

                    {/* <Route path="/compare" element={<Compare />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
