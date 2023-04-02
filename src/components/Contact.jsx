import React from "react";

export default function Contact() {
  return (
    <div className=" text-white " id="contact">
      <div className="container py-4">
        <div className="websiteTitle websiteTitleDark">
          <h2 className="text-uppercase mb-0">CONTACT US</h2>
        </div>
        <div className="dividerParent  my-3">
          <div className="row justify-content-center ">
            <div className=" divider-line divider-line-dark"></div>
            <div className="divider-icon divider-icon-dark">
              <i className="fa fa-star"></i>
            </div>
            <div className="divider-line divider-line-dark"></div>
          </div>
        </div>
        <div className="row w-75 justify-content-center mx-auto">
          <form id="contactForm" name="sentMessage">
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label className="position-absolute top-0 start-0">Name</label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  required="required"
                  data-validation-required-message="Please enter your name."
                  aria-invalid="false"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group warning">
              <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                <label className="position-absolute top-0 start-0">
                  Email{" "}
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                  aria-invalid="true"
                />
                <p className="help-block text-danger  email-validate-message">
                  Not a valid email address
                </p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2">
                <label className="position-absolute top-0 start-0">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                  aria-invalid="false"
                />
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <div className="control-group">
              <div className="form-group floating-label-form-group controls mb-0 pb-2 floating-label-form-group-with-value">
                <label className="position-absolute top-0 start-0">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter a message."
                  aria-invalid="false"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-xl"
                id="sendMessageButton"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* end of row */}
      </div>
    </div>
  );
}
