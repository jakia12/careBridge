"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="cta-section bd-bottom">
      <div className="overlay"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 sm-padding">
            <div className="cta-content">
              <div className="section-heading text-left">
                <span className="sub-heading">Join With Us</span>
                <h2>
                  Because Every <br /> Life Truly Matters
                </h2>
                <p>
                  Every gift has the power to transform lives. From clean water
                  to education, your support brings hope and dignity to families
                  in need. Together, we can build a future where every child has
                  the chance to thrive.
                </p>
              </div>
              {/* CTA Button */}
              <Link href="/causes" className="default-btn">
                Donate Now <span></span>
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6 sm-padding">
            <form
              action="https://te.dynamiclayers.net/charitian/volunteer.php"
              method="post"
              id="volunteer-form"
              className="form-horizontal appointment-form"
            >
              <div className="section-heading">
                <span>Get Involved</span>
                <h3>Become a Volunteer</h3>
                <p>
                  Share your time, skills, and passion. Volunteers are the heart
                  of our mission, helping us reach more lives every day.
                </p>
              </div>

              <div className="form-group row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="volunteer-form-name"
                    name="volunteer-name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    id="volunteer-email"
                    name="volunteer-email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="volunteer-phone"
                    name="volunteer-phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    id="volunteer-address"
                    name="volunteer-address"
                    className="form-control"
                    placeholder="Your Address"
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    id="volunteer-message"
                    name="volunteer-message"
                    cols={30}
                    rows={5}
                    className="form-control message"
                    placeholder="Tell us why you’d like to volunteer"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                id="volunteer-submit"
                className="default-btn"
                type="submit"
              >
                Become a Volunteer <span></span>
              </button>

              <div
                id="volunteer-form-messages"
                className="alert"
                role="alert"
              ></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
