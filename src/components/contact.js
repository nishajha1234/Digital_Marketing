import "../styles/contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqData = {
      name,
      phone,
      email,
      company,
      website,
      message,
    };
    axios
      .post("http://localhost:8000/contact", reqData)
      .then((response) => {
        console.log(response);
        setName("");
        setPhone("");
        setEmail("");
        setCompany("");
        setWebsite("");
        setMessage("");
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="contact_App">
      <div className="contact_background">
        <nav className="contact_navbar">
          <div className="contact_nav-left">
            <i className="fa-solid fa-dove fa"></i>
            <b>MARKET WINGS</b>
          </div>
          <div className="contact_nav-links">
            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/portfolio">Portfolio</Link>

            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="contact_main_heading">
          <h1>Let’s Work Together</h1>
          <p>
            Let's talk strategy! Speak to a specialist about your goals and see
            if we can help. Fill out the form, or give us a call now. We've
            helped hundreds of clients build their businesses and drive more
            revenue.<br></br>
          </p>
        </div>
      </div>

      <div className="contact_form-container">
        <h1>
          Speak with a Specialist<br></br>
          <br></br>
        </h1>
        <form
          id="contact_inquiry-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            id="contact_name"
            placeholder="Full Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <input
            type="text"
            id="contact_phone"
            placeholder="Phone"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            required
          />
          <input
            type="email"
            id="contact_email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <input
            type="text"
            id="contact_company"
            placeholder="Company"
            value={company}
            onChange={(event) => {
              setCompany(event.target.value);
            }}
            required
          />
          <input
            type="text"
            id="contact_website"
            placeholder="Website"
            value={website}
            onChange={(event) => {
              setWebsite(event.target.value);
            }}
            required
          />
          <textarea
            id="contact_message"
            placeholder="Message"
            rows="5"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            required
          />
          <button type="submit" id="contact_submit">
            Submit
          </button>
        </form>
        {showPopup && (
          <div className="contact_popup">
            <p>Your request has been submitted successfully!</p>
            <button onClick={() => setShowPopup(false)}>
              <i class="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>
        )}
      </div>

      <div className="contact_links">
        <a href="https://partnersdirectory.withgoogle.com/partners/14937">
          <img src="https://razorrank.com/wp-content/uploads/rr-google-premier-partner.png" />
        </a>
        <a href="https://clutch.co/profile/razor-rank#reviews">
          <img src="https://razorrank.com/wp-content/uploads/clutch-2023.png" />
        </a>
        <a href="https://www.expertise.com/tx/dallas/seo-agencies#RazorRank">
          <img src="https://razorrank.com/wp-content/uploads/2020/06/expertise-awards-best-seo-experts-in-dallas.png" />
        </a>
      </div>

      <div className="contact_Footer">
        <h1>
          <i className="fa-solid fa-dove fa"></i> MARKET WINGS
        </h1>
        <div className="home_menu_items">
          <Link to="/about">About Us</Link>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <Link to="/contact">Contact</Link>
          <a href="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <Link to="/services">Services</Link>
          <a href="https://twitter.com/i/flow/login">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <Link to="/site_map">Site Map</Link>
          <a href="https://www.youtube.com/">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="contact_footer1">
        <b>
          ©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site
          content
        </b>
      </div>
    </div>
  );
}

export default Contact;
