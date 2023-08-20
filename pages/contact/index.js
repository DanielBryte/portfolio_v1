import { useState } from "react";
import Footer from "/components/Footer";
import { motion } from "framer-motion";
import PageAnimation from "components/PageAnimation";


const Index = () => {
    const [submitting, setSubmitting] = useState(false)
    const [contactValue, setContactValue] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })


    const [inputState, setInputState] = useState({
        submitted: false,
        success: false,
        message: null,
    })
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactValue),
            });

            if (response.status === 200) {
                setInputState({ submitted: true, success: true });
                setContactValue({ name: "", email: "", subject: "", message: "" });
                window.alert("Message sent successfully");
            }
        } catch(error) {
            window.alert("Error Sending Message");
            setInputState({ submitted: true, success: false, message: error.message });
        }finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <PageAnimation />
            <motion.main
                className="contact"
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    duration: 0.75,

                }}
            >
                <section className="section">
                    <div className="section-heading">
                        <h1>Contact</h1>
                        <h2>Please reach out to me for collaboration, partnership, open roles, mentorship, and business discussion :) <br></br>I reply within <b>3 working days.</b></h2>
                    </div>

                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <div className="contact-detail">
                            <div className="name">
                                <label for="name">Name</label>
                                <input
                                    type="name"
                                    name="name"
                                    value={contactValue.name}
                                    onChange={(e) =>
                                        setContactValue({
                                            ...contactValue,
                                            name: e.target.value,
                                        })
                                    }
                                    id="name"
                                    placeholder="Your name"
                                    autoComplete="no"
                                    required="required" />
                            </div>

                            <div className="email">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={contactValue.email}
                                    onChange={(e) =>
                                        setContactValue({
                                            ...contactValue,
                                            email: e.target.value,
                                        })
                                    }
                                    id="email"
                                    placeholder="Your email"
                                    autoComplete="no"
                                    required="required" />
                            </div>
                        </div>

                        <div className="message">
                            <label for="subject">Subject of Message</label>
                            <input
                                type="text"
                                name="subject"
                                value={contactValue.subject}
                                onChange={(e) =>
                                    setContactValue({
                                        ...contactValue,
                                        subject: e.target.value,
                                    })
                                }
                                id="subject"
                                placeholder="Enter the message subject"
                                required="required" />

                            <label for="textarea">Message</label>
                            <textarea
                                name="message"
                                value={contactValue.message}
                                onChange={(e) =>
                                    setContactValue({
                                        ...contactValue,
                                        message: e.target.value,
                                    })
                                }
                                id="textarea"
                                rows="4" cols="50"
                                placeholder="Enter Your Message"
                                required="required"></textarea>
                        </div>

                        <button type="submit">{submitting ? 'submitting...' : 'submit'}</button>
                    </form>
                </section>
            </motion.main>
            <Footer />
        </>
    )
}
export default Index