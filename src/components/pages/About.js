import React from "react";
import AboutImages from "../images/about.png";
import AboutUsImages1 from "../images/about-us-1.png";
import AboutUsImages2 from "../images/about-us-2.png";
import AboutUsImages3 from "../images/about-us-3.jpg";
import AboutUsImages4 from "../images/about-us-4.png";
import AboutUsImages5 from "../images/about-us-5.png";

import MyFooter from "../inc/Footer";
import "../css/about.css";

const About = () => {
    return (
        <div>
            <div className="about-all">
                <div className="about-philosophy">
                    <h1>
                        We have what you need — It’s How We Built Our Company
                    </h1>
                </div>
                <div className="about-img">
                    <div className="about-img-1">
                        <img src={AboutImages} alt=""></img>
                    </div>
                </div>
                <div className="about-text">
                    <div>
                        <h4>Mission and Core Values</h4>

                        <p>
                            NexGenTech Ventures has built its reputation not
                            only by providing advanced products and services but
                            also through the mission and core values the company
                            constantly strives for.
                        </p>

                        <p>
                            Their mission is simple yet powerful: "Bring value
                            and innovation to the world through technology."
                        </p>

                        <h4>Dynamic Team</h4>

                        <p>
                            What sets NexGenTech Ventures apart is its dynamic
                            and creative team. Here, individuals with diverse
                            visions and skills come together to create a
                            positive and challenging work environment.
                        </p>

                        <p>
                            The cultural and ethnic diversity at NexGenTech
                            Ventures is considered a source of motivation for
                            continuous innovation.
                        </p>

                        <h4>Advanced Products and Services</h4>

                        <p>
                            NexGenTech Ventures founder Brian Clark has been
                            building businesses with online content marketing
                            since 1998, way before anyone used that term. Seven
                            years and three successful businesses later, Brian
                            decided to share what he knew with the world.
                        </p>

                        <p>
                            Not limited to a specific field, NexGenTech Ventures
                            has heavily invested in various technology sectors.
                            From software and mobile applications to artificial
                            intelligence and the Internet of Things, they
                            consistently offer advanced and refined solutions.
                        </p>

                        <h4>Key Highlights</h4>
                    </div>
                    <div className="about-text">
                        <div>
                            <h4>Continuous Innovation</h4>
                            <p>
                                NexGenTech Ventures continuously strives to meet
                                the challenges and new opportunities in the
                                rapidly changing industrial world. They maintain
                                a rigorous research and development process to
                                ensure their products and services are always at
                                the forefront of trends.
                            </p>
                        </div>
                        <div>
                            <h4>Security Commitment</h4>
                            <p>
                                By integrating advanced security solutions,
                                NexGenTech Ventures is committed to protecting
                                the personal and business information of its
                                customers. Safety and reliability are their top
                                priorities.
                            </p>
                        </div>
                        <div>
                            <h4>Application of Artificial Intelligence</h4>
                            <p>
                                NexGenTech Ventures actively uses artificial
                                intelligence to provide personalized and
                                efficient user experiences. From mobile
                                applications to enterprise management systems,
                                artificial intelligence is a key development
                                focus for the company.
                            </p>
                        </div>

                        <h4>Conclusion</h4>
                        <p>
                            NexGenTech Ventures is not just an ordinary
                            technology company but a reliable partner for those
                            seeking innovation and creativity. Clear vision,
                            diverse talent, and a commitment to quality are
                            strengths that have helped NexGenTech Ventures rise
                            to the top in the competitive technology industry.
                        </p>

                        <div className="about-us">
                            <img src={AboutUsImages1} alt=""></img>
                            <div className="about-us-text">
                                <h3>Dang Van Long</h3>
                                <p>
                                    Brian Clark is a writer, traveler, and
                                    entrepreneur.
                                </p>
                                <p>
                                    He works as a data finder for the web
                                    company NexGenTech Ventures
                                </p>
                            </div>
                        </div>
                        <div className="about-us">
                            <img src={AboutUsImages2} alt=""></img>
                            <div className="about-us-text">
                                <h3>Le Quang Huy</h3>
                                <p>
                                    Brian Clark is a writer, traveler, and
                                    entrepreneur.
                                </p>
                                <p>
                                    He is responsible for creating Documents for
                                    the website NexGenTech Ventures, a company
                                </p>
                            </div>
                        </div>
                        <div className="about-us">
                            <img src={AboutUsImages3} alt=""></img>
                            <div className="about-us-text">
                                <h3>Nguyen Nhu Vu</h3>
                                <p>
                                    Brian Clark is a writer, traveler, and
                                    entrepreneur.
                                </p>
                                <p>
                                    He is the founder of NexGenTech Ventures,
                                    who develops a one-resource web interface
                                    that provides smart strategies for DIYers
                                    and businesses.
                                </p>
                            </div>
                        </div>
                        <div className="about-us">
                            <img src={AboutUsImages4} alt=""></img>
                            <div className="about-us-text">
                                <h3>Dinh Cong Minh</h3>
                                <p>
                                    He is a snapper for the web company
                                    NexGenTech Ventures
                                </p>
                                <p></p>
                            </div>
                        </div>
                        <div className="about-us">
                            <img src={AboutUsImages5} alt=""></img>
                            <div className="about-us-text">
                                <h3>Bui Minh Hieu</h3>
                                <p>
                                    Brian Clark is a writer, traveler, and
                                    entrepreneur.
                                </p>
                                <p>
                                    He is the datebase finder for the website
                                    NexGenTech Ventures, a company
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above 'about-us' section for other team members */}

                    <div className="about-box">
                        <div className="about-card">
                            <div className="about-sub">
                                <span>SUBSCRIBE NOW</span>
                            </div>
                            <div className="about-h4">
                                <h4>
                                    "There is no quick success. It's hard work,
                                    perseverance and relentless passion."
                                </h4>
                            </div>
                            <div className="about-input">
                                <input
                                    type="email"
                                    id="name"
                                    name="name"
                                    placeholder="Email *"
                                    required
                                />
                            </div>
                            <div className="about-btn">
                                <button>Get The Free</button>
                            </div>
                            <p>
                                Please email us, we will reply to you in a few
                                minutes
                            </p>
                        </div>

                        <div className="about-h2">
                            <h2>
                                {" "}
                                "There is no short path to success. The
                                important thing is to start."
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    );
};

export default About;
