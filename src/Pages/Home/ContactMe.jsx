import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

export default function ContactMe() {
  const [showNotification, setShowNotification] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log(response);
          setShowNotification(true);
          document.body.style.overflow = "hidden";
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      {showNotification && (
        <section className="notification-bg">
          <div className="notifications-container fadeInDown">
            <div className="success">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="succes-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="success-prompt-wrap">
                  <p className="success-prompt-heading">
                    Message Sent Successfully
                  </p>
                  <div className="success-prompt-heading">
                    <p> I Will Be In Touch.</p>
                  </div>
                  <div className="success-button-container">
                    <button
                      onClick={() => {
                        document.body.style.overflow = "visible";
                        setShowNotification(false);
                      }}
                      type="button"
                      className="success-button-secondary"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div>
        <h2 id="get--in--touch">Get In Touch</h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            name="topic"
            id="choose-topic"
            className="contact--input text-md"
            required
          >
            <option>Select One...</option>
            <option>Employer</option>
            <option>Contract</option>
            <option>Website Maintenance</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
