import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Have questions or want to collaborate? Drop us a message and we'll get back to you shortly.</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactUs;
