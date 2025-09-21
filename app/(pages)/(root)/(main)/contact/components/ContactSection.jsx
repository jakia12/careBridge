"use client";

export default function ContactSection() {
  const contactDetails = [
    {
      icon: "fas fa-map-marker-alt",
      text: "962 Fifth Avenue, New York, NY10022",
    },
    {
      icon: "fas fa-envelope",
      text: "info@charitian.org",
      href: "mailto:info@charitian.org",
    },
    {
      icon: "fas fa-phone",
      text: "(+123) 456 789 101",
    },
  ];

  const businessHours = [
    { icon: "far fa-dot-circle", text: "Monday – Friday: 9am to 5pm" },
    { icon: "far fa-dot-circle", text: "Saturday: 9am to 2pm" },
    { icon: "far fa-dot-circle", text: "Sunday: Closed" },
  ];

  return (
    <section className="contact-section bg-grey padding">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Contact Form */}
          <div className="col-lg-7 sm-padding">
            <div className="contact-form">
              <div className="form-heading">
                <h3>Get in Touch With Us</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form
                action="https://te.dynamiclayers.net/charitian/contact.php"
                method="post"
                id="ajax_contact"
                className="form-horizontal"
              >
                <div className="form-group colum-row row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="contact-firstname"
                      name="contact-firstname"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="contact-lastname"
                      name="contact-lastname"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-6">
                    <input
                      type="email"
                      id="contact-email"
                      name="contact-email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      id="contact-phone"
                      name="contact-phone"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      id="contact-message"
                      name="contact-message"
                      cols="30"
                      rows="5"
                      className="form-control address"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
                <button id="submit" className="default-btn" type="submit">
                  Send Message<span></span>
                </button>
                <div id="form-messages" className="alert" role="alert"></div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 sm-padding">
            <div className="contact-content">
              <div className="contact-item mb-40">
                <h3>Get In Touch.</h3>
                <ul className="contact-details">
                  {contactDetails.map((item, idx) => (
                    <li key={idx}>
                      <i className={item.icon}></i>
                      {item.href ? (
                        <a href={item.href}>{item.text}</a>
                      ) : (
                        item.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="contact-item">
                <h3>Business Hours</h3>
                <ul className="contact-info">
                  {businessHours.map((item, idx) => (
                    <li key={idx}>
                      <i className={item.icon}></i>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
