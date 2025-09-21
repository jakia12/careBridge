"use client";

const defaultData = {
  videoUrl: "https://www.youtube.com/watch?v=RQu7jpcNUWI",
  subHeading: "Watch Our Mission in Action",
  headingLines: [
    "2.2 Billion People",
    "Still Lack Access to",
    "Clean, Safe Water",
  ],
  paragraph:
    "Water is life — yet for millions of families, it remains out of reach. Children are forced to walk miles every day just for a bucket of unsafe water, missing school and risking their health. Together, we can change this. Every drop you give brings hope, health, and a brighter future to communities in need.",
  ctaHref: "cause-single.html",
  ctaText: "Donate Now",
};

export default function VideoSection({ data = defaultData }) {
  const { videoUrl, subHeading, headingLines, paragraph, ctaHref, ctaText } =
    data;

  return (
    <section className="video-section bd-bottom">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left: Play Button */}
          <div className="col-md-6 custom">
            <div className="video-btn text-center">
              <div className="play-btn">
                <a
                  href={videoUrl}
                  className="img-popup"
                  data-autoplay="true"
                  data-vbtype="video"
                >
                  <i className="fas fa-play"></i>
                </a>
                <div className="ripple"></div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-md-6 no-padding">
            <div className="video-wrap">
              <div className="section-heading mb-40">
                <span className="sub-heading">{subHeading}</span>
                <h2>
                  {headingLines.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      {idx !== headingLines.length - 1 && <br />}
                    </span>
                  ))}
                </h2>
                <p>{paragraph}</p>
              </div>
              {/* /.section-heading */}
              <a className="default-btn" href={ctaHref}>
                {ctaText} <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
