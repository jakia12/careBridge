"use client";

import Slider from "react-slick";
// Make sure these CSS files are imported globally (e.g., in layout.tsx or globals.css):
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const defaultData = {
  subHeading: "Events",
  heading: "Upcoming Events",
  paragraphLines: [
    "Join us as we come together to bring hope and change.",
    "Your presence and support make every event meaningful.",
  ],
  events: [
    {
      img: "/images/post-1.jpg",
      day: "15",
      month: "Oct",
      title: "Water for Life Campaign",
      time: "10:00 AM",
      location: "New York, USA",
      href: "event-details.html",
    },
    {
      img: "/images/post-2.jpg",
      day: "05",
      month: "Nov",
      title: "Rebuild a School",
      time: "09:30 AM",
      location: "Los Angeles, USA",
      href: "event-details.html",
    },
    {
      img: "/images/post-3.jpg",
      day: "18",
      month: "Dec",
      title: "Community Healthcare Drive",
      time: "11:00 AM",
      location: "Chicago, USA",
      href: "event-details.html",
    },
    {
      img: "/images/post-4.jpg",
      day: "10",
      month: "Jan",
      title: "Medical Equipment Donation",
      time: "12:00 PM",
      location: "Houston, USA",
      href: "event-details.html",
    },
    {
      img: "/images/post-5.jpg",
      day: "25",
      month: "Feb",
      title: "Hunger & Relief Program",
      time: "01:00 PM",
      location: "Miami, USA",
      href: "event-details.html",
    },
    {
      img: "/images/post-6.jpg",
      day: "14",
      month: "Mar",
      title: "Education for Every Child",
      time: "08:00 AM",
      location: "Boston, USA",
      href: "event-details.html",
    },
  ],
};

export default function EventSection({ data = defaultData }) {
  const { subHeading, heading, paragraphLines, events } = data;

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // default desktop
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="event-section padding">
      <div className="container">
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">{subHeading}</span>
          <h2>{heading}</h2>
          <p>
            {paragraphLines.map((line, i) => (
              <span key={i}>
                {line}
                {i !== paragraphLines.length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>

        <div className="slider event-carousel nav-style carousel-dots">
          <Slider {...settings}>
            {events.map((ev, idx) => (
              <div key={idx} className="event-item">
                <div className="event-thumb">
                  <img src={ev.img} alt={ev.title} />
                  <div className="date">
                    <h3>
                      {ev.day}
                      <span>{ev.month}</span>
                    </h3>
                  </div>
                </div>
                <div className="event-content text-center">
                  <a href={ev.href}>
                    <h3>{ev.title}</h3>
                  </a>
                  <ul className="event-list">
                    <li>
                      <i className="fas fa-clock"></i> {ev.time}
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> {ev.location}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
