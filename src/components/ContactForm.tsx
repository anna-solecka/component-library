//import axios from "axios";
import { useState } from "react";
import DsInput from "./DsInput";
import DsTextarea from "./DsTextarea";
import axios from "axios";
import DsSelect from "./DsSelect";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [select, setSelect] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log({ firstName, lastName, email, message, select });

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
          select: select,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSelect("");
      setIsSubmitted(false);
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
          name="message"
          error={isSubmitted && !message ? "This field is required" : ""}
          onChange={(data) => setMessage(data)}
          rows={3}
          value={message}
          hint="Please enter your message here."
        />
        <DsSelect
          options={["Post", "Message", "Email"]}
          title="Select a form of contact"
          name="select"
          value={select}
          error={isSubmitted && !select ? "This field is required" : ""}
          onChange={(data) => setSelect(data)}
        />

        <button className="ds_button">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
