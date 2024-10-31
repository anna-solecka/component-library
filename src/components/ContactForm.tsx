//import axios from "axios";
import { useState } from "react";
import DsInput from "./DsInput";
import DsTextarea from "./DsTextarea";
import axios from "axios";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log({ firstName, lastName, email, message });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitted(true);
    if (firstName && lastName && email && message) {
      axios
        .post("/api/contact", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={onSubmit}>
        <DsInput
          label="First name"
          name="firstName"
          error={isSubmitted && !firstName ? "This field is required" : ""}
          onChange={(data) => setFirstName(data)}
          type="text"
          value={firstName}
        />
        <DsInput
          label="Last name"
          name="lastName"
          error={isSubmitted && !lastName ? "This field is required" : ""}
          type="text"
          onChange={(data) => setLastName(data)}
          value={lastName}
        />
        <DsInput
          label="Email"
          name="email"
          hint="We'll never share your email with anyone else."
          error={isSubmitted && !email ? "This field is required" : ""}
          type="email"
          onChange={(data) => setEmail(data)}
          value={email}
        />
        <DsTextarea
          label="Message"
          error={isSubmitted && !message ? "This field is required" : ""}
          onChange={(data) => setMessage(data)}
          rows={3}
          value={message}
        />
        {/* <div
          className={`ds_question ${
            isSubmitted && !message ? "ds_question--error" : ""
          }`}
        >
          <label className="ds_label">Message</label>
          {isSubmitted && !message && (
            <p
              className="ds_question__error-message"
              id="error-message-more-detail"
            >
              <span className="visually-hidden">Error:</span> This field is
              required
            </p>
          )}
          <textarea
            value={message}
            className={`ds_input ${
              isSubmitted && !message ? "ds_input--error" : ""
            }`}
            placeholder="Message"
            rows={3}
            id="description"
            name="description"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div> */}
        <button className="ds_button">Submit</button>
      </form>
      <button className="ds_button" onClick={() => setFirstName("ARMIN")}>
        ARMIN
      </button>
    </div>
  );
};

export default ContactForm;
