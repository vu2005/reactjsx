import React, { useRef } from "react";
import "../css/contact.css";
import Footer from "../inc/Footer";
import Contactimages from "../images/contact.png";
function Contact() {
    const formRef = useRef();

    const postDataToJSONServer = (data) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch("http://localhost:3000/contacts", options)
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const name = formRef.current.name.value;
        const phone = formRef.current.phone.value;
        const email = formRef.current.email.value;
        const message = formRef.current.message.value;

        const formSubmissionEvent = {
            eventName: "FormSubmission",
            eventDescription: "User submitted the form",
            timestamp: new Date().toISOString(),
            name: name,
            phone: phone,
            email: email,
            message: message,
        };

        postDataToJSONServer(formSubmissionEvent);
        alert(`${name} submitted successfully!`);
    };
    return (
        <div>
            <div className="contactimages">
                <img src={Contactimages} alt="" />
            </div>
            <div className="contact">
                <section className="contact-info">
                    <h2>Company - Store Information</h2>
                    <p>
                        <strong>
                            {" "}
                            <i class="fa-solid fa-location-dot"></i>
                        </strong>{" "}
                        473/8B Le Van Quoi, Ward Binh Tri Dong A, Binh Tan
                        District, Ho Chi Minh City
                    </p>
                    <p>
                        <strong>
                            <i class="fa-solid fa-mobile-screen"></i>
                        </strong>{" "}
                        (038) 48 04 325 - Ext: 101 - 103
                    </p>
                    <p>
                        <strong>
                            <i class="fa-regular fa-envelope"></i>
                        </strong>{" "}
                        vunnth2307024@fpt.edu.vn / bahatmittt@gmail.com
                    </p>

                    <p>
                        Leave the information you are interested in and we will
                        reply to you as soon as we receive the email
                    </p>
                </section>
                <section className="contact-form">
                    <h2>Contacts Us</h2>
                    <form ref={formRef} onSubmit={handleSubmit} method="post">
                        <div className="container-contact">
                            <div className="contact-input-name focus">
                                <div className="form-input-contact">
                                    <i className="fa-regular fa-user"></i>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        required
                                    />

                                    <div className="star">
                                        <i className="fa-solid fa-star-of-life"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-input-phone focus">
                                <div className="form-input-contact">
                                    <i className="fa-solid fa-mobile-screen"></i>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="Phone"
                                        required
                                    />
                                    <div className="star">
                                        <i className="fa-solid fa-star-of-life"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-input-email focus">
                                <div className="form-input-contact">
                                    <i className="fa-regular fa-envelope"></i>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="contact-input-notes focus">
                                <div className="form-input-contact form-input-contact-notes">
                                    <i className="fa-regular fa-comments"></i>

                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Comments"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="custom-btn btn-3"
                                >
                                    <span>
                                        {" "}
                                        <i class="fa-regular fa-paper-plane"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* </div> */}
                    </form>
                </section>
            </div>
            <div className="map-contact">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.1127483277796!2d105.770377!3d21.0281742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1704475879765!5m2!1svi!2s"
                    width="1220"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p>
                    Đ/c: 8A Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội
                    100000, Việt Nam
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
