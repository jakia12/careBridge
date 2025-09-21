"use client";

import Link from "next/link";

export default function CtaSectionThree() {
  return (
    <section className="cta-section-3">
      <div className="container">
        <div className="cta-wrap text-center">
          {/* Section Heading */}
          <div className="section-heading mb-40 text-center">
            <span className="sub-heading">How We Help</span>
            <h2>
              Empowering Nonprofits to <br /> Create Lasting Change
            </h2>
            <p>
              We partner with communities to provide clean water, education,
              healthcare, and emergency relief. Every contribution fuels hope
              and helps nonprofits extend their reach to those who need it most.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/cause-single" className="default-btn">
            Make a Donation <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
