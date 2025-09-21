"use client";

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    image: "/images/post-1.jpg",
    category: "Clean Water",
    title: "A Village’s First Drop: Safe Wells, Healthy Futures",
    excerpt:
      "After years of walking for unsafe water, families now have a community well 300 meters from home—reducing disease and giving children time back for school.",
    link: "/blog/a-villages-first-drop",
  },
  {
    id: 2,
    image: "/images/post-2.jpg",
    category: "Education",
    title: "Backpacks to Bright Futures: School Kits for Kids",
    excerpt:
      "From notebooks to uniforms, your support equipped 1,200 students this term—turning ‘I can’t go’ into ‘I can learn.’",
    link: "/blog/backpacks-to-bright-futures",
  },
  {
    id: 3,
    image: "/images/post-3.jpg",
    category: "Healthcare",
    title: "Mobile Clinics on the Move: Care Within Reach",
    excerpt:
      "Our volunteer doctors crossed 14 remote communities last month, providing checkups, vaccines, and lifesaving medicine to thousands.",
    link: "/blog/mobile-clinics-on-the-move",
  },
  {
    id: 4,
    image: "/images/post-4.jpg",
    category: "Food & Nutrition",
    title: "Meals That Matter: Nourishing Children Daily",
    excerpt:
      "A simple, nutritious lunch can be the difference between dropping out and dreaming big. Here’s how school meals changed attendance by 32%.",
    link: "/blog/meals-that-matter",
  },
  {
    id: 5,
    image: "/images/post-5.jpg",
    category: "Women Empowerment",
    title: "From Skill to Stability: Mothers Launch Microbusinesses",
    excerpt:
      "With seed grants and training, 85 mothers started home enterprises—creating income, dignity, and stability for their families.",
    link: "/blog/from-skill-to-stability",
  },
  {
    id: 6,
    image: "/images/post-6.jpg",
    category: "Disaster Response",
    title: "When the Waters Rose: Rapid Relief in 72 Hours",
    excerpt:
      "Volunteers delivered clean water, hygiene kits, and blankets within days of the floods—thanks to your emergency fund.",
    link: "/blog/when-the-waters-rose",
  },
];

const categories = [
  "Clean Water",
  "Education",
  "Healthcare",
  "Food & Nutrition",
  "Women Empowerment",
  "Disaster Response",
  "Livelihoods",
  "Homelessness",
];

const latestPosts = [
  "A Village’s First Drop: Safe Wells, Healthy Futures",
  "Backpacks to Bright Futures: School Kits for Kids",
  "Mobile Clinics on the Move: Care Within Reach",
  "Meals That Matter: Nourishing Children Daily",
  "From Skill to Stability: Mothers Launch Microbusinesses",
];

const tags = [
  "Charity",
  "Children",
  "Healthcare",
  "Education",
  "Water",
  "Food",
  "Women",
  "Fundraising",
  "Volunteer",
  "Emergency",
];

export default function BlogGrid() {
  return (
    <section className="blog-section padding">
      <div className="container">
        <div className="blog-wrap row">
          {/* Main Grid */}
          <div className="col-lg-8 sm-padding">
            <div className="row">
              {posts.map((post) => (
                <div key={post.id} className="col-sm-6 padding-15">
                  <div className="blog-item">
                    <div className="blog-thumb">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={400}
                      />
                      <span className="category">
                        <Link
                          href={`/blog?category=${encodeURIComponent(
                            post.category
                          )}`}
                        >
                          {post.category}
                        </Link>
                      </span>
                    </div>
                    <div className="blog-content">
                      <h3>
                        <Link href={post.link}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                      <Link className="read-more" href={post.link}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* <ul className="pagination-wrap text-left mt-30">
              <li>
                <Link href="#">
                  <i className="ti-arrow-left"></i>
                </Link>
              </li>
              <li>
                <Link href="#">1</Link>
              </li>
              <li>
                <Link href="#" className="active">
                  2
                </Link>
              </li>
              <li>
                <Link href="#">3</Link>
              </li>
              <li>
                <Link href="#">
                  <i className="ti-arrow-right"></i>
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 padding-15">
            <div className="sidebar-wrap">
              {/* Search */}
              <div className="widget-content">
                <form action="/blog-grid" className="search-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search.."
                  />
                  <button className="search-btn" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories */}
              <div className="widget-content">
                <h4>Categories</h4>
                <ul className="widget-links">
                  {categories.map((c) => (
                    <li key={c}>
                      <Link href={`/blog?category=${encodeURIComponent(c)}`}>
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="widget-content">
                <h4>Latest Posts</h4>
                <ul className="widget-item">
                  {latestPosts.map((t) => (
                    <li key={t}>
                      <Link href="#">{t}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="widget-content">
                <h4>Tag Clouds</h4>
                <ul className="tags">
                  {tags.map((t) => (
                    <li key={t}>
                      <Link href={`/blog?tag=${encodeURIComponent(t)}`}>
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* /.sidebar */}
        </div>
      </div>
    </section>
  );
}
