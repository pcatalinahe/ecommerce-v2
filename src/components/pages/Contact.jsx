import React from "react";
import "../Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-section">
        {/* <div id="hero">
          <video autoPlay muted loop>
            <source src="src/assets/hero.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="contact-form">
          <form id="contactus-form" className="form-content">
            <h1 className="form-title">Contact Us</h1>

            <div className="form-group">
            <label  className="form-label">
              First Name (<span className="required">*</span>)
            </label>
            <input type="text" id="f-name" className="form-input" placeholder="First name" />
            <span id="fname-error" className="error-message"></span>
</div>
<div className="form-group">
<label className="form-label">
Last Name (<span className="required">*</span>)
            </label>
            <input type="text" id="l-name" className="form-input" placeholder="Last name" />
            <span id="lname-error" className="error-message"></span>
            </div>

           <div className="form-group">
              <label className="form-label">
                Email (<span className="required">*</span>)
              </label>
              <input type="email" id="email" className="form-input" placeholder="Insert email address" />
              <span id="email-error" className="error-message"></span>
            </div>


            <div className="form-group">
              <label className="form-label">
                Message (<span className="required">*</span>)
              </label>
              <textarea
                id="msg"
                className="form-textarea"
                placeholder="Your inquiry or comment*"
              ></textarea>
              <span id="msg-error" className="error-message"></span>
            </div>


             <button type="submit" id="send" className="submit-btn">
              Send
            </button>

            <span id="error"></span>
          </form>
        </div>

        <div className="newsletter">
          <h1 className="newsletter-title">💌 Sign up now and enjoy 10% off your first order!</h1>

          <h4 className="newsletter-subtitle">Your love story starts here—let Enamoré make it sparkle.</h4>
          <p className="newsletter-intro">Be the first to know about:</p>
          <ul className="benefits-list">
            <ol>
              Exclusive Offers: Early access to special promotions and
              discounts.
            </ol>
            <ol>
              New Arrivals: Discover our latest collections before anyone else.
            </ol>
            <ol>
              Inspiration & Tips: Jewelry care tips, styling guides, and more.
            </ol>
          </ul>

          <button className="signup-btn">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};
