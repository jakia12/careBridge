"use client";

const defaultData = {
  heading: "Newsletter Subscription",
  paragraphLines: ["Subscribe and get 10% off from", "our charitian company."],
  placeholder: "Enter Your Email Address...",
  buttonText: "Subscription",
};

export default function SubscribeSection({ data = defaultData }) {
  const { heading, paragraphLines, placeholder, buttonText } = data;

  return (
    <section className="subscribe-section bd-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="subscribe-wrap">
              <div className="sub-bg"></div>
              <div className="child"></div>
              <div className="row align-items-center">
                {/* Left: text */}
                <div className="col-md-6">
                  <div className="section-heading">
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
                </div>
                {/* Right: form */}
                <div className="col-md-6">
                  <div className="subscribe-form-wrap">
                    <form action="#" className="subscribe-form">
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder={placeholder}
                        required
                      />
                      <input
                        type="hidden"
                        name="action"
                        value="mailchimpsubscribe"
                      />
                      <button className="submit-btn">{buttonText}</button>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
