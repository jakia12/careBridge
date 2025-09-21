"use client";

import Image from "next/image";
import Slider from "react-slick";
// Ensure slick CSS is loaded globally (e.g., in app/layout.tsx or globals.css):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    text: "“I used to think small donations didn’t matter. Then I saw clean water flowing in a village we supported. Every gift adds up to life-changing impact.”",
    image: "/images/testi-1.png",
    name: "Kyle Frederick",
    role: "Monthly Donor",
  },
  {
    id: 2,
    text: "“Transparency matters. The team showed exactly where funds go, and the results are visible—kids in school, families healthy, hope restored.”",
    image: "/images/testi-2.png",
    name: "Jérémie Ambroise",
    role: "Community Partner",
  },
  {
    id: 3,
    text: "“Volunteering with this organization changed me. The dignity they bring to the people they serve is the reason I keep showing up.”",
    image: "/images/testi-3.png",
    name: "Ana Luiza Oliveira",
    role: "Field Volunteer",
  },
  {
    id: 4,
    text: "“I wanted my company to do more than write checks. Their hands-on approach helped our team fund a school—and visit on opening day.”",
    image: "/images/testi-4.png",
    name: "Marcos Fernando",
    role: "Corporate Sponsor",
  },
];

export default function TestimonialsSection() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonials-section bg-grey padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">Client Testimonials</span>
          <h2>What Donors Say</h2>
          {/* <p>
            Real stories from the people who power our mission—your generosity creates lasting change.
          </p> */}
        </div>

        {/* Slider */}
        <div
          className="slider testimonials-carousel nav-style carousel-dots"
          aria-label="Donor testimonials carousel"
        >
          <Slider {...settings}>
            {testimonials.map((testi) => (
              <div key={testi.id} className="testi-item">
                <div className="testi-content">
                  <p>{testi.text}</p>
                </div>
                <div className="testi-info">
                  <Image
                    src={testi.image}
                    alt={`${testi.name} – ${testi.role}`}
                    width={80}
                    height={80}
                    // helps avoid dragging ghost images on desktop
                    draggable={false}
                  />
                  <h3>
                    {testi.name}
                    <span>{testi.role}</span>
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
