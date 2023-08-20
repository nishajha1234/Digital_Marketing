import "../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_App">
      <div class="home_header">
        <div className="home_background">
          <nav className="home_navbar">
            <div className="home_nav-left">
              <i className="fa-solid fa-dove fa"></i>
              <b>MARKET WINGS</b>
            </div>
            <div className="home_nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          <div className="home_main_heading">
            <b>Digital Marketing That Drives Your Business</b>
            <p>
              Speak with one of our specialists and find out how Razor Rank can
              help you with SEO, PPC, social media and website design today.
            </p>
          </div>
        </div>

        <div className="home_heading">
          <h1>Digital Marketing Agency with Proven Results</h1>
          <p>
            Razor Rank is a full-service digital marketing agency providing
            best-in-class services to big brands and small-to-medium sized
            businesses nationwide.
          </p>
        </div>

        <div className="home_heading1">
          <h1>
            The <span style={{ color: "#2377b4" }}>Company</span> we keep
            <br></br>
          </h1>
        </div>
        <div className="home_images">
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/gap-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/old-navy.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/foot-locker.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/universal-production-music-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/maui-jim-brand-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/banana-republic-logos.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/spinning-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/champs-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/paulas-choice-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/beautypedia.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/INTERMIX-logo.png"
            alt="My Image"
            className="home_gray"
          />
          <img
            src="https://razorrank.com/wp-content/uploads/2020/05/slumberland-logo.png"
            alt="My Image"
            className="home_gray"
          />
        </div>
      </div>

      <div className="home_heading2">
        <h1>
          <span style={{ color: "#2377b4" }}>Services</span> We Offer
        </h1>
      </div>
      <div className="home_container">
        <div className="home_box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <h1>SEO</h1>
          <span className="home_content">
            Work with our experts to drive more business from organic search.
            Increase traffic, lead generation and revenue with our proven search
            strategies.
          </span>
        </div>
        <div className="home_box">
          <i className="fa-solid fa-hand-point-up"></i>
          <h1>PPC MANAGEMENT</h1>
          <span className="home_content">
            Increase revenue and grow your business with our PPC management
            services. Find out how we can help you increase sales today!
          </span>
        </div>
        <div className="home_box">
          <i className="fa-solid fa-desktop"></i>
          <h1>WEB DESIGN</h1>
          <span className="home_content">
            Innovative designs for new sites and redesigns to enhance your
            brand, improve conversions and maximize revenues. Speak to an expert
            today!
          </span>
        </div>
        <div className="home_box">
          <i className="fa-solid fa-pen-clip"></i>
          <h1>CONTENT WRITING</h1>
          <span className="home_content">
            Professional SEO copy writing services for a wide range of services,
            ranging from lead
          </span>
        </div>
      </div>

      <div className="home_heading3">
        <h1>
          Personalized Service and Transparency{" "}
          <span style={{ color: "#2377b4" }}>Set Us Apart</span>{" "}
        </h1>
        <p>
          We take the time to listen to our clients and understand what makes
          them happy. Great communication, clear objectives, and a culture of
          client satisfaction is why our clients stay with us.
        </p>
      </div>
      <div className="home_container1">
        <div className="home_box1">
          <h1>
            DEDICATED <br></br> EXPERTS
          </h1>
          <img src="https://razorrank.com/wp-content/uploads/2020/05/RR-Dedicated-Experts-300x225.jpg" />
          Each client gets a dedicated account manager and a team of subject
          matter experts to work with on their campaign.
        </div>
        <div className="home_box1">
          <h1>TRANSPARENT DELIVERABLES</h1>
          <img src="https://razorrank.com/wp-content/uploads/2020/05/RR-Transparent-Deliverables.jpg" />
          Know what's being done at all times. Razor Rank provides complete
          transpareny of all work completed and in progress.
        </div>
        <div className="home_box1">
          <h1>CRYSTAL CLEAR REPORTING</h1>
          <img src="https://razorrank.com/wp-content/uploads/2020/05/RR-Crystal-Clear-Reporting-1.jpg" />
          Razor Rank provides clear, easy to understand reports on all KPI's
          important to the growth of your business.
        </div>
      </div>

      <div className="home_links">
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

      <div className="home_Footer">
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

      <div className="home_footer1">
        <b>
          ©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site
          content
        </b>
      </div>
    </div>
  );
}

export default Home;
