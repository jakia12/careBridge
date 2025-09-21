"use client";

const counters = [
  {
    id: 1,
    icon: "/images/cn1.png",
    count: "2,359",
    title: "Fund Raised",
    delay: "200ms",
  },
  {
    id: 2,
    icon: "/images/cn2.png",
    count: "1,175",
    title: "Project Completed",
    delay: "300ms",
  },
  {
    id: 3,
    icon: "/images/cn3.png",
    count: "1,519",
    title: "Total Volunteer",
    delay: "400ms",
  },
  {
    id: 4,
    icon: "/images/cn4.png",
    count: "2,854",
    title: "Helping Hands",
    delay: "500ms",
  },
];

export default function CounterSection() {
  return (
    <section className="counter-section padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="counter-wrap row">
          {counters.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-sm-6 sm-padding wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="counter-item">
                <div className="counter-content">
                  <img src={item.icon} alt="" className="text-" />
                  <h3>
                    <span className="odometer" data-count={item.count}>
                      {item.count}
                    </span>
                  </h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
