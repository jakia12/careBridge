"use client";

import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    category: "Clean Water",
    title: "Water for Life",
    description:
      "Thousands of families walk miles each day for unsafe water. Together, we can provide clean wells and safe drinking water that saves lives.",
    goal: "$450,000",
    raised: "$401,960",
    progress: 89,
    image: "/images/post-1.jpg",
    link: "/cause-single",
    barClass: "progress-bar wow slideInLeft",
  },
  {
    id: 2,
    category: "Education",
    title: "Schools of Hope",
    description:
      "Every child deserves a classroom, a desk, and a future. Your support helps us build schools where children can dream, learn, and thrive.",
    goal: "$250,000",
    raised: "$201,960",
    progress: 80,
    image: "/images/post-2.jpg",
    link: "/cause-single",
    barClass: "progress-bar bar-2 wow slideInLeft",
  },
  {
    id: 3,
    category: "Healthcare",
    title: "Healing for All",
    description:
      "In many remote areas, basic healthcare is out of reach. With your help, we can provide mobile clinics, medicine, and hope for healthier lives.",
    goal: "$550,000",
    raised: "$320,960",
    progress: 58,
    image: "/images/post-3.jpg",
    link: "/cause-single",
    barClass: "progress-bar bar-3 wow slideInLeft",
  },
];

export default function DonateSection() {
  return (
    <section className="donate-section padding bg-grey">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">Recent Campaigns</span>
          <h2>
            Fundraising For The People And <br /> Causes You Care About
          </h2>
        </div>

        {/* Campaigns Wrap */}
        <div className="donate-wrap row">
          {campaigns.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 sm-padding">
              <div className="donate-box">
                <div className="donate-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                  <div className="donate-btn">
                    <Link href={item.link}>Donate Now</Link>
                  </div>
                  <div className="progress">
                    <div
                      className={item.barClass}
                      data-wow-delay="0ms"
                      data-wow-duration="2000ms"
                      role="progressbar"
                      style={{ width: `${item.progress}%` }}
                    >
                      <span>{item.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="donate-content">
                  <span>{item.category}</span>
                  <Link href={item.link}>
                    <h3>{item.title}</h3>
                  </Link>
                  <p>{item.description}</p>
                  <ul className="donate-list">
                    <li>
                      <i className="ti-bar-chart"></i> Goal: {item.goal}
                    </li>
                    <li>
                      <i className="ti-thumb-up"></i> Raised: {item.raised}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
