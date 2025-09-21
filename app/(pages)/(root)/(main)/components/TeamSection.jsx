"use client";

const defaultData = {
  subHeading: "Our Rescue Heroes",
  heading: "Meet the CareBridge Team",
  paragraphLines: [
    "Behind every act of kindness stands a dedicated team of volunteers.",
    "Together, we bridge compassion with action to create lasting change.",
  ],
  team: [
    {
      name: "Elizabete Helen",
      role: "Community Outreach",
      img: "/images/team-img-1.jpg",
      socials: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-linkedin", href: "#" },
      ],
    },
    {
      name: "Jérémie Ambroise",
      role: "Healthcare Volunteer",
      img: "/images/team-img-2.jpg",
      socials: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-linkedin", href: "#" },
      ],
    },
    {
      name: "Ana Luiza Oliveira",
      role: "Education Advocate",
      img: "/images/team-img-3.jpg",
      socials: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-linkedin", href: "#" },
      ],
    },
    {
      name: "Marcos Fernando",
      role: "Fundraising Coordinator",
      img: "/images/team-img-4.jpg",
      socials: [
        { icon: "fab fa-facebook-f", href: "#" },
        { icon: "fab fa-twitter", href: "#" },
        { icon: "fab fa-instagram", href: "#" },
        { icon: "fab fa-linkedin", href: "#" },
      ],
    },
  ],
};

export default function TeamSection({ data = defaultData }) {
  const { subHeading, heading, paragraphLines, team } = data;

  return (
    <section className="team-section padding">
      <div className="container">
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">{subHeading}</span>
          <h2>{heading}</h2>
        </div>
        {/* /.section-heading */}

        <div className="team-wrap row">
          {team.map((member, idx) => (
            <div className="col-lg-3 col-md-6 sm-padding" key={idx}>
              <div className="team-item">
                <div className="team-thumb">
                  <img src={member.img} alt={member.name} />
                  <ul className="team-social">
                    {member.socials.map((s, si) => (
                      <li key={si}>
                        <a href={s.href}>
                          <i className={s.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
