"use client";

import Link from "next/link";

const services = [
  {
    id: 1,
    icon: "/images/1.png",
    title: "Clean Water for Children",
    description:
      "Every child deserves safe drinking water. Together, we can provide wells and sustainable water systems to end waterborne diseases.",
    link: "/service",
    iconClass: "",
  },
  {
    id: 2,
    icon: "/images/2.png",
    title: "Community Centers of Hope",
    description:
      "Strong communities begin with safe spaces. Help us build centers where families can gather, learn, and find support.",
    link: "/service",
    iconClass: "icon-2",
  },
  {
    id: 3,
    icon: "/images/3.png",
    title: "Education for Every Child",
    description:
      "Education is the key to breaking the cycle of poverty. Your support builds schools and provides children with learning opportunities.",
    link: "/service",
    iconClass: "icon-3",
  },
  {
    id: 4,
    icon: "/images/4.png",
    title: "Healthcare for All",
    description:
      "Access to healthcare saves lives. Together, we deliver medical care, clinics, and life-saving supplies to underserved communities.",
    link: "/service",
    iconClass: "icon-4",
  },
];

export default function ServiceSection() {
  return (
    <section className="service-section bg-grey padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">What We Do</span>
          <h2>
            Together, We Can Save <br /> More Lives With You
          </h2>
          <p>
            Every act of kindness creates a ripple of hope. Join us in building
            a future where no child goes thirsty, no family is left behind, and
            every community has a chance to thrive.
          </p>
        </div>

        {/* Service Cards */}
        <div className="service-wrap row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 sm-padding">
              <div className="service-box text-center">
                <div className="service-content">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-[80px] text-center mx-auto mb-[40px] block"
                  />
                  <h3 style={{ marginTop: "30px" }}>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="read-more">
                    Read More
                  </Link>
                </div>
                <div className={`service-icon ${service.iconClass}`}>
                  <i className={service.icon}></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
