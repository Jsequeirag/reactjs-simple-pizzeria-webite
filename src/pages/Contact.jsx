import React from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="contact-left-side"></div>
      <div className="contact-right-side">
        <h1>CONTACT US</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" placeholder="Enter full name..." />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter email.." />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter message..."
            required
          ></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </motion.div>
  );
}
