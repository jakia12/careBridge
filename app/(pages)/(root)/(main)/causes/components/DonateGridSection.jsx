"use client";

import Image from "next/image";
import Link from "next/link";

const donateCampaigns = [
  {
    id: 1,
    image: "/images/post-1.jpg",
    category: "Water",
    title: "Water for Life",
    description:
      "Millions of families still lack access to clean drinking water. Your support helps us build wells and provide safe, sustainable water systems.",
    goal: "$450,000",
    raised: "$401,960",
    progress: 89,
    link: "/cause-single",
    barClass: "progress-bar wow slideInLeft",
  },
  {
    id: 2,
    image: "/images/post-2.jpg",
    category: "Infrastructure",
    title: "Rebuild a School",
    description:
      "Children deserve safe places to learn. Together, we can rebuild classrooms and give hope through education.",
    goal: "$250,000",
    raised: "$201,960",
    progress: 80,
    link: "/cause-single",
    barClass: "progress-bar bar-2 wow slideInLeft",
  },
  {
    id: 3,
    image: "/images/post-3.jpg",
    category: "Healthcare",
    title: "Community Health Clinics",
    description:
      "Access to healthcare saves lives. Your gift provides medicine, clinics, and medical staff to underserved communities.",
    goal: "$550,000",
    raised: "$320,960",
    progress: 58,
    link: "/cause-single",
    barClass: "progress-bar bar-3 wow slideInLeft",
  },
  {
    id: 4,
    image: "/images/post-4.jpg",
    category: "Education",
    title: "Support for Students",
    description:
      "From school supplies to scholarships, you can empower children to stay in school and pursue their dreams.",
    goal: "$300,000",
    raised: "$180,450",
    progress: 60,
    link: "/cause-single",
    barClass: "progress-bar bar-3 wow slideInLeft",
  },
  {
    id: 5,
    image: "/images/med.png",
    category: "Medical Aid",
    title: "Life-Saving Equipment",
    description:
      "Hospitals in rural areas lack even basic equipment. Your donation equips clinics with the tools needed to save lives.",
    goal: "$400,000",
    raised: "$210,780",
    progress: 52,
    link: "/cause-single",
    barClass: "progress-bar bar-3 wow slideInLeft",
  },
  {
    id: 6,
    image: "/images/post-6.jpg",
    category: "Relief",
    title: "Hunger & Emergency Relief",
    description:
      "In times of crisis, food and shelter mean survival. Help us respond quickly with meals, blankets, and emergency supplies.",
    goal: "$500,000",
    raised: "$275,960",
    progress: 55,
    link: "/cause-single",
    barClass: "progress-bar bar-3 wow slideInLeft",
  },
];

export default function DonateGridSection() {
  return (
    <section className="donate-section padding bg-grey">
      <div className="container">
        <div className="donate-wrap row">
          {donateCampaigns.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 padding-15">
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
