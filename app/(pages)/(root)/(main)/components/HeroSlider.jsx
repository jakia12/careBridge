"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function HeroSlider() {
  const sliderRef = useRef(null);

  const settings = {
    arrows: true,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => runAnimations(false),
    afterChange: () => runAnimations(true),
  };

  // toggle CSS animations on each slide based on data attributes
  const runAnimations = (activate = true) => {
    // scope to current slick slide(s)
    const sliderEl = sliderRef.current?.innerSlider?.list;
    if (!sliderEl) return;

    const active = sliderEl.querySelectorAll(".slick-active [data-animation]");
    const all = sliderEl.querySelectorAll("[data-animation]");

    // reset all
    all.forEach((el) => {
      el.style.animationDelay = "";
      el.classList.remove("dl-animated");
    });

    if (!activate) return;

    // apply only on active slide
    active.forEach((el) => {
      const delay = el.getAttribute("data-delay") || "0s";
      // you can map data-animation to your CSS keyframes; we just add a flag class
      el.style.animationDelay = delay;
      el.classList.add("dl-animated");
    });
  };

  useEffect(() => {
    // run on mount for first slide
    runAnimations(true);
  }, []);
  const gradient =
    "linear-gradient(180deg, rgba(0,98,102,0.7) 0%, rgba(0,98,102,0.5) 70%, rgba(0,98,102,0) 100%)";
  return (
    <div id="main-slider" className="dl-slider">
      <Slider ref={sliderRef} {...settings}>
        {/* Slide 1 – Hope & Urgency */}
        <div className="single-slide">
          <div
            className="bg-img kenburns-top-right"
            style={{
              backgroundImage: `${gradient}, url("/images/slider-bg-1.jpg")`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // Optional: uncomment for stronger tint
              // backgroundBlendMode: "multiply",
            }}
          />
          <div className="overlay"></div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
            <div className="container">
              <div className="slider-content">
                <div className="dl-caption medium">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1s">
                      No one should face hardship alone.
                    </div>
                  </div>
                </div>

                <div className="dl-caption big">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1.5s">
                      Together, We Can <br />
                      Bridge the Gap of Care
                    </div>
                  </div>
                </div>

                <div className="dl-caption small">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="2s">
                      Every act of kindness builds a stronger tomorrow. Your
                      support provides food, shelter, healthcare, and hope to
                      families in need.
                    </div>
                  </div>
                </div>

                <div className="dl-btn-group">
                  <div className="inner-layer">
                    <Link
                      className="default-btn"
                      data-animation="fade-in-bottom"
                      data-delay="2.5s"
                      href="/donate"
                    >
                      Give Hope Today<span></span>
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* .slider-content */}
            </div>
          </div>
        </div>

        {/* Slide 2 – Empowerment & Action */}
        <div className="single-slide">
          <div
            className="bg-img kenburns-top-right"
            style={{
              backgroundImage: `${gradient}, url("/images/slider-bg-2.jpg")`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // backgroundBlendMode: "multiply",
            }}
          />
          <div className="overlay"></div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
            <div className="container">
              <div className="slider-content">
                <div className="dl-caption medium">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1s">
                      Your generosity changes lives.
                    </div>
                  </div>
                </div>

                <div className="dl-caption big">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1.5s">
                      Small Help, <br />
                      Big Difference
                    </div>
                  </div>
                </div>

                <div className="dl-caption small">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="2s">
                      From one child’s education to an entire community’s
                      well-being — your contribution empowers futures and
                      restores dignity.
                    </div>
                  </div>
                </div>

                <div className="dl-btn-group">
                  <div className="inner-layer">
                    <Link
                      className="default-btn"
                      data-animation="fade-in-bottom"
                      data-delay="2.5s"
                      href="/get-involved"
                    >
                      Start Making Change<span></span>
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* .slider-content */}
            </div>
          </div>
        </div>

        {/* Slide 3 – Connection & Future Vision */}
        <div className="single-slide">
          <div
            className="bg-img kenburns-top-right"
            style={{
              backgroundImage: `${gradient}, url("/images/slider-bg-3.jpg")`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              // backgroundBlendMode: "multiply",
            }}
          />
          <div className="overlay"></div>
          <div className="slider-content-wrap d-flex align-items-center text-left">
            <div className="container">
              <div className="slider-content">
                <div className="dl-caption medium">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1s">
                      Compassion creates connection.
                    </div>
                  </div>
                </div>

                <div className="dl-caption big">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="1.5s">
                      Be the Bridge <br />
                      Between Need and Care
                    </div>
                  </div>
                </div>

                <div className="dl-caption small">
                  <div className="inner-layer">
                    <div data-animation="fade-in-bottom" data-delay="2s">
                      CareBridge unites hearts and hands to build a world where
                      every life has equal value, opportunity, and care. Stand
                      with us.
                    </div>
                  </div>
                </div>

                <div className="dl-btn-group">
                  <div className="inner-layer">
                    <Link
                      className="default-btn"
                      data-animation="fade-in-bottom"
                      data-delay="2.5s"
                      href="/volunteer"
                    >
                      Join the Mission<span></span>
                      <i className="arrow_right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* .slider-content */}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
