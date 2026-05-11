import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // page refresh stop

        const form = e.target;

        const formData = new FormData(form);

        const response = await fetch(
            "https://formsubmit.co/ajax/inamahmadbaig@gmail.com",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            }
        );

        if (response.ok) {
            setSent(true);

            form.reset();

            setTimeout(() => {
                setSent(false);
            }, 3000);
        }
    };

    return (
        <section className="contact-section py-5" id="contact">

            <div className="container">

                <h2 className="text-center text-white mb-4">
                    Contact Me
                </h2>

                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-8 col-12">

                        <form
                            onSubmit={handleSubmit}
                            className="contact-form"
                        >

                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                required
                            ></textarea>

                            <button type="submit" className="btn btn-primary w-100">
                                <i className="bi bi-envelope me-2"></i>
                                Send Message
                            </button>

                        </form>

                        {sent && (
                            <div className="alert alert-success mt-3 text-center">
                                Message sent successfully ✔
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;