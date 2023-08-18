import "../styles/portfolio.css";
function Portfolio() {
    const tabs = document.querySelectorAll('.navbar1 a');
        const contentSections = document.querySelectorAll('.content');

        tabs.forEach(tab => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();

                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                contentSections.forEach(section => {
                    section.classList.remove('active');
                });

                const targetId = tab.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });

  return (
    <div className="portfolio_App">
 <div className="portfolio_background">
        <nav className="portfolio_navbar">
            <i className="fa-solid fa-dove fa"></i>
            <b>MARKET WINGS</b>
            <ul className="portfolio_nav-links">
                <li><a href="Main_page.html">Home</a></li>
                <li><a href="About.html">About</a></li>
                <li><a href="Services.html">Services</a></li>
                <li><a href="#home">Portfolio</a></li>
                <li><a href="#services">Contact</a></li>
            </ul>
        </nav>
        <div className="portfolio_main_heading">
            <h1>Website Design Services</h1>
            <p>Take your business to the next level with a beautiful, custom website design. Razor Rank is a top web
                design agency specializing in SEO optimized designs that improve conversion rates and maximize your
                revenue. Beautify your brand and grow your business with a dazzling new website.</p>
            <a href="">CONTACT US</a>
        </div>
    </div>

    <div className="portfolio_heading">
        <h1>Full Service Web Design Agency</h1>
        <nav className="portfolio_navbar1">
            <a href="#tab1" className="active">Custom Web Design</a>
            <a href="#tab2">Website Development</a>
            <a href="#tab3">Content Writing</a>
            <a href="#tab4">Support & Hosting</a>
        </nav>
    </div>
    <section id="tab1" className="portfolio_content active">
        <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-custom-web-design-bg.jpg"/>
            <p><b>CUSTOM WEB DESIGN</b> incorporates <b>SEO STRATEGY</b> to ensure <b>HIGH VISIBILITY, HIGHER
                    CONVERSIONS</b> and <b>MEASURABLE RESULTS</b>.</p>
        </div>
    </section>
    <section id="tab2" className="portfolio_content">
        <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-website-development-bg.jpg"/>
            <p><b>CUSTOM WEBSITE DEVELOPMENT</b> and <b>SITE REDESIGN </b>can help <b>INCREASE CONVERSIONS</b> and <b>DRIVE
                REVENUE</b>.
            </p>
        </div>
    </section>
    <section id="tab3" className="portfolio_content">
        <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-content-writing-bg.jpg"/>
            <p><b>ENGAGING CONTENT </b>to target the right <b>AUDIENCE</b> for your business. <b>ATTRACT HIGH QUALITY
                    TRAFFIC</b> that <b>CONVERTS</b>.</p>
        </div>
    </section>
    <section id="tab4" className="portfolio_content">
        <div className="portfolio_container">
            <img src="https://razorrank.com/wp-content/uploads/2020/08/rr-support-hosting-bg.jpg"/>
            <p>Get the <b>SUPPORT</b> you need to maintain your website easily. <b>HOSTING SERVICES</b> include
                <b>NIGHTLY BACKUPS, OFFSITE DATA STORAGE</b> and <b>MUCH MORE</b>.
            </p>
        </div>
    </section>


    <div className="portfolio_heading1">
        <h1>Website Design Portfolio</h1>
        <p><br></br>Let us build you a beautiful custom site designed for high performance in search and increased conversions.
            See examples of our work and call us to speak to one of our experts today.</p>
    </div>


    <div className="portfolio_box">
        <div className="portfolio_box1">
            <div className="portfolio_left" style={{backgroundColor:"#F7011B"}}></div>
            <img id="portfolio_image"
                src="https://razorrank.com/wp-content/uploads/2020/08/rr-douglasandlondon-portfolio-left-stacked-diag-page-presentation-template.png"/>
            <div className="portfolio_right" style={{backgroundColor:"#F7011B"}}></div>
            <div className="portfolio_paragraph">
                <img src="https://razorrank.com/wp-content/uploads/2020/08/Camlaw.png"/>
                <p>Challenging cases. Compassion for clients. Representing injured persons.</p>
            </div>
        </div>
        <div className="portfolio_box2">
            <div className="portfolio_left1" style={{backgroundColor:"#CDAB77"}}></div>
            <img id="portfolio_image1"
                src="https://razorrank.com/wp-content/uploads/2020/08/rr-douglasandlondon-portfolio-left-stacked-diag-page-presentation-template.png"/>
            <div className="portfolio_right1" style={{backgroundColor:"#CDAB77"}}></div>
            <div className="portfolio_paragraph1">
                <img src="https://razorrank.com/wp-content/uploads/2020/08/f-Silverman.png"/>
                <p>Dedicated to serving Bergen County with extraordinary diamonds, jewelry and gems.</p>
            </div>
        </div>
        <div className="portfolio_box3">
            <div className="portfolio_left" style={{backgroundColor:"#F7011B"}}></div>
            <img id="portfolio_image"
                src="https://razorrank.com/wp-content/uploads/2020/08/rr-douglasandlondon-portfolio-left-stacked-diag-page-presentation-template.png"/>
            <div className="portfolio_right" style={{backgroundColor:"#F7011B"}}></div>
            <div className="portfolio_paragraph">
                <img src="https://razorrank.com/wp-content/uploads/2020/08/ANI.png"/>
                <p>The ultimate group vacation experience. The privacy and services of a 5-star resort.</p>
            </div>
        </div>
        <div className="portfolio_box4">
            <div className="portfolio_left1" style={{backgroundColor:"#202E56"}}></div>
            <img id="portfolio_image1"
                src="https://razorrank.com/wp-content/uploads/2020/08/rr-douglasandlondon-portfolio-left-stacked-diag-page-presentation-template.png"/>
            <div className="portfolio_right1" style={{backgroundColor:"#202E56"}}></div>
            <div className="portfolio_paragraph1">
                <img src="https://razorrank.com/wp-content/uploads/2020/08/DandL.png" alt="Douglas And London"/>
                <p>Over $4 Billion won in hallmark verdicts and settlements for our clients.</p>
            </div>
        </div>
    </div>

    <div className="portfolio_heading2">
        <h1>The Best Website Design is
            Optimized for SEO</h1>
        <p>Creating an effective digital presence is more than just building a pretty website. Your site design and SEO
            strategy must be well thought out and SEO must be considered before you start your design work. Too often we
            find websites which are not designed for SEO and everyone is left to wonder why there is little traffic. Our
            team will take the time to understand your strategy and goals, and build a beautiful website designed to
            achieve high rankings and at the same time, be able to convert visitors into customers. <br></br>At Razor Rank,
            we are technical SEO experts, and all our web designs are geared for high performance in search.</p>
    </div>

    <div className="portfolio_heading3">
        <h1>Proven Process, Successful Growth</h1>
        <p>Give us a call to discuss your new website design. Let us help you reach more customers, grow your business’s
            awareness, ROI and so much more. We’re excited to get in touch and talk for FREE on how we’ll be able to
            help you.
            <br></br><br></br><br></br><b>Call or email us, we're friendly and here to help!</b>
        </p>
        <a href="">CONTACT US</a>
    </div>

    <div className="portfolio_links">
        <a href="https://partnersdirectory.withgoogle.com/partners/14937"><img
                src="https://razorrank.com/wp-content/uploads/rr-google-premier-partner.png"/></a>
        <a href="https://clutch.co/profile/razor-rank#reviews"><img
                src="https://razorrank.com/wp-content/uploads/clutch-2023.png"/></a>
        <a href="https://www.expertise.com/tx/dallas/seo-agencies#RazorRank"><img
                src="https://razorrank.com/wp-content/uploads/2020/06/expertise-awards-best-seo-experts-in-dallas.png"/></a>
    </div>


    <div className="portfolio_Footer">
        <h1> <i className="fa-solid fa-dove fa"></i> MARKET WINGS</h1>
        <div className="portfolio_menu_items">
            <a href="#">About Us</a>
            <a href="">Investors</a>
            <a href="">Blog</a>
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter"></i></a>
            <a href="">Carrers</a>
            <a href="">Partners</a>
            <a href="">News</a>
            <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
            <a href="#">Contact</a>
            <a href="#">Press Releases</a>
            <a href="">Office Locations</a>
        </div>
    </div>
    <div className="portfolio_footer1">
        <a href="">Site Map</a> <b>©2023 Copyright by MARKET WINGS, LLC. All rights reserved to site content</b>
    </div>
      </div>
  );
}

export default Portfolio;