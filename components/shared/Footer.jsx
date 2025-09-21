export default function Footer() {
  return (
    <>
      <section className="widget-section padding">
        <div className="container">
          <div className="widget-wrap row">
            {/* Logo + About */}
            <div className="col-lg-3 col-md-6 sm-padding sm-padding">
              <div className="widget-box">
                <img src="/images/logo-light.png" alt="img" />
                <p>
                  Charitian non-profit organization dedicated to creating
                  lasting impact through clean water, free education,
                  healthcare, and community development.
                </p>
                <ul className="widget-social">
                  <li className="facebook">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="instagram">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="pinterest">
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Latest Posts */}
            <div className="col-lg-3 col-md-6 sm-padding sm-padding">
              <div className="widget-box">
                <div className="widget-title">
                  <h3>Latest Posts</h3>
                </div>
                <ul className="widget-item">
                  <li>
                    <a href="#">
                      Placing Children at The Heart Of Social Accountability
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cash Transfers in Africa Evidence On The Impact
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Children in Aleppo Go Back To a Safe Learning Environment
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* About Us */}
            <div className="col-lg-3 col-md-6 sm-padding sm-padding">
              <div className="widget-box pl-50">
                <div className="widget-title">
                  <h3>All Links</h3>
                </div>
                <ul className="widget-item">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                  <li>
                    <a href="/causes">Causes</a>
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
            <div className="col-lg-3 col-md-6 sm-padding sm-padding">
              <div className="widget-box">
                <div className="widget-title">
                  <h3>Headquaters</h3>
                </div>
                <ul className="widget-contact">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>962 Fifth Avenue, 3rd Floor New York, NY10022</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>
                      <a href="mailto:info@charitian.org">info@charitian.org</a>
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>(+123) 456 789 101</span>
                  </li>
                  <li>
                    <i className="fas fa-fax"></i>
                    <span>817-383-3550</span>
                  </li>
                  <li>
                    <i className="fas fa-clock"></i>
                    <span>Mon - Sat: 9:00 - 18:00</span>
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
            © Copyright <span id="currentYear"></span> CareBridge - All Rights
            Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
