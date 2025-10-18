import { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "ceaa87df-fb9d-441e-bebb-08987a953ffa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            cumque, facere non autem sit aperiam ratione repellendus ex deserunt
            libero cum fugit fuga est illum illo eius odit eveniet laudantium.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>someone@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 88988777678</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Bengaluru, Karnataka - 563502</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            id="message"
            role={8}
            placeholder="Enter your message"
          ></textarea>

          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
