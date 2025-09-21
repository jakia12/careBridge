export default function Footer() {
  return (
    <>
      <section className="widget-section padding">
        <div className="container">
          <div className="widget-wrap row">
            {/* Logo + About */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="widget-box">
                <img src="/images/logo-light.png" alt="CareBridge Logo" />
                <p>
                  CareBridge is a non-profit organization committed to bridging
                  gaps in healthcare, clean water, education, and relief for
                  vulnerable communities around the world.
                </p>
                <ul className="widget-social">
                  <li className="facebook">
                    <a href="https://facebook.com/carebridge" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="https://instagram.com/carebridge" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="https://twitter.com/carebridge" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="linkedin">
                    <a
                      href="https://linkedin.com/company/carebridge"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Latest Posts */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="widget-box">
                <div className="widget-title">
                  <h3>Latest Updates</h3>
                </div>
                <ul className="widget-item">
                  <li>
                    <a href="/blog/clean-water-kenya">
                      Clean Water Brings Hope to Rural Kenya
                    </a>
                  </li>
                  <li>
                    <a href="/blog/mobile-healthcare-units">
                      Launching Mobile Healthcare Units in India
                    </a>
                  </li>
                  <li>
                    <a href="/blog/education-support-syria">
                      Education Support for Displaced Children in Syria
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="widget-box pl-50">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul className="widget-item">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/causes">Our Causes</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Headquarters */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="widget-box">
                <div className="widget-title">
                  <h3>Headquarters</h3>
                </div>
                <ul className="widget-contact">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      1250 Avenue of the Americas, 12th Floor, New York, NY
                      10020
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>
                      <a href="mailto:info@carebridge.org">
                        info@carebridge.org
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+1 (212) 555-0199</span>
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>
                    <span>+1 (212) 555-0102</span>
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>
                    <span>Mon - Fri: 9:00 AM - 6:00 PM (EST)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <footer className="footer-section text-center">
        <div className="container">
          <p>
            © <span id="currentYear"></span> CareBridge — Building Bridges of
            Hope. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
