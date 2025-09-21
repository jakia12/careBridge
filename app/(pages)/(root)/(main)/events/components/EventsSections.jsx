"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    image: "/images/post-1.jpg",
    day: "28",
    month: "Jan",
    title: "Water for Life",
    time: "10:00 AM",
    location: "New Work",
    link: "/event-details",
  },
  {
    id: 2,
    image: "/images/post-2.jpg",
    day: "28",
    month: "Sep",
    title: "School Construction",
    time: "09:00 AM",
    location: "New Work",
    link: "/event-details",
  },
  {
    id: 3,
    image: "/images/post-3.jpg",
    day: "28",
    month: "Feb",
    title: "General Healthcare",
    time: "11:00 AM",
    location: "New Work",
    link: "/event-details",
  },
  {
    id: 4,
    image: "/images/post-4.jpg",
    day: "28",
    month: "Jun",
    title: "Education Support",
    time: "12:00 AM",
    location: "New Work",
    link: "/event-details",
  },
  {
    id: 5,
    image: "/images/post-5.jpg",
    day: "28",
    month: "Aug",
    title: "Medical Equipment",
    time: "01:00 AM",
    location: "New Work",
    link: "/event-details",
  },
  {
    id: 6,
    image: "/images/post-6.jpg",
    day: "28",
    month: "Mar",
    title: "Hunger & Relief",
    time: "08:00 AM",
    location: "New Work",
    link: "/event-details",
  },
];

export default function EventsSections() {
  return (
    <section className="event-section padding">
      <div className="container">
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-lg-4 col-md-6 padding-15">
              <div className="event-item">
                <div className="event-thumb">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                  />
                  <div className="date">
                    <h3>
                      {event.day}
                      <span>{event.month}</span>
                    </h3>
                  </div>
                </div>
                <div className="event-content text-center">
                  <Link href={event.link}>
                    <h3>{event.title}</h3>
                  </Link>
                  <ul className="event-list">
                    <li>
                      <i className="fas fa-clock"></i> {event.time}
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> {event.location}
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
