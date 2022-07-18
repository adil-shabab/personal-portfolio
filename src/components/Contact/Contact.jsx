import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Contact() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gsd875h",
        "template_17maaxq",
        form.current,
        "_ZF_lEXLnGlyO6WlC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setDone(true);
  };

  return (
    <div className="contact row" id="contact">
      <div className="d-flex flex-column justify-content-center align-items-center col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6">
        <div
          className="blur"
          style={{ background: "rgb(200, 231, 220)" }}
        ></div>
        <span data-aos="slide-right" style={{ color: darkMode ? "white" : "" }}>
          Get In Touch
        </span>
        <span data-aos="slide-left">Contact me</span>
      </div>
      <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xlg-6 p-5">
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            name="user_name"
            className="w-100 mt-4"
            type="text"
            placeholder="Name"
          />
          <input
            required
            name="user_email"
            className="w-100 mt-4"
            type="email"
            placeholder="Email"
          />
          <input
            required
            name="message"
            className="message w-100 mt-4"
            type="text"
            placeholder="Message"
          />
          <button data-aos="slide-right" className="button mt-4" type="submit">
            Message
          </button>
          <div className="wt-wrapper">
          <a target="_blank" href="https://wa.me/7510393197">
            <i className="wt fa-brands fa-whatsapp"></i>
          </a>
          <span className="wt-text">Watsapp Me</span>
          </div>

          <br />
          <br />
          <span style={{ color: "var(--orange)", fontSize: "20px" }}>
            {done && "Thank for contacting me!"}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
