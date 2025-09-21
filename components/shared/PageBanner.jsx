"use client";

export default function PageBanner({ title }) {
  return (
    <section className="page-header padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="page-content text-center">
          <h2>{title}</h2>
          {/* <p>
            Charitable giving as a religious act or duty is referred to as alms.
            The name <br /> stems from the most obvious expression of the virtue
            of charity.
          </p>
          <div className="page-item">
            <Link href="/">
              <i className="ti-home"></i> Home
            </Link>
            <p>Largest Global Community</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
