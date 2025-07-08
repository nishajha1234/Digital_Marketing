import { useState } from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";
import axios from "axios";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reqData = {
      name,
      email,
      message,
    };
    axios
      .post("http://localhost:8000/inquiry", reqData)
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="about_App">
      <div className="about_background">
        {/* NAVBAR */}
        <nav className="about_navbar">
          <div className="about_nav-left">
            <i className="fa-solid fa-dove fa"></i>
            <b>MARKET WINGS</b>
          </div>
          <div className="about_nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="about_main_heading">
          <h1>About</h1>
          <p>
            Razor Rank takes pride in being a valued partner, providing
            customized solutions designed to help you drive revenue and reach
            your goals. Personalized service and complete transparency are the
            hallmarks of our team's philosophy.<br></br>
          </p>
          <a href="">CONTACT US</a>
        </div>
      </div>

      <div className="about_heading">
        <h1>OUR MISSION</h1>
        <p>
          Our mission is to exceed your expectations. Whether your business is a
          complex ecommerce platform or a small-to-medium sized business, our
          team provides the highest level of communication, and treats your
          business as it were our own.
        </p>
      </div>

      <div className="about_heading1">
        <h1>What We Value</h1>
      </div>
      <div className="about_container">
        <div className="about_box">
          <b>
            <div className="about_number">1</div>
          </b>
          <h2>TRANSPARENCY</h2>
          <p>
            <br></br>At Razor Rank, we value transparency in all the work we do,
            and so do our clients. You'll never have to wonder what work is
            scheduled and what is being done. It's all out in the open and fully
            available to our clients. Each month, each quarter, your team will
            have access to the Schedule of Deliverables so you know exactly what
            work is on the calendar, and in addition, we provide an SEO Roadmap
            of all tasks in real time. We treat our clients the way we would
            want to be treated. It's simple .
          </p>
        </div>
        <div className="about_box">
          <b>
            <div className="about_number">2</div>
          </b>
          <h2>PROFESSIONALISM</h2>
          <p>
            <br></br>Professionalism is a core value for everything we do at
            Razor Rank. From email communications to Zoom meetings, Razor Rank
            ensures that each contact with your team has been prepared for in
            advance and meets our high standards of professionalism. It is our
            goal to hire the right people and immerse them in our value system
            of professional consulting. When you hire Razor Rank, you hire a
            partner who you can count on to help when you need it most.<br></br>
            <br></br>
          </p>
        </div>
        <div className="about_box">
          <b>
            <div className="about_number">3</div>
          </b>
          <h2>CLARITY</h2>
          <p>
            <br></br>When it comes to reporting, we believe that you should have
            crystal clear reports that provide actionable data you need to make
            decisions for your business. You need to know which channels are
            driving business... see exactly what's working so you can do more of
            it. We provide concise reporting of KPIs that matter most to your
            bottom line, in a format that's easy to follow. Whether your
            business is driven by organic search or paid media, Razor Rank will
            help you know what work.
          </p>
        </div>
      </div>

      <div className="about_heading2">
        Full-service Digital Marketing firm providing expert solutions and
        integrated resources for clients seeking superior service and expert
        advice…
      </div>

      <div className="about_heading3">
        <div class="data">
          <h1>How We Stand Out</h1>
          <p>
            Razor Rank is a premier Digital Marketing agency focused on serving
            the needs of many different types of companies seeking greater
            visibility online through a variety of marketing channels. Our
            original focus was strictly technical SEO consulting services. We
            quickly moved into content marketing and social media, and have now
            evolved into a full-service Digital Marketing firm providing expert
            solutions and integrated resources for clients seeking superior
            service and expert advice designed to increase online visibility,
            traffic, lead generation, and revenue.<br></br>
            <br></br>
            We provide highly focused Digital Marketing services for companies
            in competitive markets. Our services include SEO, Paid Search
            Management (PPC), Paid Social Media, Display, Reputation Management,
            Website Design and Development, Web Hosting, and general digital
            marketing consulting. Our clients include small and large B2B and
            B2C companies including eCommerce and Lead Generation websites. Our
            goal is to deliver intensely focused Digital Marketing solutions
            that exceed expectations.
          </p>
        </div>
        <img src="https://razorrank.com/wp-content/uploads/2021/09/how-we-stand-out-man-holding-rr-rocket.png"></img>
      </div>

      <div className="about_heading4">
        <div className="about_content_column">
          <span style={{ color: "#246da6", fontsize: "20px" }}>
            RECOGNITION
          </span>
          Awards & Accolades
        </div>
        <div className="about_links">
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
      </div>

      <div className="about_heading5">
        <h1>
          <br></br>Meet The Leadership
        </h1>
        <p>
          Our consulting team consists of experienced SEO consultants and a
          highly trained project management team who currently serve some of the
          largest brand names in the country. In addition, we serve many medium
          and smaller-sized companies interested in raising their level of
          competition. Our clients can always expect intense focus on the
          company’s needs, highly personalized service and continued
          cutting-edge SEO consulting.<br></br>
          <br></br>Our results speak for themselves.
        </p>
      </div>

      <div className="about_heading6">
        <img
          src="https://razorrank.com/wp-content/uploads/Jason-head-shot.png"
          alt="Image 1"
        />
        <div className="about_content">
          <h3>Jason Campbell Manuel</h3>
          <h5>President & Founding Partner</h5>
          <p>
            <br></br>Jason brings over twenty years of management and operations
            experience to Razor Rank and has worked in the SEO industry since
            2006. He is credited with formulating and executing successful
            marketing strategies for many top online retailers. Jason has a
            strong record of leading the optimization of websites for many
            Fortune 500 companies such as Toys”R”Us, Dick’s Sporting Goods,
            Orbitz, Avon, Belk Department Stores, Neiman Marcus, Fossil, Gap
            Inc. and all of their brands, among many others. His unique and
            broad experience gives him the skills needed to help lead the Razor
            Rank team in optimizing all sizes and types of websites.
          </p>
        </div>
      </div>
      <div className="about_heading6">
        <img
          src="https://razorrank.com/wp-content/uploads/Andrew-head-shot.png"
          alt="Image 2"
        />
        <div className="about_content">
          <h3>Andrew Orlander</h3>
          <h5>Chief Business Officer & Founding Partner</h5>
          <p>
            <br></br>Chief Business Officer at Razor Rank, a full service
            Digital Agency; founding partner of The Center for Medical Weight
            Loss, the largest network of bariatric (weight loss) physicians in
            the US with 400+ centers in 43 states. Founder of Rankdog.com, an
            SEO and Internet Marketing Firm, Founder of Legal Marketing
            Innovations, a digital agency in the legal field, specializing in
            personal injury and mass tort fields.
          </p>
        </div>
      </div>
      <div className="about_heading6">
        <img
          src="https://razorrank.com/wp-content/uploads/Joe-head-shot.png"
          alt="Image 3"
        />
        <div className="about_content">
          <h3>Joseph Mas</h3>
          <h5>Chief Knowledge Officer & Founding Partner</h5>
          <p>
            <br></br>Joe served as Senior SEO Consultant and Consulting Division
            Manager for both SearchDex and Altruik and has nearly twenty years
            experience. His knowledge of web technologies tied together with his
            strong background in organic search combine to provide world class
            guidance to clients working to dominate their space in the search
            engines. Joe’s track record of success precedes his reputation as a
            publicly recognized speaker and leader in the SEO community. Mr. Mas
            is not just a manager, he is a true leader.
          </p>
        </div>
      </div>

      <div className="about_heading7">
        <h1>Professionalism and Superior Service</h1>
        <p>
          <br></br>Razor Rank focuses on professionalism and delivery of
          superior service for clients. Our primary business is offering unique
          and insightful SEO consulting services. Our goal is to provide fully
          integrated solutions for e-commerce retailers seeking to increase
          visibility in search results, increase click-through rates, and
          increase bottom line revenue.<br></br>
          <br></br>
          Razor Rank has two offices conveniently located in <b>Dallas</b>,{" "}
          <b>Texas</b> and <b>Boca Raton</b> serving select clients throughout
          the United States and abroad.<a href=""> Contact us today!</a>
        </p>
      </div>

      <div className="about_form-container">
        <h1>
          Inquiry Form <br></br>
          <br></br>
        </h1>
        <form
          id="about_inquiry-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            id="about_name"
            placeholder="Your Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <input
            type="email"
            id="about_email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <textarea
            id="about_message"
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            required
          ></textarea>
          <button type="submit" id="about_submit">
            Submit
          </button>
        </form>
        {showPopup && (
          <div className="about_popup">
            <p>Your inquiry has been submitted successfully!</p>
            <button onClick={() => setShowPopup(false)}>
              <i class="fa-solid fa-xmark fa-lg"></i>
            </button>
          </div>
        )}
      </div>

      <div className="about_links">
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

      <div className="about_Footer">
        <h1>
          <i className="fa-solid fa-dove fa"></i> MARKET WINGS
        </h1>
        <div className="about_menu_items">
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
      <div className="about_footer1">
        <b>
          ©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site
          content
        </b>
      </div>
    </div>
  );
}

export default About;
