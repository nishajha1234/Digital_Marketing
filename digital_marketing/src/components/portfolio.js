import { useState } from "react";
import "../styles/portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    setSelectedTab(tabId);
  };

  return (
    <div className="portfolio_App">
      <div className="portfolio_background">
        <nav className="portfolio_navbar">
          <div className="portfolio_nav-left">
            <i className="fa-solid fa-dove fa"></i>
            <b>MARKET WINGS</b>
          </div>
          <div className="portfolio_nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="portfolio_main_heading">
          <h1>Website Design Services</h1>
          <p>
            Take your business to the next level with a beautiful, custom
            website design. Razor Rank is a top web design agency specializing
            in SEO optimized designs that improve conversion rates and maximize
            your revenue. Beautify your brand and grow your business with a
            dazzling new website.
          </p>
          <a href="">CONTACT US</a>
        </div>
      </div>

      <div className="portfolio_heading">
        <h1>Full Service Web Design Agency</h1>
        <nav className="portfolio_navbar1">
          <a
            href="#tab1"
            className={selectedTab === "tab1" ? "active" : ""}
            onClick={(event) => {
              handleTabClick(event, "tab1");
            }}
          >
            Custom Web Design
          </a>
          <a
            href="#tab2"
            className={selectedTab === "tab2" ? "active" : ""}
            onClick={(event) => {
              handleTabClick(event, "tab2");
            }}
          >
            Website Development{" "}
          </a>
          <a
            href="#tab3"
            className={selectedTab === "tab3" ? "active" : ""}
            onClick={(event) => {
              handleTabClick(event, "tab3");
            }}
          >
            Content Writing
          </a>
          <a
            href="#tab4"
            className={selectedTab === "tab4" ? "active" : ""}
            onClick={(event) => {
              handleTabClick(event, "tab4");
            }}
          >
            Support & Hosting
          </a>
        </nav>
      </div>
      {selectedTab === "tab1" && (
        <section id="tab1" className="portfolio_content active">
          <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-custom-web-design-bg.jpg" />
            <p>
              <b>CUSTOM WEB DESIGN</b> incorporates <b>SEO STRATEGY</b> to
              ensure <b>HIGH VISIBILITY, HIGHER CONVERSIONS</b> and{" "}
              <b>MEASURABLE RESULTS</b>.
            </p>
          </div>
        </section>
      )}
      {selectedTab === "tab2" && (
        <section id="tab2" className="portfolio_content">
          <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-website-development-bg.jpg" />
            <p>
              <b>CUSTOM WEBSITE DEVELOPMENT</b> and <b>SITE REDESIGN </b>can
              help <b>INCREASE CONVERSIONS</b> and <b>DRIVE REVENUE</b>.
            </p>
          </div>
        </section>
      )}
      {selectedTab === "tab3" && (
        <section id="tab3" className="portfolio_content">
          <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-content-writing-bg.jpg" />
            <p>
              <b>ENGAGING CONTENT </b>to target the right <b>AUDIENCE</b> for
              your business. <b>ATTRACT HIGH QUALITY TRAFFIC</b> that{" "}
              <b>CONVERTS</b>.
            </p>
          </div>
        </section>
      )}
      {selectedTab === "tab4" && (
        <section id="tab4" className="portfolio_content">
          <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-support-hosting-bg.jpg" />
            <p>
              Get the <b>SUPPORT</b> you need to maintain your website easily.{" "}
              <b>HOSTING SERVICES</b> include
              <b>NIGHTLY BACKUPS, OFFSITE DATA STORAGE</b> and <b>MUCH MORE</b>.
            </p>
          </div>
        </section>
      )}

      <div className="portfolio_heading1">
        <h1>Website Design Portfolio</h1>
        <p>
          <br></br>Let us build you a beautiful custom site designed for high
          performance in search and increased conversions. See examples of our
          work and call us to speak to one of our experts today.
        </p>
      </div>

      <div className="portfolio_box">
        <div className="portfolio_box1">
          <img src="/images/box1.png" alt="My Image" />
        </div>
        <div className="portfolio_box2">
          <img src="/images/box2.png" alt="My Image" />
        </div>
        <div className="portfolio_box3">
          <img src="/images/box3.png" alt="My Image" />
        </div>
        <div className="portfolio_box4">
          <img src="/images/box4.png" alt="My Image" />
        </div>
      </div>

      <div className="portfolio_heading2">
        <h1>The Best Website Design is Optimized for SEO</h1>
        <p>
          Creating an effective digital presence is more than just building a
          pretty website. Your site design and SEO strategy must be well thought
          out and SEO must be considered before you start your design work. Too
          often we find websites which are not designed for SEO and everyone is
          left to wonder why there is little traffic. Our team will take the
          time to understand your strategy and goals, and build a beautiful
          website designed to achieve high rankings and at the same time, be
          able to convert visitors into customers. <br></br>At Razor Rank, we
          are technical SEO experts, and all our web designs are geared for high
          performance in search.
        </p>
      </div>

      <div className="portfolio_heading3">
        <h1>Proven Process, Successful Growth</h1>
        <p>
          Give us a call to discuss your new website design. Let us help you
          reach more customers, grow your business’s awareness, ROI and so much
          more. We’re excited to get in touch and talk for FREE on how we’ll be
          able to help you.
          <br></br>
          <br></br>
          <br></br>
          <b>Call or email us, we're friendly and here to help!</b>
        </p>
        <a href="">CONTACT US</a>
      </div>

      <div className="portfolio_links">
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

      <div className="portfolio_Footer">
        <h1>
          {" "}
          <i className="fa-solid fa-dove fa"></i> MARKET WINGS
        </h1>
        <div className="portfolio_menu_items">
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
      <div className="portfolio_footer1">
        <b>
          ©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site
          content
        </b>
      </div>
    </div>
  );
}

export default Portfolio;
