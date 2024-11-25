import React, { useState } from "react";

const TranslationLandingPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="landing-page-container">
      <header>
        <h1>German to English Translation Services</h1>
        <p>
          Professional and accurate translation services for all your needs.
        </p>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>High-quality translations</li>
          <li>Fast turnaround times</li>
          <li>Experienced translators</li>
          <li>Confidentiality guaranteed</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            "The translation services were exceptional and delivered on time.
            Highly recommend!"
          </p>
          <footer>- John Doe</footer>
        </blockquote>
        <blockquote>
          <p>
            "Accurate and professional translations. Will definitely use again."
          </p>
          <footer>- Jane Smith</footer>
        </blockquote>
      </section>

      <section className="map">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d0f0f0f0f0f0!2sMelbourne%20CBD%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614311234567!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>

      <section className="offers">
        <h2>Special Offers</h2>
        <p>Get a 10% discount on your first translation order!</p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default TranslationLandingPage;
