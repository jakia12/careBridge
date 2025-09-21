"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { id: "facebook", icon: "fab fa-facebook-f", href: "#" },
  { id: "instagram", icon: "fab fa-instagram", href: "#" },
  { id: "twitter", icon: "fab fa-twitter", href: "#" },
  { id: "pinterest", icon: "fab fa-pinterest", href: "#" },
];

const latestPosts = [
  "Placing Children at The Heart Of Social Accountability",
  "Cash Transfers in Africa Evidence On The Impact",
  "Children in Aleppo Go Back To a Safe Learning Environment",
];

const aboutLinks = [
  { label: "Who we are", href: "#" },
  { label: "How We Help", href: "#" },
  { label: "Help & FaQ’s", href: "#" },
  { label: "Contact Us", href: "#" },
];

const contacts = [
  {
    icon: "fas fa-map-marker-alt",
    html: <span>962 Fifth Avenue, 3rd Floor New York, NY 10022</span>,
  },
  {
    icon: "fas fa-envelope",
    html: (
      <span>
        <a href="mailto:info@charitian.org">info@charitian.org</a>
      </span>
    ),
  },
  { icon: "fas fa-phone", html: <span>(+123) 456 789 101</span> },
  { icon: "fas fa-fax", html: <span>817-383-3550</span> },
  { icon: "fas fa-clock", html: <span>Mon - Sat: 9:00 - 18:00</span> },
];

export default function WidgetSection() {
  return (
    <section className="widget-section padding">
      <div className="container">
        <div className="widget-wrap row">
          {/* Brand / Intro */}
          <div className="col-lg-3 col-md-6 sm-padding sm-padding">
            <div className="widget-box">
              <Image
                src="/images/logo-light.png"
                alt="Charitian"
                width={160}
                height={40}
                priority
              />
              <p>
                Charitian non-profit organization dedicated to creating lasting
                impact through clean water, free education, healthcare, and
                community development.
              </p>
              <ul className="widget-social">
                {socialLinks.map((s) => (
                  <li key={s.id} className={s.id}>
                    <Link href={s.href}>
                      <i className={s.icon}></i>
                    </Link>
                  </li>
                ))}
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
                {latestPosts.map((t) => (
                  <li key={t}>
                    <Link href="#">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* About Links */}
          <div className="col-lg-3 col-md-6 sm-padding sm-padding">
            <div className="widget-box pl-50">
              <div className="widget-title">
                <h3>About Us</h3>
              </div>
              <ul className="widget-item">
                {aboutLinks.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact / HQ */}
          <div className="col-lg-3 col-md-6 sm-padding sm-padding">
            <div className="widget-box">
              <div className="widget-title">
                <h3>Headquaters</h3>
              </div>
              <ul className="widget-contact">
                {contacts.map((c, idx) => (
                  <li key={idx}>
                    <i className={c.icon}></i>
                    {c.html}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
