"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="about-wrap row d-flex align-items-center">
          {/* Left Column */}
          <div className="col-md-6 sm-padding">
            <div className="section-heading text-left">
              <span className="sub-heading">About CareBridge</span>
              <h2 className="rlway" style={{ fontFamily: "rlway" }}>
                Together, We Make <br /> A Difference!
              </h2>
              <p>
                At <strong>CareBridge</strong>, we believe compassion should
                never have boundaries. Our mission is to connect those with the
                heart to give, with those who need a helping hand. From
                supporting children’s education to providing food, healthcare,
                and shelter—we exist to bridge the gap between generosity and
                hope. Every donation, no matter the size, is a step toward a
                world where no one is left behind.
              </p>
            </div>
            {/* Button */}
            <Link href="/cause-single" className="default-btn">
              Make a donation <span></span>
            </Link>
          </div>

          {/* Right Column */}
          <div className="col-md-6 sm-padding">
            <div className="about-img">
              <img
                src="/images/about-bg-1.png"
                alt="CareBridge nonprofit community support"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
