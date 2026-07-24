import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSuccess(true);

    e.target.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you. Send us a message below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <textarea
          rows="6"
          placeholder="Write your message..."
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {success && (
          <p className="success-msg">
            ✅ Your message has been sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
