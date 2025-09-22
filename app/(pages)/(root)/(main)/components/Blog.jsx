"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/images/post-1.jpg",
    category: "Clean Water",
    title: "Bringing Safe Drinking Water to Remote Villages",
    description:
      "Over 2 billion people worldwide lack access to clean water. CareBridge teams recently installed community wells in rural villages, giving families safe water for the very first time.",
    link: "/blog-single",
  },
  {
    id: 2,
    image: "/images/post-2.jpg",
    category: "Education",
    title: "Empowering Children Through Education",
    description:
      "Every child deserves a chance to learn. Our latest program provides school supplies and scholarships to children in underserved communities—helping them build a brighter future.",
    link: "/blog-single",
  },
  {
    id: 3,
    image: "/images/post-3.jpg",
    category: "Healthcare",
    title: "Mobile Clinics Offering Hope and Healing",
    description:
      "Millions lack access to basic healthcare. CareBridge’s mobile medical teams travel to remote areas, providing free checkups, vaccinations, and critical treatment to families in need.",
    link: "/blog-single",
  },
];

export default function Blog() {
  return (
    <section className="blog-section padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-heading mb-40 text-center">
          <span className="sub-heading">Latest Stories</span>
          <h2>
            Recent Stories
            <br />
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="blog-wrap row">
          {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 sm-padding">
              <div className="blog-item">
                <div className="blog-thumb">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={400}
                  />
                  <span className="category">
                    <Link href={blog.link}>{blog.category}</Link>
                  </span>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href={blog.link}>{blog.title}</Link>
                  </h3>
                  <p>{blog.description}</p>
                  <Link href={blog.link} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
