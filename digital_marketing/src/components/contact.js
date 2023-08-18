import "../styles/contact.css";

function Contact() {
  const handleSubmit = (event) => {
    const form = document.getElementById("inquiry-form");
    event.preventDefault();
    document.getElementById("contact_name").value = "";
    document.getElementById("contact_phone").value = "";
    document.getElementById("contact_email").value = "";
    document.getElementById("contact_company").value = "";
    document.getElementById("contact_website").value = "";
    document.getElementById("contact_message").value = "";
  };
  return (
    <div className="contact_App">
      <div className="contact_background">
        <nav className="contact_navbar">
          <i className="fa-solid fa-dove fa"></i>
          <b>MARKET WINGS</b>
          <ul className="contact_nav-links">
            <li>
              <a href="Main_page.html">Home</a>
            </li>
            <li>
              <a href="About.html">About</a>
            </li>
            <li>
              <a href="Services.html">Services</a>
            </li>
            <li>
              <a href="#home">Portfolio</a>
            </li>
            <li>
              <a href="#services">Contact</a>
            </li>
          </ul>
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
            required
          />
          <input type="text" id="contact_phone" placeholder="Phone" required />
          <input type="email" id="contact_email" placeholder="Email" required />
          <input
            type="text"
            id="contact_company"
            placeholder="Company"
            required
          />
          <input
            type="text"
            id="contact_website"
            placeholder="Website"
            required
          />
          <textarea
            id="contact_message"
            placeholder="Message"
            rows="5"
            required
          />
          <button type="submit" id="contact_submit">
            Submit
          </button>
        </form>
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
          {" "}
          <i className="fa-solid fa-dove fa"></i> MARKET WINGS
        </h1>
        <div className="contact_menu_items">
          <a href="#">About Us</a>
          <a href="">Investors</a>
          <a href="">Blog</a>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook lg"></i>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="">Carrers</a>
          <a href="">Partners</a>
          <a href="">News</a>
          <a href="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">Contact</a>
          <a href="#">Press Releases</a>
          <a href="">Office Locations</a>
        </div>
      </div>
      <div className="contact_footer1">
        <a href="">Site Map</a>{" "}
        <b>
          ©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site
          content
        </b>
      </div>
    </div>
  );
}

export default Contact;
